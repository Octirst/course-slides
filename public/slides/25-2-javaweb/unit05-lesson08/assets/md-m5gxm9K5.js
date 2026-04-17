import{aL as i,o as s,b as p,w as d,g as e,ad as r,af as u,e as c,v as m,x as g,T as n}from"./modules/vue-D0wWPMMG.js";import{I as v}from"./slidev/default-B8dgCMWq.js";import{u as f,f as x}from"./slidev/context-CIN6VmuL.js";import"./index--Y652C9a.js";import"./modules/shiki-DDSVZFq6.js";const _={class:"mt-4 p-3 bg-yellow-500/20 rounded-lg"},w={__name:"slides.md__slidev_15",setup(T){const{$clicksContext:o,$frontmatter:a}=f();return o.setup(),(k,t)=>{const l=i("click");return s(),p(v,m(g(n(x)(n(a),14))),{default:d(()=>[t[1]||(t[1]=e("h1",null,"📝 编码设置位置",-1)),t[2]||(t[2]=e("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-4"},[e("pre",null,[r(`@Override
protected void doPost(HttpServletRequest request,
                      HttpServletResponse response) {
    // 第一步：设置请求编码（POST必须）
    request.setCharacterEncoding("UTF-8");
`),e("pre",null,[e("code",null,`// 第二步：设置响应编码
response.setContentType("text/html;charset=UTF-8");

// 第三步：获取参数（此时中文正常）
String name = request.getParameter("name");
`)]),r(`
`),e("p",null,"}"),r(`
`)])],-1)),u((s(),c("div",_,[...t[0]||(t[0]=[e("p",null,[r("⚠️ "),e("strong",null,"注意"),r("：request.setCharacterEncoding() 必须在最前面！")],-1)])])),[[l]])]),_:1},16)}}};export{w as default};
