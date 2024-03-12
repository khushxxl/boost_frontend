/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["zkstars.io", "i.seadn.io"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
