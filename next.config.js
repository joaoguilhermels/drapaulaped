/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and configure basePath if deploying to a repository path
  // basePath: '/repository-name',
  // assetPrefix: '/repository-name/',
  trailingSlash: true,
}

module.exports = nextConfig
