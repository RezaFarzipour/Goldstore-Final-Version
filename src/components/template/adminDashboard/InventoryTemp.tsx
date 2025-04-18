import { useMemo, useState } from "react";
import ReusableTable, { Column } from "../../modules/ReusableTable";
import {
  changeUserWalletGoldAmount,
  changeUserWalletMoneyAmount,
  usersInformationList,
} from "../../../services/adminPanel";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Box, Container } from "@mui/material";
import SectionTitle from "../../modules/SectionTitle";
import DynamicModal from "../../modules/DynamicModal";
import {
  priceSeptrator,
  toPersianDigits,
} from "../../../utils/numberFormatter";
import { BaseAdminPanelProps } from "../../../types";
import CircularMini from "../../element/CircularLoading";

// تعریف نوع داده‌ها
type User = BaseAdminPanelProps & {
  money_amount: string;
  gold_amount: string;
};

// تعریف ستون‌ها
const columns: Column<User>[] = [
  { id: "id", label: "شناسه" },
  { id: "first_name", label: "نام" },
  { id: "last_name", label: "نام خانوادگی" },
  { id: "phone_number", label: "شماره همراه" },
  { id: "money_amount", label: "موجودی کیف پول" },
  { id: "gold_amount", label: "موجودی طلا" },
];

const InventoryTemp = () => {
  const [cashModalOpen, setCashModalOpen] = useState(false); // وضعیت مودال کیف پول
  const [goldModalOpen, setGoldModalOpen] = useState(false); // وضعیت مودال کیف طلا
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // کاربر انتخاب‌شده
  const [cashModalAmount, setCashModalAmount] = useState(""); // مقدار ورودی کیف پول
  const [goldModalAmount, setGoldModalAmount] = useState(""); // مقدار ورودی کیف طلا

  const { data, isLoading } = useQuery({
    queryKey: ["settingData"],
    queryFn: usersInformationList,
  });
  console.log(data);

  const { mutateAsync: cashAmountAsync } = useMutation({
    mutationFn: ({
      phone_number,
      money_amount,
    }: {
      phone_number: string;
      money_amount: string;
    }) => changeUserWalletMoneyAmount(phone_number, money_amount),
  });

  const { mutateAsync: goldAmountAsync } = useMutation({
    mutationFn: ({
      phone_number,
      gold_amount,
    }: {
      phone_number: string;
      gold_amount: string;
    }) => changeUserWalletGoldAmount(phone_number, gold_amount),
  });

  // تابع برای تغییر موجودی کیف پول
  const handleUpdateCashAmount = async () => {
    if (!selectedUser) return;

    try {
      const response = await cashAmountAsync({
        phone_number: selectedUser.phone_number,
        money_amount: cashModalAmount,
      });
      console.log("پاسخ موفق:", response);
      setCashModalOpen(false);
    } catch (error) {
      console.error("خطا در انجام میوتیشن:", error);
    }
  };

  // تابع برای تغییر موجودی کیف طلا
  const handleUpdateGoldAmount = async () => {
    if (!selectedUser) return;
    try {
      const response = await goldAmountAsync({
        phone_number: selectedUser.phone_number,
        gold_amount: goldModalAmount,
      });
      console.log("پاسخ موفق:", response);
      setGoldModalOpen(false);
    } catch (error) {
      console.error("خطا در انجام میوتیشن:", error);
    }
  };

  const rows: User[] = useMemo(() => {
    if (!Array.isArray(data?.data)) return [];

    return data.data.map((item: User) => ({
      ...item,
      id: toPersianDigits(item.id),
      phone_number: toPersianDigits(item.phone_number),
      money_amount: toPersianDigits(priceSeptrator(item.money_amount)),
      gold_amount: toPersianDigits(item.gold_amount),
    }));
  }, [data]);

  // بررسی وضعیت بارگذاری
  if (isLoading) {
    return <CircularMini />;
  }

  // بررسی وجود داده‌ها
  if (!data) {
    return <div>داده‌ها در دسترس نیستند.</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ padding: "20px" }}>
        <Box mb={4}>
          <SectionTitle title="موجودی حساب" />
        </Box>

        {/* جدول */}
        <ReusableTable
          columns={columns}
          rows={rows}
          showActions={true} // فعال کردن ستون عملیات
          btnvalue1="تغییر کیف پول"
          btnvalue2="تغییر کیف طلا"
          btnAction1={(user) => {
            setSelectedUser(user); // تنظیم کاربر انتخاب‌شده
            setCashModalOpen(true); // باز کردن مودال کیف پول
          }}
          btnAction2={(user) => {
            setSelectedUser(user); // تنظیم کاربر انتخاب‌شده
            setGoldModalOpen(true); // باز کردن مودال کیف طلا
          }}
        />

        {/* مودال تغییر کیف پول */}
        <DynamicModal
          open={cashModalOpen}
          onClose={() => setCashModalOpen(false)}
          title="تغییر موجودی کیف پول"
          inputLabel="مقدار جدید کیف پول"
          dataAmount={selectedUser?.money_amount || "0"}
          dataAmountType="ريال"
          inputValueState={cashModalAmount}
          setInputValueState={setCashModalAmount}
          onButtonClick={handleUpdateCashAmount}
          buttonLabel="ذخیره"
        />

        {/* مودال تغییر کیف طلا */}
        <DynamicModal
          open={goldModalOpen}
          onClose={() => setGoldModalOpen(false)}
          title="تغییر موجودی کیف طلا"
          inputLabel="مقدار جدید کیف طلا"
          dataAmount={selectedUser?.gold_amount || "0"}
          dataAmountType="گرم"
          inputValueState={goldModalAmount}
          setInputValueState={setGoldModalAmount}
          onButtonClick={handleUpdateGoldAmount}
          buttonLabel="ذخیره"
        />
      </Container>
    </Box>
  );
};

export default InventoryTemp;
