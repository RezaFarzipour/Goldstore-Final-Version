import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";

type NavLinkProps = {
  path: string;
  label: string;
};

const NavLink = ({ path, label }: NavLinkProps) => {
  const isActive = window.location.pathname === path;

  return (
    <Button
      component={Link}
      to={path}
      variant="text"
      sx={{
        pt: "8px",
        pr: "25px",
        color: isActive ? "#FFC436" : "#fff",
        fontWeight: "bold",
      }}
    >
      <Typography variant="h5" noWrap>
        {label}
      </Typography>
    </Button>
  );
};

export default NavLink;
