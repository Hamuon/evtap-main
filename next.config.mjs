/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.evtap.ir/api/v1",
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
