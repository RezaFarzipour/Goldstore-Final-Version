export const container_style = {
  backgroundColor: "#1C1B19",
};

export const gold_store_name_typo = {
  mr: 2,
  ml: 4,
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 900,
  letterSpacing: "-0.065em",
  color: "inherit",
  textDecoration: "none",
};

export const icon_box = {
  flexGrow: 1,
  display: { xs: "flex", md: "none" },
};

export const menu_style = {
  display: {
    xs: "block",
    md: "none",
    "& .MuiPaper-root": {
      width: "100vw",
      height: "100vh",
      transition: "all 2s ease-in-out",
      backgroundColor: "#3C3A36",
    },
  },
};
export const xs_typo = {
  mr: 2,
  display: { xs: "flex", md: "none" },
  flexGrow: 1,
  fontFamily: "Yekan",
  fontWeight: 700,

  color: "inherit",
  textDecoration: "none",
};

export const map_box = {
  flexGrow: 2,
  display: { xs: "none", md: "flex" },
};

export const button_text = {
  textDecoration: "none",
  letterSpacing: "-0.035em",
  my: 2,
  mx: 2,
  color: "white",
  fontFamily: "Yekan",
  display: "block",
  fontSize: "20px",
  transition: "all ease-out .6s",

  "&:hover": { backgroundColor: "#FFC436", color: "#111" },
};

export const profile_button = {
  letterSpacing: "-0.035em",
  fontFamily: "Yekan",
  color: "#FFC436",
  border: "1px solid #FFC436",
  "&:hover": { backgroundColor: "rgba(204, 163, 69,0.4)" },
};
