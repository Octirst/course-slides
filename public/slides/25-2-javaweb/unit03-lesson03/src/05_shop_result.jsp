<%--
  教学要点：
  1. request.getParameter("name") 获取表单数据，返回类型永远是String
  2. Integer.parseInt() 将String转为int，才能进行数学运算
  3. 关键提醒：如果用户输入非数字（如"abc"），parseInt会报错！

  TODO：下次课讲解 try-catch 处理输入异常

  调试技巧：如果页面报错，先看Tomcat控制台（不是浏览器）
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
    <h2>结算结果</h2>
    <%
        // 1. 取出参数 (全是 String 类型)
        String pStr = request.getParameter("price");
        String cStr = request.getParameter("count");

        // 2. 转换类型 (后端逻辑核心)
        // TODO: 此处应有try-catch处理非数字输入，下次课讲解
        int price = Integer.parseInt(pStr);
        int count = Integer.parseInt(cStr);

        // 3. 业务运算
        int total = price * count;
    %>
    <p>商品单价：<%= price %> 元</p>
    <p>购买数量：<%= count %> 件</p>
    <hr/>
    <h3>应付总额：<%= total %> 元</h3>
    <a href="04_shop_input.jsp">返回重新计算</a>
</body>
</html>
