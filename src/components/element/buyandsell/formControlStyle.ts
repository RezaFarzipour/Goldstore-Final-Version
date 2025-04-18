import { colors } from "../../../styles/theme";

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