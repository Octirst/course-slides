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
            { id: "unit01-lesson02", title: "第2次课：Linux进阶与网络配置", available: true },
            {
                id: "unit02-lesson03",
                title: "第3次课：Hadoop集群初体验",
                available: true,
            },
            { id: "unit02-lesson04", title: "第4次课：完全分布式集群搭建", available: true },
            { id: "unit03-lesson05", title: "第五次课：HDFS深入与MapReduce入门", available: false },
            { id: "unit03-lesson06", title: "第6次课：HiveSQL查询与商业指标分析", available: false },
            { id: "unit03-lesson07", title: "第7次课：多表关联与门店经营决策", available: false },
            { id: "unit04-lesson08", title: "第8次课：Flume架构与基础采集配置", available: false },
            { id: "unit04-lesson09", title: "第9次课：Flume采集至HDFS与多门店汇聚", available: false },
            { id: "unit05-lesson10", title: "第10次课：HBase安装与NoSQL快速查询", available: false },
            { id: "unit05-lesson11", title: "第11次课：会员画像与HBase进阶查询", available: false },
            { id: "unit06-lesson12", title: "第12次课：Zookeeper集群部署与分布式协调", available: false },
            { id: "unit06-lesson13", title: "第13次课：HDFS高可用与双11宕机模拟", available: false },
            { id: "unit07-lesson14", title: "第14次课：综合项目启动与架构设计", available: false },
            { id: "unit07-lesson15", title: "第15次课：数仓建模与经营分析大屏", available: false },
            { id: "unit07-lesson16", title: "第16次课：期末路演与课程总结", available: false },
        ],
    },
    {
        id: "25-2-javaweb",
        name: "Java Web 开发技术",
        semester: "2025-2",
        description: "Spring MVC 与 Web 核心技术",
        icon: "☕",
        units: [
            { id: "unit01-lesson01", title: "第1次课：Java Web 概述与开发环境搭建", available: true },
            { id: "unit02-lesson02", title: "第2次课：HTML 与 JavaScript 基础", available: true },
            { id: "unit03-lesson03", title: "第3次课：JSP 基本语法", available: true },
            { id: "unit03-lesson04", title: "第4次课：JSP 内置对象与会话管理", available: true },
            { id: "unit04-lesson05", title: "第5次课：JDBC 数据库访问（上）——连接与查询", available: true },
            { id: "unit04-lesson06", title: "第6次课：JDBC 数据库操作（下）——增删改与安全", available: false },
            { id: "unit05-lesson07", title: "第7次课：Servlet 编程基础", available: false },
            { id: "unit05-lesson08", title: "第8次课：Servlet 进阶与会员注册", available: false },
            { id: "unit06-lesson09", title: "第9次课：EL 表达式与 JSTL 标签", available: false },
            { id: "unit07-lesson10", title: "第10次课：Ajax 异步交互", available: false },
            { id: "unit08-lesson11", title: "第11次课：Spring 框架入门", available: false },
            { id: "unit09-lesson12", title: "第12次课：Spring MVC 入门", available: false },
            { id: "unit09-lesson13", title: "第13次课：Spring MVC 表单与 CRUD", available: false },
            { id: "unit10-lesson14", title: "第14次课：在线服装订购系统——需求分析与数据库设计", available: false },
            { id: "unit10-lesson15", title: "第15次课：劳动教育", available: false },
            { id: "unit10-lesson16", title: "第16次课：在线服装订购系统——功能开发与项目答辩", available: false },
        ],
    },
];

export function getCourse(courseId: string): Course | undefined {
    return courses.find((c) => c.id === courseId);
}
