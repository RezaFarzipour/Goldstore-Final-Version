import { Box, Container, Grid2 } from "@mui/material";
import React from "react";
import Home_page_desc from "../../module/home.modules/homepagedescription.module";
import Direct_Sign_up from "../../module/home.modules/directSignUpButton";
import { Animate } from "../../module/home.modules/Anime/Animate";
import SteperStep from "../../module/home.modules/steper/Steper.module";
import Layout from "../../layout";
// import DimondHeader from '../../module/DimondHeader/DimondHeader'
// import DiamonHeaderMobile from '../../module/DimondHeaderMobile/DimondHeaderMobile'
const Homepage = () => {
  return (
    <Layout>
      <Container maxWidth="xl">
        {/* diamon header section */}
        <Grid2 ml={10} mt={19} size={{ xs: 12 }}>
          {/* <DimondHeader />
          <DiamonHeaderMobile /> */}
        </Grid2>

        {/* home description */}
        <Box sx={{ mt: { xs: -12, md: 10 } }} width="100%">
          <Home_page_desc />
          <Box
            sx={{
              width: "100%",
              mt: 5,
            }}
            display="flex"
            justifyContent="center"
          >
            <Direct_Sign_up />
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
