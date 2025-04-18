import { Box } from "@mui/material";
import React from "react";
import DepositeBox from "../../modules/customerDashboard/DepositeBoxModule";
import { Rtl } from "../../element/rtl";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  customerWithdraw,
  walletdata,
} from "../../../services/customerDashboard";
import { ErrorPendingHandler } from "../../element/ErrrorPendingHandler";
import { formatNumberWithCommas } from "../../../utils/numberFormatter";
import SectionTitle from "../../modules/SectionTitle";

const Withdraw = () => {
  const [moneyAmount, setMoneyAmount] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const formatedNumber = formatNumberWithCommas(newValue);
    setMoneyAmount(formatedNumber);
  };

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
   error:widthrawError,
    isPending: isWithdrawing,
  } = useMutation({
    mutationFn: customerWithdraw,
  });

  const walletBalance = walletData?.walletBalance;



  

  ErrorPendingHandler(error?.message, isPending);

  return (
    <>
     
      <Rtl>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: "800px" }}>
 <SectionTitle title="برداشت"/>
            <DepositeBox
            error={widthrawError}
              handleChange={handleChange}
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
