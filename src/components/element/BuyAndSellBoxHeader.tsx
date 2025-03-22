import { AppBar, Box, Typography } from "@mui/material";
import {
  BoxTwoSx,
  TypoOneSx,
  
} from "../template/customerdashboard/style";

import { priceSeptrator } from "../../utils/numberFormatter";
import { BaseProps } from "../../types";

type BuyAndSellBoxHeaderProps = Omit<BaseProps, "walletData"> 


const BuyAndSellBoxHeader = ({
  headerLable,
  priceColor,
  price
}: BuyAndSellBoxHeaderProps) => {
  return (
    <AppBar position="static" sx={{ borderRadius: "10px" }}>
      <Box sx={BoxTwoSx}>
        <Typography sx={TypoOneSx}> {headerLable}:</Typography>
        <Typography
          sx={{
            color:  priceColor ,
            display: "flex",
            fontSize: { xs: "16px", md: "22px" },
            alignItems: "center",
            gap: 2,
            fontWeight: "600",
          }}
        >
          {priceSeptrator(price ?? 0)}
          <span>ریال</span>
        </Typography>
      </Box>
    </AppBar>
  );
};

export default BuyAndSellBoxHeader;
