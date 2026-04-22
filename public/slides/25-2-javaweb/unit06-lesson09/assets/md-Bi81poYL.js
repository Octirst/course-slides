import{aL as p,o as s,b as l,w as c,g as e,af as u,e as m,ad as o,v as d,x as f,T as a}from"./modules/vue-l7fqq0YS.js";import{I as g}from"./slidev/default-CjPaHGsC.js";import{u as x,f as v}from"./slidev/context-CbuL1hbO.js";import"./index-BTlZlOS7.js";import"./modules/shiki-DFKK9yb6.js";const _={class:"mt-6 p-4 bg-green-500/20 rounded-lg"},B={__name:"slides.md__slidev_12",setup(S){const{$clicksContext:r,$frontmatter:n}=x();return r.setup(),($,t)=>{const i=p("click");return s(),l(g,d(f(a(v)(a(n),11))),{default:c(()=>[t[1]||(t[1]=e("h1",null,"📊 EL隐式对象",-1)),t[2]||(t[2]=e("div",{class:"bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-lg mt-4"},[e("pre",null,`| 隐式对象 | 作用 | 示例 |
|----------|------|------|
| requestScope | request域属性 | \${requestScope.username} |
| sessionScope | session域属性 | \${sessionScope.user} |
| applicationScope | application域属性 | \${applicationScope.config} |
| param | 请求参数 | \${param.username} |
`)],-1)),u((s(),m("div",_,[...t[0]||(t[0]=[e("h3",null,"作用域自动搜索",-1),e("div",{class:"bg-gray-800 p-2 rounded font-mono text-xs mt-2"},[e("p",{class:"text-white"},"${username} → 自动搜索（从小到大）"),e("p",{class:"text-white"}," page → request → session → application")],-1),e("p",{class:"text-sm mt-2"},[o("指定作用域："),e("code",null,"${requestScope.username}"),o(" 只查request域")],-1)])])),[[i]])]),_:1},16)}}};export{B as default};
