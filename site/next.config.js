/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'conect kasm',
    description: 'The Kasm conect.',
    icon: '/img/logo.svg',
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
