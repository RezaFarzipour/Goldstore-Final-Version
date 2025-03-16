import { Box, Container, Grid2 } from "@mui/material";
import DirectSignUp from "../../modules/home/DirectSignUpButtonModule";
import HomePageDesc from "../../modules/home/HomepagedescriptionModule";
import { Animate } from "../../modules/home/anim/AnimateModule";
import SteperStep from "../../modules/home/steper/SteperModule";
import Layout from "../../containers/layout/Layout";
import TabPrice from "../../modules/home/tabPrice/TabPrice";
import ArrowBottom from "../../modules/home/anim/ArrowBottom";
import Header from "../../modules/home/Header";

const Homepage: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth="xl">
        <Grid2 my={{ xs: 14, md: 19 }}>
          <Header />
        </Grid2>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "48.5%",
            transform: "translateX(-50%,-50%)",
            mt: 13,
          }}
        >
          <ArrowBottom />
        </Box>
        {/* home description */}
        <Box sx={{ mt: { xs: -12, md: 10 } }} width="100%">
          <HomePageDesc />
          <Box
            sx={{
              width: "100%",
              mt: 5,
            }}
            display="flex"
            justifyContent="center"
          >
            <DirectSignUp />
          </Box>
        </Box>

        {/* tab price section */}
        <Grid2
          container
          sx={{
            my: { xs: 6, md: 12 },
            flexDirection: { xs: "column-reverse", md: "row" },
            "@media (max-width:1116px) and (min-width:900px)": {
              flexDirection: "column",
              display: "grid",
              placeItems: "center",
            },
          }}
        >
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Animate />
          </Grid2>

          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{
              "@media (max-width:1116px) and (min-width:900px)": {
                ml: 12,
              },
              pt: { xs: 0, md: 4 },
            }}
          >
            <TabPrice />
          </Grid2>
        </Grid2>

        <Grid2
          sx={{
            mb: { xs: 30, md: 20 },
            mt: { xs: 25, md: 40 },
            display: "grid",
            placeItems: "center",
          }}
        >
          <SteperStep />
        </Grid2>
      </Container>
    </Layout>
  );
};

export default Homepage;
