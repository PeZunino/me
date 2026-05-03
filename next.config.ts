import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {reactStrictMode: false,};

module.exports = withVanillaExtract(nextConfig);
