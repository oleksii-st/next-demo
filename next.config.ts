import type { NextConfig } from 'next';

const url = new URL(process.env.NEXT_PUBLIC_SITEMAP_URL || 'http://localhost:3000');

const protocol = url.protocol.substring(0, url.protocol.length - 1) as 'http' | 'https' | undefined;

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [360, 393, 414, 575, 767, 991, 1199, 1440, 1600, 1920],
    imageSizes: [
      130, 170, 200, 260, 360, 393, 414, 575, 767, 991, 1199, 1440, 1600, 1920, 180, 197, 207, 288,
      384, 340, 496, 600, 720, 800, 960,
    ],
    remotePatterns: [
      {
        protocol,
        hostname: url.hostname,
        port: url.port,
      },
    ],
  },
};

export default nextConfig;
