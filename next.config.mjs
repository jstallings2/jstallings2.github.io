/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // Uncomment and adjust basePath if deploying to username.github.io/repo-name
  // basePath: '/personal-website',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization
  },
};

export default nextConfig;

