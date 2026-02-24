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
            { id: "unit02-lesson04", title: "第4次课：HDFS命令实战与集群运维", available: true },
            { id: "unit03-lesson05", title: "第5次课：Hive安装与零售数仓初建", available: true },
            { id: "unit03-lesson06", title: "第6次课：HiveSQL查询与商业指标分析", available: true },
            { id: "unit03-lesson07", title: "第7次课：多表关联与门店经营决策", available: true },
            { id: "unit04-lesson08", title: "第8次课：Flume架构与基础采集配置", available: true },
            { id: "unit04-lesson09", title: "第9次课：Flume采集至HDFS与多门店汇聚", available: true },
            { id: "unit05-lesson10", title: "第10次课：HBase安装与NoSQL快速查询", available: true },
            { id: "unit05-lesson11", title: "第11次课：会员画像与HBase进阶查询", available: true },
            { id: "unit06-lesson12", title: "第12次课：Zookeeper集群部署与分布式协调", available: true },
            { id: "unit06-lesson13", title: "第13次课：HDFS高可用与双11宕机模拟", available: true },
            { id: "unit07-lesson14", title: "第14次课：综合项目启动与架构设计", available: true },
            { id: "unit07-lesson15", title: "第15次课：数仓建模与经营分析大屏", available: true },
            { id: "unit07-lesson16", title: "第16次课：期末路演与课程总结", available: true },
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
