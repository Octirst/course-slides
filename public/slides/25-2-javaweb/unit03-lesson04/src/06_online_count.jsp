<%--
  06_online_count.jsp - 在线人数统计（挑战版）
  ==========================================
  演示点：
  1. application.getAttribute/setAttribute 全局共享
  2. session 创建和销毁事件（简化演示）

  实现原理：
  - 用户访问时在线人数 +1
  - 实际项目中应该使用 HttpSessionListener 监听器
  - 这里用简化方式演示 application 的全局共享特性
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    // 获取当前在线人数
    Integer onlineCount = (Integer) application.getAttribute("onlineCount");

    // 如果是第一次访问，初始化为 0
    if (onlineCount == null) {
        onlineCount = 0;
    }

    // 检查该用户是否已被计数
    Boolean counted = (Boolean) session.getAttribute("counted");
    if (counted == null || !counted) {
        // 第一次访问，在线人数 +1
        onlineCount++;
        application.setAttribute("onlineCount", onlineCount);
        session.setAttribute("counted", true);
    }
%>
<html>
<head>
    <title>在线人数统计</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 50px; text-align: center; }
        .count-box {
            display: inline-block;
            padding: 40px 60px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 10px;
            color: white;
        }
        .count-number { font-size: 72px; font-weight: bold; }
        .count-label { font-size: 24px; margin-top: 10px; }
        .note { color: #666; margin-top: 30px; }
    </style>
</head>
<body>
    <div class="count-box">
        <div class="count-number"><%= onlineCount %></div>
        <div class="count-label">人在线</div>
    </div>

    <p class="note">
        💡 说明：使用 application 对象存储全局数据，所有用户共享。<br/>
        实际项目中应使用 HttpSessionListener 实现精确统计。
    </p>

    <p style="margin-top: 20px;">
        <a href="01_login.jsp">返回登录页</a>
    </p>
</body>
</html>