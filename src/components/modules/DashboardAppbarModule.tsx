import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { menuButtonStyle, navbar } from "../containers/style";
import { Button } from "@mui/material";

type DashboardAppbarProps = {
  setOpen: (open: boolean) => void;
};
export default function DashboardAppbar({ setOpen }: DashboardAppbarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={navbar}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Button
              onClick={() => setOpen(true)}
              sx={menuButtonStyle}
              variant="contained"
              
            >
              منو
            </Button>
          </IconButton>

          <div>
            <IconButton color="inherit">
              <AccountCircle sx={{ fontSize: "30px" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
