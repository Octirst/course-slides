import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态资源使用相对路径，适配 IP 和域名访问
  assetPrefix: "",

  // 启用更严格的缓存策略
  onDemandEntries: {
    // 页面在开发时缓存更长时间
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },

  async headers() {
    return [
      {
        // 静态资源（_next/static）长期缓存
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Slidev 幻灯片静态文件长期缓存
        source: "/slides/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  async rewrites() {
    return [
      {
        // Slidev SPA numeric slide routes (e.g. /slides/25-2-javaweb/unit01-lesson01/1)
        source: "/slides/:courseId/:unitId/:slideNum(\\d+)",
        destination: "/slides/:courseId/:unitId/index.html",
      },
      {
        // Slidev presenter mode
        source: "/slides/:courseId/:unitId/presenter/:path*",
        destination: "/slides/:courseId/:unitId/index.html",
      },
    ];
  },
};

export default nextConfig;
