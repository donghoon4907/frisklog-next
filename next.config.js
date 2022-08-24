const Dotenv = require("dotenv-webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
};

module.exports = {
  ...nextConfig,
  webpack: (config, { dev }) => {
    console.log(dev);
    config.plugins.push(
      new Dotenv({
        path: `./.env.${dev ? "development" : "production"}`,
        systemvars: true
      })
    );

    return config;
  }
};
