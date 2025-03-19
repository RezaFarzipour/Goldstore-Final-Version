import React from "react";
import DashboardAppbar from "../modules/DashboardAppbarModule";
import DashboardDrawer from "../modules/DashboardDrawerModule";
import { Box } from "@mui/material";
import { svgcontainer } from "./style";
import { DrawerItem } from "../../types";

interface childrenPropstype {
  children: React.ReactNode;
  drawerList: Array<DrawerItem>;
}

const DashboardLayout = ({ children, drawerList }: childrenPropstype) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={svgcontainer}>
      <DashboardAppbar setOpen={setOpen} />
      <DashboardDrawer open={open} setOpen={setOpen} drawerList={drawerList} />
      {children}
    </Box>
  );
};

export default DashboardLayout;
