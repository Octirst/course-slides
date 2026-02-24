import{_ as r}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-ClIVRLlH.js";import{o,b as c,w as l,g as s,d as u,m as d,ad as n,v as m,x as f,T as e}from"./modules/vue-B2ND_r_-.js";import{I as _}from"./slidev/center-C2Z8GvLG.js";import{u as k,f as g}from"./slidev/context-BQSt-QlW.js";import"./modules/unplugin-icons-CBv6OiCX.js";import"./index-BB3xuW51.js";import"./modules/shiki-B9mgvoiw.js";const Q={__name:"slides.md__slidev_9",setup(h){const{$clicksContext:p,$frontmatter:i}=k();return p.setup(),(v,a)=>{const t=r;return o(),c(_,m(f(e(g)(e(i),8))),{default:l(()=>[a[1]||(a[1]=s("h1",null,"🏗️ Hive 架构全景",-1)),u(t,d({},{title:"",ranges:[]}),{default:l(()=>[...a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"用户写 SQL")]),n(`
`),s("span",{class:"line"},[s("span",null,"    ↓")]),n(`
`),s("span",{class:"line"},[s("span",null,"┌─────────────┐")]),n(`
`),s("span",{class:"line"},[s("span",null,"│   Hive CLI   │  ← 你敲 SQL 的地方")]),n(`
`),s("span",{class:"line"},[s("span",null,"└──────┬──────┘")]),n(`
`),s("span",{class:"line"},[s("span",null,"       ↓")]),n(`
`),s("span",{class:"line"},[s("span",null,"┌─────────────┐")]),n(`
`),s("span",{class:"line"},[s("span",null,"│  Driver      │  ← SQL → MapReduce 翻译器")]),n(`
`),s("span",{class:"line"},[s("span",null,"│  (编译/优化)  │")]),n(`
`),s("span",{class:"line"},[s("span",null,"└──────┬──────┘")]),n(`
`),s("span",{class:"line"},[s("span",null,"       ↓              ↗ 元数据（表结构）")]),n(`
`),s("span",{class:"line"},[s("span",null,"┌─────────────┐   ┌──────────┐")]),n(`
`),s("span",{class:"line"},[s("span",null,"│  MapReduce   │   │  MySQL   │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│  (执行引擎)   │   │ (元数据库) │")]),n(`
`),s("span",{class:"line"},[s("span",null,"└──────┬──────┘   └──────────┘")]),n(`
`),s("span",{class:"line"},[s("span",null,"       ↓")]),n(`
`),s("span",{class:"line"},[s("span",null,"┌─────────────┐")]),n(`
`),s("span",{class:"line"},[s("span",null,"│    HDFS      │  ← 真正的数据在这里")]),n(`
`),s("span",{class:"line"},[s("span",null,"└─────────────┘")])])],-1)])]),_:1},16)]),_:1},16)}}};export{Q as default};
