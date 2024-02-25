/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{protocol: "https", hostname: 'raw.githubusercontent.com'}],
      },
    output: 'export',
    distDir: 'build',
};

export default nextConfig;
