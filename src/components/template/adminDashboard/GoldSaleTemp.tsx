import ReusableTable, { Column } from "../../modules/ReusableTable";
import { useMutation, useQuery } from "@tanstack/react-query";
import { proveSaleRequest, SaleList } from "../../../services/adminPanel";
import { Box, Container, CircularProgress } from "@mui/material";
import SectionTitle from "../../modules/SectionTitle";
import RequestTabs from "../../modules/RequestTabs";
import {
  priceSeptrator,
  toPersianDigits,
} from "../../../utils/numberFormatter";
import { useToast } from "../../../context/ToastProvider";
import { BaseAdminPanelProps } from "../../../types";
import CircularMini from "../../element/CircularLoading";

type User = BaseAdminPanelProps & {
  money_amount: string;
  gold_amount: string;
  sale_date: string;
  request_status: string;
};

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

  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ["SaleList"],
    queryFn: SaleList,
  });

  const { mutateAsync } = useMutation({
    mutationFn: ({
      get_request_id,
      request_type,
    }: {
      get_request_id: string;
      request_type: string;
    }) => proveSaleRequest(get_request_id, request_type),
  });

  const acceptrejectHandler = async (
    action: "accept" | "reject",
    selectedRow: User
  ) => {
    try {
      await mutateAsync({
        get_request_id: selectedRow.id,
        request_type: action,
      });
      showToast(
        `${action === "accept" ? "تایید" : "رد"} درخواست با موفقیت انجام شد!`,
        "success"
      );
      await refetch();
    } catch {
      showToast("خطایی رخ داده است!", "error");
    }
  };

  const renderTable = (rows: User[]) => {
    return (
      <ReusableTable
        columns={columns}
        rows={rows.map((item) => ({
          ...item,
          status: item.request_status,
          id: toPersianDigits(item.id),
          phone_number: toPersianDigits(item.phone_number),
          money_amount: toPersianDigits(priceSeptrator(item.money_amount)),
          sale_date: toPersianDigits(item.sale_date),
          gold_amount: toPersianDigits(item.gold_amount),
        }))}
        showActions={true}
        btnvalue1="تایید درخواست"
        btnvalue2="رد درخواست"
        btnAction1={(selectedRow) => acceptrejectHandler("accept", selectedRow)}
        btnAction2={(selectedRow) => acceptrejectHandler("reject", selectedRow)}
      />
    );
  };

  if (isLoading) {
    return <CircularMini />;
  }

  if (error) {
    return <div>داده‌ها در دسترس نیستند.</div>;
  }

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Container maxWidth="lg" sx={{ padding: "20px" }}>
        <Box mb={4}>
          <SectionTitle title="فروش طلا" />
        </Box>
        <RequestTabs
          approvedRequests={renderTable(data?.unacceptable_data || [])}
          allRequests={renderTable(data?.data || [])}
        />
      </Container>
    </Box>
  );
};

export default GoldSaleTemp;
