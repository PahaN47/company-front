/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: undefined,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'preset-default',
                                    params: {
                                        overrides: {
                                            removeViewBox: false,
                                        },
                                    },
                                },
                            ],
                        },
                        memo: true,
                    },
                },
                {
                    loader: 'url-loader',
                },
            ],
            type: 'javascript/auto',
            issuer: {
                and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
            },
        });

        return config;
    },
};

module.exports = nextConfig;
