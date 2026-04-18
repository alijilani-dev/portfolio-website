import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // Generate a static HTML export
  images: {
    unoptimized: true,    // Required for GitHub Pages (no server-side image optimization)
  },
};

export default nextConfig;
