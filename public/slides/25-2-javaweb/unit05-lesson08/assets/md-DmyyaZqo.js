import{o as l,b as u,w as a,g as e,j as p,ad as r,v as d,x as i,T as s}from"./modules/vue-D0wWPMMG.js";import{I as m}from"./slidev/default-B8dgCMWq.js";import{u as g,f as v}from"./slidev/context-CIN6VmuL.js";import"./index--Y652C9a.js";import"./modules/shiki-DDSVZFq6.js";const b={__name:"slides.md__slidev_9",setup(c){const{$clicksContext:n,$frontmatter:o}=g();return n.setup(),(q,t)=>(l(),u(m,d(i(s(v)(s(o),8))),{default:a(()=>[t[0]||(t[0]=e("h1",null,"📝 Request 信息演示",-1)),p(" demo08_request.java "),t[1]||(t[1]=e("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-4"},[e("pre",null,[r(`@WebServlet("/request")
public class RequestServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
`),e("pre",null,[e("code",null,`    out.println("请求方式: " + request.getMethod());
    out.println("客户端IP: " + request.getRemoteAddr());
    out.println("请求URL: " + request.getRequestURL());
    out.println("浏览器: " + request.getHeader("User-Agent"));
}
`)]),r(`
`),e("p",null,"}"),r(`
`)])],-1)),t[2]||(t[2]=e("div",{class:"mt-4 p-3 bg-green-500/20 rounded-lg"},[e("p",null,[r("📁 "),e("strong",null,"教师演示"),r("："),e("code",{class:"text-purple-400"},"demo08_request.java")])],-1))]),_:1},16))}};export{b as default};
