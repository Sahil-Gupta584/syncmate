import TanStackRouterVite from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    preview: { allowedHosts: ["creator.syncmate.xyz"] },
    envDir: "../../",
    plugins: [
      TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
      react(),
    ],
  };
});
