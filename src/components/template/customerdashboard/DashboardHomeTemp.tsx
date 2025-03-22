import { Box, Grid2, Typography } from "@mui/material";

import { colors } from "../../../styles/theme";

import HomeBoxes from "../../modules/customerDashboard/HomeBoxesModule";
import { getCustomerDashboardHomeData } from "../../../constants/data";
import { walletdata } from "../../../services/customerDashboard";
import { useQuery } from "@tanstack/react-query";

const DashboardHome = () => {
  const {
    data: walletData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["walletdata"],
    queryFn: walletdata,
  });


  const customerDashboardHomeData = getCustomerDashboardHomeData(
    walletData ?? {
      walletBalance: 0,
      goldBalance: 0,
      buyPrice: 0,
      sellPrice: 0,
    }
  );

  if (isLoading) return <p>در حال بارگذاری...</p>;
  if (isError) return <p>خطایی رخ داده است</p>;

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
