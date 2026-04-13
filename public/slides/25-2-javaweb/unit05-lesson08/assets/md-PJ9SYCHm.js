import{o as p,b as a,w as l,g as e,j as m,ad as s,v as i,x as u,T as r}from"./modules/vue-D0wWPMMG.js";import{I as d}from"./slidev/default-CakodAR1.js";import{u as g,f as c}from"./slidev/context-Biax2hGt.js";import"./index-CiLwcQKD.js";import"./modules/shiki-DDSVZFq6.js";const j={__name:"slides.md__slidev_24",setup(f){const{$clicksContext:o,$frontmatter:n}=g();return o.setup(),(x,t)=>(p(),a(d,i(u(r(c)(r(n),23))),{default:l(()=>[t[0]||(t[0]=e("h1",null,"📝 第三步：欢迎页面",-1)),m(" demo08_welcome.jsp "),t[1]||(t[1]=e("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-4"},[e("pre",null,[s(`<%
    HttpSession sess = request.getSession();
    String productName = (String) sess.getAttribute("productName");
    String price = (String) sess.getAttribute("price");
%>
`),e("p",null,`<h1>商品录入成功！</h1>
<p>欢迎录入商品：<%= productName %></p>
<p>价格：￥<%= price %></p>`),s(`
`)])],-1)),t[2]||(t[2]=e("div",{class:"mt-4 p-3 bg-green-500/20 rounded-lg"},[e("p",null,[s("📁 "),e("strong",null,"教师演示"),s("："),e("code",{class:"text-purple-400"},"demo08_welcome.jsp")])],-1))]),_:1},16))}};export{j as default};
