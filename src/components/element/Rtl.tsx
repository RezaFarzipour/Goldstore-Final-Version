import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";

// Create rtl cache
const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

// Define the Rtl component with TypeScript types
function Rtl({ children }: { children: React.ReactNode }) {
  return <CacheProvider value={rtlCache}> {children} </CacheProvider>;
}

export default Rtl;
