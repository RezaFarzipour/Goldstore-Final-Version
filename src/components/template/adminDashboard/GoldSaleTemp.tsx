import ReusableTable, { Column } from "../../modules/ReusableTable";
import { useMutation, useQuery } from "@tanstack/react-query";
import { proveSaleRequest, SaleList } from "../../../services/adminPanel";
import { Box, Container } from "@mui/material";
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
  money_amount: string;
  gold_amount: string;
  sale_date: string;
  phone_number: string;
  request_status: string;
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
  { id: "request_status", label: "وضعیت" },
];

const GoldSaleTemp = () => {
  const { showToast } = useToast();

  // استفاده از useQuery برای دریافت داده‌ها
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["SaleList"],
    queryFn: SaleList,
  });

  // تعریف موتیشن
  const { mutateAsync } = useMutation({
    mutationFn: ({
      get_request_id,
      request_type,
    }: {
      get_request_id: number;
      request_type: string;
    }) => proveSaleRequest(get_request_id, request_type),
  });

  // تابع مدیریت تایید یا رد درخواست
  const acceptrejectHandler = async (
    action: "accept" | "reject",
    selectedRow: User
  ) => {
    try {
      const get_request_id = selectedRow.id;
      const request_type = action;

      await mutateAsync({ get_request_id, request_type });
      showToast("تایید درخواست با موفقیت انجام شد!", "success");

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
          <SectionTitle title="فروش طلا" />
        </Box>

        <RequestTabs
        label1="درخواست‌های تایید نشده"
        label2="همه ی درهواست ها"
          approvedRequests={
            <ReusableTable
              columns={columns}
              rows={data.unacceptable_data.map((item: User) => ({
                ...item,
                status: item.request_status,
                id: toPersianDigits(item.id),
                phone_number: toPersianDigits(item.phone_number),
                money_amount: toPersianDigits(
                  priceSeptrator(item.money_amount)
                ),
                sale_date: toPersianDigits(item.sale_date),
                gold_amount: toPersianDigits(item.gold_amount),
              }))}
              showActions={true} // فعال کردن ستون عملیات
              btnvalue1="تایید درخواست"
              btnvalue2="رد درخواست"
              btnAction1={(selectedRow) =>
                acceptrejectHandler("accept", selectedRow)
              }
              btnAction2={(selectedRow) =>
                acceptrejectHandler("reject", selectedRow)
              }
            />
          }
          allRequests={
            <ReusableTable
              columns={columns}
              rows={data.data.map((item: User) => ({
                ...item,
                status: item.request_status,
                id: toPersianDigits(item.id),
                phone_number: toPersianDigits(item.phone_number),
                money_amount: toPersianDigits(
                  priceSeptrator(item.money_amount)
                ),
                sale_date: toPersianDigits(item.sale_date),
                gold_amount: toPersianDigits(item.gold_amount),
              }))}
              showActions={true} // فعال کردن ستون عملیات
              btnvalue1="تایید درخواست"
              btnvalue2="رد درخواست"
              btnAction1={(selectedRow) =>
                acceptrejectHandler("accept", selectedRow)
              }
              btnAction2={(selectedRow) =>
                acceptrejectHandler("reject", selectedRow)
              }
            />
          }
        />
      </Container>
    </Box>
  );
};

export default GoldSaleTemp;
