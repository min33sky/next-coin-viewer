/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['static.coinpaprika.com'],
  },
};

module.exports = nextConfig;
