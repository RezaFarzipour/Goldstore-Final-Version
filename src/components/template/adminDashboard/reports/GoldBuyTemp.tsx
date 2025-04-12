import React from "react";
import ReusableTable from "../../../modules/ReusableTable";
import { BuyList } from "../../../../services/adminPanel";
import { useQuery } from "@tanstack/react-query";
import { Box, Container } from "@mui/material";
import SectionTitle from "../../../modules/SectionTitle";

type Props = {};
interface User {
  id: number;
  first_name: string;
  last_name: string;
  money_amount: string;
  gold_amount: string;
  payment_date: string;
  phone_number: string;
  status: string;
}
const GoldBuyTemp = (props: Props) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["settingData"],
    queryFn: BuyList,
    onError: (err: any) => {
      console.log(err.message);
    },
    onSuccess: () => {
      console.log(data);
    },
  });
  // داده‌های نمونه
  const users: User[] = [
    {
      id: 1,
      first_name: "علی",
      last_name: "محمدی",
      money_amount: "500000",
      gold_amount: "456789",
      payment_date: "1402/07/15",
      phone_number: "09123456789",
      status: "موفق",
    },
    {
      id: 2,
      first_name: "فاطمه",
      last_name: "احمدی",
      money_amount: "300000",
      gold_amount: "87654321",
      payment_date: "1402/07/14",
      phone_number: "09361234567",
      status: "در حال پردازش",
    },
    {
      id: 3,
      first_name: "حسین",
      last_name: "رضایی",
      money_amount: "1000000",
      gold_amount: "9123",
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
    { id: "phone_number", label: "شماره همراه" },
    { id: "payment_date", label: "تاریخ" },
    { id: "money_amount", label: "مبلغ" },
    { id: "gold_amount", label: "مقدار طلا" },
    { id: "status", label: "وضعیت" },
  ];
  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
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
          <SectionTitle title="خرید طلا" />
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

export default GoldBuyTemp;
