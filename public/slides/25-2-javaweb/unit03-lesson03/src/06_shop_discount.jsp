<%--
  挑战版：带折扣计算的结算系统
  教学要点：
  1. 基础版只要求简单乘法，挑战版要求条件判断（if-else）
  2. 满减逻辑：满100减10，满200减30
  3. 最终应付 = 原价总额 - 优惠金额
  4. 提示：使用if语句判断total >= 200 或 total >= 100

  难度提升点：
  - 从单一运算到条件分支
  - 从两数相乘到多步骤业务逻辑
  - 需要显示原价、优惠、实付三行信息
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <style>
        body { font-family: "Microsoft YaHei", Arial; margin: 20px; }
        .result-box { background: #f5f5f5; padding: 20px; border-radius: 8px; max-width: 400px; }
        .original { text-decoration: line-through; color: #999; }
        .discount { color: #ff6600; font-weight: bold; }
        .final { color: red; font-size: 24px; font-weight: bold; }
    </style>
</head>
<body>
    <h2>ShopOnline 结算中心（挑战版 - 含折扣）</h2>
    <div class="result-box">
    <%-- 获取输入参数 --%>
    <% String pStr = request.getParameter("price");
       String cStr = request.getParameter("count");
       int price = Integer.parseInt(pStr);
       int count = Integer.parseInt(cStr);

       // 计算原价总额
       int total = price * count;

       // 挑战点：满减逻辑（需要学生自己实现）
       // 满200减30，满100减10，不满100无优惠
       int discount = 0;
       if (total >= 200) {
           discount = 30;
       } else if (total >= 100) {
           discount = 10;
       }

       // 实付金额
       int finalPay = total - discount;
    %>

    <h3>结算详情</h3>
    <p>商品单价：<%= price %> 元</p>
    <p>购买数量：<%= count %> 件</p>
    <hr/>

    <p class="original">原价总额：<%= total %> 元</p>

    <% if (discount > 0) { %>
        <p class="discount">优惠金额：-<%= discount %> 元</p>
    <% } else { %>
        <p>（未达优惠条件）</p>
    <% } %>

    <p class="final">应付总额：<%= finalPay %> 元</p>

    <p style="font-size: 12px; color: #666; margin-top: 20px;">
        优惠规则：满100减10，满200减30
    </p>
    </div>
    <br/>
    <a href="04_shop_input.jsp">返回重新计算</a>
</body>
</html>
