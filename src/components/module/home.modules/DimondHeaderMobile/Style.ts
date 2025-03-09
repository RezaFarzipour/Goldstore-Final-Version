import { styled } from "@mui/material";
import { img1 } from "@/Components/DimondHeader/Data";

export const Ul = styled("ul")(({ theme }) => ({
  position: "relative",
  maxWidth: "600px",
  width: "100%",
  height: "150px",
}));

export const Li1 = styled("li")(({ theme }) => ({
  listStyle: "none",
  position: "absolute",
  maxWidth: "160px",
  width: "100%",
  height: "160px",
  transform: "rotate(45deg)",
  transition: ".5s",
  top: 0,
  left: 0,
  margin: "50px",
  overfllow: "hidden",
  backgroundColor: "#1C1B19",
  border: "1px solid  #FFC436",
  "@media (max-width:707px)": {
    left: -30,
  },
  "@media (max-width:618px)": {
    left: -70,
  },
  "@media (max-width:544px)": {
    display: "none",
  },
}));
export const Li2 = styled("li")(({ theme }) => ({
  listStyle: "none",
  position: "absolute",
  maxWidth: "160px",
  width: "100%",
  height: "160px",
  transform: "rotate(45deg)",
  transition: ".5s",
  top: 0,
  left: "45%",
  margin: "-85px",
  overflow: "hidden",
  backgroundColor: "#FFC436",
  "@media (max-width:544px)": {
    left: "40%",
  },
}));
export const Li3 = styled("li")(({ theme }) => ({
  listStyle: "none",
  position: "absolute",
  width: "160px",
  height: "160px",
  transform: "rotate(45deg)",
  transition: ".5s",
  top: 0,
  left: "45%",
  margin: "50px",
  overfllow: "hidden",
  backgroundColor: "#1C1B19",
  border: "1px solid  #FFC436",
  "@media (max-width:544px)": {
    display: "none",
  },
}));

export const Boxin1 = styled("div")(({ theme }) => ({
  transform: "rotate(-45deg)",
  position: "absolute",
  top: "60px",
  right: "40px",
  fontWeight: "bold",
  fontSize: "18px",
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
}));
export const Boxin2 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
}));
export const Boxin3 = styled("div")(({ theme }) => ({
  transform: "rotate(-45deg)",
  position: "absolute",
  top: "60px",
  right: "15px",
  fontWeight: "bold",
  fontSize: "18px",
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
}));
