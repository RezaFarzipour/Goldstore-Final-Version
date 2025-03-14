import { Box, Typography } from "@mui/material";
const HomePageDesc = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography
          sx={{
            fontSize: {
              xs: "25px",
              md: "28px",
              color: "#A87715",
              fontFamily: "Yekan",
              fontWeight: "bold",
            },
            mt: {
              xs: "1px",
              sm: "20px",
              md: "130px",
              lg: "130px",
              xl: "115px",
            },
          }}
        >
          طلای تهران
        </Typography>{" "}
        ""
        <Typography
          sx={{
            fontSize: {
              xs: "14px",
              md: "20px",
              color: "#fff",
              fontWeight: "bold",
            },
            mt: {
              xs: "1px",
              sm: "20px",
              md: "130px",
              lg: "130px",
              xl: "130px",
            },
            fontWeight: "bold",
          }}
        >
          طلای خود را از ما بخواهید
        </Typography>
        ""
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: {
              xs: "15px",
              md: "20px",
              color: "#9C9691",
            },
            mt: {
              xs: "10px",
              sm: "2px",
              md: "10px",
              lg: "10px",
              xl: "10px",
            },
            fontWeight: "bold",
          }}
        >
          خرید و فروش طلای آبشده ی خود را در هر ساعت از شبانه روز به طلای تهران
          بسپارید
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePageDesc;
