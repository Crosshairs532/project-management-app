/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    position: "top-right",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/product",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
