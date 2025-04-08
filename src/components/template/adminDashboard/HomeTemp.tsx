import { Box, Grid2, Typography } from "@mui/material";
import HomeBoxes from "../../modules/customerDashboard/HomeBoxesModule";
import { colors } from "../../../styles/theme";
import { getCustomerDashboardHomeData } from "../../../constants/data";


type Props = {};

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
        {getCustomerDashboardHomeData.map((obj) => {
          return <HomeBoxes obj={obj} />;
        })}
      </Grid2>
    </Box>
  );
};

export default HomeTemp;
