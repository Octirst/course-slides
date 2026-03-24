<%--
  05_register.jsp - 用户注册页面（进阶版）
  ==========================================
  演示点：
  1. application 对象存储全局用户数据
  2. 注册信息被所有用户共享

  业务逻辑：
  - 将注册的用户名和密码存入 application
  - 登录时从 application 读取验证

  注意：实际项目中应该使用数据库，这里仅作演示
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.HashMap" %>
<%
    // 处理注册请求
    if ("POST".equalsIgnoreCase(request.getMethod())) {
        request.setCharacterEncoding("UTF-8");

        String newUsername = request.getParameter("username");
        String newPassword = request.getParameter("password");
        String confirmPassword = request.getParameter("confirmPassword");

        // 从 application 获取已注册用户列表
        HashMap<String, String> users = (HashMap<String, String>) application.getAttribute("registeredUsers");

        if (users == null) {
            users = new HashMap<String, String>();
        }

        // 验证
        if (newUsername == null || newUsername.trim().isEmpty()) {
            request.setAttribute("error", "用户名不能为空");
        } else if (users.containsKey(newUsername)) {
            request.setAttribute("error", "用户名已存在");
        } else if (!newPassword.equals(confirmPassword)) {
            request.setAttribute("error", "两次密码不一致");
        } else {
            // 注册成功，存入 application
            users.put(newUsername, newPassword);
            application.setAttribute("registeredUsers", users);

            // 重定向到登录页
            response.sendRedirect("01_login.jsp");
            return;
        }
    }
%>
<html>
<head>
    <title>用户注册</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 50px; }
        .register-box {
            width: 350px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 8px;
            margin: 10px 0;
            box-sizing: border-box;
        }
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background: #28a745;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background: #218838;
        }
        .error { color: red; margin-bottom: 10px; }
    </style>
</head>
<body>
    <div class="register-box">
        <h2>用户注册</h2>

        <%
            String error = (String) request.getAttribute("error");
            if (error != null) {
        %>
        <p class="error"><%= error %></p>
        <%
            }
        %>

        <form method="post">
            <label>用户名：</label>
            <input type="text" name="username" placeholder="请输入用户名" required>

            <label>密码：</label>
            <input type="password" name="password" placeholder="请输入密码" required>

            <label>确认密码：</label>
            <input type="password" name="confirmPassword" placeholder="请再次输入密码" required>

            <input type="submit" value="注册">
        </form>

        <p style="text-align:center; margin-top:15px;">
            <a href="01_login.jsp">已有账号？去登录</a>
        </p>
    </div>
</body>
</html>