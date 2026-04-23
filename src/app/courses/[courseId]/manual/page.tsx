import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import SidebarNav from "@/components/SidebarNav";

interface PageProps {
    params: Promise<{ courseId: string }>;
}

export default async function ManualPage({ params }: PageProps) {
    const session = await auth();
    if (!session) {
        redirect("/login");
    }

    const { courseId } = await params;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar Navigation - fixed position on left */}
            <SidebarNav />

            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="px-4 py-4 flex justify-center items-center">
                    <div className="max-w-4xl w-full flex justify-between items-center">
                        <Link
                            href={`/courses/${courseId}`}
                            className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                            ← 返回课程
                        </Link>
                        <h1 className="text-lg font-semibold text-gray-800">大数据平台部署操作手册</h1>
                    </div>
                </div>
            </header>

            {/* Content - centered with sidebar offset on left */}
            <main className="flex justify-center px-4 py-6">
                {/* Left spacer for sidebar */}
                <div className="w-60 shrink-0" />

                {/* Main Content - centered */}
                <div className="max-w-4xl flex-1">
                    <div className="space-y-8">

                        {/* 第一章：伪分布式搭建 */}
                        <section id="chapter1" className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-bold text-blue-700 mb-4 border-b pb-2">
                                第一章：伪分布式搭建（master 节点）
                            </h2>

                        <div className="space-y-4">
                            {/* 1.1 Windows上传JDK */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.1 从 Windows 上传 JDK 安装包</h3>
                                <div className="bg-blue-50 p-3 rounded mb-2 text-sm">
                                    <p className="text-blue-700">操作步骤（MobaXterm）：</p>
                                    <ol className="list-decimal list-inside text-gray-600 space-y-1 mt-2">
                                        <li>打开 MobaXterm，连接到虚拟机</li>
                                        <li>在左侧文件浏览器中，导航到 <code className="bg-gray-200 px-1 rounded">/opt/software</code> 目录</li>
                                        <li>从 Windows 拖拽 <code className="bg-gray-200 px-1 rounded">jdk-8u281-linux-x64.tar.gz</code> 到该目录</li>
                                        <li>等待上传完成（约 150MB）</li>
                                    </ol>
                                </div>
                                <p className="text-gray-600 text-sm">作用：将 JDK 安装包从 Windows 传输到 Linux 虚拟机</p>
                            </div>

                            {/* 1.2 解压JDK */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.2 解压 JDK 安装包</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>cd /opt/software  # 进入安装包目录</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>tar -zxvf jdk-8u281-linux-x64.tar.gz -C /opt/module/  # 解压JDK到/opt/module/</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：将压缩包解压到指定目录，-C 表示指定目标目录</p>
                            </div>

                            {/* 1.3 重命名JDK目录 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.3 重命名 JDK 目录（简化路径）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>mv /opt/module/jdk1.8.0_281 /opt/module/jdk  # 重命名为jdk</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：简化目录名，方便后续配置环境变量</p>
                            </div>

                            {/* 1.4 创建环境变量文件 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.4 创建环境变量文件</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi /etc/profile.d/my_env.sh  # 创建自定义环境变量文件</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：使用独立的环境变量文件，避免修改系统默认配置</p>
                            </div>

                            {/* 1.5 编辑环境变量文件 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.5 编辑环境变量文件（追加内容）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 my_env.sh 文件中追加以下内容：</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div># JAVA_HOME</div>
                                    <div>export JAVA_HOME=/opt/module/jdk</div>
                                    <div>export PATH=$PATH:$JAVA_HOME/bin</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：设置 JAVA_HOME 环境变量，让系统知道 Java 的安装位置</p>
                            </div>

                            {/* 1.6 使环境变量生效 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.6 使环境变量生效</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>source /etc/profile.d/my_env.sh  # 加载环境变量</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：让刚配置的环境变量立即生效</p>
                            </div>

                            {/* 1.7 验证JDK */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.7 验证 JDK 安装成功</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>java -version  # 查看Java版本</div>
                                </div>
                                <div className="bg-yellow-50 p-2 rounded text-sm text-yellow-700">
                                    应显示：java version "1.8.0_281（如果不是也没关系，centos7中默认的Java版本是1.8.0_261）"
                                </div>
                            </div>

                            {/* 1.8 SSH免密登录 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.8 配置 SSH 免密登录（master 自己）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>ssh-keygen -t rsa  # 生成RSA密钥对（连按3次回车）</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>ssh-copy-id localhost  # 将公钥复制到当前主机（输入yes和密码）</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：让当前主机能免密登录自己，Hadoop 启动脚本需要</p>
                            </div>

                            {/* 1.9 Windows上传Hadoop */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.9 从 Windows 上传 Hadoop 安装包</h3>
                                <div className="bg-blue-50 p-3 rounded mb-2 text-sm">
                                    <p className="text-blue-700">操作步骤（MobaXterm）：</p>
                                    <ol className="list-decimal list-inside text-gray-600 space-y-1 mt-2">
                                        <li>在左侧文件浏览器中，确认在 <code className="bg-gray-200 px-1 rounded">/opt/software</code> 目录</li>
                                        <li>从 Windows 拖拽 <code className="bg-gray-200 px-1 rounded">hadoop-3.2.1.tar.gz</code> 到该目录</li>
                                        <li>等待上传完成（约 300MB）</li>
                                    </ol>
                                </div>
                                <p className="text-gray-600 text-sm">作用：将 Hadoop 安装包从 Windows 传输到 Linux 虚拟机</p>
                            </div>

                            {/* 1.10 解压Hadoop */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.10 解压 Hadoop 安装包</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>cd /opt/software  # 进入安装包目录</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>tar -zxvf hadoop-3.2.1.tar.gz -C /opt/module/  # 解压Hadoop到/opt/module/</div>
                                </div>
                            </div>

                            {/* 1.11 重命名Hadoop */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.11 重命名 Hadoop 目录</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>mv /opt/module/hadoop-3.2.1 /opt/module/hadoop  # 重命名为hadoop</div>
                                </div>
                            </div>

                            {/* 1.12 编辑环境变量追加Hadoop */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.12 在环境变量文件中追加 Hadoop 配置</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi /etc/profile.d/my_env.sh  # 打开环境变量文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在文件末尾追加以下内容：</div>
                                    <div># HADOOP_HOME</div>
                                    <div>export HADOOP_HOME=/opt/module/hadoop</div>
                                    <div>export PATH=$PATH:$HADOOP_HOME/bin</div>
                                    <div>export PATH=$PATH:$HADOOP_HOME/sbin</div>
                                </div>
                            </div>

                            {/* 1.13 使环境变量生效 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.13 使环境变量生效</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>source /etc/profile.d/my_env.sh  # 加载环境变量</div>
                                </div>
                            </div>

                            {/* 1.14 验证Hadoop */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.14 验证 Hadoop 安装成功</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>hadoop version  # 查看Hadoop版本</div>
                                </div>
                                <div className="bg-yellow-50 p-2 rounded text-sm text-yellow-700">
                                    应显示：Hadoop 3.2.1
                                </div>
                            </div>

                            {/* 配置Hadoop的5个文件 */}
                            <div className="bg-red-50 p-4 rounded border border-red-200 mt-6">
                                <p className="text-red-700 font-semibold text-lg">⚠️ 重要：配置 Hadoop 的 5 个配置文件</p>
                                <p className="text-sm text-gray-600">以下文件都在 <code className="bg-gray-200 px-1 rounded">$HADOOP_HOME/etc/hadoop/</code> 目录下</p>
                            </div>

                            {/* 1.15 hadoop-env.sh */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.15 配置 hadoop-env.sh（追加内容）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi $HADOOP_HOME/etc/hadoop/hadoop-env.sh  # 打开Hadoop环境配置文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在文件末尾追加以下5行内容：</div>
                                    <div>export JAVA_HOME=/opt/module/jdk</div>
                                    <div>export HDFS_NAMENODE_USER=root</div>
                                    <div>export HDFS_DATANODE_USER=root</div>
                                    <div>export HDFS_SECONDARYNAMENODE_USER=root</div>
                                    <div>export YARN_RESOURCEMANAGER_USER=root</div>
                                    <div>export YARN_NODEMANAGER_USER=root</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：指定 JAVA_HOME 路径，设置 Hadoop 服务运行用户</p>
                            </div>

                            {/* 1.16 core-site.xml */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.16 配置 core-site.xml（修改内容）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi $HADOOP_HOME/etc/hadoop/core-site.xml  # 打开核心配置文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 &lt;configuration&gt; 标签内添加以下内容：</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;fs.defaultFS&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;hdfs://localhost:9000&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;hadoop.tmp.dir&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;/opt/module/hadoop/data/tmp&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：设置 HDFS 默认访问地址和临时目录</p>
                            </div>

                            {/* 1.17 hdfs-site.xml */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.17 配置 hdfs-site.xml（修改内容）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi $HADOOP_HOME/etc/hadoop/hdfs-site.xml  # 打开HDFS配置文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 &lt;configuration&gt; 标签内添加以下内容：</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;dfs.replication&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;1&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;dfs.namenode.http-address&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;0.0.0.0:9870&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：设置副本数为1（伪分布式只有一个节点），WebUI端口9870</p>
                            </div>

                            {/* 1.18 yarn-site.xml */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.18 配置 yarn-site.xml（修改内容）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi $HADOOP_HOME/etc/hadoop/yarn-site.xml  # 打开YARN配置文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 &lt;configuration&gt; 标签内添加以下内容：</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;yarn.resourcemanager.hostname&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;localhost&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;yarn.nodemanager.aux-services&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;mapreduce_shuffle&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;yarn.nodemanager.vmem-check-enabled&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;false&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：设置 ResourceManager 地址和 NodeManager 辅助服务</p>
                            </div>

                            {/* 1.19 mapred-site.xml */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.19 配置 mapred-site.xml（修改内容）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>cp $HADOOP_HOME/etc/hadoop/mapred-site.xml.template $HADOOP_HOME/etc/hadoop/mapred-site.xml  # 复制模板文件</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi $HADOOP_HOME/etc/hadoop/mapred-site.xml  # 打开MapReduce配置文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 &lt;configuration&gt; 标签内添加以下内容：</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;mapreduce.framework.name&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;yarn&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：指定 MapReduce 运行在 YARN 框架上</p>
                            </div>

                            {/* 1.20 格式化NameNode */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.20 格式化 NameNode ⚠️ 只执行一次！</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>hdfs namenode -format  # 初始化HDFS文件系统元数据</div>
                                </div>
                                <div className="bg-red-50 p-2 rounded text-sm text-red-700">
                                    ⚠️ 警告：此命令只执行一次！重复格式化会导致 clusterID 不一致！
                                </div>
                            </div>

                            {/* 1.21 启动集群 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.21 启动伪分布式集群</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>start-dfs.sh  # 启动HDFS服务（NameNode、DataNode）</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>start-yarn.sh  # 启动YARN服务（ResourceManager、NodeManager）</div>
                                </div>
                            </div>

                            {/* 1.22 验证启动 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.22 验证集群启动成功</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>jps  # 查看Java进程</div>
                                </div>
                                <div className="bg-yellow-50 p-2 rounded text-sm text-yellow-700">
                                    应看到：NameNode、DataNode、ResourceManager、NodeManager、Jps（5个进程）
                                </div>
                            </div>

                            {/* 1.23 WebUI验证 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">1.23 WebUI 验证</h3>
                                <div className="bg-blue-50 p-3 rounded text-sm">
                                    <p className="text-blue-700">在 Windows 浏览器访问：</p>
                                    <p className="text-gray-600 mt-2">HDFS WebUI：<code className="bg-gray-200 px-1 rounded">http://虚拟机IP:9870</code></p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 第二章：完全分布式搭建 */}
                    <section id="chapter2" className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-bold text-green-700 mb-4 border-b pb-2">
                            第二章：完全分布式搭建（三节点）
                        </h2>

                        <div className="bg-yellow-50 p-4 rounded border border-yellow-200 mb-4">
                            <p className="text-yellow-700 font-semibold">前置条件</p>
                            <p className="text-sm">伪分布式集群已在 master 节点正常运行</p>
                        </div>

                        <div className="space-y-4">
                            {/* 2.1 关闭master */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.1 关闭 master 虚拟机</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>poweroff  # 关闭虚拟机</div>
                                </div>
                                <div className="bg-red-50 p-2 rounded text-sm text-red-700">
                                    ⚠️ 克隆前必须关机！
                                </div>
                            </div>

                            {/* 2.2 克隆虚拟机 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.2 在 VMware 中克隆虚拟机</h3>
                                <div className="bg-blue-50 p-3 rounded text-sm">
                                    <ol className="list-decimal list-inside text-gray-600 space-y-1">
                                        <li>VMware → 右键 master → 管理 → 克隆</li>
                                        <li>克隆类型：创建完整克隆</li>
                                        <li>第一次克隆：虚拟机名称设为 <strong>slave1</strong></li>
                                        <li>第二次克隆：虚拟机名称设为 <strong>slave2</strong></li>
                                        <li>启动 slave1、slave2</li>
                                    </ol>
                                </div>
                            </div>

                            {/* 2.3 修改slave1主机名 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.3 在 slave1 上修改主机名</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>hostnamectl set-hostname slave1  # 设置主机名为slave1</div>
                                </div>
                            </div>

                            {/* 2.4 修改slave1IP */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.4 在 slave1 上修改 IP 地址</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi /etc/sysconfig/network-scripts/ifcfg-ens33  # 打开网卡配置文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 修改以下内容：</div>
                                    <div>IPADDR=192.168.38.131  # 改为slave1的IP</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 删除UUID行（让系统重新生成）</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>systemctl restart network  # 重启网络服务</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：避免 IP 和 UUID 冲突导致网络异常</p>
                            </div>

                            {/* 2.5 slave2同理 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.5 在 slave2 上执行相同操作</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>hostnamectl set-hostname slave2  # 设置主机名为slave2</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi /etc/sysconfig/network-scripts/ifcfg-ens33  # IP改为192.168.38.132</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>systemctl restart network  # 重启网络服务</div>
                                </div>
                            </div>

                            {/* 2.6 关闭防火墙（三台） */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.6 关闭防火墙（三台机器都要执行）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>systemctl stop firewalld  # 停止防火墙服务</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>systemctl disable firewalld  # 禁止防火墙开机启动</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：防止防火墙阻止 Hadoop 通信端口</p>
                            </div>

                            {/* 2.7 配置hosts（三台） */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.7 配置 hosts 文件（三台机器都要执行）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi /etc/hosts  # 打开hosts文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在文件末尾追加以下内容：</div>
                                    <div>192.168.38.130 master</div>
                                    <div>192.168.38.131 slave1</div>
                                    <div>192.168.38.132 slave2</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：主机名解析，让节点能通过主机名互相访问</p>
                            </div>

                            {/* 2.8 SSH免密互通 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.8 配置 SSH 免密互通（在 master 上执行）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>ssh-copy-id slave1  # 将公钥复制到slave1</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>ssh-copy-id slave2  # 将公钥复制到slave2</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：让 master 能免密登录 slave1、slave2</p>
                            </div>

                            {/* 2.9 SSH免密反向 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.9 在 slave1、slave2 上配置 SSH 免密登录 master</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 slave1 上执行：</div>
                                    <div>ssh-keygen -t rsa  # 生成密钥</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>ssh-copy-id master  # 复制公钥到master</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 slave2 上执行相同操作</div>
                                </div>
                            </div>

                            {/* 2.10 验证SSH免密 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.10 验证 SSH 免密登录是否成功</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 master 上测试：</div>
                                    <div>ssh slave1  # 应能免密登录，无需输入密码</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>ssh slave2  # 应能免密登录</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 slave1 上测试：</div>
                                    <div>ssh master  # 应能免密登录</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div className="text-yellow-400"># 在 slave2 上测试：</div>
                                    <div>ssh master  # 应能免密登录</div>
                                </div>
                                <div className="bg-yellow-50 p-2 rounded text-sm text-yellow-700">
                                    测试成功后，输入 exit 退出 SSH 会话
                                </div>
                            </div>

                            {/* 2.11 修改core-site.xml */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.11 在 master 上修改 core-site.xml</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi $HADOOP_HOME/etc/hadoop/core-site.xml  # 打开核心配置文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 将 localhost 改为 master：</div>
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;fs.defaultFS&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;hdfs://master:9000&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                            </div>

                            {/* 2.12 修改hdfs-site.xml */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.12 在 master 上修改 hdfs-site.xml</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi $HADOOP_HOME/etc/hadoop/hdfs-site.xml  # 打开HDFS配置文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 将副本数改为 3：</div>
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;dfs.replication&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;3&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                            </div>

                            {/* 2.13 修改yarn-site.xml */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.13 在 master 上修改 yarn-site.xml</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi $HADOOP_HOME/etc/hadoop/yarn-site.xml  # 打开YARN配置文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 将 localhost 改为 master：</div>
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;yarn.resourcemanager.hostname&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;master&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                            </div>

                            {/* 2.14 配置workers */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.14 配置 workers 文件</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi $HADOOP_HOME/etc/hadoop/workers  # 打开workers文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 替换 localhost 为以下内容（删除localhost，添加三行）：</div>
                                    <div>master</div>
                                    <div>slave1</div>
                                    <div>slave2</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：告诉 Hadoop 哪些节点运行 DataNode</p>
                            </div>

                            {/* 2.15 分发配置文件 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.15 分发配置文件到 slave 节点</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>scp -r $HADOOP_HOME/etc/hadoop slave1:$HADOOP_HOME/etc/  # 复制到slave1</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>scp -r $HADOOP_HOME/etc/hadoop slave2:$HADOOP_HOME/etc/  # 复制到slave2</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：让 slave 节点使用相同配置</p>
                            </div>

                            {/* 2.16 删除旧数据 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.16 删除旧数据目录（三台机器都要执行）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>rm -rf $HADOOP_HOME/data  # 删除数据目录</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>rm -rf $HADOOP_HOME/logs  # 删除日志目录</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>rm -rf $HADOOP_HOME/tmp  # 删除临时目录</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：避免 clusterID 不一致导致 DataNode 无法启动</p>
                            </div>

                            {/* 2.17 格式化NameNode */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.17 格式化 NameNode（只在 master 上执行）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>hdfs namenode -format  # 初始化HDFS元数据</div>
                                </div>
                                <div className="bg-red-50 p-2 rounded text-sm text-red-700">
                                    ⚠️ 只在 master 上执行一次！不要在 slave 上执行！
                                </div>
                            </div>

                            {/* 2.18 启动集群 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.18 启动完全分布式集群（在 master 上执行）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>start-all.sh  # 启动HDFS和YARN（会自动启动slave节点）</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                
                                <div className="text-yellow-400"># 也可以用下面两个命令代替</div>
                                    <div>start-dfs.sh  # 启动HDFS服务</div>
                                    <div>start-yarn.sh  # 启动YARN服务（会自动启动slave节点）</div>
                                </div>
                            </div>

                            {/* 2.19 验证master */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.19 在 master 上验证进程</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>jps  # 查看Java进程</div>
                                </div>
                                <div className="bg-yellow-50 p-2 rounded text-sm text-yellow-700">
                                    master 应看到：NameNode、ResourceManager、DataNode、NodeManager、SecondaryNameNode、Jps
                                </div>
                            </div>

                            {/* 2.20 验证slave */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.20 在 slave1、slave2 上验证进程</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>jps  # 查看Java进程</div>
                                </div>
                                <div className="bg-yellow-50 p-2 rounded text-sm text-yellow-700">
                                    slave 应看到：DataNode、NodeManager、Jps
                                </div>
                            </div>

                            {/* 2.21 WebUI验证 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">2.21 WebUI 验证集群状态</h3>
                                <div className="bg-blue-50 p-3 rounded text-sm">
                                    <p className="text-blue-700">在 Windows 浏览器访问：</p>
                                    <p className="text-gray-600 mt-2">HDFS WebUI：<code className="bg-gray-200 px-1 rounded">http://master的IP:9870</code></p>
                                    <p className="text-gray-600">应显示 <strong>Live Nodes: 3</strong>（slave1、slave2、master）</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 第三章：HDFS操作 */}
                    <section id="chapter3" className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-bold text-orange-700 mb-4 border-b pb-2">
                            第三章：HDFS 文件操作
                        </h2>

                        <div className="space-y-4">
                            {/* 3.1 创建目录 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">3.1 创建 HDFS 目录</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>hdfs dfs -mkdir -p /user/student/data  # 创建多级目录</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：-p 参数表示创建多级目录，父目录不存在也能创建</p>
                            </div>

                            {/* 3.2 上传文件 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">3.2 从本地上传文件到 HDFS</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>echo "Hello HDFS" &gt; /tmp/test.txt  # 创建本地测试文件</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>hdfs dfs -put /tmp/test.txt /user/student/data/  # 上传到HDFS</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：-put 将本地文件上传到 HDFS</p>
                            </div>

                            {/* 3.3 列出目录 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">3.3 列出 HDFS 目录内容</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>hdfs dfs -ls /user/student/data/  # 列出目录内容</div>
                                </div>
                            </div>

                            {/* 3.4 查看文件 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">3.4 查看 HDFS 文件内容</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>hdfs dfs -cat /user/student/data/test.txt  # 查看文件全部内容</div>
                                </div>
                            </div>

                            {/* 3.5 下载文件 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">3.5 从 HDFS 下载文件到本地</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>hdfs dfs -get /user/student/data/test.txt /tmp/download.txt  # 下载到本地</div>
                                </div>
                            </div>

                            {/* 3.6 统计大小 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">3.6 统计目录大小</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>hdfs dfs -du -h /user/student/data/  # 显示人类可读大小</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：-h 参数显示 KB、MB 等易读格式</p>
                            </div>

                            {/* 3.7 删除文件 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">3.7 删除 HDFS 文件</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># ⚠️ 删除前先确认：</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>hdfs dfs -ls /user/student/data/  # 先查看要删除的内容</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>hdfs dfs -rm /user/student/data/test.txt  # 删除文件</div>
                                </div>
                            </div>

                            {/* 3.8 集群状态 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">3.8 查看 HDFS 集群状态</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>hdfs dfsadmin -report  # 查看集群报告</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：显示 Live Nodes 数量、容量、使用率</p>
                            </div>
                        </div>
                    </section>

                    {/* 第四章：Hive部署 */}
                    <section id="chapter4" className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-bold text-indigo-700 mb-4 border-b pb-2">
                            第四章：Hive 部署（远程模式）
                        </h2>

                        <div className="bg-yellow-50 p-4 rounded border border-yellow-200 mb-4">
                            <p className="text-yellow-700 font-semibold">前置条件</p>
                            <p className="text-sm">Hadoop 完全分布式集群已正常运行</p>
                        </div>

                        <div className="space-y-4">
                            {/* 4.1 卸载MariaDB */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.1 卸载 MariaDB（CentOS 7 默认安装）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>rp mbm -qa | grep mariadb  # 查看是否安装了MariaDB</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>rpm -e --nodeps mariadb-libs  # 强制卸载MariaDB（忽略依赖）</div>
                                </div>
                            </div>

                            {/* 4.2 Windows上传MySQL */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.2 从 Windows 上传 MySQL 安装包</h3>
                                <div className="bg-blue-50 p-3 rounded mb-2 text-sm">
                                    <ol className="list-decimal list-inside text-gray-600 space-y-1">
                                        <li>在 MobaXterm 左侧导航到 <code className="bg-gray-200 px-1 rounded">/opt/software</code></li>
                                        <li>拖拽 <code className="bg-gray-200 px-1 rounded">mysql-5.7.28-1.el7.x86_64.rpm-bundle.tar</code> 到该目录</li>
                                        <li>等待上传完成</li>
                                    </ol>
                                </div>
                            </div>

                            {/* 4.3 解压MySQL */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.3 解压 MySQL RPM 包</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>cd /opt/software  # 进入安装包目录</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>mkdir mysql  # 创建解压目录</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>tar -xvf mysql-5.7.28-1.el7.x86_64.rpm-bundle.tar -C ./mysql  # 解压到mysql目录</div>
                                </div>
                            </div>

                            {/* 4.4 安装MySQL */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.4 按顺序安装 MySQL RPM 包</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>rpm -ivh mysql-community-common-5.7.28-1.el7.x86_64.rpm  # 安装common包</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>rpm -ivh mysql-community-libs-5.7.28-1.el7.x86_64.rpm  # 安装libs包</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>rpm -ivh mysql-community-libs-compat-5.7.28-1.el7.x86_64.rpm  # 安装libs-compat包</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>rpm -ivh mysql-community-client-5.7.28-1.el7.x86_64.rpm  # 安装client包</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>rpm -ivh mysql-community-server-5.7.28-1.el7.x86_64.rpm  # 安装server包</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：必须按顺序安装，因为有依赖关系</p>
                            </div>

                            {/* 4.5 初始化MySQL */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.5 初始化 MySQL 数据库</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>mysqld --initialize-insecure --user=mysql  # 初始化（不生成临时密码）</div>
                                </div>
                            </div>

                            {/* 4.6 启动MySQL */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.6 启动 MySQL 服务</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>systemctl start mysqld  # 启动MySQL服务</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>systemctl enable mysqld  # 设置开机自启</div>
                                </div>
                            </div>

                            {/* 4.7 设置root密码 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.7 登录 MySQL 并设置 root 密码</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>mysql -u root  # 登录MySQL（首次无密码）</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 MySQL 中执行以下命令：</div>
                                    <div>SET PASSWORD FOR 'root'@'localhost' = PASSWORD('000000');  # 设置root密码</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div>FLUSH PRIVILEGES;  # 刷新权限</div>
                                </div>
                            </div>

                            {/* 4.8 配置root远程访问 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.8 配置 root 用户允许远程访问</h3>
                                <div className="bg-red-50 p-3 rounded mb-2 text-sm text-red-700">
                                    <p className="font-semibold">⚠️ 必须配置：Hive 需要通过 JDBC 远程连接 MySQL</p>
                                    <p>默认 root 只允许 localhost 连接，无法从其他主机访问</p>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>mysql -u root -p000000  # 用root登录MySQL</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 MySQL 中执行：</div>
                                    <div>USE mysql;  # 切换到mysql数据库</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div>UPDATE user SET host='%' WHERE user='root';  # 修改root允许远程访问</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div>FLUSH PRIVILEGES;  # 刷新权限使配置生效</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div>exit  # 退出MySQL</div>
                                </div>
                                <p className="text-gray-600 text-sm">说明：'%' 表示允许从任何主机连接</p>
                            </div>

                            {/* 4.9 创建hive数据库 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.9 创建 Hive 元数据库</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>mysql -u root -p000000  # 用root登录MySQL</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 MySQL 中执行：</div>
                                    <div>CREATE DATABASE metastore CHARACTER SET utf8;  # 创建metastore数据库</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div>exit  # 退出MySQL</div>
                                </div>
                                <p className="text-gray-600 text-sm">说明：本课程直接使用 root 用户连接 MySQL，与教材保持一致</p>
                            </div>

                            {/* 4.10 Windows上传Hive */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.10 从 Windows 上传 Hive 安装包和 JDBC 驱动</h3>
                                <div className="bg-blue-50 p-3 rounded text-sm">
                                    <ol className="list-decimal list-inside text-gray-600 space-y-1">
                                        <li>拖拽 <code className="bg-gray-200 px-1 rounded">apache-hive-3.1.2-bin.tar.gz</code> 到 /opt/software</li>
                                        <li>拖拽 <code className="bg-gray-200 px-1 rounded">mysql-connector-java-5.1.32.jar</code> 到 /opt/software</li>
                                    </ol>
                                </div>
                            </div>

                            {/* 4.11 解压Hive */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.11 解压 Hive 安装包</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>tar -zxvf apache-hive-3.1.2-bin.tar.gz -C /opt/module/  # 解压Hive</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>mv /opt/module/apache-hive-3.1.2-bin /opt/module/hive  # 重命名</div>
                                </div>
                            </div>

                            {/* 4.12 配置Hive环境变量 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.12 在环境变量文件中追加 Hive 配置</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi /etc/profile.d/my_env.sh  # 打开环境变量文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在文件末尾追加：</div>
                                    <div># HIVE_HOME</div>
                                    <div>export HIVE_HOME=/opt/module/hive</div>
                                    <div>export PATH=$PATH:$HIVE_HOME/bin</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>source /etc/profile.d/my_env.sh  # 使环境变量生效</div>
                                </div>
                            </div>

                            {/* 4.13 上传JDBC驱动 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.13 上传 MySQL JDBC 驱动到 Hive lib 目录</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>cp /opt/software/mysql-connector-java-5.1.32.jar $HIVE_HOME/lib/  # 复制驱动</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：让 Hive 能连接 MySQL 元数据库</p>
                            </div>

                            {/* 4.14 配置hive-site.xml */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.14 配置 hive-site.xml</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi $HIVE_HOME/conf/hive-site.xml  # 创建配置文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 写入以下内容（使用 root 用户连接 MySQL）：</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div>&lt;?xml version="1.0" encoding="UTF-8"?&gt;</div>
                                    <div>&lt;?xml-stylesheet type="text/xsl" href="configuration.xsl"?&gt;</div>
                                    <div>&lt;configuration&gt;</div>
                                    <div>  &lt;property&gt;</div>
                                    <div>    &lt;name&gt;javax.jdo.option.ConnectionURL&lt;/name&gt;</div>
                                    <div>    &lt;value&gt;jdbc:mysql://master:3306/metastore?useSSL=false&lt;/value&gt;</div>
                                    <div>  &lt;/property&gt;</div>
                                    <div>  &lt;property&gt;</div>
                                    <div>    &lt;name&gt;javax.jdo.option.ConnectionDriverName&lt;/name&gt;</div>
                                    <div>    &lt;value&gt;com.mysql.jdbc.Driver&lt;/value&gt;</div>
                                    <div>  &lt;/property&gt;</div>
                                    <div>  &lt;property&gt;</div>
                                    <div>    &lt;name&gt;javax.jdo.option.ConnectionUserName&lt;/name&gt;</div>
                                    <div>    &lt;value&gt;root&lt;/value&gt;</div>
                                    <div>  &lt;/property&gt;</div>
                                    <div>  &lt;property&gt;</div>
                                    <div>    &lt;name&gt;javax.jdo.option.ConnectionPassword&lt;/name&gt;</div>
                                    <div>    &lt;value&gt;000000&lt;/value&gt;</div>
                                    <div>  &lt;/property&gt;</div>
                                    <div>  &lt;property&gt;</div>
                                    <div>    &lt;name&gt;hive.metastore.warehouse.dir&lt;/name&gt;</div>
                                    <div>    &lt;value&gt;/user/hive/warehouse&lt;/value&gt;</div>
                                    <div>  &lt;/property&gt;</div>
                                    <div>&lt;/configuration&gt;</div>
                                </div>
                            </div>

                            {/* 4.15 解决guava版本冲突 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.15 解决 Guava 版本冲突 ⚠️</h3>
                                <div className="bg-red-50 p-3 rounded mb-2 text-sm text-red-700">
                                    <p className="font-semibold">问题说明：</p>
                                    <p>Hadoop 3.x 使用 guava-27.0-jre.jar，Hive 3.1.2 使用 guava-19.0.jar</p>
                                    <p>版本不一致会导致初始化元数据报错</p>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 查看版本：</div>
                                    <div>ls $HADOOP_HOME/share/hadoop/common/lib/ | grep guava  # 查看Hadoop的guava版本</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>ls $HIVE_HOME/lib/ | grep guava  # 查看Hive的guava版本</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 解决方案：删除Hive低版本，复制Hadoop高版本</div>
                                    <div>rm $HIVE_HOME/lib/guava-19.0.jar  # 删除Hive的低版本guava</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>cp $HADOOP_HOME/share/hadoop/common/lib/guava-27.0-jre.jar $HIVE_HOME/lib/  # 复制高版本</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：让 Hive 使用与 Hadoop 相同版本的 Guava 库</p>
                            </div>

                            {/* 4.16 启动Hadoop */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.16 启动 Hadoop 集群 ⚠️</h3>
                                <div className="bg-yellow-50 p-2 rounded text-sm text-yellow-700 mb-2">
                                    初始化 Hive 元数据前，必须先启动 Hadoop！
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>start-all.sh  # 启动HDFS和YARN</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>jps  # 验证进程（应显示NameNode、DataNode等）</div>
                                </div>
                            </div>

                            {/* 4.17 初始化元数据 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.17 初始化 Hive 元数据库</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>schematool -dbType mysql -initSchema -verbose  # 初始化元数据到MySQL</div>
                                </div>
                                <div className="bg-green-50 p-2 rounded text-sm text-green-700">
                                    成功提示：schemaTool completed
                                </div>
                                <p className="text-gray-600 text-sm">作用：将 Hive 表结构信息写入 MySQL hive 数据库</p>
                            </div>

                            {/* 4.18 查看元数据库 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.18 查看 MySQL 元数据库</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>mysql -u root -p000000  # 登录MySQL</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 MySQL 中执行：</div>
                                    <div>SHOW DATABASES;  # 查看数据库列表（应显示hive）</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div>USE hive;  # 切换到hive数据库</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div>SHOW TABLES;  # 查看元数据表</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 查看关键元数据表：</div>
                                    <div>SELECT * FROM DBS;  # 查看数据库信息</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div>SELECT * FROM TBLS;  # 查看表信息（初始化后暂时为空）</div>
                                </div>
                                <p className="text-gray-600 text-sm">说明：DBS 存储数据库元数据，TBLS 存储表元数据，创建表后会有记录</p>
                            </div>

                            {/* 4.19 启动Hive */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.19 启动 Hive CLI</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>hive  # 启动Hive命令行客户端</div>
                                </div>
                            </div>

                            {/* 4.20 验证Hive */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.20 验证 Hive 安装成功</h3>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 Hive CLI 中执行：</div>
                                    <div>show databases;  # 查看数据库列表</div>
                                </div>
                                <div className="bg-yellow-50 p-2 rounded text-sm text-yellow-700">
                                    应显示：default 数据库
                                </div>
                            </div>

                            {/* Hive服务部署分隔 */}
                            <div className="bg-red-50 p-4 rounded border border-red-200 mt-6">
                                <p className="text-red-700 font-semibold text-lg">⚠️ 重要：部署 HiveServer2 和 MetaStore 服务</p>
                                <p className="text-sm text-gray-600">以下配置用于支持 JDBC 远程连接和多客户端并发访问</p>
                            </div>

                            {/* 4.21 HiveServer2与MetaStore介绍 */}
                            <div className="bg-gray-50 p-4 rounded mt-4">
                                <h3 className="font-semibold text-gray-700 mb-2">4.21 HiveServer2 与 MetaStore 服务介绍</h3>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <div className="font-bold text-blue-700 mb-2">HiveServer2</div>
                                        <div className="text-sm space-y-1">
                                            <div>• 提供 JDBC/ODBC 接口</div>
                                            <div>• 支持多客户端并发连接</div>
                                            <div>• 默认端口：10000</div>
                                            <div>• 类似 MySQL 服务端</div>
                                        </div>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-xl">
                                        <div className="font-bold text-green-700 mb-2">MetaStore</div>
                                        <div className="text-sm space-y-1">
                                            <div>• 管理元数据服务</div>
                                            <div>• 连接 MySQL 元数据库</div>
                                            <div>• 默认端口：9083</div>
                                            <div>• 为 HiveServer2 提供元数据</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 4.22 hive-site.xml追加服务配置 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.22 在 hive-site.xml 中追加服务配置</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi $HIVE_HOME/conf/hive-site.xml  # 打开配置文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 &lt;/configuration&gt; 标签之前追加以下内容：</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;hive.server2.thrift.port&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;10000&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;hive.server2.thrift.bind.host&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;master&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;hive.metastore.uris&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;thrift://master:9083&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                            </div>

                            {/* 4.23 core-site.xml代理用户配置 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.23 在 Hadoop core-site.xml 中添加代理用户配置</h3>
                                <div className="bg-red-50 p-3 rounded mb-2 text-sm text-red-700">
                                    <p className="font-semibold">⚠️ 必须配置：不配置此项，HiveServer2 启动后无法被远程连接！</p>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>vi $HADOOP_HOME/etc/hadoop/core-site.xml  # 打开Hadoop配置文件</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 &lt;configuration&gt; 标签内追加以下内容：</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;hadoop.proxyuser.root.hosts&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;*&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div>&lt;property&gt;</div>
                                    <div>  &lt;name&gt;hadoop.proxyuser.root.groups&lt;/name&gt;</div>
                                    <div>  &lt;value&gt;*&lt;/value&gt;</div>
                                    <div>&lt;/property&gt;</div>
                                </div>
                                <p className="text-gray-600 text-sm">说明：允许 root 用户代理任意主机和组的请求</p>
                            </div>

                            {/* 4.24 分发配置到slave节点 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.24 分发 core-site.xml 到 slave 节点</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>scp $HADOOP_HOME/etc/hadoop/core-site.xml slave1:$HADOOP_HOME/etc/hadoop/</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>scp $HADOOP_HOME/etc/hadoop/core-site.xml slave2:$HADOOP_HOME/etc/hadoop/</div>
                                </div>
                                <p className="text-gray-600 text-sm">说明：修改 Hadoop 配置后，需要分发到所有节点才能生效</p>
                            </div>

                            {/* 4.25 重启Hadoop集群 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.25 重启 Hadoop 集群使配置生效</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>stop-all.sh  # 停止HDFS和YARN</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>start-all.sh  # 重新启动HDFS和YARN</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>jps  # 验证进程正常</div>
                                </div>
                            </div>

                            {/* 4.26 启动Hive服务 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.26 启动 MetaStore 和 HiveServer2 服务</h3>
                                <div className="bg-yellow-50 p-3 rounded mb-2 text-sm text-yellow-700">
                                    启动顺序：先启动 MetaStore，再启动 HiveServer2
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>nohup hive --service metastore &gt; /tmp/metastore.log 2&gt;&amp;1 &amp;  # 启动MetaStore</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>sleep 3  # 等待MetaStore启动</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div>nohup hiveserver2 &gt; /tmp/hiveserver2.log 2&gt;&amp;1 &amp;  # 启动HiveServer2</div>
                                </div>
                                <p className="text-gray-600 text-sm">说明：nohup 让服务后台运行，终端关闭后进程不退出</p>
                            </div>

                            {/* 4.27 验证服务状态 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.27 验证 Hive 服务启动成功</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 查看进程：</div>
                                    <div>ps -ef | grep metastore | grep -v grep  # 查看MetaStore进程</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>ps -ef | grep HiveServer2 | grep -v grep  # 查看HiveServer2进程</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div className="text-yellow-400"># 查看端口：</div>
                                    <div>netstat -nltp | grep 9083  # MetaStore端口</div>
                                    <div>netstat -nltp | grep 10000  # HiveServer2端口</div>
                                </div>
                                <div className="bg-green-50 p-2 rounded text-sm text-green-700">
                                    成功标志：两个进程都在运行，端口9083和10000都在监听
                                </div>
                            </div>

                            {/* 4.28 停止Hive服务 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.28 停止 Hive 服务（可选）</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 停止 HiveServer2：</div>
                                    <div>ps -ef | grep HiveServer2 | grep -v grep | awk {'{'}print $2{'}'} | xargs kill -9</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div className="text-yellow-400"># 停止 MetaStore：</div>
                                    <div>ps -ef | grep metastore | grep -v grep | awk {'{'}print $2{'}'} | xargs kill -9</div>
                                </div>
                                <div className="bg-yellow-50 p-2 rounded text-sm text-yellow-700">
                                    注意：kill -9 强制终止，谨慎使用
                                </div>
                            </div>

                            {/* 4.29 Hive服务管理脚本 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">4.29 使用 hiveservices.sh 脚本管理服务（推荐）</h3>
                                <div className="bg-blue-50 p-3 rounded mb-2 text-sm">
                                    <p className="text-blue-700 font-semibold">脚本位置：05_hiveservices.sh</p>
                                    <p className="text-gray-600">提供 start/stop/restart/status 四种操作</p>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 1. 添加执行权限：</div>
                                    <div>chmod +x 05_hiveservices.sh</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 2. 查看端口对应进程：</div>
                                    <div>netstat -nltp | grep 9083   # MetaStore端口</div>
                                    <div>netstat -nltp | grep 10000  # HiveServer2端口</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 3. 关闭服务：</div>
                                    <div>./05_hiveservices.sh stop</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 4. 启动服务：</div>
                                    <div>./05_hiveservices.sh start</div>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
                                    <div className="text-yellow-400"># 其他操作：</div>
                                    <div>./05_hiveservices.sh status   # 查看服务状态</div>
                                    <div>./05_hiveservices.sh restart  # 重启服务</div>
                                </div>
                                <p className="text-gray-600 text-sm">说明：脚本会自动检查进程状态，避免重复启动</p>
                            </div>
                        </div>
                    </section>

                    {/* 第五章：Hive数据仓库操作 */}
                    <section id="chapter5" className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-bold text-teal-700 mb-4 border-b pb-2">
                            第五章：Hive 数据仓库操作（鲜生活超市）
                        </h2>

                        <div className="bg-yellow-50 p-4 rounded border border-yellow-200 mb-4">
                            <p className="text-yellow-700 font-semibold">前置条件</p>
                            <p className="text-sm">Hive 已安装并能启动 CLI，MySQL 元数据服务正常运行</p>
                        </div>

                        <div className="space-y-4">
                            {/* 5.1 Windows上传数据文件 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">5.1 从 Windows 上传数据文件</h3>
                                <div className="bg-blue-50 p-3 rounded mb-2 text-sm">
                                    <p className="text-blue-700">操作步骤（MobaXterm）：</p>
                                    <ol className="list-decimal list-inside text-gray-600 space-y-1 mt-2">
                                        <li>在左侧导航到 <code className="bg-gray-200 px-1 rounded">/opt/data</code> 目录（如不存在则创建）</li>
                                        <li>拖拽 <code className="bg-gray-200 px-1 rounded">products.csv</code>（50条产品数据）到该目录</li>
                                        <li>拖拽 <code className="bg-gray-200 px-1 rounded">users.csv</code>（100条用户数据）到该目录</li>
                                        <li>拖拽 <code className="bg-gray-200 px-1 rounded">orders.csv</code>（500条订单数据）到该目录</li>
                                    </ol>
                                </div>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 如果 /opt/data 目录不存在，先创建：</div>
                                    <div>mkdir -p /opt/data  # 创建数据目录</div>
                                </div>
                            </div>

                            {/* 5.2 创建数据库 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">5.2 创建 supermarket 数据库</h3>
                                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm mb-2">
                                    <div>hive  # 启动 Hive CLI</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 Hive CLI 中执行：</div>
                                    <div>CREATE DATABASE IF NOT EXISTS supermarket COMMENT '零售超市数据仓库';</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div>USE supermarket;  # 切换到 supermarket 数据库</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：创建鲜生活超市数据仓库</p>
                            </div>

                            {/* 5.3 创建products表 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">5.3 创建 products 产品信息表</h3>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 Hive CLI 中执行：</div>
                                    <div>CREATE TABLE products (</div>
                                    <div>    product_id INT COMMENT '产品ID',</div>
                                    <div>    product_name STRING COMMENT '产品名称',</div>
                                    <div>    category STRING COMMENT '产品类别',</div>
                                    <div>    price DOUBLE COMMENT '产品价格（元）',</div>
                                    <div>    stock INT COMMENT '库存数量'</div>
                                    <div>) COMMENT '产品信息表'</div>
                                    <div>ROW FORMAT DELIMITED FIELDS TERMINATED BY ','</div>
                                    <div>STORED AS TEXTFILE</div>
                                    <div>TBLPROPERTIES ('skip.header.line.count'='1');  # 跳过CSV首行</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：创建产品表，逗号分隔，跳过CSV表头</p>
                            </div>

                            {/* 5.4 创建users表 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">5.4 创建 users 用户信息表</h3>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 Hive CLI 中执行：</div>
                                    <div>CREATE TABLE users (</div>
                                    <div>    user_id INT COMMENT '用户ID',</div>
                                    <div>    user_name STRING COMMENT '用户姓名',</div>
                                    <div>    gender STRING COMMENT '性别',</div>
                                    <div>    age INT COMMENT '年龄',</div>
                                    <div>    city STRING COMMENT '所在城市'</div>
                                    <div>) COMMENT '用户信息表'</div>
                                    <div>ROW FORMAT DELIMITED FIELDS TERMINATED BY ','</div>
                                    <div>STORED AS TEXTFILE</div>
                                    <div>TBLPROPERTIES ('skip.header.line.count'='1');</div>
                                </div>
                            </div>

                            {/* 5.5 创建orders表 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">5.5 创建 orders 订单信息表</h3>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 Hive CLI 中执行：</div>
                                    <div>CREATE TABLE orders (</div>
                                    <div>    order_id BIGINT COMMENT '订单ID',</div>
                                    <div>    user_id INT COMMENT '用户ID',</div>
                                    <div>    product_id INT COMMENT '产品ID',</div>
                                    <div>    quantity INT COMMENT '购买数量',</div>
                                    <div>    order_date STRING COMMENT '订单日期',</div>
                                    <div>    store_id INT COMMENT '门店ID'</div>
                                    <div>) COMMENT '订单信息表'</div>
                                    <div>ROW FORMAT DELIMITED FIELDS TERMINATED BY ','</div>
                                    <div>STORED AS TEXTFILE</div>
                                    <div>TBLPROPERTIES ('skip.header.line.count'='1');</div>
                                </div>
                            </div>

                            {/* 5.6 查看创建的表 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">5.6 查看已创建的表</h3>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 Hive CLI 中执行：</div>
                                    <div>SHOW TABLES;  # 显示所有表</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div>DESCRIBE FORMATTED products;  # 查看 products 表详情</div>
                                </div>
                                <div className="bg-yellow-50 p-2 rounded text-sm text-yellow-700">
                                    应显示：products、users、orders 三张表
                                </div>
                            </div>

                            {/* 5.7 加载products数据 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">5.7 加载 products 数据到表</h3>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 Hive CLI 中执行：</div>
                                    <div>LOAD DATA LOCAL INPATH '/opt/data/products.csv' OVERWRITE INTO TABLE products;</div>
                                </div>
                                <p className="text-gray-600 text-sm">作用：从本地文件系统加载CSV数据到Hive表</p>
                            </div>

                            {/* 5.8 加载users数据 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">5.8 加载 users 数据到表</h3>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div className="text-yellow-400"># 在 Hive CLI 中执行：</div>
                                    <div>LOAD DATA LOCAL INPATH '/opt/data/users.csv' OVERWRITE INTO TABLE users;</div>
                                </div>
                            </div>

                            {/* 5.9 加载orders数据 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">5.9 加载 orders 数据到表</h3>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div className="text-yellow-400"># 在 Hive CLI 中执行：</div>
                                    <div>LOAD DATA LOCAL INPATH '/opt/data/orders.csv' OVERWRITE INTO TABLE orders;</div>
                                </div>
                            </div>

                            {/* 5.10 验证数据 */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">5.10 验证数据加载成功</h3>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div className="text-yellow-400"># 在 Hive CLI 中执行：</div>
                                    <div>SELECT * FROM products LIMIT 10;  # 查看前10条产品</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div>SELECT COUNT(*) AS product_count FROM products;  # 统计产品数量</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm mb-2">
                                    <div>SELECT COUNT(*) AS user_count FROM users;  # 统计用户数量</div>
                                </div>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div>SELECT COUNT(*) AS order_count FROM orders;  # 统计订单数量</div>
                                </div>
                                <div className="bg-green-50 p-2 rounded text-sm text-green-700">
                                    验证结果：products=50条、users=100条、orders=500条
                                </div>
                            </div>

                            {/* 5.11 退出Hive */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold text-gray-700 mb-2">5.11 退出 Hive CLI</h3>
                                <div className="bg-gray-900 text-white p-3 rounded font-mono text-sm">
                                    <div className="text-yellow-400"># 在 Hive CLI 中执行：</div>
                                    <div>quit;  # 或 exit; 退出 Hive</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 常见问题 */}
                    <section id="faq" className="bg-white rounded-lg shadow-sm p-6">
                        <h2 className="text-xl font-bold text-red-700 mb-4 border-b pb-2">
                            常见问题排查
                        </h2>

                        <div className="space-y-3">
                            <div className="bg-red-50 p-3 rounded">
                                <p className="font-semibold text-red-700">Q: jps 没有 DataNode</p>
                                <p className="text-sm text-gray-600">A: 检查 clusterID 是否一致，删除旧数据重新格式化</p>
                            </div>

                            <div className="bg-red-50 p-3 rounded">
                                <p className="font-semibold text-red-700">Q: ssh 连接失败</p>
                                <p className="text-sm text-gray-600">A: 检查 hosts 文件配置、防火墙是否关闭</p>
                            </div>

                            <div className="bg-red-50 p-3 rounded">
                                <p className="font-semibold text-red-700">Q: Hive 连接 MySQL 失败</p>
                                <p className="text-sm text-gray-600">A: 检查 hive-site.xml 配置、JDBC 驱动是否上传、MySQL用户权限</p>
                            </div>

                            <div className="bg-red-50 p-3 rounded">
                                <p className="font-semibold text-red-700">Q: hdfs dfs 命令报错</p>
                                <p className="text-sm text-gray-600">A: 检查 HADOOP_HOME 环境变量、集群是否启动</p>
                            </div>
                        </div>
                    </section>

                </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-8 py-4">
                <div className="flex justify-center px-4">
                    <div className="w-60 shrink-0" />
                    <div className="max-w-4xl flex-1 text-center text-sm text-gray-500">
                        大数据平台应用实战 · 更新日期：2026-04-22
                    </div>
                </div>
            </footer>
        </div>
    );
}