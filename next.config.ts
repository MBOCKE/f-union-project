import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This is the critical line
  output: "export",

  // GitHub Pages requires these so assets load correctly
  basePath: "/f-union-project",
  assetPrefix: "/f-union-project/",

  // Disable Next.js image optimization (not supported on GitHub Pages)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
