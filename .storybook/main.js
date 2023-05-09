const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-next-router',
        {
            name: 'storybook-addon-next',
            options: {
                nextConfigPath: path.resolve(__dirname, '../next.config.js'),
            },
        },
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    staticDirs: ['../src/assets'],
    webpackFinal: async (config) => {
        // const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
        // fileLoaderRule.exclude = /\.svg$/;

        // config.module.rules.push({
        //     test: /\.svg$/i,
        //     issuer: /\.[jt]sx?$/,
        //     use: ['@svgr/webpack', 'url-loader'],
        // });

        config.resolve.alias['~'] = path.resolve(__dirname, '../src');
        config.resolve.alias['../img'] = path.resolve(__dirname, '../src/assets/img');
        config.resolve.alias['../../assets'] = path.resolve(__dirname, '../src/assets');

        config.resolve.plugins = [
            ...(config.resolve.plugins || []),
            new TsconfigPathsPlugin({
                extensions: config.resolve.extensions,
            }),
        ];

        config.module.rules.filter((rule) => rule.test.test('.svg')).forEach((rule) => (rule.exclude = /\.svg$/i));

        config.module.rules.push({
            test: /\.svg$/i,
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
                    loader: 'file-loader',
                    options: {
                        name: 'src/assets/[path][name].[ext]',
                    },
                },
            ],
            type: 'javascript/auto',
            issuer: {
                and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
            },
        });

        return config;
    },
    core: {
        builder: 'webpack5',
    },
};
