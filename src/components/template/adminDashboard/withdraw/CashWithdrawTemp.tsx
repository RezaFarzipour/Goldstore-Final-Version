import { useCallback } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Box, Container } from "@mui/material";
import {
  moneyGetRequestList,
  proveMoneyGetRequest,
} from "../../../../services/adminPanel";
import ReusableTable, { Column } from "../../../modules/ReusableTable";
import SectionTitle from "../../../element/SectionTitle";
import RequestTabs from "../../../modules/RequestTabs";
import {
  priceSeptrator,
  toPersianDigits,
} from "../../../../utils/numberFormatter";
import { useToast } from "../../../../context/ToastProvider";
import { BaseAdminPanelProps } from "../../../../types";
import CircularMini from "../../../element/CircularLoading";

type User = BaseAdminPanelProps & {
  money_amount: string;
  request_date: string;
  request_status: string;
};

type ProveRequestInput = {
  get_request_id: string;
  request_type: "accept" | "reject";
};

// تعریف ستون‌ها
const columns: Column<User>[] = [
  { id: "id", label: "شناسه" },
  { id: "first_name", label: "نام" },
  { id: "last_name", label: "نام خانوادگی" },
  { id: "phone_number", label: "شماره همراه" },
  { id: "request_date", label: "تاریخ" },
  { id: "money_amount", label: "مقدار برداشت" },
  { id: "request_status", label: "وضعیت" },
];

type UserFormatted = Omit<User, "id"> & {
  id: string;
};

const formatRows = (items: User[]): UserFormatted[] =>
  items.map((item) => ({
    ...item,
    status: item.request_status,
    id: toPersianDigits(item.id),
    phone_number: toPersianDigits(item.phone_number),
    request_date: toPersianDigits(item.request_date),
    money_amount: toPersianDigits(priceSeptrator(item.money_amount)),
  }));

const CashWithdrawTemp = () => {
  const { showToast } = useToast();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["moneyGetRequestList"],
    queryFn: moneyGetRequestList,
  });

  const { mutateAsync: proveMoneyAsync } = useMutation({
    mutationFn: ({ get_request_id, request_type }: ProveRequestInput) =>
      proveMoneyGetRequest(get_request_id, request_type),
  });

  const acceptHandler = useCallback(
    async (selectedRow: User) => {
      try {
        await proveMoneyAsync({
          get_request_id: selectedRow.id,
          request_type: "accept",
        });
        showToast("تایید درخواست با موفقیت انجام شد!", "success");
        await refetch();
      } catch {
        showToast("خطایی رخ داده است!", "error");
      }
    },
    [proveMoneyAsync, showToast, refetch]
  );

  const rejectHandler = useCallback(
    async (selectedRow: User) => {
      try {
        await proveMoneyAsync({
          get_request_id: selectedRow.id,
          request_type: "reject",
        });
        showToast("رد درخواست با موفقیت انجام شد!", "success");
        await refetch();
      } catch {
        showToast("خطایی رخ داده است!", "error");
      }
    },
    [proveMoneyAsync, showToast, refetch]
  );

  // کامپوننت جدول درخواست‌ها
  const RequestTable = ({
    rows,
    onAccept,
    onReject,
  }: {
    rows: User[];
    onAccept: (row: User) => void;
    onReject: (row: User) => void;
  }) => (
    <ReusableTable
      columns={columns}
      rows={formatRows(rows)}
      showActions
      btnvalue1="تایید درخواست"
      btnvalue2="رد درخواست"
      btnAction1={onAccept}
      btnAction2={onReject}
    />
  );

  if (isLoading) {
    return <CircularMini />;
  }
  // بررسی وجود داده‌ها
  if (
    !data ||
    !Array.isArray(data.all_request) ||
    !Array.isArray(data.un_accept_request)
  ) {
    return <Box>داده‌ها در دسترس نیستند.</Box>;
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
                label1="درخواست های تایید نشده"
        label2="همه ی درخواست ها"
          allRequests={
            <RequestTable
              rows={data.all_request}
              onAccept={acceptHandler}
              onReject={rejectHandler}
            />
          }
          approvedRequests={
            <RequestTable
              rows={data.un_accept_request}
              onAccept={acceptHandler}
              onReject={rejectHandler}
            />
          }
        />
      </Container>
    </Box>
  );
};

export default CashWithdrawTemp;
