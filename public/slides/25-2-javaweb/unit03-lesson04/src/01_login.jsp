<%--
  01_login.jsp - 用户登录表单页面
  ==========================================
  演示点：
  1. HTML 表单的基本结构
  2. POST 方法提交
  3. input 标签的 name 属性决定参数名

  与上节课衔接：学生已学过 HTML 表单，此处新增登录场景
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>用户登录</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 50px; }
        .login-box {
            width: 300px;
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
            background: #007bff;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background: #0056b3;
        }
        .error {
            color: red;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="login-box">
        <h2>用户登录</h2>

        <%-- 显示转发带来的错误信息 --%>
        <%
            String error = (String) request.getAttribute("error");
            if (error != null) {
        %>
        <p class="error"><%= error %></p>
        <%
            }
        %>

        <%--
          表单说明：
          - action: 提交到哪个页面处理
          - method="post": POST 方式提交，密码不会显示在 URL 中
          - name 属性：决定了 request.getParameter() 获取参数时使用的键名
        --%>
        <form action="02_doLogin.jsp" method="post">
            <label>用户名：</label>
            <input type="text" name="username" placeholder="请输入用户名" required>

            <label>密码：</label>
            <input type="password" name="password" placeholder="请输入密码" required>

            <input type="submit" value="登录">
        </form>

        <p style="text-align:center; margin-top:15px;">
            <a href="05_register.jsp">还没有账号？去注册</a>
        </p>
    </div>
</body>
</html>