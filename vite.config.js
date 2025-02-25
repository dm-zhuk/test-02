import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import { resolve } from "path";

const root = resolve("src");

const isGitHubPages = import.meta.env.VITE_DEPLOY_TARGET === "github";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  base: isGitHubPages ? "/test-02/" : "/",
  resolve: {
    alias: {
      "~": root,
    },
  },
});
