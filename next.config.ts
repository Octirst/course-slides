import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
