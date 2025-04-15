import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DepositeBox from "../../modules/customerDashboard/DepositeBoxModule";
import { Rtl } from "../../element/rtl";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  customerWithdraw,
  walletdata,
} from "../../../services/customerDashboard";
import { ErrorPendingHandler } from "../../element/ErrrorPendingHandler";
import Alerts from "../../element/AlertElement";

const Withdraw = () => {
  const [moneyAmount, setMoneyAmount] = React.useState("");

  const {
    data: walletData,
    error,
    isPending,
  } = useQuery({
    queryKey: ["walletdata"],
    queryFn: walletdata,
  });

  const {
    mutate,
    isPending: isWithdrawing,
    isError,

    isSuccess,
  } = useMutation({
    mutationFn: customerWithdraw,
  });

  const walletBalance = walletData?.walletBalance;

  ErrorPendingHandler(error?.message, isPending);

  return (
    <>
      {isError && (
        <Alerts
          severity="error"
          text="خطایی پیش امده است دوباره تلاش کنید"
        ></Alerts>
      )}
      {isSuccess && (
        <Alerts
          severity="success"
          text="برداشت موفق بود .منتظر تایید ادمین بمانید"
        ></Alerts>
      )}
      <Rtl>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "800px" }}>
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                my: 5,
                textAlign: "center",
                fontFamily: "Yekan",
                fontSize: { xs: "36px", md: "45px" },
              }}
            >
              برداشت
            </Typography>
            <DepositeBox
              handleChange={(e) => setMoneyAmount(e.target.value)}
              isPending={isWithdrawing}
              submit={mutate}
              assetAmount={moneyAmount}
              assetAmountChanger={setMoneyAmount}
              walletBalance={walletBalance}
              headerContent="مبلغ را وارد کنید"
              footerContent="موجود کیف پول"
              unit="ریال"
              buttonValue="برداشت"
              display="flex"
            />
          </div>
        </Box>
      </Rtl>
    </>
  );
};

export default Withdraw;
