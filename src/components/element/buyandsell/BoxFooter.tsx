import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../styles/theme";
import { WalletDataResponse } from "../../../types";
import { priceSeptrator } from "../../../utils/numberFormatter";

interface BuyAndSellBoxFooterProps {
  walletData?: WalletDataResponse;
}

const BuyAndSellBoxFooter = ({ walletData }: BuyAndSellBoxFooterProps) => {
  return (
    <Box display="flex" justifyContent="space-evenly">
      <Box>
        <Typography sx={{ color: "#fff", p: 1 }}>
          <span style={{ color: colors.gold[300] }}>کیف طلا:</span>
          <span>{walletData?.goldBalance}&nbsp;گرم</span>
        </Typography>
      </Box>

      <Box>
        <Typography sx={{ color: colors.primary[400], p: 1 }}>
          <span style={{ color: colors.gold[300] }}>کیف پول:</span>
          <span>
            {priceSeptrator(walletData?.walletBalance ?? 0)}
            &nbsp;ریال
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default BuyAndSellBoxFooter;
