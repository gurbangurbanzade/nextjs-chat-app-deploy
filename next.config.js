/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compilerOptions: {
    types: ["socket.io-client"],
    // ... other options
  },
};

module.exports = nextConfig;
