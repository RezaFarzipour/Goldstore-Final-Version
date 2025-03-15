import { createTheme } from "@mui/material";

// color design tokens export
export const tokens = () => ({
    gold: { 100: "#e7b84d", 200: "#3C3A36" },
    grey: {
        100: "#1C1B19",
        200: "#292929",
        300: "#3C3A36",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: "#e0e0e0",
    },
    primary: {
        100: "#040509",
        200: "#080b12",
        300: "#0c101b",
        400: "#f2f0f0", // manually changed
        500: "#141b2d",
        600: "#1F2A40",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
    },
    greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
    },
    redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
    },
});
export const colors = tokens();
// mui theme settings
export const themeSettings = () => {
    const colors = tokens();
    return {
        palette: {
            primary: {
                100: colors.primary[100],
                200: colors.primary[200],
                300: colors.primary[300],
                400: colors.primary[400],
                500: colors.primary[500],
                600: colors.primary[600],
                700: colors.primary[700],
                800: colors.primary[800],
                900: colors.primary[900],
            },

            greenAccent: {
                100: colors.greenAccent[100],
                200: colors.greenAccent[200],
                300: colors.greenAccent[300],
                400: colors.greenAccent[400],
                500: colors.greenAccent[500],
                600: colors.greenAccent[600],
                700: colors.greenAccent[700],
                800: colors.greenAccent[800],
                900: colors.greenAccent[900],
            },
            redAccent: {
                100: colors.redAccent[100],
                200: colors.redAccent[200],
                300: colors.redAccent[300],
                400: colors.redAccent[400],
                500: colors.redAccent[500],
                600: colors.redAccent[600],
                700: colors.redAccent[700],
                800: colors.redAccent[800],
                900: colors.redAccent[900],
            },
            gold: {
                gold: colors.gold[100],

            },
            background: {
                default: "#fcfcfc",
            },
        },
        typography: {
            fontFamily: ["IRANYekan", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["IRANYekan", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["IRANYekan", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["IRANYekan", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["IRANYekan", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["IRANYekan", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["IRANYekan", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

const theme = createTheme(themeSettings());
export default theme;

