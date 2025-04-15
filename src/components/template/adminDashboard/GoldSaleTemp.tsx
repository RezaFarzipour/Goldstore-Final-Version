import ReusableTable from "../../modules/ReusableTable";
import { useQuery } from "@tanstack/react-query";
import { SaleList } from "../../../services/adminPanel";
import { Box, Container } from "@mui/material";
import SectionTitle from "../../modules/SectionTitle";
import RequestTabs from "../../modules/RequestTabs";

type Props = {};
interface User {
  id: number;
  first_name: string;
  last_name: string;
  money_amount: string;
  gold_amount: string;
  sale_date: string;
  phone_number: string;
  status: string;
}
const GoldSaleTemp = (props: Props) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["settingData"],
    queryFn: SaleList,
  });

  console.log(data);

  // تعریف ستون‌ها
  const columns: Column<User>[] = [
    { id: "id", label: "شناسه" },
    { id: "first_name", label: "نام" },
    { id: "last_name", label: "نام خانوادگی" },
    { id: "phone_number", label: "شماره همراه" },
    { id: "sale_date", label: "تاریخ" },
    { id: "money_amount", label: "مبلغ" },
    { id: "gold_amount", label: "مقدار طلا" },
    { id: "status", label: "وضعیت" },
  ];
  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  // توابع عملیات
  const acceptHandler = (user: User) => {
    console.log("ویرایش کاربر:", user);
  };

  const rejectHabdler = (user: User) => {
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
          <SectionTitle title="فروش طلا" />
        </Box>
        <RequestTabs
          approvedRequests={
            <ReusableTable
              columns={columns}
              rows={data.unacceptable_data.map((item) => ({
                ...item,
                status: item.request_status,
              }))}
              showActions={true} // فعال کردن ستون عملیات
              btnvalue1="تایید درخواست "
              btnvalue2="رد درخواست"
              btnAction1={acceptHandler}
              btnAction2={rejectHabdler}
            />
          }
          allRequests={
            <ReusableTable
              columns={columns}
              rows={data.data.map((item) => ({
                ...item,
                status: item.request_status,
              }))}
              showActions={true} // فعال کردن ستون عملیات
              btnvalue1="تایید درخواست "
              btnvalue2="رد درخواست"
              btnAction1={acceptHandler}
              btnAction2={rejectHabdler}
            />
          }
        />
      </Container>
    </Box>
  );
};

export default GoldSaleTemp;
