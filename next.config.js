const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

module.exports = {
  images: {
    domains: ["www.datocms-assets.com", "images.unsplash.com"],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};
