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
        // 静态资源（_next/static）长期缓存 - 文件名带 hash，安全
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Slidev 幻灯片 assets 目录（JS/CSS/字体等，带 hash）
        source: "/slides/:path*/assets/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // 注意：Slidev HTML 入口不设置缓存头，由浏览器默认处理
      // 这样每次更新 slides 后用户都能看到最新内容
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
