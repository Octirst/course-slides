import{aL as i,o as a,b as u,w as m,g as e,ad as r,af as p,e as c,v as b,x as d,T as o}from"./modules/vue-D0wWPMMG.js";import{I as g}from"./slidev/default-B8dgCMWq.js";import{u as f,f as x}from"./slidev/context-CIN6VmuL.js";import"./index--Y652C9a.js";import"./modules/shiki-DDSVZFq6.js";const y={class:"mt-4 p-3 bg-yellow-500/20 rounded-lg"},S={__name:"slides.md__slidev_8",setup(v){const{$clicksContext:n,$frontmatter:s}=f();return n.setup(),(_,t)=>{const l=i("click");return a(),u(g,b(d(o(x)(o(s),7))),{default:m(()=>[t[1]||(t[1]=e("h1",null,"🔧 getParameter 使用示例",-1)),t[2]||(t[2]=e("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-4"},[e("pre",null,[r(`// 表单：<input type="text" name="username">
String username = request.getParameter("username");
`),e("p",null,`// 表单：<input type="checkbox" name="hobby" value="阅读">
// 表单：<input type="checkbox" name="hobby" value="运动">
String[] hobbies = request.getParameterValues("hobby");`),r(`
`),e("p",null,`for (String hobby : hobbies) {
out.println("爱好: " + hobby);
}`),r(`
`)])],-1)),p((a(),c("div",y,[...t[0]||(t[0]=[e("p",null,[r("💡 "),e("strong",null,"区别"),r("：getParameter() 返回单个值，getParameterValues() 返回数组")],-1)])])),[[l]])]),_:1},16)}}};export{S as default};
