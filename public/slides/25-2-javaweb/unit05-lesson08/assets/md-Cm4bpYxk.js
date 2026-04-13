import{o as a,b as i,w as p,g as e,j as l,ad as s,v as u,x as m,T as o}from"./modules/vue-D0wWPMMG.js";import{I as d}from"./slidev/default-CakodAR1.js";import{u as g,f as c}from"./slidev/context-Biax2hGt.js";import"./index-CiLwcQKD.js";import"./modules/shiki-DDSVZFq6.js";const j={__name:"slides.md__slidev_17",setup(f){const{$clicksContext:n,$frontmatter:r}=g();return n.setup(),(x,t)=>(a(),i(d,u(m(o(c)(o(r),16))),{default:p(()=>[t[0]||(t[0]=e("h1",null,"📦 Session 使用",-1)),l(" demo08_session.java "),t[1]||(t[1]=e("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-4"},[e("pre",null,[s(`// 获取 Session 对象
HttpSession session = request.getSession();
`),e("p",null,`// 存储数据
session.setAttribute("productName", "MacBook");
session.setAttribute("price", 12999);`),s(`
`),e("p",null,`// 读取数据
String name = (String) session.getAttribute("productName");
Integer price = (Integer) session.getAttribute("price");`),s(`
`)])],-1)),t[2]||(t[2]=e("div",{class:"mt-4 p-3 bg-green-500/20 rounded-lg"},[e("p",null,[s("📁 "),e("strong",null,"教师演示"),s("："),e("code",{class:"text-purple-400"},"demo08_session.java")])],-1))]),_:1},16))}};export{j as default};
