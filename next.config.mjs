/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.evtap.ir/api/v1",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
