<%--
  03_welcome.jsp - 登录成功欢迎页面
  ==========================================
  演示点：
  1. session.getAttribute() 读取登录状态
  2. 未登录拦截（直接访问此页面会被重定向）
  3. 显示 session 中存储的用户信息

  安全要点：
  - 每个需要登录的页面都必须检查 session
  - 未登录用户不能直接访问受保护页面
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    // 1. 检查用户是否已登录
    String loginUser = (String) session.getAttribute("loginUser");

    // 2. 未登录则重定向到登录页
    if (loginUser == null) {
        response.sendRedirect("01_login.jsp");
        return; // 必须return，否则后续代码仍会执行
    }

    // 3. 获取其他 session 信息
    String loginIP = (String) session.getAttribute("loginIP");
    java.util.Date loginTime = (java.util.Date) session.getAttribute("loginTime");
%>
<html>
<head>
    <title>欢迎页面</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 50px; }
        .welcome-box {
            max-width: 500px;
            margin: 0 auto;
            padding: 30px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background: #f9f9f9;
        }
        .user-info {
            background: #e8f4fd;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .logout-btn {
            display: inline-block;
            padding: 10px 20px;
            background: #dc3545;
            color: white;
            text-decoration: none;
            border-radius: 3px;
        }
        .logout-btn:hover {
            background: #c82333;
        }
    </style>
</head>
<body>
    <div class="welcome-box">
        <h2>🎉 登录成功</h2>

        <div class="user-info">
            <p><strong>欢迎你，<%= loginUser %>！</strong></p>
            <p>登录 IP：<%= loginIP %></p>
            <p>登录时间：<%= loginTime %></p>
        </div>

        <p>这里是 ShopOnline 系统的首页，登录后可以浏览商品、加入购物车...</p>

        <p style="margin-top: 30px;">
            <a href="04_logout.jsp" class="logout-btn">退出登录</a>
        </p>
    </div>
</body>
</html>