import { Box } from "@mui/material";
import BuyAndSellBox from "../../modules/customerDashboard/BuyAndSellBoxModule";
import { useQuery } from "@tanstack/react-query";
import { walletdata } from "../../../services/customerDashboard";
import { ErrorPendingHandler } from "../../../utils/ErrrorPendingHandler";

const BuyGold = () => {

  const {data:walletData,error,isPending} = useQuery({
    queryKey:["walletdata"],
    queryFn:walletdata
  })

  ErrorPendingHandler(error?.message,isPending)

  
  const buyPrice = walletData?.buyPrice


  
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <BuyAndSellBox
      price={buyPrice}
     walletData={walletData}
        headerLable="قیمت خرید"
        priceColor={"green"}
        buttonValue="خرید"
      />
    </Box>
  );
};

export default BuyGold;
