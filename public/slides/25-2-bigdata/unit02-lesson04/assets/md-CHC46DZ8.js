import{$ as e,B as t,C as n,D as r,S as i,bt as a,v as o,vt as s,y as c}from"./modules/shiki-CrcqEQc-.js";import{nt as l,rt as u}from"./index-DG4DFcCV.js";import{t as d}from"./slidev/default-YyD5F-DF.js";import{t as f}from"./slidev/CodeBlockWrapper-B_28ERsh.js";var p={class:`pt-4`},m={__name:`slides.md__slidev_7`,setup(m){let{$slidev:h,$nav:g,$clicksContext:_,$clicks:v,$page:y,$renderContext:b,$frontmatter:x}=u();return _.setup(),(u,m)=>{let h=f;return t(),c(d,a(r(s(l)(s(x),6))),{default:e(()=>[m[1]||=o(`h1`,null,`🏗️ 三节点集群架构`,-1),o(`div`,p,[n(h,{title:``,ranges:[]},{default:e(()=>[...m[0]||=[o(`pre`,{class:`shiki shiki-themes vitesse-dark vitesse-light slidev-code`,style:{"--shiki-dark":`#dbd7caee`,"--shiki-light":`#393a34`,"--shiki-dark-bg":`#121212`,"--shiki-light-bg":`#ffffff`}},[o(`code`,{class:`language-text`},[o(`span`,{class:`line`},[o(`span`,null,`┌─────────────────────────────────────────────────────────┐`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│                    master (192.168.38.100)               │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐ │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│  │NameNode  │  │DataNode  │  │Resource  │  │Node      │ │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│  │  (主节点) │  │ (也存数据)│  │Manager   │  │Manager   │ │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│  └──────────┘  └──────────┘  └──────────┘  └──────────┘ │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`└─────────────────────────────────────────────────────────┘`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`          ▲                    ▲`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`          │ SSH 免密           │ SSH 免密`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`          ▼                    ▼`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`┌──────────────────┐  ┌──────────────────┐`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│ slave1           │  │ slave2           │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│ 192.168.38.101   │  │ 192.168.38.102   │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│ ┌──────────┐     │  │ ┌──────────┐     │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│ │DataNode  │     │  │ │DataNode  │     │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│ │ (存数据)  │     │  │ │ (存数据)  │     │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│ └──────────┘     │  │ └──────────┘     │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│ ┌──────────┐     │  │ ┌──────────┐     │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│ │Node      │     │  │ │Node      │     │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│ │Manager   │     │  │ │Manager   │     │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`│ └──────────┘     │  │ └──────────┘     │`)]),i(`
`),o(`span`,{class:`line`},[o(`span`,null,`└──────────────────┘  └──────────────────┘`)])])],-1)]]),_:1})])]),_:1},16)}}};export{m as default};