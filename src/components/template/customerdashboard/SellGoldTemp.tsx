import React from "react";
import BuyAndSellBox from "../../modules/customerDashboard/BuyAndSellBoxModule";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { walletdata } from "../../../services/customerDashboard";
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

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <BuyAndSellBox
        price={sellPrice}
        walletData={walletData}
        headerLable="قیمت فروش"
        priceColor="red"
        buttonValue="فروش"
      />
    </Box>
  );
};

export default SellGold;
