import{o as a,b as l,w as d,g as t,j as p,ad as s,v as u,x as m,T as r}from"./modules/vue-D2sq2uCT.js";import{I as i}from"./slidev/default-gRkzQNku.js";import{u as v,f as c}from"./slidev/context-C5E0gysD.js";import"./index-CzRHPHyh.js";import"./modules/shiki-CjSE0itH.js";const C={__name:"slides.md__slidev_33",setup(f){const{$clicksContext:o,$frontmatter:n}=v();return o.setup(),(g,e)=>(a(),l(i,u(m(r(c)(r(n),32))),{default:d(()=>[e[0]||(e[0]=t("h1",null,"📝 状态码演示代码",-1)),p(" demo07_status.java "),e[1]||(e[1]=t("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-4"},[t("pre",null,[s(`@WebServlet("/status404")
public class Status404Servlet extends HttpServlet {
    @Override
    protected void doGet(...) {
        // 手动设置404状态码
        response.setStatus(404);
        response.getWriter().println("`),t("h1",null,"状态码404"),s(`");
    }
}
`)])],-1)),e[2]||(e[2]=t("div",{class:"mt-4 p-3 bg-green-500/20 rounded-lg"},[t("p",null,[s("📁 "),t("strong",null,"教师演示"),s("："),t("code",{class:"text-purple-400"},"demo03_status.java")])],-1))]),_:1},16))}};export{C as default};
