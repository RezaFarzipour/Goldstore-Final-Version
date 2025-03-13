import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { button_text, icon_box, map_box, menu_style, xs_typo } from "./style";
import { navlinks } from "../../../constants/data";
import logo from "../../../assets/images/logo.png";
import NavLink from "../../element/NavLink";

interface NavBarProps {
  image?: string;
  dashboard?: string;
}

const NavBar: React.FC<NavBarProps> = ({ dashboard }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1C1B19" }}>
      <Toolbar disableGutters>
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <img
            src={logo}
            alt="Description of the image"
            style={{ width: "50px", height: "auto" }}
          />
          <Link
            to="/"
            style={{
              color: "white",
              paddingRight: "8px",
              fontSize: "26px",
            }}
          >
            طلای تهران
          </Link>
        </Box>

        <Box sx={icon_box}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={menu_style}
          >
            {navlinks.map((navLink) => (
              <MenuItem
                key={navLink.id}
                onClick={handleCloseNavMenu}
                sx={{ pt: 6 }}
              >
                <NavLink path={navLink.path} label={navLink.label} />
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Typography variant="h5" noWrap component="div" sx={xs_typo}>
          طلای تهران
        </Typography>

        <Box sx={map_box}>
          {navlinks.map((navLink) => (
            <NavLink path={navLink.path} label={navLink.label} />
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="ثبت نام">
            {/* <Link to={dashboard === "200" ? DashboardPath() : "/SignUp"}  >
                <Button sx={profile_button}>{dashboard === "200" ? "پروفایل" : "ورود | ثبت نام"}</Button>
              </Link> */}
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
