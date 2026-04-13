import{o as a,b as l,w as d,g as e,j as p,ad as r,v as u,x as i,T as s}from"./modules/vue-D0wWPMMG.js";import{I as m}from"./slidev/default-CakodAR1.js";import{u as c,f as v}from"./slidev/context-Biax2hGt.js";import"./index-CiLwcQKD.js";import"./modules/shiki-DDSVZFq6.js";const q={__name:"slides.md__slidev_23",setup(g){const{$clicksContext:o,$frontmatter:n}=c();return o.setup(),(f,t)=>(a(),l(m,u(i(s(v)(s(n),22))),{default:d(()=>[t[0]||(t[0]=e("h1",null,"📝 第二步：判断 Servlet",-1)),p(" demo08_validate.java "),t[1]||(t[1]=e("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-4"},[e("pre",null,[r(`@WebServlet("/validate")
public class ValidateServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response) {
        request.setCharacterEncoding("UTF-8");
        String productName = request.getParameter("productName");
`),e("pre",null,[e("code",null,`    if (productName == null || productName.isEmpty()) {
        request.setAttribute("error", "商品名称不能为空！");
        request.getRequestDispatcher("/register.jsp").forward(...);
        return;
    }
    session.setAttribute("productName", productName);
    response.sendRedirect("/welcome.jsp");
}
`)]),r(`
`),e("p",null,"}"),r(`
`)])],-1)),t[2]||(t[2]=e("div",{class:"mt-4 p-3 bg-green-500/20 rounded-lg"},[e("p",null,[r("📁 "),e("strong",null,"教师演示"),r("："),e("code",{class:"text-purple-400"},"demo08_validate.java")])],-1))]),_:1},16))}};export{q as default};
