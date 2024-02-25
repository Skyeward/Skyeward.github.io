/** @type {import('next').NextConfig} */

import { NextConfig } from "next";

const nextConfig: NextConfig = {
    // images: {
    //     unoptimized: true,
    //     remotePatterns: [{protocol: "https", hostname: 'raw.githubusercontent.com'}],
    //   },
    output: 'export',
    distDir: 'build',
};

export default nextConfig;
