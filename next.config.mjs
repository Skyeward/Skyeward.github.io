/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [{protocol: "https", hostname: 'raw.githubusercontent.com'}],
      },
    output: 'export',
};

export default nextConfig;
