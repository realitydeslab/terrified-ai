/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: false,
  basePath: isProd ? '/terrified-ai' : '',
  assetPrefix: isProd ? '/terrified-ai/' : '',
};

export default nextConfig;
