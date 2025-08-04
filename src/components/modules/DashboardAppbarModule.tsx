import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { menuButtonStyle, navbar } from "../containers/style";
import { Button, Typography } from "@mui/material";


type DashboardAppbarProps = {
  setOpen: (open: boolean) => void;
  data?: {
    first_name: string;
    last_name: string;
  };
};
export default function DashboardAppbar({
  setOpen,
  data,
}: DashboardAppbarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={navbar}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={() => setOpen(true)}
            sx={menuButtonStyle}
            variant="contained"
          >
            منو
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "#fff" }}>
            {data ? `${data.first_name} ${data.last_name}` : "کاربر"}
            </Typography>
            <IconButton color="inherit">
              <AccountCircle sx={{ fontSize: "30px" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
