const { withContentlayer } = require("next-contentlayer2"); 

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      } 
    ],
  }, 
};

module.exports = withContentlayer(nextConfig);
