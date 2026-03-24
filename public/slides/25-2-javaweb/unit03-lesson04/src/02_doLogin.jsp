<%--
  02_doLogin.jsp - 登录处理页面
  ==========================================
  演示点：
  1. request.getParameter() 获取表单参数
  2. request.setCharacterEncoding() 解决中文乱码
  3. request.getRemoteAddr() 获取客户端 IP
  4. session.setAttribute() 存储登录状态
  5. response.sendRedirect() 重定向
  6. request.getRequestDispatcher().forward() 转发

  业务逻辑：
  - 用户名 admin，密码 123456 → 登录成功
  - 其他情况 → 登录失败，转发回登录页
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    // 1. 设置请求编码，解决中文乱码（POST 方式必须）
    request.setCharacterEncoding("UTF-8");

    // 2. 获取表单参数
    String username = request.getParameter("username");
    String password = request.getParameter("password");

    // 3. 获取客户端 IP 地址
    String clientIP = request.getRemoteAddr();

    // 4. 简单验证（实际项目中应该查询数据库）
    if ("admin".equals(username) && "123456".equals(password)) {
        // 登录成功

        // 4.1 将用户名存入 session，保持登录状态
        session.setAttribute("loginUser", username);
        session.setAttribute("loginIP", clientIP);
        session.setAttribute("loginTime", new java.util.Date());

        // 4.2 重定向到欢迎页面
        // 重定向：浏览器地址栏会变化，发起两次请求
        response.sendRedirect("03_welcome.jsp");

    } else {
        // 登录失败

        // 5. 设置错误信息
        request.setAttribute("error", "用户名或密码错误，请重试！");

        // 6. 转发回登录页面
        // 转发：浏览器地址栏不变，一次请求，可以携带数据
        request.getRequestDispatcher("01_login.jsp").forward(request, response);
    }
%>