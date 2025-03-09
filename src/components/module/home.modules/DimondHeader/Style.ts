import { styled } from "@mui/material/styles";
import { img1, img2, img3 } from "@/Components/DimondHeader/Data";

export const Ul = (
  fade,
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
  XXLarge
) => {
  const style = {
    position: "relative",
    width: ExtraSmall
      ? "500px"
      : Small
      ? "550px"
      : Medium
      ? "500px"
      : Large
      ? "540px"
      : ExtraLarge
      ? "560px"
      : XXLarge
      ? "600px"
      : "600px",
    height: ExtraSmall
      ? "190px"
      : Small
      ? "210px"
      : Medium
      ? "250px"
      : Large
      ? "250px"
      : ExtraLarge
      ? "200px"
      : XXLarge
      ? "240px"
      : "150px",
    opacity: fade ? 1 : 0,
    transition: fade ? "all 4s ease-in-out" : null,
    ml: { xs: 0, sm: 8, md: 0, lg: 2, xl: 0 },
  };
  return style;
};
export const Li1 = (ExtraSmall, Small, Medium, Large, ExtraLarge, XXLarge) => {
  const style = {
    listStyle: "none",
    position: "absolute",
    width: ExtraSmall
      ? "60px"
      : Small
      ? "70px"
      : Medium
      ? "90px"
      : Large
      ? "120px"
      : ExtraLarge
      ? "140px"
      : XXLarge
      ? "160px"
      : "155px",
    height: ExtraSmall
      ? "60px"
      : Small
      ? "70px"
      : Medium
      ? "90px"
      : Large
      ? "120px"
      : ExtraLarge
      ? "140px"
      : XXLarge
      ? "160px"
      : "155px",
    margin: ExtraSmall
      ? "-25px"
      : Small
      ? "-30px"
      : Medium
      ? "-35px"
      : Large
      ? "-55px"
      : ExtraLarge
      ? "-65px"
      : XXLarge
      ? "-85px"
      : "-85px",
    transform: "rotate(45deg)",
    top: 0,
    left: ExtraSmall
      ? "-12%"
      : Small
      ? "10%"
      : Medium
      ? "2.5%"
      : Large
      ? 0
      : ExtraLarge
      ? 0
      : XXLarge
      ? 0
      : 0,
    transition: ".5s",
    overfllow: "hidden",
    backgroundColor: "#FFC436",
  };
  return style;
};
export const Li2 = (ExtraSmall, Small, Medium, Large, ExtraLarge, XXLarge) => {
  const style = {
    listStyle: "none",
    position: "absolute",
    width: ExtraSmall
      ? "60px"
      : Small
      ? "70px"
      : Medium
      ? "90px"
      : Large
      ? "120px"
      : ExtraLarge
      ? "140px"
      : XXLarge
      ? "160px"
      : "155px",
    height: ExtraSmall
      ? "60px"
      : Small
      ? "70px"
      : Medium
      ? "90px"
      : Large
      ? "120px"
      : ExtraLarge
      ? "140px"
      : XXLarge
      ? "160px"
      : "155px",
    transform: "rotate(45deg)",
    transition: ".5s",
    top: 0,
    left: ExtraSmall
      ? "-10%"
      : Small
      ? "10%"
      : Medium
      ? "2%"
      : Large
      ? 0
      : ExtraLarge
      ? 0
      : XXLarge
      ? 0
      : 0,
    margin: ExtraSmall
      ? "35px"
      : Small
      ? "35px"
      : Medium
      ? "50px"
      : Large
      ? "50px"
      : ExtraLarge
      ? "50px"
      : XXLarge
      ? "50px"
      : "50px",
    overfllow: "hidden",
    backgroundColor: "#1C1B19",
    border: "1px solid  #FFC436",
  };
  return style;
};
export const Li3 = (ExtraSmall, Small, Medium, Large, ExtraLarge, XXLarge) => {
  const style = {
    listStyle: "none",
    position: "absolute",
    width: ExtraSmall
      ? "60px"
      : Small
      ? "70px"
      : Medium
      ? "90px"
      : Large
      ? "120px"
      : ExtraLarge
      ? "140px"
      : XXLarge
      ? "160px"
      : "155px",
    height: ExtraSmall
      ? "60px"
      : Small
      ? "70px"
      : Medium
      ? "90px"
      : Large
      ? "120px"
      : ExtraLarge
      ? "140px"
      : XXLarge
      ? "160px"
      : "155px",
    transform: "rotate(45deg)",
    transition: ".5s",
    top: 0,
    left: ExtraSmall
      ? "35%"
      : Small
      ? "34%"
      : Medium
      ? "34%"
      : Large
      ? "38%"
      : ExtraLarge
      ? "39%"
      : XXLarge
      ? "45%"
      : "45%",
    margin: ExtraSmall
      ? "-27px"
      : Small
      ? "-25px"
      : Medium
      ? "-32px"
      : Large
      ? "-55px"
      : ExtraLarge
      ? "-63px"
      : XXLarge
      ? "-85px"
      : "-85px",
    overflow: "hidden",
    backgroundColor: "#FFC436",
  };
  return style;
};
export const Li4 = (ExtraSmall, Small, Medium, Large, ExtraLarge, XXLarge) => {
  const style = {
    listStyle: "none",
    position: "absolute",
    width: ExtraSmall
      ? "60px"
      : Small
      ? "70px"
      : Medium
      ? "90px"
      : Large
      ? "120px"
      : ExtraLarge
      ? "140px"
      : XXLarge
      ? "160px"
      : "155px",
    height: ExtraSmall
      ? "60px"
      : Small
      ? "70px"
      : Medium
      ? "90px"
      : Large
      ? "120px"
      : ExtraLarge
      ? "140px"
      : XXLarge
      ? "160px"
      : "155px",
    transform: "rotate(45deg)",
    transition: ".5s",
    top: 0,
    left: ExtraSmall
      ? "35%"
      : Small
      ? "35%"
      : Medium
      ? "35%"
      : Large
      ? "40%"
      : ExtraLarge
      ? "40%"
      : XXLarge
      ? "47%"
      : "47%",
    margin: ExtraSmall
      ? "34px"
      : Small
      ? "35px"
      : Medium
      ? "50px"
      : Large
      ? "50px"
      : ExtraLarge
      ? "50px"
      : XXLarge
      ? "45px"
      : "46px",
    overfllow: "hidden",
    backgroundColor: "#1C1B19",
    border: "1px solid  #FFC436",
  };
  return style;
};
export const Li5 = (ExtraSmall, Small, Medium, Large, ExtraLarge, XXLarge) => {
  const style = {
    listStyle: "none",
    position: "absolute",
    width: ExtraSmall
      ? "60px"
      : Small
      ? "70px"
      : Medium
      ? "90px"
      : Large
      ? "120px"
      : ExtraLarge
      ? "140px"
      : XXLarge
      ? "160px"
      : "155px",
    height: ExtraSmall
      ? "60px"
      : Small
      ? "70px"
      : Medium
      ? "90px"
      : Large
      ? "120px"
      : ExtraLarge
      ? "140px"
      : XXLarge
      ? "160px"
      : "155px",
    transform: "rotate(45deg)",
    transition: ".5s",
    top: 0,
    left: ExtraSmall
      ? "80%"
      : Small
      ? "60%"
      : Medium
      ? "68%"
      : Large
      ? "77%"
      : ExtraLarge
      ? "82%"
      : XXLarge
      ? "91%"
      : "91%",
    margin: ExtraSmall
      ? "-20px"
      : Small
      ? "-28px"
      : Medium
      ? "-34px"
      : Large
      ? "-51px"
      : ExtraLarge
      ? "-70px"
      : XXLarge
      ? "-85px"
      : "-84px",
    overfllow: "hidden",
    backgroundColor: "#FFC436",
  };
  return style;
};

export const Boxin1 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
}));

export const Boxin2 = {
  transform: "rotate(-45deg)",
  position: "absolute",
  top: { sm: "30px", md: "70px", lg: "60px" },
  right: { sm: "15px", md: "40px", lg: "30px", xl: "40px" },
  fontWeight: "bold",
  fontSize: { sm: "10px", md: "15px", lg: "16px" },
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
export const Boxin4 = {
  transform: "rotate(-45deg)",
  position: "absolute",
  top: { sm: "30px", md: "60px", lg: "55px", xl: "60px" },
  right: { sm: "15px", md: "20px", lg: "10px", xl: "20px" },
  fontWeight: "bold",
  fontSize: "18px",
  fontSize: { sm: "10px", md: "15px", lg: "16px" },
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
export const Boxin3 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img2})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
}));

export const Boxin5 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img3})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
}));

export const Boxin6 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img3})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
}));
export const Boxin7 = styled("div")(({ theme }) => ({
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  transform: "rotate(360deg)",
}));
export const BoxOneSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width:700px)": {
    display: "none",
  },
};
