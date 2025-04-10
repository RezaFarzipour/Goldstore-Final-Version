import { Box, Grid2, Typography } from "@mui/material";
import HomeBoxes from "../../modules/customerDashboard/HomeBoxesModule";
import { colors } from "../../../styles/theme";
import { getCustomerDashboardHomeData } from "../../../constants/data";

type Props = {};
const customerDashboardHomeData = getCustomerDashboardHomeData({
  walletBalance: 0,
  goldBalance: 0,
  buyPrice: 0,
  sellPrice: 0,
});
const HomeTemp = (props: Props) => {
  return (
    <Box>
      <Box
        sx={{ margin: "auto", display: "block", textAlign: "center", mb: 10 }}
      >
        <Typography
          fontFamily="Yekan"
          variant="h3"
          sx={{
            color: colors.primary[400],
            fontFamily: "IRANYekan",
            fontWeight: "500",
            mt: 4,
          }}
        >
          داشبورد
        </Typography>
      </Box>

      <Grid2 container>
        {customerDashboardHomeData.map((obj) => {
          return <HomeBoxes obj={obj} />;
        })}
      </Grid2>
    </Box>
  );
};

export default HomeTemp;
