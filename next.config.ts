import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produces .next/standalone/server.js — a self-contained Node server
  // that Hostinger's Node.js App feature runs directly as the startup file.
  output: "standalone",
};

export default nextConfig;
