/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => ({
    beforeFiles: [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/api/:path*`,
      },
    ],
  }),
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ['umc-web-product-s3.s3.ap-northeast-2.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: '13.124.157.33',
      },
    ],
  },
};

export default nextConfig;
