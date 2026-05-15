/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove ignoreBuildErrors for production safety
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  images: {
    unoptimized: true,
  },
  // Enable strict mode for better error handling
  reactStrictMode: true,
  // Optimize for production
  swcMinify: true,
  compress: true,
}

export default nextConfig
