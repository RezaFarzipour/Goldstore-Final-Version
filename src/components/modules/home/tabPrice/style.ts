import { colors } from "../../../../styles/theme";

export const TabPricePaper = {
  maxWidth: "550px",
  width: { xs: "100%", md: "550px" },
  margin: "auto",
  mt: 10,
  bgcolor: " rgba(39,37,35,.55)",

  boxShadow:
    "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
  borderRadius: "30px",
};

export const PaperBox = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
  pt: 2,
};

export const BuyTypo = {
  color: "#fff",
  textAlign: "center",
  fontWeight:"500",
  fontSize: { xs: "17px", md: "20px" },

};

export const RialBox = {
  color: "green",
  display: "flex",
  fontSize: { xs: "15px", md: "20px" },
  alignItems: "center",
  pr: { xs: 2, md: 1 },
};

export const RialTypo = {
  color: "green",
  pr: 1,
  fontSize: { xs: "14px", md: "20px" },
};

export const SellTypo = {
  color: "#fff",
  textAlign: "center",
  fontWeight:"500",
  fontSize: { xs: "17px", md: "20px" },

};

export const SellBox = {
  color: "red",
  display: "flex",
  fontSize: { xs: "15px", md: "20px" },
  alignItems: "center",
  pl: { xs: 2, md: 1 },
};

export const SellRial = {
  color: "red",
  pr: 1,
  fontSize: { xs: "14px", md: "20px" },
};

export const PaperBox2 = {
  margin: "auto",
  px: 3,
  pt: 5,
  borderRadius: "15px",
};

export const TabPaper = {
  height: "250px",
  bgcolor: colors.gold[200],
  width: { xs: "100%", md: "100%" },
  borderRadius: "30px",
  boxShadow:
    "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
  inset: "20px",
};

export const TabsItem = {
  bgcolor: "#3C3A36",

  width: { xs: "100%", md: "100%" },
  borderRadius: "10px",
  "& .MuiButtonBase-root": {
    color: colors.gold[100],
    fontSize: "20px",
    fontWeight: "bold",
  },
};

export const TabItem = (colorTab) => {
  const S4 = {
    bgcolor: colorTab ? null : `${colors.gold[100]} !important`,
    color: colorTab ? null : "#444 !important",
    
  };
  return S4;
};

export const TabItem2 = (colorTab) => {
  const S5 = {
    bgcolor: colorTab ? `${colors.gold[100]} !important` : null,
    color: colorTab ? "#444 !important" : null,
  };
  return S5;
};

export const FormControlPaper = {
  mt: 3,
  bgcolor: "#272523",

  width: { xs: "95%", md: "90%" },
  borderRadius: "10px",
  mx: "auto",
};

export const FormControlStyle = {
  width: "100%",

  input: { color: colors.gold[100], direction: "rtl", pr: 2 },
  label: { color: "#fff" },
  "& label.Mui-focused": {
    color: colors.gold[100],
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: colors.gold[100],
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#272523",
      borderRadius: "10px",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.gold[100],
    },
  },
};
