import { useState } from "react";
import ReusableTable, { Column } from "../../modules/ReusableTable";
import {
  changeUserWalletGoldAmount,
  changeUserWalletMoneyAmount,
  usersInformationList,
} from "../../../services/adminPanel";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Box, Container } from "@mui/material";
import SectionTitle from "../../modules/SectionTitle";
import DynamicModal from "../../modules/DynamicModal";

// تعریف نوع داده‌ها
interface User {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  money_amount: string;
  gold_amount: string;
}

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
  const [modalState, setModalState] = useState<{
    cashOpen: boolean;
    goldOpen: boolean;
    selectedUser: User | null;
    cashAmount: string;
    goldAmount: string;
  }>({
    cashOpen: false,
    goldOpen: false,
    selectedUser: null,
    cashAmount: "",
    goldAmount: "",
  });

  // دسترسی به queryClient
  const queryClient = useQueryClient();

  // دریافت لیست کاربران
  const { data, isLoading } = useQuery({
    queryKey: ["usersInformationList"],
    queryFn: usersInformationList,
  });

  // میوتیشن برای تغییر موجودی کیف پول
  const { mutateAsync: updateWallet } = useMutation({
    mutationFn: async ({
      type,
      phone_number,
      amount,
    }: {
      type: "cash" | "gold";
      phone_number: string;
      amount: string;
    }) => {
      if (type === "cash") {
        return changeUserWalletMoneyAmount(phone_number, amount);
      } else {
        return changeUserWalletGoldAmount(phone_number, amount);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["usersInformationList"] });
    },
  });

  // تابع عمومی برای بروزرسانی موجودی
  const handleUpdateAmount = async (type: "cash" | "gold") => {
    const { selectedUser, cashAmount, goldAmount } = modalState;

    if (!selectedUser) return;

    try {
      await updateWallet({
        type,
        phone_number: selectedUser.phone_number,
        amount: type === "cash" ? cashAmount : goldAmount,
      });
    } catch (error) {
      console.error("خطا در انجام میوتیشن:", error);
    }
  };

  // بررسی وضعیت بارگذاری
  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
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
          rows={data.data}
          showActions={true}
          btnvalue1="تغییر کیف پول"
          btnvalue2="تغییر کیف طلا"
          btnAction1={(user) =>
            setModalState((prev) => ({
              ...prev,
              cashOpen: true,
              selectedUser: user,
            }))
          }
          btnAction2={(user) =>
            setModalState((prev) => ({
              ...prev,
              goldOpen: true,
              selectedUser: user,
            }))
          }
        />

        {/* مودال تغییر کیف پول */}
        <DynamicModal
          open={modalState.cashOpen}
          onClose={() =>
            setModalState((prev) => ({ ...prev, cashOpen: false }))
          }
          title="تغییر موجودی کیف پول"
          inputLabel="مقدار جدید کیف پول"
          dataAmount={modalState.selectedUser?.money_amount || "0"}
          dataAmountType="ريال"
          inputValueState={modalState.cashAmount}
          setInputValueState={(value) =>
            setModalState((prev) => ({ ...prev, cashAmount: value }))
          }
          onButtonClick={() => handleUpdateAmount("cash")}
          buttonLabel="ذخیره"
        />

        {/* مودال تغییر کیف طلا */}
        <DynamicModal
          open={modalState.goldOpen}
          onClose={() =>
            setModalState((prev) => ({ ...prev, goldOpen: false }))
          }
          title="تغییر موجودی کیف طلا"
          inputLabel="مقدار جدید کیف طلا"
          dataAmount={modalState.selectedUser?.gold_amount || "0"}
          dataAmountType="گرم"
          inputValueState={modalState.goldAmount}
          setInputValueState={(value) =>
            setModalState((prev) => ({ ...prev, goldAmount: value }))
          }
          onButtonClick={() => handleUpdateAmount("gold")}
          buttonLabel="ذخیره"
        />
      </Container>
    </Box>
  );
};

export default InventoryTemp;
