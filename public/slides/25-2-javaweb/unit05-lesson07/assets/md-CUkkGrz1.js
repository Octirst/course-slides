import{o as l,b as i,w as a,g as e,j as d,ad as r,v as p,x as m,T as o}from"./modules/vue-D0wWPMMG.js";import{I as u}from"./slidev/default-Bsppq8Vd.js";import{u as c,f as v}from"./slidev/context-AnzKyI4i.js";import"./index-BFjWsIcH.js";import"./modules/shiki-DDSVZFq6.js";const C={__name:"slides.md__slidev_21",setup(f){const{$clicksContext:n,$frontmatter:s}=c();return n.setup(),(y,t)=>(l(),i(u,p(m(o(v)(o(s),20))),{default:a(()=>[t[0]||(t[0]=e("h1",null,"📝 生命周期代码",-1)),d(" demo07_lifecycle.java "),t[1]||(t[1]=e("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-4"},[e("pre",null,`@WebServlet("/lifecycle")
public class LifeCycleServlet extends HttpServlet {
    @Override
    public void init() {
        System.out.println("【生命周期】init() 被调用！");
    }
    @Override
    protected void doGet(...) {
        System.out.println("【生命周期】doGet() 被调用！");
    }
    @Override
    public void destroy() {
        System.out.println("【生命周期】destroy() 被调用！");
    }
}
`)],-1)),t[2]||(t[2]=e("div",{class:"mt-4 p-3 bg-green-500/20 rounded-lg"},[e("p",null,[r("📁 "),e("strong",null,"教师演示"),r("："),e("code",{class:"text-purple-400"},"demo02_lifecycle.java")])],-1))]),_:1},16))}};export{C as default};
