import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { colors } from "../../../styles/theme";

type NavLinkProps = {
  path: string;
  label: string;
  color: string;
  dimondDisplay: boolean;
};

const NavLink = ({ path, label, color, dimondDisplay }: NavLinkProps) => {
  const isActive = window.location.pathname === path;
  const diamondStyle = {
    width: 20,
    height: 30,
    backgroundColor: colors.gold[100],
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    position: "absolute",
    top: "50%",
    right: "-25px",
    transform: "translateY(-36%)",
    display: isActive ? "block" : "none",
  };

  return (
    <Button
      component={Link}
      to={path}
      variant="text"
      sx={{
        pt: "8px",
        pr: "25px",
        color: isActive ? colors.gold[100] : color,
        fontWeight: "bold",
        position: "relative",

        "&:hover": {
          bgcolor: "transparent",
          color: colors.gold[100],
        },
      }}
    >
      {dimondDisplay && <Box sx={diamondStyle} />}
      <Typography fontWeight="500" noWrap>
        {label}
      </Typography>
      <Box />
    </Button>
  );
};

export default NavLink;
