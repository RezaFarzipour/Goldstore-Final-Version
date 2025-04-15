import { useMutation, useQuery } from "@tanstack/react-query";
import { Box, Container } from "@mui/material";
import {
  goldGetRequestList,
  proveGoldGetRequest,
} from "../../../services/adminPanel";
import ReusableTable, { Column } from "../../modules/ReusableTable";
import SectionTitle from "../../modules/SectionTitle";
import RequestTabs from "../../modules/RequestTabs";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  gold_amount: string;
  request_date: string;
  status: string;
}
// تعریف ستون‌ها
const columns: Column<User>[] = [
  { id: "id", label: "شناسه" },
  { id: "first_name", label: "نام" },
  { id: "last_name", label: "نام خانوادگی" },
  { id: "phone_number", label: "شماره همراه" },
  { id: "request_date", label: "تاریخ" },
  { id: "gold_amount", label: "مقدار برداشت" },
  { id: "status", label: "وضعیت" },
];
const GoldWithdrawTemp = (props: Props) => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["settingData"],
    queryFn: goldGetRequestList,
  });

  // تعریف موتیشن
  const { mutateAsync: proveMoneyAsync } = useMutation({
    mutationFn: ({
      get_request_id,
      request_type,
    }: {
      get_request_id: number;
      request_type: string;
    }) => proveGoldGetRequest(get_request_id, request_type),
  });

  // تابع مدیریت تایید یا رد درخواست
  const acceptHandler = async (selectedRow: User) => {
    try {
      const get_request_id = selectedRow.id;
      const request_type = "accept";

      const response = await proveMoneyAsync({ get_request_id, request_type });
      console.log("پاسخ موفق:", response);

      // به‌روزرسانی داده‌ها پس از موتیشن
      await refetch();
    } catch (error) {
      console.error("خطا در انجام میوتیشن:", error);
    }
  };

  const rejectHandler = async (selectedRow: User) => {
    try {
      const get_request_id = selectedRow.id;
      const request_type = "reject";

      const response = await proveMoneyAsync({ get_request_id, request_type });
      console.log("پاسخ موفق:", response);

      // به‌روزرسانی داده‌ها پس از موتیشن
      await refetch();
    } catch (error) {
      console.error("خطا در انجام میوتیشن:", error);
    }
  };
  // بررسی وضعیت بارگذاری
  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
  }

  // بررسی وجود داده‌ها
  if (
    !data ||
    !Array.isArray(data.all_request) ||
    !Array.isArray(data.un_accept_request)
  ) {
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
          <SectionTitle title="برداشت طلا" />
        </Box>
        <RequestTabs
          allRequests={
            <ReusableTable
              columns={columns}
              rows={data.all_request.map((item) => ({
                ...item,
                status: item.request_status,
              }))}
              showActions={true} // فعال کردن ستون عملیات
              btnvalue1="تایید درخواست"
              btnvalue2="رد درخواست"
              btnAction1={(selectedRow) => acceptHandler(selectedRow)}
              btnAction2={(selectedRow) => rejectHandler(selectedRow)}
            />
          }
          approvedRequests={
            <ReusableTable
              columns={columns}
              rows={data.un_accept_request.map((item) => ({
                ...item,
                status: item.request_status,
              }))}
              showActions={true} // فعال کردن ستون عملیات
              btnvalue1="تایید درخواست"
              btnvalue2="رد درخواست"
              btnAction1={(selectedRow) => acceptHandler(selectedRow)}
              btnAction2={(selectedRow) => rejectHandler(selectedRow)}
            />
          }
        />
      </Container>
    </Box>
  );
};

export default GoldWithdrawTemp;
