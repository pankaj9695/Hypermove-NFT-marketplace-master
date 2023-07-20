/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "fabweltmarketplace.s3.us-east-2.amazonaws.com",
      "raw.githubusercontent.com",
      "d15x3nwgjcy1f5.cloudfront.net",
    ],
  },
};

module.exports = nextConfig;
