import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const STUDENT_PASSWORD = process.env.STUDENT_PASSWORD || "bigdata2025";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "Student Login",
            credentials: {
                studentId: { label: "学号", type: "text" },
                password: { label: "密码", type: "password" },
            },
            async authorize(credentials) {
                const { studentId, password } = credentials as {
                    studentId: string;
                    password: string;
                };

                // Validate password
                if (password !== STUDENT_PASSWORD) {
                    return null;
                }

                // Validate student ID format (e.g., 10 digits)
                if (!/^\d{6,12}$/.test(studentId)) {
                    return null;
                }

                return {
                    id: studentId,
                    name: studentId,
                };
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnLogin = nextUrl.pathname === "/login";

            if (isOnLogin) {
                if (isLoggedIn) {
                    return Response.redirect(new URL("/", nextUrl));
                }
                return true;
            }

            return isLoggedIn;
        },
    },
});
