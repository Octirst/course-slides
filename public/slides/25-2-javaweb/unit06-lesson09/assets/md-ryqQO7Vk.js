import{o as n,b as d,w as l,g as t,j as u,ad as r,v as p,x as m,T as s}from"./modules/vue-AeBPv1kZ.js";import{I as c}from"./slidev/default-Di3AlWXw.js";import{u as i,f}from"./slidev/context-CabhSJM5.js";import"./index-B2Hp-q_l.js";import"./modules/shiki-CrQWOT2k.js";const b={__name:"slides.md__slidev_28",setup(v){const{$clicksContext:e,$frontmatter:a}=i();return e.setup(),(x,o)=>(n(),d(c,p(m(s(f)(s(a),27))),{default:l(()=>[o[0]||(o[0]=t("h1",null,"📝 商品列表JSP代码",-1)),u(" demo06_product_list.jsp "),o[1]||(o[1]=t("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-4"},[t("pre",null,`<c:forEach var="product" items="\${productList}" varStatus="vs">
  <tr>
    <td>\${vs.count}</td>
    <td>\${product.name}</td>
    <td>\${product.price}元</td>
    <td>\${product.stock}</td>
  </tr>
</c:forEach>
`)],-1)),o[2]||(o[2]=t("div",{class:"mt-4 p-3 bg-blue-500/20 rounded-lg"},[t("p",null,[r("💡 "),t("strong",null,"代码亮点"),r("：")]),t("ul",{class:"text-sm mt-2 space-y-1"},[t("li",null,"${vs.count} 自动生成序号（从1开始）"),t("li",null,"${product.name} 直接访问Map的key"),t("li",null,"无需类型转换，无需Java脚本")])],-1))]),_:1},16))}};export{b as default};
