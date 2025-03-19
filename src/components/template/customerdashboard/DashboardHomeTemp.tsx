import { Box, Grid2, Typography } from "@mui/material";

import { customerDashboardHomeData } from "../../../constants/data";
import { colors } from "../../../styles/theme";


import HomeBoxes from "../../modules/customerDashboard/HomeBoxesModule";

const DashboardHome = () => {
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
          میز کار
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

export default DashboardHome;
