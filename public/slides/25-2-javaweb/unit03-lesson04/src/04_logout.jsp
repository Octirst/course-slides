<%--
  04_logout.jsp - 退出登录页面
  ==========================================
  演示点：
  1. session.invalidate() 销毁会话
  2. 退出后重定向到登录页

  注意：
  - invalidate() 会清除该用户的所有 session 数据
  - 实际项目中可能还需要清除 Cookie
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    // 销毁 session，清除所有登录信息
    session.invalidate();

    // 重定向到登录页
    response.sendRedirect("01_login.jsp");
%>