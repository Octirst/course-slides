import{o as r,b as i,w as m,g as e,j as l,ad as t,v as d,x as p,T as n}from"./modules/vue-D0wWPMMG.js";import{I as u}from"./slidev/default-B8dgCMWq.js";import{u as k,f as c}from"./slidev/context-CIN6VmuL.js";import"./index--Y652C9a.js";import"./modules/shiki-DDSVZFq6.js";const j={__name:"slides.md__slidev_18",setup(C){const{$clicksContext:s,$frontmatter:a}=k();return s.setup(),(g,o)=>(r(),i(u,d(p(n(c)(n(a),17))),{default:m(()=>[o[0]||(o[0]=e("h1",null,"🍪 Cookie 使用",-1)),l(" demo08_cookie.java "),o[1]||(o[1]=e("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-2"},[e("pre",null,`// 创建 Cookie
Cookie nameCookie = new Cookie("productName", "iPhone15");
// 设置有效期（秒）
nameCookie.setMaxAge(3600);  // 1小时
// 发送到客户端
response.addCookie(nameCookie);
// 读取客户端 Cookie
Cookie[] cookies = request.getCookies();
for (Cookie c : cookies) {
    out.println(c.getName() + " = " + c.getValue());
}
`)],-1)),o[2]||(o[2]=e("div",{class:"mt-2 p-3 bg-green-500/20 rounded-lg"},[e("p",null,[t("📁 "),e("strong",null,"教师演示"),t("："),e("code",{class:"text-purple-400"},"demo08_cookie.java")])],-1))]),_:1},16))}};export{j as default};
