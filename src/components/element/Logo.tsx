import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { colors } from "../../styles/theme";

type Props = {
  display: string;
};

const Logo = ({ display }: Props) => {
  return (
    <Link
      to="/"
      style={{
        color: "white",
        paddingRight: "8px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", p: { xs: 0, } }}>
        <img
          src={logo}
          alt="Description of the image"
          style={{ width: "30px", height: "auto", marginLeft: "6px" }}
        />

        <Typography
          sx={{
            display: {
              xs: display,
              md: "flex",
              fontSize: "20px",
              color: colors.gold[100],
              fontWeight: "bold",
            },
          }}
        >
          طلای تهران
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;
