import React from "react";
import DashboardAppbar from "../modules/DashboardAppbarModule";
import DashboardDrawer from "../modules/DashboardDrawerModule";
import { Box } from "@mui/material";
import { svgcontainer } from "./style";
import { DrawerItem } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { GetUserData } from "../../services/customerDashboard";

interface childrenPropstype {
  children: React.ReactNode;
  drawerList: Array<DrawerItem>;
}

const DashboardLayout = ({ children, drawerList }: childrenPropstype) => {
  const [open, setOpen] = React.useState(false);

  const { data } = useQuery({
    queryKey: ["usersInfo"],
    queryFn: GetUserData,
    staleTime: 0,
    refetchOnMount: true,
  });
  return (
    <Box sx={svgcontainer}>
      <DashboardAppbar data={data?.data} setOpen={setOpen} />
      <DashboardDrawer
        data={data?.data}
        open={open}
        setOpen={setOpen}
        drawerList={drawerList}
      />
      {children}
    </Box>
  );
};

export default DashboardLayout;
