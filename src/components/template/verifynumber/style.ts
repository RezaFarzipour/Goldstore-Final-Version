export const MainGrid = (signupimage:string) => {
    const S1 = {
      height: "100vh !important",
      // height: "auto !important",
      display: "flex",
      justifyContent: "center",
      alignItems:"center",
      width: "100%",
      backgroundImage: `url(${signupimage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  
    return S1;
  };
  
  export const ContentGrid = {
    backgroundColor: "rgba(255,255,255,0.1)",
    WebkitBackdropFilter: "blur(7px) !important",
    backdropFilter: { xs: "blur(7px)", md: "blur(10px)" },
    boxShadow: "0 25px 445px rgba(0,0,0,0.1)",
    border: "1px solid rgba(255,255,255,0.5)",
   
    maxWidth: { xs: "90%", md: "100%" },
    mt: 4,
    borderRadius: "10px",
    maxHeight: "550px !important",
    height: "auto !important",
  };
  
  export const FirstBox = {
  
    my: 20,
    mx: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  

  
  export const ButtonBox = {
    width: "50%",
    display: "flex",
    justifyContent: "center",
  };
  
  export const ButtonStyle = {
    width: "60%",
    mt: 3,
    mb: 2,
    backgroundColor: "#FFC436",
    color: "#111",
    fontWeight: "bold",
    "&:hover": { backgroundColor: "rgba(204, 163, 69,0.7)" },
  };
  
  export const ButtonStyle2 = {
    mt: 3,
    mb: 2,
    backgroundColor: "#FFC436",
    color: "#111",
    fontWeight: "bold",
    "&:hover": { backgroundColor: "rgba(204, 163, 69,0.7)" },
  };
  