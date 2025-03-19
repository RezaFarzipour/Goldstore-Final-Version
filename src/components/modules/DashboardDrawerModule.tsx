import * as React from "react";
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

type DashboardDrawerprops = {
  open: boolean;
  setOpen: (open: boolean) => void;
  drawerList: Array<DrawerItem>;
};
export default function DashboardDrawer({
  open,
  setOpen,
  drawerList,
}: DashboardDrawerprops) {
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const navigate = useNavigate();

  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const handleSubmit = (index: number, path: string) => {
    setSelectedIndex(index);
    navigate(path);
  };

  const DrawerList = (
    <Rtl>
      <Box
        sx={{ width: 250, bgcolor: colors.grey[300], height: "100%" }}
        role="presentation"
      >
        <Box mb={4}>
          <Logo display="" />
        </Box>
        <List>
          {drawerList.map((text, index) => (
            <ListItem key={text.id} disablePadding>
              <ListItemButton
                onClick={() => handleSubmit(index, text.path)}
                sx={{
                  borderBottom: `2px solid ${colors.primary[100]} `,
                  ":hover": { bgcolor: colors.gold[100] },
                  bgcolor:
                    index === selectedIndex ? colors.gold[100] : "transparent",
                }}
              >
                <ListItemText
                  sx={{
                    color:
                      index === selectedIndex ? colors.primary[300] : "white",
                  }}
                  primaryTypographyProps={{
                    fontSize: "17px",
                  }}
                  primary={text.label}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Rtl>
  );

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}
