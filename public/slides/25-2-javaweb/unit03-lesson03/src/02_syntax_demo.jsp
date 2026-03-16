<%--
  教学要点：
  1. <%! %> 声明：定义全局变量/方法，只在页面第一次加载时执行
  2. <% %> 脚本：Java代码片段，每次请求都执行
  3. <%= %> 表达式：输出到页面，末尾不能加分号！
  4. 对比记忆：声明带感叹号(!)，表达式带等号(=)，脚本啥也不带

  常见错误：
  - <%= msg; %>  ❌ 表达式不能加分号
  - <%= "msg" %>  ✅ 字符串要加引号
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
    <%-- 1. JSP 声明 (声明变量或方法) --%>
    <%! int clickCount = 0; %>

    <%-- 2. Java 小程序段 (处理逻辑) --%>
    <%
        clickCount++;
        String msg = "欢迎来到 Java 后端逻辑区";
    %>

    <%-- 3. JSP 表达式 (直接输出到页面) --%>
    <h3><%= msg %></h3>
    <p>本页面被访问次数：<%= clickCount %></p>
</body>
</html>
