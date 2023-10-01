/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.allo.ua"],
  },
};

module.exports = nextConfig;
