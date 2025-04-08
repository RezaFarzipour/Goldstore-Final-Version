import { Box, Typography } from "@mui/material";
import React from "react";
import DepositeBox from "../../modules/customerDashboard/DepositeBoxModule";
import { Rtl } from "../../element/rtl";
import { useQuery } from "@tanstack/react-query";
import { walletdata } from "../../../services/customerDashboard";
import { ErrorPendingHandler } from "../../element/ErrrorPendingHandler";

const Withdraw = () => {
  const {
    data: walletData,
    error,
    isPending,
  } = useQuery({
    queryKey: ["walletdata"],
    queryFn: walletdata,
  });

  const walletBalance = walletData?.walletBalance;

  ErrorPendingHandler(error?.message, isPending);

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
            walletBalance={walletBalance}
            buttonValue="برداشت"
            display="flex"
          />
        </div>
      </Box>
    </Rtl>
  );
};

export default Withdraw;
