/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "serv1.andrew-web.ru",
        port: "",
        pathname: "/uploads/**",
      }
    ]
  }
}

module.exports = nextConfig
