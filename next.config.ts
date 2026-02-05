
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    qualities: [60, 75],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
};

export default nextConfig;
