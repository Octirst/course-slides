import{o as d,b as n,w as p,g as t,j as u,ad as r,v as l,x as i,T as o}from"./modules/vue-AeBPv1kZ.js";import{I as c}from"./slidev/default-Di3AlWXw.js";import{u as m,f as _}from"./slidev/context-CabhSJM5.js";import"./index-B2Hp-q_l.js";import"./modules/shiki-CrQWOT2k.js";const S={__name:"slides.md__slidev_26",setup(f){const{$clicksContext:s,$frontmatter:a}=m();return s.setup(),(g,e)=>(d(),n(c,l(i(o(_)(o(a),25))),{default:p(()=>[e[0]||(e[0]=t("h1",null,"📝 案例：商品列表展示",-1)),u(" demo05_product_data.java "),e[1]||(e[1]=t("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-4"},[t("pre",null,`@WebServlet("/productData")
public class ProductDataServlet extends HttpServlet {
    protected void doGet(...) {
        List<Map<String, Object>> productList = new ArrayList<>();
        // 添加商品数据...
        request.setAttribute("productList", productList);
        request.getRequestDispatcher("/demo06_product_list.jsp").forward(...);
    }
}
`)],-1)),e[2]||(e[2]=t("div",{class:"mt-4 p-3 bg-green-500/20 rounded-lg"},[t("p",null,[r("📁 "),t("strong",null,"教师演示"),r("："),t("code",{class:"text-purple-400"},"demo05_product_data.java"),r(" + "),t("code",{class:"text-purple-400"},"demo06_product_list.jsp")])],-1))]),_:1},16))}};export{S as default};
