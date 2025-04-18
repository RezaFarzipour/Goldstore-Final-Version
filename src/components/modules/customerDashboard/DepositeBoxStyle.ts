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
  