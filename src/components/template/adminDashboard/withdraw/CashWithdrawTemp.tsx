import ReusableTable from "../../../modules/ReusableTable";
import { moneyGetRequestList } from "../../../../services/adminPanel";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../modules/SectionTitle";
import { Box, Container } from "@mui/material";
import RequestTabs from "../../../modules/RequestTabs";

type Props = {};
interface User {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  money_amount: string;
  request_date: string;
  status: string;
}
const CashWithdrawTemp = (props: Props) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["settingData"],
    queryFn: moneyGetRequestList,
  });
  console.log(data);

  // تعریف ستون‌ها
  const columns: Column<User>[] = [
    { id: "id", label: "شناسه" },
    { id: "first_name", label: "نام" },
    { id: "last_name", label: "نام خانوادگی" },
    { id: "phone_number", label: "شماره همراه" },
    { id: "request_date", label: "تاریخ" },
    { id: "money_amount", label: "مقدار برداشت" },
    { id: "status", label: "وضعیت" },
  ];

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
          <SectionTitle title="برداشت وجه" />
        </Box>
        <RequestTabs
          allRequests={
            <ReusableTable
              columns={columns}
              rows={data.all_request.map((item) => ({
                ...item,
                status: item.request_status,
              }))}
              showActions={false} // فعال کردن ستون عملیات
            />
          }
          approvedRequests={
            <ReusableTable
              columns={columns}
              rows={data.un_accept_request.map((item) => ({
                ...item,
                status: item.request_status,
              }))}
              showActions={false} // فعال کردن ستون عملیات
            />
          }
        />
      </Container>
    </Box>
  );
};

export default CashWithdrawTemp;
