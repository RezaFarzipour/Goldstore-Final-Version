import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { colors } from "../../styles/theme";
import Logo from "../element/Logo";
import { DrawerItem } from "../../types";
import { useNavigate } from "react-router-dom";
import { Rtl } from "../element/rtl";
import ListBoxElement from "../element/ListBoxElement";

type DashboardDrawerProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  drawerList: DrawerItem[];
};

const DashboardDrawer: React.FC<DashboardDrawerProps> = ({
  open,
  setOpen,
  drawerList,
}) => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleSubmit = (id: number, path: string) => {
    setSelectedIndex(id);
    navigate(path);
  };

  const renderDrawerList = () => (
    <Rtl>
      <Box
        sx={{
          width: 250,
          bgcolor: colors.grey[300],
          height: "100%",
          minHeight: "110%",
        }}
        role="presentation"
      >
        <Box mb={4}>
          <Logo display="" />
        </Box>
        <List>
          {drawerList.map((segment) => (
            <ListItem key={segment.id} disablePadding>
              {segment.children && segment.children.length > 0 ? (
                <ListItemButton>
                  <ListItemText
                    sx={{ color: "white" }}
                    primaryTypographyProps={{ fontSize: "17px" }}
                    primary={
                      <ListBoxElement
                        segment={segment}
                        handleSubmit={handleSubmit}
                        selectedIndex={selectedIndex}
                      />
                    }
                  />
                </ListItemButton>
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
                  <ListItemText
                    sx={{
                      color:
                        segment.id === selectedIndex
                          ? colors.primary[300]
                          : "white",
                    }}
                    primaryTypographyProps={{ fontSize: "17px" }}
                    primary={segment.label}
                  />
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
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
