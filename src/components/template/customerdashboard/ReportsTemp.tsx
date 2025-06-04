import { Box, Container, Tab, Tabs } from "@mui/material";
import RequestTabs from "../../modules/RequestTabs";
import ReusableTable from "../../modules/ReusableTable";
import { useQuery } from "@tanstack/react-query";
import { customerReports } from "../../../services/customerDashboard";
import { useState } from "react";

const Reports = () => {
  const [mainTab, setMainTab] = useState(0);

  const handleMainTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setMainTab(newValue);
  };

  interface transactionType {
    money_amount: string;
    requested_date: string;
    requested_status: string;
  }

  interface columnsProps {
    id: string;
    label: string;
  }

  interface GoldTransaction {
    buy_date?: string;
    sale_date?: string;
    money_amount: number;
    gold_amount: number;
    request_status: string;
  }

  const { data } = useQuery({
    queryKey: ["transactions"],
    queryFn: customerReports,
  });

  const columns: columnsProps[] = [
    { id: "money_amount", label: "مبلغ" },
    { id: "request_date", label: "تاریخ برداشت" },
    { id: "request_status", label: "وضعیت درخواست" },
  ];

  const column2: columnsProps[] = [
    { id: "money_amount", label: "مبلغ" },
    { id: "sale_date", label: "تاریخ" },
    { id: "gold_amount", label: "مقدار طلا" },
    { id: "request_status", label: "وضعیت درخواست" },
  ];

  const buycolumn: columnsProps[] = [
    { id: "money_amount", label: "مبلغ" },
    { id: "buy_date", label: "تاریخ" },
    { id: "gold_amount", label: "مقدار طلا" },
    { id: "request_status", label: "وضعیت درخواست" },
  ];

  if (!data) {
    return <div>داده‌ها در دسترس نیستند.</div>;
  }

  return (
    <Box sx={{ pt: 4 }}>
      {/* تب‌های اصلی */}
      <Container maxWidth="lg">
        <Tabs
          value={mainTab}
          onChange={handleMainTabChange}
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="واریز و برداشت وجه" />
          <Tab label="خرید و فروش طلا" />
        </Tabs>
      </Container>

      {/* محتوای تب اول: واریز و برداشت وجه */}
      {mainTab === 0 && (
        <>
          <Container maxWidth="lg" sx={{ padding: "20px" }}>
            <RequestTabs
              label1="واریز"
              label2="برداشت"
              approvedRequests={
                <ReusableTable
                  columns={columns}
                  rows={data?.depositRep.data.map((item: transactionType) => ({
                    ...item,
                    money_amount: item.money_amount,
                    requested_date: item.requested_date,
                    requested_status: item.requested_status,
                  }))}
                  showActions={false}
                />
              }
              allRequests={
                <ReusableTable
                  columns={columns}
                  rows={data?.widhrawRep.data.map((item: transactionType) => ({
                    ...item,
                    money_amount: item.money_amount,
                    requested_date: item.requested_date,
                    requested_status: item.requested_status,
                  }))}
                />
              }
            />
          </Container>
        </>
      )}

      {/* محتوای تب دوم: خرید و فروش طلا */}
      {mainTab === 1 && (
        <>
          <Container maxWidth="lg" sx={{ padding: "20px" }}>
            <RequestTabs
              label1="خرید"
              label2="فروش"
              approvedRequests={
                <ReusableTable
                  columns={buycolumn}
                  rows={data?.buyRep.data.map((item: GoldTransaction) => ({
                    ...item,
                    money_amount: item.money_amount,
                    buy_date: item.buy_date,
                    gold_amount: item.gold_amount,
                    request_status: item.request_status,
                  }))}
                />
              }
              allRequests={
                <ReusableTable
                  columns={column2}
                  rows={data?.sellRep.data.map((item: GoldTransaction) => ({
                    ...item,
                    money_amount: item.money_amount,
                    sale_date: item.sale_date,
                    gold_amount: item.gold_amount,
                    request_status: item.request_status,
                  }))}
                />
              }
            />
          </Container>
        </>
      )}
    </Box>
  );
};

export default Reports;
