import { useMutation, useQuery } from "@tanstack/react-query";
import { Box, Container, CircularProgress, Typography } from "@mui/material";
import ReusableTable, { Column } from "../../../modules/ReusableTable";
import { useToast } from "../../../../context/ToastProvider";
import {
  goldGetRequestList,
  proveGoldGetRequest,
} from "../../../../services/adminPanel";
import SectionTitle from "../../../modules/SectionTitle";
import RequestTabs from "../../../modules/RequestTabs";
import { toPersianDigits } from "../../../../utils/numberFormatter";
import { BaseAdminPanelProps } from "../../../../types";
import { useCallback } from "react";
import CircularMini from "../../../element/CircularMini";

// نوع داده‌ها
type User = BaseAdminPanelProps & {
  gold_amount: string;
  request_date: string;
  request_status: string;
};

const columns: Column<User>[] = [
  { id: "id", label: "شناسه" },
  { id: "first_name", label: "نام" },
  { id: "last_name", label: "نام خانوادگی" },
  { id: "phone_number", label: "شماره همراه" },
  { id: "request_date", label: "تاریخ" },
  { id: "gold_amount", label: "مقدار برداشت" },
  { id: "request_status", label: "وضعیت" },
];

// تابع کمکی برای فرمت کردن داده‌ها
const formatRows = (items?: User[]) =>
  (items ?? []).map((item) => ({
    ...item,
    status: item.request_status,
    id: toPersianDigits(item.id),
    phone_number: toPersianDigits(item.phone_number),
    request_date: toPersianDigits(item.request_date),
    gold_amount: toPersianDigits(item.gold_amount),
  }));

const GoldWithdrawTemp = () => {
  const { showToast } = useToast();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["settingData"],
    queryFn: goldGetRequestList,
  });

  const { mutateAsync: proveGoldAsync } = useMutation({
    mutationFn: ({
      get_request_id,
      request_type,
    }: {
      get_request_id: string;
      request_type: string;
    }) => proveGoldGetRequest(get_request_id, request_type),
  });

  const acceptHandler = useCallback(
    async (selectedRow: User) => {
      try {
        await proveGoldAsync({
          get_request_id: selectedRow.id,
          request_type: "accept",
        });
        showToast("تایید درخواست با موفقیت انجام شد!", "success");
        await refetch();
      } catch {
        showToast("خطایی رخ داده است!", "error");
      }
    },
    [proveGoldAsync, showToast, refetch]
  );

  const rejectHandler = useCallback(
    async (selectedRow: User) => {
      try {
        await proveGoldAsync({
          get_request_id: selectedRow.id,
          request_type: "reject",
        });
        showToast("رد درخواست با موفقیت انجام شد!", "success");
        await refetch();
      } catch {
        showToast("خطایی رخ داده است!", "error");
      }
    },
    [proveGoldAsync, showToast, refetch]
  );

  // وضعیت بارگذاری یا خطا
  if (isLoading) {
    return <CircularMini />;
  }

  if (error || !data) {
    return (
      <Box textAlign="center">
        <Typography variant="body1" color="error">
          داده‌ها در دسترس نیستند.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Container maxWidth="lg" sx={{ padding: "20px" }}>
        <Box mb={4}>
          <SectionTitle title="برداشت طلا" />
        </Box>
        <RequestTabs
          allRequests={
            <ReusableTable
              columns={columns}
              rows={formatRows(data.all_request)}
              showActions
              btnvalue1="تایید درخواست"
              btnvalue2="رد درخواست"
              btnAction1={acceptHandler}
              btnAction2={rejectHandler}
            />
          }
          approvedRequests={
            <ReusableTable
              columns={columns}
              rows={formatRows(data.un_accept_request)}
              showActions
              btnvalue1="تایید درخواست"
              btnvalue2="رد درخواست"
              btnAction1={acceptHandler}
              btnAction2={rejectHandler}
            />
          }
        />
      </Container>
    </Box>
  );
};

export default GoldWithdrawTemp;
