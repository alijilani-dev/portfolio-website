import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // Generate a static HTML export
  basePath: "/portfolio-website",   // Must match your GitHub repo name
  assetPrefix: "/portfolio-website/", // Ensures CSS/JS loads from the correct path
  images: {
    unoptimized: true,    // Required for GitHub Pages (no server-side image optimization)
  },
};

export default nextConfig;
