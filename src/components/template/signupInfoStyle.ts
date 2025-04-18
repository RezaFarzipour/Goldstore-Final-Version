import { colors } from "../../styles/theme";

export const signupinfostyle = {

    width: "100%",
  
    input: { color: "#fff", direction: "ltr", pr: 2},
    label: { color: "#fff", fontSize: "14px", },
    "& label.Mui-focused": {
        color: colors.gold[300],
        fontWeight: "bold",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: colors.gold[300],
    },
    
  
    
  }