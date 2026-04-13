import{o as r,b as i,w as l,g as e,j as m,ad as t,v as p,x as u,T as n}from"./modules/vue-D0wWPMMG.js";import{I as d}from"./slidev/default-CakodAR1.js";import{u as k,f as c}from"./slidev/context-Biax2hGt.js";import"./index-CiLwcQKD.js";import"./modules/shiki-DDSVZFq6.js";const j={__name:"slides.md__slidev_15",setup(C){const{$clicksContext:s,$frontmatter:a}=k();return s.setup(),(g,o)=>(r(),i(d,p(u(n(c)(n(a),14))),{default:l(()=>[o[0]||(o[0]=e("h1",null,"🍪 Cookie 使用",-1)),m(" demo08_cookie.java "),o[1]||(o[1]=e("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-4"},[e("pre",null,[t(`// 创建 Cookie
Cookie nameCookie = new Cookie("productName", "iPhone15");
`),e("p",null,`// 设置有效期（秒）
nameCookie.setMaxAge(3600);  // 1小时`),t(`
`),e("p",null,`// 发送到客户端
response.addCookie(nameCookie);`),t(`
`),e("p",null,`// 读取客户端 Cookie
Cookie[] cookies = request.getCookies();
for (Cookie c : cookies) {
out.println(c.getName() + " = " + c.getValue());
}`),t(`
`)])],-1)),o[2]||(o[2]=e("div",{class:"mt-4 p-3 bg-green-500/20 rounded-lg"},[e("p",null,[t("📁 "),e("strong",null,"教师演示"),t("："),e("code",{class:"text-purple-400"},"demo08_cookie.java")])],-1))]),_:1},16))}};export{j as default};
