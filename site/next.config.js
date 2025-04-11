/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'ConectKasm',
    description: 'The Kasm conect.',
    icon: 'https://avatars.githubusercontent.com/u/206035349?v=4',
    listUrl: 'https://conect-2025.github.io/KASM-TEST/',
    contactUrl: 'https://github.com/conect-2025/KASM-TEST/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/KASM-TEST/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
