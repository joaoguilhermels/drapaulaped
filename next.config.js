/** @type {import('next').NextConfig} */

// Determine if we're building for production (Cloudflare) or staging (GitHub Pages)
const isProduction = process.env.CLOUDFLARE_ENV === 'production'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Only use basePath for GitHub Pages (staging)
  // Cloudflare Pages (production) serves from root
  ...(isProduction ? {} : {
    basePath: '/drapaulaped',
    assetPrefix: '/drapaulaped/',
  }),
}

module.exports = nextConfig
