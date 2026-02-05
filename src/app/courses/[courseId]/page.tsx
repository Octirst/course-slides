import { auth } from "@/auth";
import { getCourse, courses } from "@/config/courses";
import Link from "next/link";
import { redirect, notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ courseId: string }>;
}

export async function generateStaticParams() {
    return courses.map((course) => ({
        courseId: course.id,
    }));
}

export default async function CoursePage({ params }: PageProps) {
    const session = await auth();
    if (!session) {
        redirect("/login");
    }

    const { courseId } = await params;
    const course = getCourse(courseId);

    if (!course) {
        notFound();
    }

    // Group units by their unit number (e.g., unit01, unit02)
    const groupedUnits = course.units.reduce(
        (acc, unit) => {
            const unitMatch = unit.id.match(/unit(\d+)/);
            const unitNum = unitMatch ? `Unit ${parseInt(unitMatch[1])}` : "其他";
            if (!acc[unitNum]) {
                acc[unitNum] = [];
            }
            acc[unitNum].push(unit);
            return acc;
        },
        {} as Record<string, typeof course.units>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <Link
                        href="/"
                        className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                        ← 返回课程列表
                    </Link>
                </div>
            </header>

            {/* Course Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="flex items-center gap-4">
                        <span className="text-5xl">{course.icon}</span>
                        <div>
                            <h1 className="text-2xl font-bold">{course.name}</h1>
                            <p className="text-blue-100 mt-1">{course.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Units List */}
            <main className="max-w-6xl mx-auto px-4 py-8">
                {Object.keys(groupedUnits).length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                        <p className="text-4xl mb-4">🚧</p>
                        <p>课程内容正在准备中...</p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        {Object.entries(groupedUnits).map(([unitName, units]) => (
                            <div key={unitName}>
                                <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                    {unitName}
                                </h2>
                                <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y">
                                    {units.map((unit) => (
                                        <div
                                            key={unit.id}
                                            className="p-4 flex justify-between items-center"
                                        >
                                            <span
                                                className={
                                                    unit.available ? "text-gray-800" : "text-gray-400"
                                                }
                                            >
                                                {unit.title}
                                            </span>
                                            {unit.available ? (
                                                <Link
                                                    href={`/slides/${course.id}/${unit.id}/`}
                                                    target="_blank"
                                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition"
                                                >
                                                    查看 Slides
                                                </Link>
                                            ) : (
                                                <span className="px-4 py-2 bg-gray-100 text-gray-400 text-sm rounded-lg">
                                                    待更新
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
