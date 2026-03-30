import { auth, signOut } from "@/auth";
import { courses } from "@/config/courses";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">📚 课程 Slides</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              👤 {session.user?.name}
            </span>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              <button
                type="submit"
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                退出
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">我的课程</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="block bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-gray-100"
            >
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {course.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{course.description}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  {course.semester}
                </span>
                <span className="text-xs text-gray-400">
                  {course.units.length} 次课
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
