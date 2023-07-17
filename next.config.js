/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "fabweltmarketplace.s3.us-east-2.amazonaws.com",
      "raw.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
