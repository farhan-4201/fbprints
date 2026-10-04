import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow external image domains if needed later
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "fbprints.com" },
      { protocol: "https", hostname: "api.fontshare.com" },
    ],
  },
  // Redirect WooCommerce deep-links
  async redirects() {
    return [
      {
        source: "/my-account",
        destination: "https://fbprints.com/my-account",
        permanent: false,
      },
      {
        source: "/cart",
        destination: "https://fbprints.com/cart",
        permanent: false,
      },
      {
        source: "/shop",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
