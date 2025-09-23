import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/writeups',
        destination: '/CVE-26206-2025',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
