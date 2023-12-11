/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecom-cdn-uat.ionah.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
