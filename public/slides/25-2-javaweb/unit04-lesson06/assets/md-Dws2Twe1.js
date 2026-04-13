import{o,b as m,w as l,g as t,ad as s,v as p,x as u,T as r}from"./modules/vue-DbAmDjCQ.js";import{I as d}from"./slidev/default-DP0nlfSK.js";import{u as i,f as c}from"./slidev/context-BD6zur6t.js";import"./index-Cq0VleNq.js";import"./modules/shiki-B5nD0ITP.js";const b={__name:"slides.md__slidev_19",setup(x){const{$clicksContext:a,$frontmatter:n}=i();return a.setup(),(g,e)=>(o(),m(d,p(u(r(c)(r(n),18))),{default:l(()=>[...e[0]||(e[0]=[t("h1",null,"🐛 捉虫大师",-1),t("div",{class:"text-center mt-4"},[t("h2",{class:"text-xl"},"找出下面代码的安全漏洞（有2处）")],-1),t("div",{class:"bg-gray-800 text-gray-100 p-3 rounded-lg font-mono text-sm mt-4"},[t("pre",null,`String name = request.getParameter("name");
String sql = "SELECT * FROM users WHERE name='" + name + "'";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, name);
int rows = pstmt.executeUpdate(sql);
`)],-1),t("div",{class:"mt-4 p-3 bg-blue-500/20 rounded-lg text-center"},[t("p",null,[s("⏱️ "),t("strong",null,"思考30秒"),s("：这段代码哪里有问题？")])],-1)])]),_:1},16))}};export{b as default};
