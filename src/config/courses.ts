export interface CourseUnit {
    id: string;
    title: string;
    available: boolean;
}

export interface Course {
    id: string;
    name: string;
    semester: string;
    description: string;
    icon: string;
    units: CourseUnit[];
}

export const courses: Course[] = [
    {
        id: "25-2-bigdata",
        name: "大数据平台应用实战",
        semester: "2025-2",
        description: "Hadoop 生态系统与零售数据分析",
        icon: "📊",
        units: [
            { id: "unit01-lesson01", title: "第1次课：初识大数据", available: true },
            {
                id: "unit01-lesson02",
                title: "第2次课：Linux进阶与网络配置",
                available: true,
            },
            {
                id: "unit02-lesson03",
                title: "第3次课：HDFS初探与伪分布式部署",
                available: true,
            },
        ],
    },
    {
        id: "25-2-javaweb",
        name: "Java Web 开发实战",
        semester: "2025-2",
        description: "Spring Boot 与前后端开发",
        icon: "☕",
        units: [],
    },
];

export function getCourse(courseId: string): Course | undefined {
    return courses.find((c) => c.id === courseId);
}
