import * as path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.API_KEY": JSON.stringify(env.API_KEY),
    },
    plugins: [react()],
    server: {
      host: "0.0.0.0",
    },
    preview: {
      port: 5173,
    },
    test: {
      global: true,
      environment: "jsdom",
      CSS: true,
      setupFiles: "./setup.ts",
      root: path.resolve(__dirname, "./src"),
    },
  };
});
