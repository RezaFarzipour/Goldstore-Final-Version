import { Box, Typography } from "@mui/material";
import React from "react";
import DepositeBox from "../../modules/customerDashboard/DepositeBoxModule";
import { Rtl } from "../../element/rtl";

const Withdraw = () => {
  return (
    <Rtl>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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
            برداشت
          </Typography>
          <DepositeBox
            headerContent="مبلغ را وارد کنید"
            footerContent="موجود کیف پول"
            unit="ریال"
            buttonValue="واریز"
            display="flex"
          />
        </div>
      </Box>
    </Rtl>
  );
};

export default Withdraw;
