import { Box } from "@mui/material";
import { Rtl } from "../../element/Rtl";
import SectionTitle from "../../element/SectionTitle";
import DepositeBox from "../../modules/DepositeBoxModule";

const Deposit = () => {
  return (
    <Rtl>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: { xs: "90%", md: "35%" } }}>
          <SectionTitle title="واریز" />
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
