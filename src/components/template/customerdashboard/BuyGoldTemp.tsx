import { Box } from "@mui/material";
import BuyAndSellBox from "../../modules/customerDashboard/BuyAndSellBoxModule";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { buyGold, walletdata } from "../../../services/customerDashboard";
import { ErrorPendingHandler } from "../../../utils/ErrrorPendingHandler";

import Alerts from "../../element/AlertElement";

const BuyGold = () => {

const queryClient = useQueryClient()

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
    isPending: buying,
    isError,
    isSuccess,
    
    
  } = useMutation({
    mutationKey:["buygold"],
    mutationFn: buyGold,
    onSuccess:()=>queryClient.invalidateQueries({queryKey:["walletdata"]})
  });

 
  

  ErrorPendingHandler(error?.message, isPending);

  const buyPrice = walletData?.buyPrice;

  const walletBalance = walletData?.walletBalance;

  

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
          text="خرید با موفقیت انجام شد"
        ></Alerts>
      )}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <BuyAndSellBox
        walletBalance={walletBalance}
          mutate={mutate}
          isPending={buying}
          price={buyPrice}
          walletData={walletData}
          headerLable="قیمت خرید"
          priceColor={"green"}
          buttonValue="خرید"
        />
      </Box>
    </>
  );
};

export default BuyGold;
