import { Box, Container, Grid2 } from "@mui/material";
import DirectSignUp from "../../module/home/DirectSignUpButton.module";
import HomePageDesc from "../../module/home/Homepagedescription.module";
import { Animate } from "../../module/home/anim/Animate.module";
import SteperStep from "../../module/home/steper/Steper.module";
import Layout from "../../containers/layout/Layout";

const Homepage: React.FC = () => {
  return (
    <Layout>
      <Container maxWidth="xl">
        {/* diamond header section */}
        <Grid2 ml={10} mt={19} size={{ xs: 12 }}>
          {/* <DimondHeader /> */}
          {/* <DiamonHeaderMobile /> */}
        </Grid2>

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
            {/* <TabPrice tabPrice={tabPrice} /> */}
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
