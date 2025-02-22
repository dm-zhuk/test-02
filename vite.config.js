import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

import { resolve } from "path";

const root = resolve("src");

export default defineConfig({
  base: "/test-02/",
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  resolve: {
    alias: {
      "~": root,
    },
  },
});
