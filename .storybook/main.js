const path = require('path');

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
    webpackFinal: async (config) => {
        config.resolve.alias['~'] = path.resolve(__dirname, '../src');

        return config;
    },
    core: {
        builder: 'webpack5',
    },
};
