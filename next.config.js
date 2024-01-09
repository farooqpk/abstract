/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "theme.zdassets.com",
        port: "",
        pathname: "/theme_assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
