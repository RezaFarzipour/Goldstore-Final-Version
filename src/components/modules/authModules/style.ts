export const textfeildStyle = {
    width: "100%",
   "& .muirtl-1yrc8ca-MuiInputBase-input-MuiInput-input.Mui-disabled ":{
        opacity: 1,
       " -webkit-text-fill-color": "#fff !important ",
       direction:"rtl",
       fontSize:"14px",
       
        
    },
    '& .MuiInput-underline:before': {
        borderBottomColor: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .Mui-disabled:before': {
        borderBottomColor: 'white',
      },
}



export const FirstBox = {
    my: 2,
    mx: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  
  export const ButtonBox = {
    width: "100%",
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
    "&:hover": { backgroundColor: "rgba(204, 163, 69, 0.7)" },
  };
  
  export const ButtonStyle2 = {
    mt: 3,
    mb: 2,
    backgroundColor: "#FFC436",
    color: "#111",
    fontWeight: "bold",
    "&:hover": { backgroundColor: "rgba(204, 163, 69, 0.7)" },
  };
  
  


  export const MainVerifyBox = {
    my: 1,
    mx: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  
  export const VerifytextField = {
    width: "100%",
    input: { color: "#fff", direction: "rtl", pr: 2 },
    label: { color: "#fff", fontSize: "17px", fontFamily: "Yekan" },
    "& label.Mui-focused": {
      color: "#FFC436",
      fontWeight: "bold",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
        borderRadius: "10px",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FFC436",
      },
    },
  };
  
  export const EditNumberBtn = {
    color: "#111",
    fontSize: { xs: '10px', md: "13px" },
    fontFamily: 'Yekan',
    textAlign: "center",
  };
  
