import { loadEnvConfig } from "@next/env";
import type { NextConfig } from "next";
import { resolve } from "path";
const projectDir = resolve(process.cwd(), "../../");
loadEnvConfig(projectDir);

const nextConfig: NextConfig = {
  env: {
    VITE_CREATOR_BASE_URL: process.env.VITE_CREATOR_BASE_URL,
  },
};

export default nextConfig;
