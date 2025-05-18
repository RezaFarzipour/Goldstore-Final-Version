import { Box, Grid2 } from "@mui/material";
import HomeBoxes from "../../modules/customerDashboard/HomeBoxesModule";
import { getCustomerDashboardHomeData } from "../../../constants/data";
import { walletdata } from "../../../services/customerDashboard";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../element/SectionTitle";

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
        <SectionTitle title="میز کار" />
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
