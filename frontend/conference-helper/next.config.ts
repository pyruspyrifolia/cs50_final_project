import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Add an ignore for the node-pre-gyp HTML file
    config.module = {
      ...config.module,
      exprContextCritical: false,
      rules: [
        ...(config.module?.rules || []),
        {
          test: /node_modules\/@mapbox\/node-pre-gyp\/lib\/util\/nw-pre-gyp\/index\.html$/,
          use: 'ignore-loader',
        },
      ],
    };
    
    // If it's a server build, ignore these modules that are only needed on the client
    if (isServer) {
      config.externals = [...(config.externals as string[] || []), '@mapbox/node-pre-gyp'];
    }
    
    return config;
  },
  // Add any other Next.js configuration options here
};

export default nextConfig;
