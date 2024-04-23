/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.trolley.co.uk',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
