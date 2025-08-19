import { styled } from "@mui/material";

export const Cotainer = styled("div")(() => ({
    minWidth: "400px",
    width: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
}));
export const DivOne = styled("div")(() => ({
    position: "relative",
    width: "40px",
    height: "40px",
    backgroundColor: "#FFC436",
    scale: "0.45",
}));

export const BoxOneSX = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: 14,
}



//ArrowBottom Styles:
export const Span = styled("div")(() => ({
    transform: "rotate(45deg)",
    animation: "Span1 2s  ease-out infinite ",
    "@keyframes Span1": {
        "0%": {
            borderBottom: "8px solid rgba(255, 196, 54, 1)",
            borderRight: "8px solid rgba(255, 196, 54, 1)",
            width: "15px",
            height: "15px",
            opacity: 0,
        },
        "100%": {
            opacity: 1,
        },
    },
}));
export const Span2 = styled("div")(() => ({
    transform: "rotate(45deg)",
    animation: "Span2 2s   ease-in-out infinite ",
    "@keyframes Span2": {
        "0%": {
            borderBottom: "8px solid rgba(255, 196, 54, 1)",
            borderRight: "8px solid rgba(255, 196, 54, 1)",
            width: "25px",
            height: "25px",
            opacity: 0,
        },
        "100%": {
            opacity: 1,
        },
    },
}));
export const Span3 = styled("div")(() => ({
    transform: "rotate(45deg)",
    animation: "Span3 2s  ease-in infinite ",
    "@keyframes Span3": {
        "0%": {
            borderBottom: "8px solid rgba(255, 196, 54, 1)",
            borderRight: "8px solid rgba(255, 196, 54, 1)",
            width: "35px",
            height: "35px",
            opacity: 0,
        },
        "100%": {
            opacity: 1,
        },
    },
}));

export const BoxOneSx = {
    display: "grid",
    placeItems: "center",
    mr: { xs: 20, sm: 16, md: 8, lg: 12, xl: 7.6 },
    mt: { xs: 10, md: 15, lg: 15, xl: 20 },
    "@media (max-width:900px)": {
        display: "none",
    },
};
