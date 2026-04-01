import{_ as o}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CwbXcyL5.js";import{o as r,b as c,w as l,g as s,d as u,m as d,ad as n,v as m,x as f,T as e}from"./modules/vue-jM-OfuMI.js";import{I as _}from"./slidev/default-CSDDLQzJ.js";import{u as g,f as k}from"./slidev/context--sZe7zeT.js";import"./modules/unplugin-icons-DhfsAqOt.js";import"./index-VSEvHk9U.js";import"./modules/shiki-DKihonGO.js";const N={class:"pt-4"},D={__name:"slides.md__slidev_7",setup(h){const{$clicksContext:p,$frontmatter:i}=g();return p.setup(),(v,a)=>{const t=o;return r(),c(_,m(f(e(k)(e(i),6))),{default:l(()=>[a[1]||(a[1]=s("h1",null,"🏗️ 三节点集群架构",-1)),s("div",N,[u(t,d({},{title:"",ranges:[]}),{default:l(()=>[...a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"┌─────────────────────────────────────────────────────────┐")]),n(`
`),s("span",{class:"line"},[s("span",null,"│                    master (192.168.38.100)               │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐ │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│  │NameNode  │  │DataNode  │  │Resource  │  │Node      │ │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│  │  (主节点) │  │ (也存数据)│  │Manager   │  │Manager   │ │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│  └──────────┘  └──────────┘  └──────────┘  └──────────┘ │")]),n(`
`),s("span",{class:"line"},[s("span",null,"└─────────────────────────────────────────────────────────┘")]),n(`
`),s("span",{class:"line"},[s("span",null,"          ▲                    ▲")]),n(`
`),s("span",{class:"line"},[s("span",null,"          │ SSH 免密           │ SSH 免密")]),n(`
`),s("span",{class:"line"},[s("span",null,"          ▼                    ▼")]),n(`
`),s("span",{class:"line"},[s("span",null,"┌──────────────────┐  ┌──────────────────┐")]),n(`
`),s("span",{class:"line"},[s("span",null,"│ slave1           │  │ slave2           │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│ 192.168.38.101   │  │ 192.168.38.102   │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│ ┌──────────┐     │  │ ┌──────────┐     │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│ │DataNode  │     │  │ │DataNode  │     │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│ │ (存数据)  │     │  │ │ (存数据)  │     │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│ └──────────┘     │  │ └──────────┘     │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│ ┌──────────┐     │  │ ┌──────────┐     │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│ │Node      │     │  │ │Node      │     │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│ │Manager   │     │  │ │Manager   │     │")]),n(`
`),s("span",{class:"line"},[s("span",null,"│ └──────────┘     │  │ └──────────┘     │")]),n(`
`),s("span",{class:"line"},[s("span",null,"└──────────────────┘  └──────────────────┘")])])],-1)])]),_:1},16)])]),_:1},16)}}};export{D as default};
