/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/drapaulaped',
  assetPrefix: '/drapaulaped/',
  trailingSlash: true,
}

module.exports = nextConfig
