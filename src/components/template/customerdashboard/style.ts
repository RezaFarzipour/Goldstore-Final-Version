import { colors } from "../../../styles/theme";

export const PaperOneSx = {
    bgcolor: "#272523",
    maxWidth: "280px",
    width: "100%",
    borderRadius: "7px",
    height: "280px",
    
    p: 4,
    my: 2,
    pr: 3,
  };


  export const buttononeSx = (bg,dis)=>{

    const S2 ={
      width: "80%",
      my: 1,
      fontWeight: "300",
      fontSize: { xs: "18px", md: "20px" },
      color: "#222",
      // bgcolor: obj.btnColor,
      display: dis,
      "&:hover": {
         bgcolor:bg,
        opacity: 0.8,
      },
      whiteSpace: "nowrap",
      backgroundColor :bg,
    
    }
  
    return S2
  
  };


  export const TextFildOneSx = {
    width: "100%",
  
    input: { color: "#FFC436", direction: "rtl", pr: 2 },
  
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFC436",
    },
    "& .MuiOutlinedInput-root": {
     
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "& fieldset": {
        borderColor: "#fff",
        borderRadius: "8px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(255,172,25)",
      },
    },
  };
  

  export const ButtononeSx = {
    width: "70%",
    fontSize: "16px",
    fontWeight: "bold",
    py: 1,
    my: 4,
    mx: 6,
    borderRadius: "7px",
    color: "rgb(255,172,25)",
    borderColor: "rgb(255,172,25)",
    "&:hover": {
      borderColor: "rgb(255,172,25)",
    },
  };
  

  export const PaperOneSxBuyGold = {
    maxWidth: "550px",
    width: { xs: "100%", md: "100%" },
    mt: 10,
    bgcolor: "rgb(39,37,35)",
    borderRadius: "15px",
    p:{xs:2,md:1}
  };


  export const PapertwoSx = {
    height: "250px",
    width: { xs: "100%", md: "100%" },
    bgcolor: "#3C3A36",
    borderRadius: "15px",
    overflow: "hidden",
  };


  export const BoxTwoSx = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "15px 15px 0 0",
    bgcolor: "#3C3A36",
    py: 2,

  };


  export const TypoOneSx = {
    fontSize: { xs: "16px", md: "22px" },
   
    fontWeight: "400",
    whiteSpace: { xs: "nowrap", md: "wrap" },
  };
  export const TypoTwo = {
    color: "green",
    display: "flex",
    fontSize: { xs: "16px", md: "22px" },
    alignItems: "center",
    gap:2,
    fontWeight: "600",
  };
  export const TypoThreeSX = {
    pl: 1,
    color: "green",
    fontSize: { xs: "16px", md: "22px" },
    fontWeight: "bold",
  };


  export const FormCntrolSx = {
    width: "100%",
  
    input: { color: colors.gold[300], direction: "rtl", pr: 2 },
    label: { color: colors.primary[400] },
    "& label.Mui-focused": {
      color: colors.gold[300],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor:colors.gold[300],
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#272523",
        borderRadius: "10px",
      },
      "&:hover fieldset": {
        borderColor: colors.primary[400],
      },
      "&.Mui-focused fieldset": {
        borderColor: colors.gold[300],
      },
    },
  };

  export const PaperSX = {
    mt: 2,
    bgcolor: "#272523",
    width: { xs: "95%", md: "90%" },
    borderRadius: "10px",
    mx: "auto",
  };

  export const FormCntrlSx = {
    width: "100%",
  
    input: { color: colors.gold[300], direction: "rtl", pr: 2 },
    label: { color: colors.primary[400], fontWeight: "bold" },
    "& label.Mui-focused": {
      color: colors.gold[300],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: colors.gold[300],
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#272523",
        borderRadius: "10px",
      },
      "&:hover fieldset": {
        borderColor: colors.primary[400],
      },
      "&.Mui-focused fieldset": {
        borderColor: colors.gold[300],
      },
    },
  };


  export const BButtonThreeSx = {
    "&:hover": {
      borderColor: colors.gold[300],
    },
    my: 3,
    width: "60%",
    color: colors.gold[300],
    fontSize: "20px",
    fontWeight: "300",
    borderColor: colors.gold[300],
  };

  export const TransactionTap = {
    bgcolor: "#3C3A36",
    width: { xs: "100%", md: "100%" },
    borderRadius: "10px 10px 0 0 ",
    "& .MuiButtonBase-root": {
      color: "#FFC436",
      fontSize: { xs: "15px", md: "20px" },
    },
}


export const TablepaginationStyle ={
  bgcolor: "#272523",
  width: "100%",
  color: "#fff",
  "& .MuiButtonBase-root, .MuiSvgIcon-root ": {
    color: "#fff",
  },
  direction: "ltr",
}
