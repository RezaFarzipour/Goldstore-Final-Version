import { Rtl } from "../../element/rtl";
import { Box } from "@mui/material";
import DepositeBox from "../../modules/customerDashboard/DepositeBoxModule";
import AdminPermission from "../../element/AdminPerrmishion";

type Props = {};

const SettingTemp = (props: Props) => {
  return (
    <Rtl>
      <Box my={8}>
        <Box my={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <AdminPermission stock_status={true} />
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ maxWidth: "800px", flex: 1, m: 1 }}>
            <DepositeBox
              headerContent="قیمت گذاری:"
              footerContent="قیمت قبلی"
              unit="ریال"
              buttonValue="تایید"
              display="flex"
            />
          </Box>
          <Box sx={{ maxWidth: "800px", flex: 1, m: 1 }}>
            <DepositeBox
              headerContent="تغییر میزان موجودی:"
              footerContent="طلای موجود"
              unit="گرم"
              buttonValue="تایید"
              display="flex"
            />
          </Box>
          <Box sx={{ maxWidth: "800px", flex: 1, m: 1 }}>
            <DepositeBox
              headerContent="اختلاف قیمت خرید و فروش:"
              footerContent="اختلاف قیمت فعلی"
              unit="ریال"
              buttonValue="تایید"
              display="flex"
            />
          </Box>
        </Box>
      </Box>
    </Rtl>
  );
};

export default SettingTemp;
