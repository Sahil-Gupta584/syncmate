import TanStackRouterVite from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, resolve(__dirname, "../../"));
  const backendUrl = env.VITE_BACKEND_URL;

  return {
    envDir: "../../",
    plugins: [
      TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
      react(),
    ],
    server: {
      proxy: {
        // Send only /api/auth/** to /creator/api/auth/**
        "/api/auth": {
          target: backendUrl + "/creator",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/auth/, "/api/auth"),
        },

        // Other /api/** requests go to root server
        "/api": {
          target: backendUrl,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/api"),
        },
      },
    },
  };
});
