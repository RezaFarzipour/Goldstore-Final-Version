import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { colors } from "../../styles/theme";
import Logo from "../element/Logo";

import { Link, useNavigate } from "react-router-dom";
import { Rtl } from "../element/Rtl";
import { Button, Typography } from "@mui/material";
import ListBoxElement from "../element/ListBoxElement";
import { deleteCookie, getCookie } from "../../utils/cookie";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import EditIcon from "@mui/icons-material/Edit";
import { DrawerItem } from "../../types";
type DashboardDrawerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  drawerList: DrawerItem[];
  data?: {
    first_name: string;
    last_name: string;
  };
};

const DashboardDrawer: React.FC<DashboardDrawerProps> = ({
  open,
  setOpen,
  drawerList,
  data,
}) => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [cMinHeight, setCMinHeight] = React.useState<boolean>(false);
  const userType: string | null = getCookie("user_type");

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleSubmit = (id: number, path: string) => {
    setSelectedIndex(id);
    navigate(path);
  };
  const handleLogout = () => {
    deleteCookie("phone-number");
    deleteCookie("token");
    deleteCookie("user_type");
    navigate("/");
  };

  const renderDrawerList = () => (
    <Rtl>
      <Box
        sx={{
          width: 250,
          bgcolor: colors.grey[300],
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        role="presentation"
      >
        <Box>
          <Box pb={1} ml={2}>
            <Logo display="" />
          </Box>
          <List>
            {drawerList.map((segment) => (
              <ListItem key={segment.id} disablePadding>
                {segment.children && segment.children.length > 0 ? (
                  <ListItemText
                    sx={{ color: "white" }}
                    primaryTypographyProps={{ fontSize: "17px" }}
                    primary={
                      <ListBoxElement
                        segment={segment}
                        handleSubmit={handleSubmit}
                        selectedIndex={selectedIndex}
                        cMinHeight={cMinHeight}
                        setCMinHeight={setCMinHeight}
                      />
                    }
                  />
                ) : (
                  <ListItemButton
                    onClick={() => handleSubmit(segment.id, segment.path)}
                    sx={{
                      ":hover": { bgcolor: colors.gold[100] },
                      bgcolor:
                        segment.id === selectedIndex
                          ? colors.gold[100]
                          : "transparent",
                    }}
                  >
                    <Box
                      sx={{
                        color:
                          segment.id === selectedIndex
                            ? colors.primary[300]
                            : "white",
                      }}
                      display={"flex"}
                      alignItems={"center"}
                      gap={2}
                    >
                      {segment.icon}
                      <ListItemText
                        primaryTypographyProps={{ fontSize: "14px" }}
                        primary={segment.label}
                      />
                    </Box>
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>

          {/* Logout Button */}
          <Box sx={{ px: 2, pb: 3 }}>
            <Button
              fullWidth
              startIcon={<ExitToAppIcon />}
              onClick={handleLogout}
              sx={{
                color: "#d3564dff",
                fontWeight: 400,
                fontSize: "17px",
                ":hover": {
                  color: "#f44336", // red
                  "& svg": {
                    color: "#f44336",
                  },
                },
                justifyContent: "flex-start",
              }}
            >
              خروج
            </Button>
          </Box>
        </Box>
        {userType === "customer" && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              my: 2,
            }}
          >
            <Typography
              sx={{ color: "#ddd", fontWeight: "semibold", fontSize: "16px" }}
              className="text-secondary-800 text-sm font-bold"
            >
              {data
                ? `${data.first_name} ${data.last_name}`
                : "نام و نام خانوادگی"}
            </Typography>
            <Link to={"/customerdashboard/edit-profile"}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 2.2,
                  cursor: "pointer",
                }}
              >
                <EditIcon sx={{ color: "white", fontSize: 17 }} />
              </Box>
            </Link>
          </Box>
        )}
      </Box>
    </Rtl>
  );

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      {renderDrawerList()}
    </Drawer>
  );
};

export default DashboardDrawer;
