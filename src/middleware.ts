import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const isOnLogin = req.nextUrl.pathname === "/login";
    const isApiRoute = req.nextUrl.pathname.startsWith("/api");

    // Allow API routes
    if (isApiRoute) {
        return NextResponse.next();
    }

    // Allow login page
    if (isOnLogin) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL("/", req.url));
        }
        // 登录页面添加缓存头（静态页面）
        const response = NextResponse.next();
        response.headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
        return response;
    }

    // Protect all other routes
    if (!isLoggedIn) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // 已登录页面：短时间缓存，减少重复请求的 auth 验证压力
    const response = NextResponse.next();
    response.headers.set("Cache-Control", "private, max-age=30, stale-while-revalidate=60");
    return response;
});

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|slides).*)"],
};
