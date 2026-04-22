"use client";

import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  title: string;
  color: string;
}

const navItems: NavItem[] = [
  { id: "chapter1", title: "第一章：伪分布式搭建", color: "blue" },
  { id: "chapter2", title: "第二章：完全分布式搭建", color: "green" },
  { id: "chapter3", title: "第三章：HDFS文件操作", color: "orange" },
  { id: "chapter4", title: "第四章：Hive部署", color: "indigo" },
  { id: "chapter5", title: "第五章：Hive数据仓库操作", color: "teal" },
  { id: "faq", title: "常见问题排查", color: "red" },
];

const colorClasses: Record<string, { active: string; hover: string }> = {
  blue: { active: "text-blue-700 border-blue-700", hover: "hover:text-blue-600" },
  green: { active: "text-green-700 border-green-700", hover: "hover:text-green-600" },
  orange: { active: "text-orange-700 border-orange-700", hover: "hover:text-orange-600" },
  indigo: { active: "text-indigo-700 border-indigo-700", hover: "hover:text-indigo-600" },
  teal: { active: "text-teal-700 border-teal-700", hover: "hover:text-teal-600" },
  red: { active: "text-red-700 border-red-700", hover: "hover:text-red-600" },
};

export default function SidebarNav() {
  // 使用mounted状态避免hydration错误
  const [mounted, setMounted] = useState(false);
  const [activeId, setActiveId] = useState("chapter1");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const scrollPosition = window.scrollY + 120;

      let currentId = "chapter1";
      for (const section of sections) {
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentId = section.id;
          }
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // 服务端渲染时显示默认状态，客户端渲染时显示实际状态
  const currentActiveId = mounted ? activeId : "chapter1";

  return (
    <nav
      className="fixed left-4 top-20 w-52 h-[calc(100vh-100px)] overflow-y-auto z-20"
      suppressHydrationWarning
    >
      <div className="bg-white/95 backdrop-blur rounded-lg shadow-sm p-4 border border-gray-100">
        <h3 className="font-bold text-gray-700 mb-4 text-sm">目录导航</h3>
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = currentActiveId === item.id;
            const colors = colorClasses[item.color];
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left text-sm py-2 px-3 rounded transition-colors border-l-2 ${
                    isActive
                      ? `${colors.active} bg-gray-50 font-semibold`
                      : `text-gray-600 border-transparent ${colors.hover}`
                  }`}
                  suppressHydrationWarning
                >
                  {item.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}