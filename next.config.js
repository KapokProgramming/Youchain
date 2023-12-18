/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: { styledComponents: true },
  reactStrictMode: true,
  redirects: async () => {
    return [
    ];
  },
  rewrites: async () => [
  ],
};

module.exports = nextConfig;
