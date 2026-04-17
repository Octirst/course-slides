import{o as n,b as a,w as p,g as e,j as m,ad as o,v as d,x as i,T as r}from"./modules/vue-D0wWPMMG.js";import{I as u}from"./slidev/default-Bsppq8Vd.js";import{u as v,f as x}from"./slidev/context-AnzKyI4i.js";import"./index-BFjWsIcH.js";import"./modules/shiki-DDSVZFq6.js";const h={__name:"slides.md__slidev_15",setup(c){const{$clicksContext:s,$frontmatter:l}=v();return s.setup(),(g,t)=>(n(),a(u,d(i(r(x)(r(l),14))),{default:p(()=>[t[0]||(t[0]=e("h1",null,"📝 HelloServlet 示例",-1)),m(" demo07_hello.java "),t[1]||(t[1]=e("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-4"},[e("pre",null,[o(`import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.*;
`),e("p",null,`@WebServlet("/hello")  // URL 映射
public class HelloServlet extends HttpServlet {
@Override
protected void doGet(HttpServletRequest request,
HttpServletResponse response) {
response.setContentType("text/html;charset=UTF-8");
PrintWriter out = response.getWriter();
out.println("<h1>Hello Product!</h1>");
}
}`),o(`
`)])],-1)),t[2]||(t[2]=e("div",{class:"mt-4 p-3 bg-green-500/20 rounded-lg"},[e("p",null,[o("📁 "),e("strong",null,"教师演示"),o("："),e("code",{class:"text-purple-400"},"demo07_hello.java")]),e("p",{class:"text-sm text-gray-400 mt-1"},"配套资源/第7次课_代码片段/demo07_hello.java")],-1))]),_:1},16))}};export{h as default};
