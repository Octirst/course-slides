import{aL as i,o as r,b as m,w as u,g as t,ad as n,j as d,af as c,e as p,v,x,T as s}from"./modules/vue-D0wWPMMG.js";import{I as g}from"./slidev/default-DMlkD76a.js";import{u as f,f as S}from"./slidev/context-CgF74HvW.js";import"./index-BSB7Q-Kf.js";import"./modules/shiki-DDSVZFq6.js";const C={class:"mt-2 p-2 bg-yellow-500/20 rounded-lg"},P={__name:"slides.md__slidev_4",setup(_){const{$clicksContext:o,$frontmatter:a}=f();return o.setup(),(b,e)=>{const l=i("click");return r(),m(g,v(x(s(S)(s(a),3))),{default:u(()=>[e[1]||(e[1]=t("h1",null,"🎬 情境导入",-1)),e[2]||(e[2]=t("div",{class:"text-center mt-4"},[t("h2",{class:"text-2xl mb-4"},"回顾 JSP 页面结构...")],-1)),e[3]||(e[3]=t("div",{class:"bg-gray-800 text-gray-100 p-2 rounded-lg font-mono text-sm"},[t("pre",null,[n(""),d(" JSP 页面：HTML + Java + SQL 混在一起 "),n(`
  `),t("body",null,[n(`
    `),t("table",null,`
    `),n(`
    <%  // Java代码开始
      Connection conn = DriverManager.getConnection(...);
      Statement stmt = conn.createStatement();
      ResultSet rs = stmt.executeQuery("SELECT * FROM product");
      while(rs.next()) {
        out.println("`),t("tr",null,[t("td",null,'" + rs.getString("name") + "')]),n(`");
      }
    %>  // Java代码结束
  `)]),n(`
`)])],-1)),c((r(),p("div",C,[...e[0]||(e[0]=[t("p",null,[n("❌ "),t("strong",null,"问题"),n("：前端设计师看不懂 Java，后端程序员看不懂 CSS")],-1)])])),[[l]])]),_:1},16)}}};export{P as default};
