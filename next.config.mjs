/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "evtap.ir",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
