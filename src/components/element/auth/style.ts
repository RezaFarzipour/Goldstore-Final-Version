export const verifyNumber_style = {
    width: "100%",
    mt: 3,
    mb: 2,
    backgroundColor: "#FFC436",
    color: "#111",
    fontWeight: "bold",
    "&:hover": { backgroundColor: "rgba(204, 163, 69,0.7)" },
};


export const verifyInput_style = {
    width: "100%",

    input: { color: "#fff", direction: "rtl", pr: 2 },
    label: { color: "#fff", fontSize: "15px", },
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