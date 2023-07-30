/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
