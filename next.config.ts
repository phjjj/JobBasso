import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack(config, { dev, isServer }) {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'next/babel',
                            '@babel/preset-typescript',
                            '@wyw-in-js/babel-preset'
                        ],
                    },
                },
                {
                    loader: '@wyw-in-js/webpack-loader',
                    options: {
                        sourceMap: dev,
                    },
                },
            ],
        });
 
        return config;
    },
};
 
export default nextConfig;
