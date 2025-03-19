import { Box } from "@mui/material";
import BuyAndSellBox from "../../modules/customerDashboard/BuyAndSellBoxModule";


const BuyGold = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <BuyAndSellBox headerLable="قیمت خرید" priceColor={"green"} buttonValue="خرید" />
    </Box>
  );
};

export default BuyGold;
