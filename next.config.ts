import { type NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/wasume-landing',
  assetPrefix: '/wasume-landing/',
}

export default nextConfig