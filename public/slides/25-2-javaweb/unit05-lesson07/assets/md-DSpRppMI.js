import{aL as i,o as r,b as m,w as d,g as e,ad as n,j as c,af as u,e as p,v,x,T as o}from"./modules/vue-D0wWPMMG.js";import{I as g}from"./slidev/default-Bsppq8Vd.js";import{u as f,f as S}from"./slidev/context-AnzKyI4i.js";import"./index-BFjWsIcH.js";import"./modules/shiki-DDSVZFq6.js";const b={class:"mt-2 p-2 bg-yellow-500/20 rounded-lg"},P={__name:"slides.md__slidev_4",setup(C){const{$clicksContext:s,$frontmatter:a}=f();return s.setup(),(_,t)=>{const l=i("click");return r(),m(g,v(x(o(S)(o(a),3))),{default:d(()=>[t[1]||(t[1]=e("h1",null,"🎬 情境导入",-1)),t[2]||(t[2]=e("div",{class:"text-center mt-4"},[e("h2",{class:"text-2xl mb-4"},"回顾 JSP 页面结构...")],-1)),t[3]||(t[3]=e("div",{class:"bg-gray-800 text-gray-100 p-2 rounded-lg font-mono text-sm"},[e("pre",null,[n(""),c(" JSP 页面：HTML + Java + SQL 混在一起 "),n(`
  <body>
    <table>
    </table>
    <%  // Java代码开始
      Connection conn = DriverManager.getConnection(...);
      Statement stmt = conn.createStatement();
      ResultSet rs = stmt.executeQuery("SELECT * FROM product");
      while(rs.next()) {
        out.println("<tr><td>" + rs.getString("name") + "</td></tr>");
      }
    %>  // Java代码结束
  </body>
`)])],-1)),u((r(),p("div",b,[...t[0]||(t[0]=[e("p",null,[n("❌ "),e("strong",null,"问题"),n("：前端设计师看不懂 Java，后端程序员看不懂 CSS")],-1)])])),[[l]])]),_:1},16)}}};export{P as default};
