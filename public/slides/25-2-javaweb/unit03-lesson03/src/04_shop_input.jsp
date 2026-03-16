<%--
  教学要点：
  1. action="05_shop_result.jsp" 表示表单提交后跳转到哪个页面处理
  2. name="price" name="count" 是后端取值的"暗号"，必须写！
  3. method="get" 表单提交方式（地址栏可见参数，适合测试）

  关键提问：
  - 如果忘记写name属性，后端能取到值吗？
  - 如果name写错了，后端会报错吗？（不会，会返回null）

  建议：给学生演示时，先去掉name属性，让他们看到request.getParameter返回null的效果
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<body>
    <h2>ShopOnline 结算中心</h2>
    <!-- action 指向处理页面，name 是后端的暗号 -->
    <form action="05_shop_result.jsp" method="get">
        商品单价：<input type="text" name="price" value="99"> 元<br/>
        购买数量：<input type="text" name="count" value="1"> 件<br/>
        <input type="submit" value="预览总价">
    </form>
</body>
</html>
