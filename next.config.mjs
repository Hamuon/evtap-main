/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.evtap.ir",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
