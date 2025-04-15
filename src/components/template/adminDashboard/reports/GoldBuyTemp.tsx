import ReusableTable, { Column } from "../../../modules/ReusableTable";
import { BuyList } from "../../../../services/adminPanel";
import { useQuery } from "@tanstack/react-query";
import { Box, Container } from "@mui/material";
import SectionTitle from "../../../modules/SectionTitle";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  money_amount: string;
  gold_amount: string;
  buy_date: string;
  phone_number: string;
  status: string;
}

const GoldBuyTemp = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["settingData"],
    queryFn: BuyList,
  });

  console.log("داده‌های دریافتی:", data);

  // تعریف ستون‌ها
  const columns: Column<User>[] = [
    { id: "id", label: "شناسه" },
    { id: "first_name", label: "نام" },
    { id: "last_name", label: "نام خانوادگی" },
    { id: "phone_number", label: "شماره همراه" },
    { id: "buy_date", label: "تاریخ" },
    { id: "money_amount", label: "مبلغ" },
    { id: "gold_amount", label: "مقدار طلا" },
    { id: "status", label: "وضعیت" },
  ];

  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (!data || !data.data) {
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
          <SectionTitle title="خرید طلا" />
        </Box>
        <ReusableTable
          columns={columns}
          rows={(data?.data || []).map((item) => ({
            ...item,
            status: item.request_status,
          }))}
          showActions={false} // فعال کردن ستون عملیات
        />
      </Container>
    </Box>
  );
};

export default GoldBuyTemp;
