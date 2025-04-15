import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

type Props = {};

const ReportsTemp = (props: Props) => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default ReportsTemp;
