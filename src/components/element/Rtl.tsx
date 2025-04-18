import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { createTheme, useTheme, ThemeProvider } from "@mui/material/styles";
import * as locales from "@mui/material/locale";
import { useMemo, useState } from "react";

// Create rtl cache
const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// Define the Rtl component with TypeScript types
function Rtl({ children }: { children: React.ReactNode }) {
  return <CacheProvider value={rtlCache}> {children} </CacheProvider>;
}

//make tables rtl

function TableRtl({ children }: { children: React.ReactNode }) {
  const [locale] = useState<string>("faIR");
  const theme = useTheme();
  const themeWithLocale = useMemo(
    () => createTheme(theme, locales[locale]),
    [locale, theme]
  );

  return <ThemeProvider theme={themeWithLocale}>{children}</ThemeProvider>;
}

export { Rtl, TableRtl };
