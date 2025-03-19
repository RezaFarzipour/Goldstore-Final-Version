import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const paths = [
  "src",
  "assets",
 
  "services",
  "utils",
  "components",
  "pages",
  "styles",
  "routes",
  "configs",
  "constants",
  "types",
];

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...paths.reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
        }),
        {}
      ),
    },
  },
});
