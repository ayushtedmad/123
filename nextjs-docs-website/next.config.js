module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // Add your image domains here
  },
  env: {
    API_URL: process.env.API_URL, // Example of using environment variables
  },
  webpack: (config) => {
    // Custom webpack configuration can go here
    return config;
  },
};