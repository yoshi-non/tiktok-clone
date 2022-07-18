/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["img.atwiki.jp", "lh3.googleusercontent.com"]
  },
}

module.exports = nextConfig
