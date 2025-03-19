import { AppBar, Tab, Tabs } from "@mui/material";
import React from "react";
import { TransactionTap } from "../template/customerdashboard/style";
import { colors } from "../../styles/theme";

const WidthrawDepositTableHeader = ({
  value,
  setValue,
}: {
  value: number;
  setValue: (value: number) => void;
}) => {
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" sx={{ borderRadius: "10px 10px 0 0 " }}>
      <Tabs
        sx={TransactionTap}
        value={value}
        onChange={handleChange}
        indicatorColor={colors.gold[300]}
        textColor="inherit"
        variant="fullWidth"
      >
        <Tab label="واریز" {...a11yProps(0)} />
        <Tab label="برداشت" {...a11yProps(1)} />
      </Tabs>
    </AppBar>
  );
};

export default WidthrawDepositTableHeader;
