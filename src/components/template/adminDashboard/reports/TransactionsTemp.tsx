import React from "react";
import ReusableTable from "../../../modules/ReusableTable";
import { Box, Container } from "@mui/material";
import SectionTitle from "../../../modules/SectionTitle";

type Props = {};
interface User {
  id: number;
  first_name: string;
  last_name: string;
  money_amount: string;
  payment_id: string;
  payment_date: string;
  phone_number: string;
  status: string;
}
const TransactionsTemp = (props: Props) => {
  // داده‌های نمونه
  const users: User[] = [
    {
      id: 1,
      first_name: "علی",
      last_name: "محمدی",
      money_amount: "500000",
      payment_id: "TXN123456789",
      payment_date: "1402/07/15",
      phone_number: "09123456789",
      status: "موفق",
    },
    {
      id: 2,
      first_name: "فاطمه",
      last_name: "احمدی",
      money_amount: "300000",
      payment_id: "TXN987654321",
      payment_date: "1402/07/14",
      phone_number: "09361234567",
      status: "در حال پردازش",
    },
    {
      id: 3,
      first_name: "حسین",
      last_name: "رضایی",
      money_amount: "1000000",
      payment_id: "TXN456789123",
      payment_date: "1402/07/13",
      phone_number: "09198765432",
      status: "ناموفق",
    },
  ];

  // تعریف ستون‌ها
  const columns: Column<User>[] = [
    { id: "id", label: "شناسه" },
    { id: "first_name", label: "نام" },
    { id: "last_name", label: "نام خانوادگی" },
    { id: "money_amount", label: "مبلغ" },
    { id: "payment_id", label: "شناسه تراکنش" },
    { id: "payment_date", label: "تاریخ" },
    { id: "phone_number", label: "شماره همراه" },
    { id: "status", label: "وضعیت" },
  ];

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
          <SectionTitle title="تراکنش ها" />
        </Box>
        <ReusableTable
          columns={columns}
          rows={users}
          showActions={false} // فعال کردن ستون عملیات
        />
      </Container>
    </Box>
  );
};

export default TransactionsTemp;
