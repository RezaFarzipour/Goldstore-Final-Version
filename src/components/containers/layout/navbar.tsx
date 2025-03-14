import React, { useState, useEffect } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { map_box } from "./style";
import { navlinks } from "../../../constants/data";
import NavLink from "../../element/navbar/NavLink";
import { colors } from "../../../styles/theme";
import DrawerElement from "../../element/navbar/DrawerElement";
import Logo from "../../element/Logo";
import EnterBtn from "../../element/navbar/EnterBtn";

interface NavBarProps {
  image?: string;
}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        // اگر اسکرول بیشتر از 50 پیکسل باشد و به سمت پایین حرکت کند
        setIsScrolled(true);
      } else if (currentScrollY <= 50 || currentScrollY < lastScrollY) {
        // اگر اسکرول کمتر از 50 پیکسل باشد یا به سمت بالا حرکت کند
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY); // ذخیره آخرین موقعیت اسکرول
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "80%",
        left: "10%",
        right: "10%",
        borderRadius: "8px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: isScrolled ? "translateY(-100%)" : "translateY(0)",
        boxShadow: isScrolled ? 0 : 3,
        bgcolor: colors.grey[200],
      }}
    >
      <Toolbar disableGutters>
        <DrawerElement />
        <Logo display="none" />
        <Box sx={map_box}>
          {navlinks.map((navLink) => (
            <NavLink
              key={navLink.id}
              path={navLink.path}
              label={navLink.label}
              color={colors.grey[900]}
              dimondDisplay={false}
            />
          ))}
        </Box>

        <Box sx={{ pl: 2, position: "absolute", left: 0 }}>
          <EnterBtn />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
