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
  });
  console.log(data);

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

  // بررسی وضعیت بارگذاری
  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  // بررسی خطا
  if (error) {
    return <div>خطا در دریافت داده‌ها: {error.message}</div>;
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
        <ReusableTable
          columns={columns}
          rows={data.data}
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
