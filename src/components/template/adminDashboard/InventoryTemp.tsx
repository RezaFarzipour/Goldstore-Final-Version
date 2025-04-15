import React from "react";
import ReusableTable from "../../modules/ReusableTable";
import { usersInformationList } from "../../../services/adminPanel";
import { useQuery } from "@tanstack/react-query";
import { Box, Container, Typography } from "@mui/material";
import SectionTitle from "../../modules/SectionTitle";

type Props = {};

// تعریف نوع داده‌ها
interface User {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  money_amount: string;
  gold_amount: string;
}

const InventoryTemp = (props: Props) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["settingData"],
    queryFn: usersInformationList,
    onError: (err: any) => {
      console.error("خطا:", err.message);
    },
    onSuccess: () => {
      console.log("داده‌ها با موفقیت دریافت شدند.");
    },
  });

  // داده‌های نمونه
  const users: User[] = [
    {
      id: 1,
      first_name: "علی",
      last_name: "محمدی",
      phone_number: "09123456789",
      money_amount: "500000", // به ریال
      gold_amount: "100", // به گرم
    },
    {
      id: 2,
      first_name: "فاطمه",
      last_name: "احمدی",
      phone_number: "09361234567",
      money_amount: "300000",
      gold_amount: "50",
    },
    {
      id: 3,
      first_name: "حسین",
      last_name: "رضایی",
      phone_number: "09198765432",
      money_amount: "1000000",
      gold_amount: "200",
    },
  ];

  // تعریف ستون‌ها
  const columns: any[] = [
    { id: "id", label: "شناسه" },
    { id: "first_name", label: "نام" },
    { id: "last_name", label: "نام خانوادگی" },
    { id: "phone_number", label: "شماره همراه" },
    { id: "money_amount", label: "موجودی کیف پول" },
    { id: "gold_amount", label: "موجودی طلا" },
  ];

  // توابع عملیات
  const updateCashAmount = (user: User) => {
    console.log("ویرایش کاربر:", user);
  };

  const updateGoldAmount = (user: User) => {
    console.log("حذف کاربر:", user);
  };

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
        <ReusableTable
          columns={columns}
          rows={users}
          showActions={true} // فعال کردن ستون عملیات
          btnvalue1="تغییر کیف پول"
          btnvalue2="تغییر کیف طلا"
          btnAction1={updateCashAmount}
          btnAction2={updateGoldAmount}
        />
      </Container>
    </Box>
  );
};

export default InventoryTemp;
