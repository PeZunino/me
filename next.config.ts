import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
	eslint: {ignoreDuringBuilds: true,},
	reactStrictMode: false,
	turbopack: {} 
};

module.exports = withVanillaExtract(nextConfig);
