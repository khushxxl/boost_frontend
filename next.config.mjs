/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "zkstars.io",
      "i.seadn.io",
      "bafybeiamfal752mnzlilbsffbpfobgritbir4wg6qwwyxsd5cuy3b7mu2q.ipfs.dweb.link",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
