/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['i.ibb.co'],
  },
};

module.exports = nextConfig;
