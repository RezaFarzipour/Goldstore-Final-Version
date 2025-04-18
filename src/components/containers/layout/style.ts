import { colors } from "../../../styles/theme";

// NavBar:
const commonTextStyles = {
    textDecoration: "none",
    color: "inherit",
};

export const gold_store_name_typo = {
    ...commonTextStyles,
    mr: 2,
    ml: 4,
    display: { xs: "none", md: "flex" },
    fontWeight: 900,
    letterSpacing: "-0.065em",
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
            backgroundColor: colors.grey[300],

        },
    },
};

export const xs_typo = {
    ...commonTextStyles,
    mr: 2,
    display: { xs: "flex", md: "none" },
    flexGrow: 1,
    fontFamily: "Yekan",
    fontWeight: 700,
};

export const map_box = {
    flexGrow: 2,
    display: { xs: "none", md: "flex" },
    alignItems: "center",
};

export const button_text = {
    ...commonTextStyles,
    letterSpacing: "-0.035em",
    my: 2,
    mx: 2,
    fontFamily: "Yekan",
    display: "block",
    fontSize: "20px",
    transition: "all ease-out .6s",
    "&:hover": { backgroundColor: "#FFC436", color: "#111" },
};



// Footer:

export const navlinks = {
    all: "unset",
    color: "#E3E8E7ff",
    fontSize: "18px",
    backgroundColor: "none",
    border: "none",
    fontWeight: "500",
   
    transition: "all ease-out .2s",
    "&:hover": {
        color: "#FFC436",
        cursor: "pointer",
    },
}

export const Footer_Grid = {
    backgroundColor: colors.grey[200],
    display:"flex",
    flexDirection:{xs:"column",md:"row"},
    justifyContent:{xs:"center",md:"space-around"},
    alignItems:"center",
    padding:4
};

export const Gridstyle = {
    marginLeft: { xs: "8%", sm: "0" },
     marginTop: {xs:4,md:1},
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
};

export const footer_link = {
    textDecoration: "none",
};

export const address_grid = {
    ml: { xs: "2%", sm: "0" },
    mb: { xs: "2%", md: "0" },

};

export const adress_typo = {
    fontSize: { xs: "15px", md: '20px' }
}

export const span_style = {
     color: '#fff'
}


export const footerIconStyles = (color: string) => ({
    ml: 3,
    color: "#FFC436",
    cursor: "pointer",
    fontSize: "30px",
    border: `1px solid #FFC436`,
    padding: "5px",
    transition: "all ease-out .5s",
    "&:hover": {
        borderRadius: "50%",
        color,
        borderColor: color,
    },
});


export const hr_style = {
    border: "1px solid #FFC436", width: "100%"
}


export const made_by_adlikara_typo = {
    color: "#fff",
    margin: "auto",
    fontWeight: "400",
  
    py: 1,
}


export const MainGrid = () => ({
    height: "100vh !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:"100%",
    background:
      "linear-gradient(90deg,rgba(42, 44, 52, 1) 0%, rgba(55, 57, 67, 1) 72%)",
  });
  
  export const ContentGrid = {
    background: "linear-gradient(to top, rgba(42, 44, 52, 1) 7%, rgba(55, 57, 67, 1) 72%)",
    borderRadius: "16px",
    boxShadow: "0 0 30px rgba(0, 0, 0, 0.6)",
    padding: "2rem",
    width: {xs:"80%",md:"50%"},
    maxWidth: "380px",
    height:{xs:"auto"},
   
  };