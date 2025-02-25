import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const root = resolve("src");

  const isGitHubPages = env.VITE_DEPLOY_TARGET === "github";

  return {
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
  };
});
