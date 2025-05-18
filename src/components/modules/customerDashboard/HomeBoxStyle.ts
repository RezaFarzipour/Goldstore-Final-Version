import { colors } from "@mui/material";

export const buttononeSx = (bg, dis) => {

  const S2 = {
    width: "80%",
    my: 1,
    fontWeight: "300",
    fontSize: { xs: "18px", md: "20px" },
    color: "#222",
    // bgcolor: obj.btnColor,
    display: dis,
    "&:hover": {
      bgcolor: bg,
      opacity: 0.8,
    },
    whiteSpace: "nowrap",
    backgroundColor: bg,
    color: "#eefefe"

  }

  return S2

};

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