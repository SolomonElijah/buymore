import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['ng.jumia.is', 'anotherdomain.com'], // Only hostnames here
  },
};

export default nextConfig;
