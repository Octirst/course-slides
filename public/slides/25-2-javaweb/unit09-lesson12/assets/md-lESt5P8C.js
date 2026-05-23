import{L as e,T as t,X as n,_ as r,_t as i,b as a,g as o,ht as s}from"./modules/shiki-DjDEXEIT.js";import{nt as c,rt as l}from"./index-B47YJPXg.js";import{t as u}from"./slidev/default-BH3cMpAN.js";var d={__name:`slides.md__slidev_24`,setup(d){let{$slidev:f,$nav:p,$clicksContext:m,$clicks:h,$page:g,$renderContext:_,$frontmatter:v}=l();return m.setup(),(l,d)=>(e(),r(u,i(t(s(c)(s(v),23))),{default:n(()=>[...d[0]||=[o(`h1`,null,`🔄 redirect 重定向`,-1),o(`div`,{class:`grid grid-cols-2 gap-6 mt-6`},[o(`div`,{class:`bg-red-500/20 p-5 rounded-lg`},[o(`h3`,{class:`text-red-400 mb-3`},`❌ 返回普通视图名`),o(`div`,{class:`bg-gray-800 text-gray-100 p-2 rounded font-mono text-sm`},[o(`pre`,null,`@PostMapping("/save")
public String save(Product p) {
    productService.save(p);
    return "list";  // 转发到list.jsp
}
`)]),o(`p`,{class:`text-sm mt-2 text-gray-400`},`刷新页面会重复提交表单`)]),o(`div`,{class:`bg-green-500/20 p-5 rounded-lg`},[o(`h3`,{class:`text-green-400 mb-3`},`✅ 使用 redirect`),o(`div`,{class:`bg-gray-800 text-gray-100 p-2 rounded font-mono text-sm`},[o(`pre`,null,`@PostMapping("/save")
public String save(Product p) {
    productService.save(p);
    return "redirect:/product/list";  // 重定向
}
`)]),o(`p`,{class:`text-sm mt-2 text-green-400`},`浏览器重新发GET请求，避免重复提交`)])],-1),o(`div`,{class:`mt-4 p-3 bg-yellow-500/20 rounded-lg`},[o(`p`,null,[a(`💡 `),o(`strong`,null,`redirect:`),a(` 前缀告诉Spring返回的不是视图名，而是要重定向的URL`)])],-1)]]),_:1},16))}};export{d as default};