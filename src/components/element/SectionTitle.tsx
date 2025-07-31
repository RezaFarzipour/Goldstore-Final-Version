import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../../styles/theme";

interface SectionTitleProps {
  title: string; // تعریف نوع داده برای عنوان
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        mt:5,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0",
      }}
    >
      {/* عنوان اصلی */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#1119",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>

      {/* خط  پایین عنوان */}
      <Box
        sx={{
          width: "80px",
          height: "2px",
          bgcolor: colors.gold[200],
          marginTop: "10px",
        }}
      />
    </Box>
  );
};

export default SectionTitle;
