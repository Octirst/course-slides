import{f as m,$ as u,y as f,o as i,e as l,g as e,t as a,F as h,Z as v,a0 as g,d as x,j as b}from"../modules/vue-KFc6UY-I.js";import{u as N,j as y,c as p,b as k}from"../index-utclH1uy.js";import{N as w}from"./NoteDisplay-x2t63Emx.js";import"../modules/shiki-BmOJCFA-.js";const D=m({__name:"print",setup(d,{expose:n}){n();const{slides:r,total:o}=N();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${p.title}`});const _=f(()=>r.value.map(t=>{var s;return(s=t.meta)==null?void 0:s.slide}).filter(t=>t!==void 0&&t.noteHTML!=="")),c={slides:r,total:o,slidesWithNote:_,get configs(){return p},NoteDisplay:w};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),S={id:"page-root"},T={class:"m-4"},j={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},P={class:"opacity-50"},W={key:0,class:"border-main mb-8"};function C(d,n,r,o,_,c){return i(),l("div",S,[e("div",T,[e("div",j,[e("h1",L,a(o.configs.title),1),e("div",V,a(new Date().toLocaleString()),1)]),(i(!0),l(h,null,v(o.slidesWithNote,(t,s)=>(i(),l("div",{key:s,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",B,[e("div",H,[e("div",P,a(t==null?void 0:t.no)+"/"+a(o.total),1),g(" "+a(t==null?void 0:t.title)+" ",1),n[0]||(n[0]=e("div",{class:"flex-auto"},null,-1))])]),x(o.NoteDisplay,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),s<o.slidesWithNote.length-1?(i(),l("hr",W)):b("v-if",!0)]))),128))])])}const A=k(D,[["render",C],["__file","/Users/kai/Documents/工商/教学/25-2Javaweb/教学规划/PPT/Unit02_第2次课/node_modules/.pnpm/@slidev+client@0.48.9_@nuxt+kit@3.21.1_@vue+compiler-sfc@3.5.30_postcss@8.5.8_rollup@4.59.0_vite@5.4.21/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{A as default};
