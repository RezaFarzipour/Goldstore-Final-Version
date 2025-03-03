import {styled} from '@mui/material'

export const navlinks ={
  all: "unset",
  color: "#E3E8E7ff",
  fontSize: "18px",
  backgroundColor: "none",
  border: "none",
  fontWeight: "100",
  fontFamily: "Lalezar",
  transition: "all ease-out .2s",
  "&:hover": {
    color: "#FFC436",

    cursor: "pointer",
  },
}

export const Footer_Grid = {
  backgroundColor: "#2d2c2a",

};

export const Gridstyle = {
  marginLeft: { xs: "8%", sm: "0" },
marginTop:6,
alignItems:"center" 
,display:"flex",
 flexDirection:"column"
};

export const footer_link = {
  textDecoration: "none",
};

export const address_grid = {
  ml: { xs: "2%", sm: "0" },
  mb: { xs: "2%", md: "0" },
  
};

export const adress_typo ={
    fontSize:{xs:"15px",md:'20px'}
}

export const span_style ={
    fontFamily:"Yekan",color:'#fff'
}


export const footer_icon =(color:string)=>{
    const S1 ={
        ml: 3,
        color: "#FFC436",
        cursor: "pointer",
        fontSize: "30px",
        border: "1px solid #FFC436",
        padding: "5px",
        transition: "all ease-out .5s",
        "&:hover": {
          borderRadius: "50%",
          color: color,
          borderColor: color,
        },
    }
    return S1
}


export const hr_style ={
    border: "1px solid #FFC436", width: "100%"
}


export const made_by_adlikara_typo ={
    color: "#fff",
    margin: "auto",
    fontWeight: "bold",
    fontFamily: "Yekan",
    py: 1,
}