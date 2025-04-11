import React from "react";
import BuyAndSellBox from "../../modules/customerDashboard/BuyAndSellBoxModule";
import { Box } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { sellgold, walletdata } from "../../../services/customerDashboard";
import Alerts from "../../element/AlertElement";
import { ErrorPendingHandler } from "../../element/ErrrorPendingHandler";

const SellGold = () => {
  const {
    data: walletData,
    error,
    isPending,
  } = useQuery({
    queryKey: ["walletdata"],
    queryFn: walletdata,
  });





  ErrorPendingHandler(error?.message, isPending);

  const sellPrice = walletData?.sellPrice;


  const {
    mutate,
    isPending: selling,
    isError,
    isSuccess,
    
    
  } = useMutation({
    mutationKey:["sellgold"],
    mutationFn: sellgold,
    
  });



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
          text="فروش با موفقیت انجام شد.منتظر تایید ادمین بمانید"
        ></Alerts>
      )}

    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <BuyAndSellBox
     
        mutate={mutate}
        isPending={selling}
        price={sellPrice}
        walletData={walletData}
        headerLable="قیمت فروش"
        priceColor="red"
        buttonValue="فروش"
      />
    </Box>
    </>
  );
};

export default SellGold;
