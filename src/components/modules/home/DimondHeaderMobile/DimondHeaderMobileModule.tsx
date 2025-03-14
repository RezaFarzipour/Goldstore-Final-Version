import { Box, styled, useMediaQuery } from "@mui/material";

import React, { useEffect } from "react";
import { whitespace } from "stylis";

const Ul = (fade, ExtraSmall, Small) => {
  const style = {
    position: "relative",
    width: ExtraSmall ? "180px" : Small ? "300px" : "600px",
    height: ExtraSmall ? "190px" : Small ? "210px" : "150px",
    opacity: fade ? 1 : 0,
    transition: fade ? "all 4s ease-in-out" : null,
    mb: 10,
  };
  return style;
};
export const Li0 = (ExtraSmall, Small) => {
  const style = {
    listStyle: "none",
    position: "absolute",
    width: ExtraSmall ? "75px" : Small ? "90px" : "155px",
    height: ExtraSmall ? "75px" : Small ? "90px" : "155px",
    transform: "rotate(45deg)",
    transition: ".5s",
    bottom: "95%",
    left: ExtraSmall ? "-10%" : Small ? "10%" : 0,
    margin: ExtraSmall ? "35px" : Small ? "35px" : "50px",
    overfllow: "hidden",
    backgroundColor: "#1C1B19",
  };
  return style;
};
export const Li1 = (ExtraSmall, Small) => {
  const style = {
    listStyle: "none",
    position: "absolute",
    width: ExtraSmall ? "75px" : Small ? "90px" : "155px",
    height: ExtraSmall ? "75px" : Small ? "90px" : "155px",
    margin: ExtraSmall ? "-25px" : Small ? "-30px" : "-85px",
    transform: "rotate(45deg)",
    bottom: ExtraSmall ? "92%" : Small ? "90%" : "80%",
    left: ExtraSmall ? "-12%" : Small ? "7%" : 0,
    transition: ".5s",
    overfllow: "hidden",
    border: "1px solid  #FFC436",
  };
  return style;
};
export const Li2 = (ExtraSmall, Small) => {
  const style = {
    listStyle: "none",
    position: "absolute",
    width: ExtraSmall ? "75px" : Small ? "90px" : "155px",
    height: ExtraSmall ? "75px" : Small ? "90px" : "155px",
    transform: "rotate(45deg)",
    transition: ".5s",
    top: "-2%",
    left: ExtraSmall ? "-10%" : Small ? "10%" : 0,
    margin: ExtraSmall ? "35px" : Small ? "35px" : "50px",
    overfllow: "hidden",
    backgroundColor: "#1C1B19",
  };
  return style;
};
export const Li3 = (ExtraSmall, Small) => {
  const style = {
    listStyle: "none",
    position: "absolute",
    width: ExtraSmall ? "75px" : Small ? "90px" : "155px",
    height: ExtraSmall ? "75px" : Small ? "90px" : "155px",
    transform: "rotate(45deg)",
    transition: ".5s",
    bottom: ExtraSmall ? "92%" : Small ? "87.5%" : "80%",
    left: ExtraSmall ? "60%" : Small ? "55%" : "45%",
    margin: ExtraSmall ? "-27px" : Small ? "-25px" : "-85px",
    overflow: "hidden",
    border: "1px solid  #FFC436",
  };
  return style;
};
const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT67UWgnzD-aAmzwNvIKAJwzCd2aw26fXMvpQ&usqp=CAU";
const img2 =
  "https://media.khabaronline.ir/d/2022/10/08/3/5752495.jpg?ts=1665208348000";
const Boxin0 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img2})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
}));
const Boxin1 = {
  transform: "rotate(-45deg)",
  position: "absolute",
  top: "30px",
  left: "15px",
  fontWeight: "bold",
  fontSize: "9px",
  color: "#fff",
  textWrap: "nowrap",
  animation: "span4 1.5s ease-in-out infinite alternate",
  "@keyframes span4": {
    "0%": {
      opacity: "0",
    },
    "100%": {
      opacity: "1",
      scale: "1.2",
    },
  },
  textShadow: "0px 2px 18px rgba(255, 196, 54, 1)",
};
const Boxin2 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
}));
const Boxin3 = {
  transform: "rotate(-45deg)",
  position: "absolute",
  top: "30px",
  right: "5px",
  fontWeight: "bold",
  fontSize: "18px",
  fontSize: "9px",
  textWrap: "nowrap",
  color: "#fff",
  animation: "span4 1.5s ease-in-out infinite alternate",
  "@keyframes span4": {
    "0%": {
      opacity: "0",
    },
    "100%": {
      opacity: "1",
      scale: "1.2",
    },
  },
  textShadow: "0px 2px 18px rgba(255, 196, 54, 1)",
};

const DimondHeader = () => {
  const [fade, setFadeOut] = React.useState(false);
  useEffect(() => {
    setFadeOut(true);
  });
  const ExtraSmall = useMediaQuery("(min-width: 200px) and (max-width: 500px)");
  const Small = useMediaQuery("(min-width: 501px) and (max-width: 767px)");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "@media (min-width:700px)": {
          display: "none",
        },
      }}
    >
      <Box sx={Ul(fade, ExtraSmall, Small)}>
        <Box sx={Li0(ExtraSmall, Small)} className="li2">
          <Boxin0></Boxin0>
        </Box>
        <Box sx={Li1(ExtraSmall, Small)} className="li1">
          <Box position={"relative"}>
            <Box sx={Boxin1}>بازار 24 ساعته</Box>
          </Box>
        </Box>
        <Box sx={Li2(ExtraSmall, Small)} className="li2">
          <Boxin2></Boxin2>
        </Box>

        <Box sx={Li3(ExtraSmall, Small)} className="li3">
          <Box position={"relative"}>
            <Box sx={Boxin3}>امکان تحویل فیزیکی</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DimondHeader;
