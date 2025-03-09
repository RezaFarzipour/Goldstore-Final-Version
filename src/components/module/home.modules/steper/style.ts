export const FirstBox = {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    "@media (max-width:912px)": {
      display: "none",
    },
  };
  
  

  
  export const GoldBox = {
    filter: "drop-shadow(0px 0px 15px #FFC436)",
    bgcolor: "rgb(39,37,35)",
    borderRadius: "8px",
    color: "#fff",
    width: "30%",
    px:3,

    display:"flex",
    alignItems: "center",
    justifyContent: "center",
  };
  
  export const TypographyStyle = (activeStep: number, index: number) => ({
    cursor: "pointer",
    pl: 2,
    fontSize:"18px",
    textAlign:"justify",
    color: activeStep === index ? "#fff" : "#FFC436",
  });
  
  export const MainBox = {
    maxWidth: 500,
    "@media (min-width:912px)": {
      display: "none",
    },
  };
  
  export const BoxGold2 = {
    filter: "drop-shadow(0px 0px 15px #FFC436)",
    bgcolor: "rgb(39,37,35)",
    borderRadius: "8px",
    color: "#fff",
  };
  

  
  export const FabStyle = (activeStep: number, index: number) => ({
    width: "15px",
    height: "1px",
    px: 1.8,
    color: activeStep === index ? "#fff" : "#111",
    bgcolor: activeStep === index ? "#FFC436" : "#fff",
  });
  
  export const TypographyStylemobile = (activeStep: number, index: number) => ({
    cursor: "pointer",
    pl: 2,
    textAlign:"justify",
    color: activeStep === index ? "#FFC436" : "#fff",
  });