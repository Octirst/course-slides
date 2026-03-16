<%--
  捉虫大师：Bug排查实战
  教学要点：通过找错强化JSP语法细节

  使用方法：
  1. 将文件发给学生（不告诉他们有Bug）
  2. 让他们在Tomcat中运行
  3. 观察报错信息，尝试找出所有Bug并修复

  包含的3处Bug：
  1. 表达式加分号：<%= counter; %> （编译错误）
  2. 变量未声明：<%= msg %> （找不到符号）
  3. 指令位置错误：import放在body后面（位置非法）
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
    <h2>【捉虫大师】找出3处Bug！</h2>

    <%-- BUG 1: 表达式不能加分号 --%>
    <%! int counter = 0; %>
    <% counter++; %>
    <p>访问次数：<%= counter; %></p>  <!-- 错误：表达式末尾不能加分号！ -->

    <%-- BUG 2: 变量msg未声明就使用 --%>
    <p>欢迎消息：<%= msg %></p>  <!-- 错误：msg变量未定义 -->

    <%-- BUG 3: page指令位置错误 --%>
    <p>当前时间：<%= new java.util.Date() %></p>

</body>
<%-- BUG 3: import指令必须写在文件最前面，不能放在body后面 --%>
<%@ page import="java.util.*" %>
</html>

<%--
===============================================
【答案与解析】

Bug 1：表达式加分号
- 错误代码：<%= counter; %>
- 正确代码：<%= counter %>
- 报错信息：Syntax error, insert "}" to complete Block
- 原因：表达式<%= %>的值直接输出到页面，是一个值，不是语句，不能加分号

Bug 2：变量未声明
- 错误代码：<%= msg %>
- 正确代码：<% String msg = "欢迎"; %><%= msg %>
- 报错信息：cannot find symbol: variable msg
- 原因：msg变量从未声明，Java不知道msg是什么

Bug 3：指令位置错误
- 错误位置：<%@ page import %> 放在了</body>后面
- 正确位置：必须放在JSP文件最开头，<%@ page contentType...%> 附近
- 报错信息：Invalid location of page directive
- 原因：指令用于配置页面，必须在任何输出之前

===============================================
--%>
