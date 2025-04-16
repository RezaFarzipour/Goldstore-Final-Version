import { useMutation, useQuery } from "@tanstack/react-query";
import { Box, Container } from "@mui/material";
import {
  moneyGetRequestList,
  proveMoneyGetRequest,
} from "../../../services/adminPanel";
import ReusableTable, { Column } from "../../modules/ReusableTable";
import SectionTitle from "../../modules/SectionTitle";
import RequestTabs from "../../modules/RequestTabs";
import {
  priceSeptrator,
  toPersianDigits,
} from "../../../utils/numberFormatter";
import { useToast } from "../../../context/ToastProvider";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  money_amount: string;
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
  { id: "money_amount", label: "مقدار برداشت" },
  { id: "status", label: "وضعیت" },
];
const CashWithdrawTemp = () => {
  const { showToast } = useToast();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["moneyGetRequestList"],
    queryFn: moneyGetRequestList,
  });

  // تعریف موتیشن
  const { mutateAsync: proveMoneyAsync } = useMutation({
    mutationFn: ({
      get_request_id,
      request_type,
    }: {
      get_request_id: number;
      request_type: string;
    }) => proveMoneyGetRequest(get_request_id, request_type),
  });

  // تابع مدیریت تایید یا رد درخواست
  const acceptHandler = async (selectedRow: User) => {
    try {
      const get_request_id = selectedRow.id;
      const request_type = "accept";

      await proveMoneyAsync({ get_request_id, request_type });
      showToast("تایید درخواست با موفقیت انجام شد!", "success");

      // به‌روزرسانی داده‌ها پس از موتیشن
      await refetch();
    } catch {
      showToast("خطایی رخ داده است!", "error");
    }
  };

  const rejectHandler = async (selectedRow: User) => {
    try {
      const get_request_id = selectedRow.id;
      const request_type = "reject";

      await proveMoneyAsync({ get_request_id, request_type });
      showToast("رد درخواست با موفقیت انجام شد!", "success");

      // به‌روزرسانی داده‌ها پس از موتیشن
      await refetch();
    } catch {
      showToast("خطایی رخ داده است!", "error");
    }
  };
  // بررسی وضعیت بارگذاری
  if (isLoading) {
    return <div>در حال بارگذاری...</div>;
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
                id: toPersianDigits(item.id),
                phone_number: toPersianDigits(item.phone_number),
                request_date: toPersianDigits(item.request_date),
                money_amount: toPersianDigits(
                  priceSeptrator(item.money_amount)
                ),
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
                id: toPersianDigits(item.id),
                phone_number: toPersianDigits(item.phone_number),
                request_date: toPersianDigits(item.request_date),
                money_amount: toPersianDigits(
                  priceSeptrator(item.money_amount)
                ),
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

export default CashWithdrawTemp;
