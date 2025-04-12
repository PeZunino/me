const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
	eslint: {ignoreDuringBuilds: true,},
	reactStrictMode: false,
};

module.exports = withVanillaExtract(nextConfig);
