import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
//import { DashboardPath } from "./util/DashboarPath";
import { navlinks } from "../../constants/data"; 
import {
  button_text,

  gold_store_name_typo,
  icon_box,
  map_box,
  menu_style,
  profile_button,
  xs_typo,
} from "./navbarstyle"

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
    <AppBar position="static"   sx={{backgroundColor: "#1C1B19"}} >
     
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div" sx={gold_store_name_typo}>
            طلای تهران
          </Typography>

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
              {navlinks.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu} sx={{ pt: 6 }}>
                 <Link to={page.link} style={{ textDecoration: "none" }}>
                 <Typography
                  fontWeight="bold"
                  fontFamily="Yekan"
                  color="#fff"
                 textAlign="center"
                                  >
                   {page.text}
                    </Typography>
                   </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography variant="h5" noWrap component="div" sx={xs_typo}>
            طلای تهران
          </Typography>

          <Box sx={map_box}>
            {navlinks.map((page) => (
              <Button key={page.id}  href={page.link} sx={button_text}>
                {page.text}
              </Button>
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
