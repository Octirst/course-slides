<%--
  教学要点：
  1. <%= %> 是JSP表达式，服务端执行后输出到HTML
  2. 对比：HTML静态不变，JSP动态生成
  3. 关键提问：刷新页面，时间为什么变了？
  4. 思政点：JSP生命周期（翻译-编译-执行），基础打得牢，后续才高效
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
    <h2>ShopOnline - 服务器时间测试</h2>
    <p>当前时间是：<%= new java.util.Date() %></p>
    <p>刷新页面，看看秒数会不会变？</p>
</body>
</html>
