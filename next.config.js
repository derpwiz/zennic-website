/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
