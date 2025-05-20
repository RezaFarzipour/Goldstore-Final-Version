import ReusableTable, { Column } from "../../../modules/ReusableTable";
import { Box, Container } from "@mui/material";
import SectionTitle from "../../../element/SectionTitle";
import { transactionList } from "../../../../services/adminPanel";
import { useQuery } from "@tanstack/react-query";
import { BaseAdminPanelProps } from "../../../../types";
import CircularMini from "../../../element/CircularLoading";

type User = BaseAdminPanelProps & {
  money_amount: string;
  payment_id: string;
  payment_date: string;
  status: string;
};
const TransactionsTemp = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["settingData"],
    queryFn: transactionList,
  });
  console.log(data);

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

  // بررسی وضعیت بارگذاری
  if (isLoading) {
    return <CircularMini />;
  }

  // بررسی وجود داده‌ها
  if (!data || !data.transaction_list) {
    return <div> در دسترس نیستند.</div>;
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
          <SectionTitle title="تراکنش ها" />
        </Box>
        <ReusableTable
          columns={columns}
          rows={data.transaction_list}
          showActions={false} // فعال کردن ستون عملیات
        />
      </Container>
    </Box>
  );
};

export default TransactionsTemp;
