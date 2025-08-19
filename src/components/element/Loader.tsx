import animationData from "../../assets/Animation - 1713359636723.json";
import Lottie from "lottie-react";
import { Box, Typography, Grid2 } from "@mui/material";

const Loader = () => {
  return (
    <Grid2
      sx={{
        width: "100%",
        height: "100vh",
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
        background: "#18181b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid2
        width="100%"
        flexDirection="column"
        className="svg-wrapper"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {/* copy svg image and past it here */}
        <Box
          sx={{
            width: {
              xs: "30%",
              md: "12%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Lottie animationData={animationData} />
          <Typography
            sx={{
              fontSize: {
                xs: "15px",
                md: "20px",
                color: "#FFC436",
                fontFamily: "Yekan",
              },
            }}
          >
            طلای تهران{" "}
          </Typography>
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default Loader;
