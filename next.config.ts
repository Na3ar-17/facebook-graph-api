import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['platform-lookaside.fbsbx.com']
  }
}

export default nextConfig
