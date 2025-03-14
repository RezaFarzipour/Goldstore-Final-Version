import { styled } from "@mui/material";

export const Cotainer = styled("div")(({ theme }) => ({
    minWidth: "400px",
    width: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
}));
export const DivOne = styled("div")(({ theme }) => ({
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
    mt: 12,
}