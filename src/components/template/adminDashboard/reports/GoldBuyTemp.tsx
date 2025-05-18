import ReusableTable, { Column } from "../../../modules/ReusableTable";
import { BuyList } from "../../../../services/adminPanel";
import { useQuery } from "@tanstack/react-query";
import { Box, Container } from "@mui/material";
import SectionTitle from "../../../element/SectionTitle";
import {
  priceSeptrator,
  toPersianDigits,
} from "../../../../utils/numberFormatter";
import { BaseAdminPanelProps } from "../../../../types";
import { useMemo } from "react";
import CircularMini from "../../../element/CircularLoading";

type User = BaseAdminPanelProps & {
  money_amount: string;
  gold_amount: string;
  buy_date: string;
  request_status: string;
};
// تعریف ستون‌ها
const columns: Column<User>[] = [
  { id: "id", label: "شناسه" },
  { id: "first_name", label: "نام" },
  { id: "last_name", label: "نام خانوادگی" },
  { id: "phone_number", label: "شماره همراه" },
  { id: "buy_date", label: "تاریخ" },
  { id: "money_amount", label: "مبلغ" },
  { id: "gold_amount", label: "مقدار طلا" },
  { id: "request_status", label: "وضعیت" },
];

const GoldBuyTemp = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["gold-buy"],
    queryFn: BuyList,
  });

  const rows: User[] = useMemo(() => {
    if (!Array.isArray(data?.data)) return [];

    return data.data.map((item: User) => ({
      ...item,
      id: toPersianDigits(item.id),
      phone_number: toPersianDigits(item.phone_number),
      buy_date: toPersianDigits(item.buy_date),
      money_amount: toPersianDigits(priceSeptrator(item.money_amount)),
      gold_amount: toPersianDigits(item.gold_amount),
      request_status: item.request_status,
    }));
  }, [data]);

  if (isLoading) {
    return <CircularMini />;
  }

  if (!data || !Array.isArray(data?.data)) {
    return <div>داده‌ها در دسترس نیستند یا فرمت آن‌ها نادرست است.</div>;
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
          rows={rows}
          showActions={false} // فعال کردن ستون عملیات
        />
      </Container>
    </Box>
  );
};

export default GoldBuyTemp;
