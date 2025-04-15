import ReusableTable, { Column } from "../../../modules/ReusableTable";
import { SaleList } from "../../../../services/adminPanel";
import { useQuery } from "@tanstack/react-query";
import { Box, Container } from "@mui/material";
import SectionTitle from "../../../modules/SectionTitle";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  money_amount: string;
  gold_amount: string;
  sale_date: string;
  phone_number: string;
  request_status: string; // توجه: فیلد request_status باید وجود داشته باشد
}

const GoldSaleRepTemp = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["settingData"],
    queryFn: SaleList,
  });

  // بررسی وضعیت بارگذاری
  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  // بررسی وجود داده‌ها
  if (!data || !data.data) {
    return <div>داده‌ها در دسترس نیستند.</div>;
  }

  // تعریف ستون‌ها
  const columns: Column<User>[] = [
    { id: "id", label: "شناسه" },
    { id: "first_name", label: "نام" },
    { id: "last_name", label: "نام خانوادگی" },
    { id: "phone_number", label: "شماره همراه" },
    { id: "sale_date", label: "تاریخ" },
    { id: "money_amount", label: "مبلغ" },
    { id: "gold_amount", label: "مقدار طلا" },
    { id: "request_status", label: "وضعیت" }, // توجه: فیلد request_status
  ];

  // فیلتر کردن داده‌ها بر اساس وضعیت
  const filteredRows = data.data.filter(
    (item) =>
      item.request_status === "تایید درخواست" ||
      item.request_status === "رد درخواست"
  );

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
          <SectionTitle title="فروش طلا" />
        </Box>
        <ReusableTable
          columns={columns}
          rows={filteredRows} // استفاده از داده‌های فیلترشده
          showActions={false} // غیرفعال کردن ستون عملیات
        />
      </Container>
    </Box>
  );
};

export default GoldSaleRepTemp;
