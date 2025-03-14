import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { IconButton, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navlinks } from "../../../constants/data";
import NavLink from "./NavLink";
import { colors } from "../../../styles/theme";
import Logo from "../Logo";
import CloseIcon from "@mui/icons-material/Close";
import EnterBtn from "./EnterBtn";

export default function DrawerElement() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ right: open });
    };

  const list = () => (
    <Box
      sx={{ width: 250, bgcolor: colors.grey[300], height: "100vh" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        py={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo display="flex" />
        <IconButton
          aria-label="close"
          sx={{
            color: colors.grey[900],
            "&:hover": {
              backgroundColor: "action.hover",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: colors.grey[400] }} />
      <List sx={{ pt: 5 }}>
        {navlinks.map((navLink) => (
          <MenuItem
            key={navLink.id}
            sx={{
              "&:hover": {
                bgcolor: "transparent",
                color: colors.gold[100],
              },
            }}
          >
            <NavLink
              path={navLink.path}
              label={navLink.label}
              color={colors.grey[900]}
              dimondDisplay={true}
            />
          </MenuItem>
        ))}
      </List>
      <Box
        sx={{
          position: "absolute",
          bottom: 15,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <EnterBtn px={6} />
      </Box>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer(true)}
        color="inherit"
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
