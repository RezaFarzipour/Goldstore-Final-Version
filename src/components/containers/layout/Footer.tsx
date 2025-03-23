import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import {
  Footer_Grid,
  Gridstyle,
  footerIconStyles,
  footer_link,
  hr_style,
  made_by_adlikara_typo,
  navlinks,
} from "./style";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { footerdata } from "../../../constants/data";

const Footer = () => {
  return (
    <Grid sx={Footer_Grid}>
      {/* Footer Links */}
      <Grid
        container
        size={{ xs: 12, sm: 6 }}
        display="flex"
        flexWrap="wrap"
        justifyContent={{ xs: "center", sm: "space-around" }}
        alignItems="center"
        mt={4}
      >
        {footerdata.footerlinks1
          .concat(footerdata.footerlinks2)
          .map((item, index) => (
            <Grid
              size={{ xs: 12, sm: 6 }}
              key={index}
              sx={Gridstyle}
              textAlign="center"
            >
              <Box mb={2}>
                <Link to={item.href} style={footer_link}>
                  <Button sx={navlinks}>{item.text}</Button>
                </Link>
              </Box>
            </Grid>
          ))}
      </Grid>

      {/* Contact Info */}
      <Grid
        container
        size={{ xs: 12, sm: 6 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        my={4}
      >
        {footerdata.footerContactInfo.map((info, index) => (
          <Typography
            key={index}
           
            color="white"
            fontSize={20}
         
            textAlign="center"
            sx={{ whiteSpace: "nowrap", mb: 1 }}
          >
            {info.label} : {info.text}
          </Typography>
        ))}
        <Box mt={1} display="flex" alignItems="center">
          <TelegramIcon sx={footerIconStyles("skyblue")} />
          <WhatsAppIcon sx={footerIconStyles("green")} />
          <InstagramIcon sx={footerIconStyles("red")} />
        </Box>
      </Grid>

      <hr style={hr_style} />
      <Typography sx={made_by_adlikara_typo} textAlign="center">
        ساخته شده توسط آدلی کارا
      </Typography>
    </Grid>
  );
};

export default Footer;
