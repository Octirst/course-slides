import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,x as u,y as d}from"./modules/shiki-DjDEXEIT.js";import{nt as f,rt as p}from"./index-Do2eVPGU.js";import{t as m}from"./slidev/CodeBlockWrapper-oONFnhkS.js";import{t as h}from"./slidev/default-DUe6y5NU.js";var g={class:`bg-green-500/20 p-3 rounded-lg`},_={class:`mt-3 p-3 bg-yellow-500/20 rounded-lg`},v={__name:`slides.md__slidev_8`,setup(v){let{$slidev:y,$nav:b,$clicksContext:x,$clicks:S,$page:C,$renderContext:w,$frontmatter:T}=p();return x.setup(),(p,v)=>{let y=m,b=e(`click`);return t(),a(h,o(n(l(f)(l(T),7))),{default:r(()=>[v[3]||=c(`h1`,null,`🔧 数据源配置`,-1),c(`div`,g,[v[1]||=c(`h3`,{class:`text-green-400`},`spring-mvc.xml 新增配置`,-1),u(y,{title:``,ranges:[]},{default:r(()=>[...v[0]||=[c(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light slidev-code`,style:{"--shiki-dark":`#dbd7caee`,"--shiki-light":`#393a34`,"--shiki-dark-bg":`#121212`,"--shiki-light-bg":`#ffffff`}},[c(`code`,{class:`language-text`},[c(`span`,{class:`line`},[c(`span`,null,`&lt;!-- 1. 数据源：连接 MySQL --&gt;`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`&lt;bean id="dataSource"`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`  class="org.springframework.jdbc.datasource.DriverManagerDataSource"&gt;`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`    &lt;property name="driverClassName"`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`      value="com.mysql.cj.jdbc.Driver"/&gt;`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`    &lt;property name="url"`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`      value="jdbc:mysql://localhost:3306/javaweb?useUnicode=true&amp;amp;characterEncoding=UTF-8"/&gt;`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`    &lt;property name="username" value="root"/&gt;`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`    &lt;property name="password" value="123456"/&gt;`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`&lt;/bean&gt;`)]),s(`
`),c(`span`,{class:`line`},[c(`span`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`&lt;!-- 2. JdbcTemplate：注入数据源 --&gt;`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`&lt;bean id="jdbcTemplate"`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`  class="org.springframework.jdbc.core.JdbcTemplate"&gt;`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`    &lt;property name="dataSource" ref="dataSource"/&gt;`)]),s(`
`),c(`span`,{class:`line`},[c(`span`,null,`&lt;/bean&gt;`)])])],-1)]]),_:1})]),i((t(),d(`div`,_,[...v[2]||=[c(`p`,null,[s(`⚠️ `),c(`strong`,null,`字符编码三重检查`)],-1),c(`p`,{class:`text-sm`},`① web.xml 配了 CharacterEncodingFilter？`,-1),c(`p`,{class:`text-sm`},`② jdbcUrl 带 useUnicode=true&characterEncoding=UTF-8？`,-1),c(`p`,{class:`text-sm`},`③ MySQL 表用 utf8mb4 字符集？`,-1)]])),[[b]])]),_:1},16)}}};export{v as default};