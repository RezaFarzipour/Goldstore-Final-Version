import ReusableTable, { Column } from "../../../modules/ReusableTable";
import { SaleList } from "../../../../services/adminPanel";
import { useQuery } from "@tanstack/react-query";
import { Box, Container } from "@mui/material";
import SectionTitle from "../../../modules/SectionTitle";
import {
  priceSeptrator,
  toPersianDigits,
} from "../../../../utils/numberFormatter";
import { BaseAdminPanelProps } from "../../../../types";
import { useMemo } from "react";
import CircularMini from "../../../element/CircularMini";

type User = BaseAdminPanelProps & {
  money_amount: string;
  gold_amount: string;
  sale_date: string;
  request_status: string;
};

// تعریف ستون‌ها
const columns: Column<User>[] = [
  { id: "id", label: "شناسه" },
  { id: "first_name", label: "نام" },
  { id: "last_name", label: "نام خانوادگی" },
  { id: "phone_number", label: "شماره همراه" },
  { id: "sale_date", label: "تاریخ" },
  { id: "money_amount", label: "مبلغ" },
  { id: "gold_amount", label: "مقدار طلا" },
  { id: "request_status", label: "وضعیت" },
];

const GoldSaleRepTemp = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["gold-sales"],
    queryFn: SaleList,
  });

  // فیلتر کردن داده‌ها بر اساس وضعیت
  const filteredRows = useMemo(() => {
    if (!data?.data) return [];

    return data.data
      .filter(
        (item: User) =>
          item.request_status === "تایید درخواست" ||
          item.request_status === "رد درخواست"
      )
      .map((item: User) => ({
        ...item,
        id: toPersianDigits(item.id),
        phone_number: toPersianDigits(item.phone_number),
        sale_date: toPersianDigits(item.sale_date),
        money_amount: toPersianDigits(priceSeptrator(item.money_amount)),
        gold_amount: toPersianDigits(item.gold_amount),
      }));
  }, [data]);

  // بررسی وضعیت بارگذاری
  if (isLoading) return <CircularMini />;

  // بررسی وجود داده‌ها
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
          <SectionTitle title="فروش طلا" />
        </Box>
        <ReusableTable
          columns={columns}
          rows={filteredRows}
          showActions={false} // غیرفعال کردن ستون عملیات
        />
      </Container>
    </Box>
  );
};

export default GoldSaleRepTemp;
