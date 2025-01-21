import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: true,
  eslint: {
      ignoreDuringBuilds: true,
  },
};

export default nextConfig;
