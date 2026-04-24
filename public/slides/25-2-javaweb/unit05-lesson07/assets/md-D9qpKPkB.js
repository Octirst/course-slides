import{o as a,b as l,w as d,g as e,j as p,ad as r,v as i,x as m,T as s}from"./modules/vue-D2sq2uCT.js";import{I as u}from"./slidev/default-gRkzQNku.js";import{u as f,f as v}from"./slidev/context-C5E0gysD.js";import"./index-CzRHPHyh.js";import"./modules/shiki-CjSE0itH.js";const C={__name:"slides.md__slidev_35",setup(x){const{$clicksContext:o,$frontmatter:n}=f();return o.setup(),(c,t)=>(a(),l(u,i(m(s(v)(s(n),34))),{default:d(()=>[t[0]||(t[0]=e("h1",null,"⏰ 自动刷新 Header",-1)),p(" demo04_refresh.java "),t[1]||(t[1]=e("div",{class:"bg-gray-800 text-gray-100 p-2 rounded-lg font-mono text-sm mt-2"},[e("pre",null,[r(`@WebServlet("/refresh")
public class RefreshServlet extends HttpServlet {
    @Override
    protected void doGet(...) {
        // 关键代码：设置每5秒刷新
        response.setHeader("Refresh", "5");
        PrintWriter out = response.getWriter();
        out.println("`),e("h1",null,"当前时间"),r(`");
        out.println(new java.util.Date());
    }
}
`)])],-1)),t[2]||(t[2]=e("div",{class:"mt-2 p-3 bg-green-500/20 rounded-lg"},[e("p",null,[r("📁 "),e("strong",null,"教师演示"),r("："),e("code",{class:"text-purple-400"},"demo04_refresh.java")]),e("p",{class:"text-sm text-gray-400 mt-1"},"对应教材任务5-2：自动刷新Header")],-1))]),_:1},16))}};export{C as default};
