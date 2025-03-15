import React from "react";
import { AppBar, Tabs, Tab, Typography, Box, Paper } from "@mui/material";
import Rtl from "../../../element/rtl";
import DiamondIcon from "@mui/icons-material/Diamond";
import {
  BuyTypo,
  PaperBox,
  PaperBox2,
  RialBox,
  RialTypo,
  SellBox,
  SellRial,
  SellTypo,
  TabItem,
  TabItem2,
  TabPaper,
  TabPricePaper,
  TabsItem,
} from "./style";
import TabsInputs from "./TabsInputs";

const TabPrice = () => {
  const [value, setValue] = React.useState(0);
  const [textFieldValue, setTextFieldValue] = React.useState<string | number>(
    0
  );
  const [goldTextField, setGoldTextField] = React.useState<string | number>(0);
  const [colorTab, setColorTab] = React.useState(false);

  // Handle tab change
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Reset fields and switch tabs
  const handleTabClick = (isSell: boolean) => {
    setGoldTextField(0);
    setTextFieldValue(0);
    setColorTab(isSell);
  };

  // Form input handlers
  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextFieldValue(event.target.value);
  };

  const handleGoldTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGoldTextField(event.target.value);
  };

  // Accessibility props for tabs
  const a11yProps = (index: number) => ({
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  });

  // Extracted form component

  return (
    <Paper sx={TabPricePaper}>
      {/* Top Section: Buy/Sell Prices */}
      <Box sx={PaperBox}>
        <Box>
          <Typography sx={BuyTypo}>قیمت خرید</Typography>
          <Box sx={RialBox}>
            {textFieldValue || 0}
            <Typography sx={RialTypo}>ریال</Typography>
          </Box>
        </Box>
        <DiamondIcon
          sx={{
            color: "#FFC436",
            fontSize: "50px",
          }}
        />
        <Box>
          <Typography sx={SellTypo}>قیمت فروش</Typography>
          <Box sx={SellBox}>
            {goldTextField || 0}
            <Typography sx={SellRial}>ریال</Typography>
          </Box>
        </Box>
      </Box>

      {/* Tabs and Forms */}
      <Box sx={PaperBox2}>
        <Paper elevation={10} sx={TabPaper}>
          <AppBar position="static" sx={{ borderRadius: "10px" }}>
            <Tabs
              sx={TabsItem}
              value={value}
              onChange={handleChange}
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab
                sx={TabItem(colorTab)}
                onClick={() => handleTabClick(false)}
                label="خرید"
                {...a11yProps(0)}
              />
              <Tab
                sx={TabItem2(colorTab)}
                onClick={() => handleTabClick(true)}
                label="فروش"
                {...a11yProps(1)}
              />
            </Tabs>
          </AppBar>

          <Rtl>
            {/* Total Value Form */}
            <TabsInputs
              label="ارزش کل"
              value={textFieldValue}
              onChange={handleTextFieldChange}
              adornmentText="ریال"
            />

            {/* Gold Amount Form */}
            <TabsInputs
              label="مقدار طلا"
              value={goldTextField}
              onChange={handleGoldTextFieldChange}
              adornmentText="گرم"
            />
          </Rtl>
        </Paper>
      </Box>
    </Paper>
  );
};

export default TabPrice;
