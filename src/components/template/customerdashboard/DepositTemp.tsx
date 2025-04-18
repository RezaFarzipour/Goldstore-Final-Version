import { Box } from "@mui/material";
import DepositeBox from "../../modules/customerDashboard/DepositeBoxModule";
import { Rtl } from "../../element/rtl";
import SectionTitle from "../../modules/SectionTitle";

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
         <SectionTitle title="واریز"/>
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
