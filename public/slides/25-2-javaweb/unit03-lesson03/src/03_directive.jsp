<%--
  教学要点：
  1. <%@ page %> 是JSP指令，用于配置页面属性
  2. contentType="text/html;charset=UTF-8" 防止中文乱码（必须！）
  3. import="java.util.*" 导包，类似Java代码中的import语句
  4. 指令必须写在JSP文件最前面，不能放在<body>里

  对比记忆：
  - 指令：<%@ %>  配置页面
  - 声明：<%! %>  定义变量
  - 脚本：<% %>   执行逻辑
  - 表达式：<%= %> 输出内容
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" import="java.util.*" %>
<html>
<body>
    <h2>JSP 指令演示 (page)</h2>
    <p>通过 import 指令导入了 java.util.*</p>
    <%
        Date now = new Date();
        Calendar cal = Calendar.getInstance();
    %>
    <p>当前日期是：<%= now %></p>
    <p>当前年份是：<%= cal.get(Calendar.YEAR) %></p>
</body>
</html>
