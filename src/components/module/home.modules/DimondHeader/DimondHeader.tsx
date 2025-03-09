import { Box, Grid, styled, useMediaQuery } from "@mui/material";

import React, { useEffect, useState } from "react";
import ArrowBottom from "../ArrowBottom/ArrowBottom";
import {
  Boxin1,
  Boxin2,
  Boxin3,
  Boxin4,
  Boxin5,
  Boxin6,
  Boxin7,
  BoxOneSx,
  Li1,
  Li2,
  Li3,
  Li4,
  Li5,
  Ul,
} from "@/Components/DimondHeader/Style";

const DimondHeader = () => {
  const [fade, setFadeOut] = React.useState(false);
  useEffect(() => {
    setFadeOut(true);
  });
  const ExtraSmall = useMediaQuery("(min-width: 200px) and (max-width: 500px)");
  const Small = useMediaQuery("(min-width: 501px) and (max-width: 767px)");
  const Medium = useMediaQuery("(min-width: 768px) and (max-width: 991px)");
  const Large = useMediaQuery("(min-width: 992px) and (max-width: 1021px)");
  const ExtraLarge = useMediaQuery(
    "(min-width: 1366px) and (max-width: 1600px) "
  );
  const XXLarge = useMediaQuery("(min-width: 1600px) and (max-width: 2000px) ");
  return (
    <Box sx={BoxOneSx}>
      <Grid
        sx={Ul(fade, ExtraSmall, Small, Medium, Large, ExtraLarge, XXLarge)}
      >
        <Box
          sx={Li1(ExtraSmall, Small, Medium, Large, ExtraLarge, XXLarge)}
          className="li1"
        >
          <Boxin1></Boxin1>
        </Box>
        <Grid sx={{}}>
          <ArrowBottom />
        </Grid>
        <Box
          sx={Li2(ExtraSmall, Small, Medium, Large, ExtraLarge, XXLarge)}
          className="li2"
        >
          <Box position={"relative"}>
            <Box sx={Boxin2}>بازار 24 ساعته</Box>
          </Box>
        </Box>
        <Box
          sx={Li3(ExtraSmall, Small, Medium, Large, ExtraLarge, XXLarge)}
          className="li3"
        >
          <Boxin3></Boxin3>
        </Box>
        <Box
          sx={Li4(ExtraSmall, Small, Medium, Large, ExtraLarge, XXLarge)}
          className="li4"
        >
          <Box position={"relative"}>
            <Box sx={Boxin4}>امکان تحویل فیزیکی</Box>
          </Box>
        </Box>
        <Box
          sx={Li5(ExtraSmall, Small, Medium, Large, ExtraLarge, XXLarge)}
          className="li5"
        >
          <Boxin5></Boxin5>
        </Box>
      </Grid>
    </Box>
  );
};

export default DimondHeader;
