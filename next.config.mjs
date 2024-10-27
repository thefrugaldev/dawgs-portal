/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dawgs-gas-station-images.s3.us-east-2.amazonaws.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
