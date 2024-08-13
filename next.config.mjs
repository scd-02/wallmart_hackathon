/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*", // Apply headers to all routes under /api/
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Set your origin (e.g., "*" allows all origins)
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS", // Allowed HTTP methods
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "*", // Allowed headers
          },
        ],
      },
    ];
  },
};

export default nextConfig;
