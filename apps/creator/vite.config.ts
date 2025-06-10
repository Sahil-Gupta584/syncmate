import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import TanStackRouterVite from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
  server: {
    proxy: {
      // Send only /api/auth/** to /creator/api/auth/**
      "/api/auth": {
        target: "http://localhost:3000/creator",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/auth/, "/api/auth"),
      },

      // Other /api/** requests go to root server
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
});
