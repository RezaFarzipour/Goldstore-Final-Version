import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../../styles/theme";
import WidthraDepositTable from "../../modules/customerDashboard/WidthraDepositTable";

const Reports = () => {
  return (
    <>
      <Box sx={{ my: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            color: colors.primary[400],
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",

              fontSize: { xs: "26px", md: "40px" },
              mb: 2,
            }}
          >
            واربز و برداشت وجه
          </Typography>
        </Box>
        {/* <Transaction
          depositToken={depositToken}
          withdrawToken={withdrawToken}
        /> */}
        <WidthraDepositTable />
      </Box>
      <Box sx={{ my: 6 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            fontWeight: "bold",

            textAlign: "center",
            mb: 2,
          }}
        >
          خرید و فروش (طلا)
        </Typography>
        {/* <TransactionGold
          buyGold={buyGold}
          sellGold={sellGold}
          withdrawGold={withdrawGold}
        /> */}
      </Box>
    </>
  );
};

export default Reports;
