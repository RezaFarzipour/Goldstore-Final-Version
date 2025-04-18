import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
