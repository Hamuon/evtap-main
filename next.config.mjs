/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "new.evtap.ir",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
