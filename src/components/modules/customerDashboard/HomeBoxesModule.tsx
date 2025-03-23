import { Box, Button, Grid2, Paper, Typography } from "@mui/material";
import React from "react";
import { priceSeptrator } from "../../../utils/numberFormatter";
import {
  buttononeSx,
  PaperOneSx,
} from "../../template/customerdashboard/style";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../styles/theme";
import { customerDashboardDataType } from "../../../types";


const HomeBoxes = ({
  obj,
}: {
  obj: customerDashboardDataType;
}) => {
  const navigate = useNavigate();


  

  return (
    <Grid2
      size={{ xs: 12, md: 6, lg: 3 }}
      key={obj.id}
      sx={{
        pl: 1,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        m: "auto",
        alignItem: "center",
      }}
    >
      <Paper sx={PaperOneSx}>
        <Box>
          <Typography sx={{ color: colors.primary[400] }}>
            {obj.title} :
          </Typography>
          <Typography sx={{ color: colors.grey[800] }}>
            {obj.subtitle}
          </Typography>
        </Box>
        <Typography
          sx={{ color: colors.primary[400], textAlign: "end", py: 3 }}
          variant="h5"
        >
          {priceSeptrator(obj.price??0)} &nbsp;{obj.unit}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => navigate(obj.path ?? "/")}
            sx={buttononeSx(obj.btnColor, obj.displayBtn)}
            variant="contained"
          >
            {obj.btn}
          </Button>
        </Box>
      </Paper>
    </Grid2>
  );
};

export default HomeBoxes;
