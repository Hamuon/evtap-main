/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.evtap.ir",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ipfs.filebase.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
