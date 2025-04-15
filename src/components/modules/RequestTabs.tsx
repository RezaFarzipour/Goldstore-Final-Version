import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Paper } from "@mui/material";
import { colors } from "../../styles/theme";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// کامپوننت برای نمایش محتوای هر تب
const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

// کامپوننت اصلی تب‌ها
interface RequestTabsProps {
  approvedRequests: React.ReactNode; // محتوای تب "درخواست‌های تایید شده"
  allRequests: React.ReactNode; // محتوای تب "همه درخواست‌ها"
}

const RequestTabs = ({ approvedRequests, allRequests }: RequestTabsProps) => {
  const [value, setValue] = useState(0);

  // تابع برای تغییر تب
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", borderRadius: "10px", bgcolor: colors.gold[200] }}
    >
      {/* تب‌ها */}
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          "& .MuiTabs-flexContainer": {
            justifyContent: "center",
          },
          "& .css-s81ve1-MuiTabs-indicator": {
            bgcolor: colors.gold[100],
          },
        }}
      >
        <Tab
          sx={{ color: "#efefef!important" }}
          label="درخواست‌های تایید نشده"
        />
        <Tab sx={{ color: "#efefef!important" }} label="همه درخواست‌ها" />
      </Tabs>

      {/* محتوای تب‌ها */}
      <TabPanel value={value} index={0}>
        {approvedRequests}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {allRequests}
      </TabPanel>
    </Box>
  );
};

export default RequestTabs;
