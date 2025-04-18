import React, { useState } from "react";
import { Rtl } from "../../element/rtl";
import { Box, Typography } from "@mui/material";
import DepositeBox from "../../modules/DepositeBoxModule";
import { useMutation, useQuery } from "@tanstack/react-query";
import { receiveGold, walletdata } from "../../../services/customerDashboard";
import { ErrorPendingHandler } from "../../element/ErrrorPendingHandler";
import Alerts from "../../element/AlertElement";

const ReceiveGold = () => {
  const [receiveGoldAmount, setReceiveGoldAmount] = useState("");

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
    isPending: receiving,
    isSuccess,
    isError,
  } = useMutation({
    mutationKey: ["goldreceive"],
    mutationFn: receiveGold,
  });

  const walletBalance = walletData?.goldBalance;

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
              دریافت طلا
            </Typography>
            <DepositeBox
              isPending={receiving}
              handleChange={(e) => setReceiveGoldAmount(e.target.value)}
              assetAmount={receiveGoldAmount}
              assetAmountChanger={setReceiveGoldAmount}
              submit={mutate}
              walletBalance={walletBalance}
              headerContent="مقدار را وارد کنید"
              footerContent="موجود کیف طلا"
              unit="گرم"
              buttonValue="دریافت"
              display="flex"
            />
          </div>
        </Box>
      </Rtl>
    </>
  );
};

export default ReceiveGold;
