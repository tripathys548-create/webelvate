// Plain JS (not next.config.ts): Hostinger's build servers have an old glibc, so
// Next falls back to WASM SWC, which can't transpile a TypeScript config.
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
