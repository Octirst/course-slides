import{o as a,b as l,w as d,g as e,j as p,ad as r,v as u,x as i,T as s}from"./modules/vue-D0wWPMMG.js";import{I as m}from"./slidev/default-Dh3PkKt0.js";import{u as f,f as g}from"./slidev/context-Bh8znxA9.js";import"./index-Czovd4kj.js";import"./modules/shiki-DDSVZFq6.js";const y={__name:"slides.md__slidev_26",setup(c){const{$clicksContext:n,$frontmatter:o}=f();return n.setup(),(v,t)=>(a(),l(m,u(i(s(g)(s(o),25))),{default:d(()=>[t[0]||(t[0]=e("h1",null,"⏰ 自动刷新 Header",-1)),p(" demo07_refresh.java "),t[1]||(t[1]=e("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-4"},[e("pre",null,[r(`@WebServlet("/refresh")
public class RefreshServlet extends HttpServlet {
    @Override
    protected void doGet(...) {
        // 关键代码：设置每5秒刷新
        response.setHeader("Refresh", "5");
`),e("pre",null,[e("code",null,`    PrintWriter out = response.getWriter();
    out.println("&lt;h1&gt;当前时间&lt;/h1&gt;");
    out.println(new java.util.Date());
}
`)]),r(`
`),e("p",null,"}"),r(`
`)])],-1)),t[2]||(t[2]=e("div",{class:"mt-4 p-3 bg-green-500/20 rounded-lg"},[e("p",null,[r("📁 "),e("strong",null,"教师演示"),r("："),e("code",{class:"text-purple-400"},"demo07_refresh.java")]),e("p",{class:"text-sm text-gray-400 mt-1"},"对应教材任务5-2：自动刷新Header")],-1))]),_:1},16))}};export{y as default};
