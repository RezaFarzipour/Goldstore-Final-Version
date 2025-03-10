import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import contactusImage from "../../assets/images/images.png";

const ContactUsPage = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography
          fontWeight="bold"
          color="#FFC436"
          fontFamily="Lalazar"
          mr={4}
          mt={5}
          sx={{
            fontSize: { xs: "25px", md: "35px" },
            display: { xs: "none", md: "flex" },
          }}
        >
          ارتباط با طلای تهران
        </Typography>
      </Box>

      <Grid2 container display="flex" justifyContent="center">
        <Grid2
          sx={{
            border: "1px solid #2B2926",
            borderRadius: "60px",
            backgroundColor: "#2B2926",
            width: "80%",
            padding: "20px",
          }}
          container
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          mt={13}
          mb={15}
        >
          <Box>
            <img
              style={{ borderRadius: "40px" }}
              width={250}
              src={contactusImage}
            />
          </Box>

          <Box>
            <Box mb={1} mt={1} display="flex" alignItems="center">
              <span>
                <PhoneEnabledIcon sx={{ color: "#FFC436", ml: 2, mt: 1 }} />
              </span>
              <Typography fontFamily="Yekan" color="#fff" variant="h6">
                09126411239
              </Typography>
            </Box>

            <Box mb={1} mt={1} display="flex" alignItems="center">
              <span>
                <AccessTimeIcon sx={{ color: "#FFC436", ml: 2, mt: 1 }} />
              </span>
              <Typography fontFamily="Yekan" color="#fff" variant="h6">
                در این فیلد زمان باز و بسته بودن مغازه و ساعات کاری درج خواهد شد
              </Typography>
            </Box>

            <Box display="flex" mt={2}>
              <span>
                <LocationOnIcon sx={{ color: "#FFC436", ml: 2, mt: 1 }} />
              </span>
              <Typography fontFamily="Yekan" color="#fff" variant="h6">
                زنجان.اسلام آباد.جنب بانک سپه.طلای تهران
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ContactUsPage;
