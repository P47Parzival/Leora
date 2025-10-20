import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slashes to URLs
  images: {
    unoptimized: true, // Required for static export
  },
  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here
  },
  // Compress images and optimize performance
  compress: true,
  // Enable PoweredByHeader removal for security
  poweredByHeader: false,
  // Note: Custom headers are not supported with static export
  // Security headers should be configured at the hosting level (Netlify, Vercel, etc.)
};

export default nextConfig;