import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

import { resolve } from "path";

const root = resolve("src");

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  base: "/test-02/",
  resolve: {
    alias: {
      "~": root,
    },
  },
});
