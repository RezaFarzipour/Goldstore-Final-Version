export const InputStyle = {
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