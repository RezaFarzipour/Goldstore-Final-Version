import { Box, Typography } from "@mui/material";
import DepositeBox from "../../modules/customerDashboard/DepositeBoxModule";
import { Rtl } from "../../element/rtl";

const Deposit = () => {
  return (
    <Rtl>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: "800px" }}>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontFamily: "Yekan",
              fontSize: { xs: "30px", md: "40px" },
              textAlign: "center",
              my: 6,
            }}
          >
            واریز
          </Typography>
          <DepositeBox
          
            headerContent="مبلغ را وارد کنید"
            footerContent="موجود کیف پول"
            unit="ریال"
            buttonValue="واریز"
            display="none"
          />
        </Box>
      </Box>
    </Rtl>
  );
};

export default Deposit;
