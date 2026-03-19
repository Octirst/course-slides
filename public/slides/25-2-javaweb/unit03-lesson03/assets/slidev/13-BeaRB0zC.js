import{I as _}from"./default-BK_nyCwX.js";import{b,S as a}from"../index-p-TB2ZRg.js";import{p as c,u as x,f as w}from"./context-Dso6CNNR.js";import{at as k,o as l,b as S,w as j,g as e,j as P,a5 as v,e as p,a0 as m,v as $,x as y}from"../modules/vue-CffDVSch.js";import"../modules/shiki-CnOhAU2b.js";const C={__name:"13",setup(u,{expose:t}){t(),c(a);const{$slidev:r,$nav:s,$clicksContext:d,$clicks:i,$page:n,$renderContext:f,$frontmatter:g}=x(),o={$slidev:r,$nav:s,$clicksContext:d,$clicks:i,$page:n,$renderContext:f,$frontmatter:g,InjectedLayout:_,get frontmatter(){return a},get useSlideContext(){return x},get _provideFrontmatter(){return c},get _frontmatterToProps(){return w}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}},T={class:"flex justify-center mt-6"},B={class:"flex flex-col items-center"},D={class:"flex items-center gap-2"},I={class:"mt-6 text-center p-3 bg-yellow-500/20 rounded-lg"};function J(u,t,r,s,d,i){const n=k("click");return l(),S(s.InjectedLayout,$(y(s._frontmatterToProps(s.frontmatter,12))),{default:j(()=>[t[3]||(t[3]=e("h1",null,"🔄 JSP 完整生命周期",-1)),e("div",T,[e("div",B,[P(" 第一阶段：翻译 "),v((l(),p("div",D,[...t[0]||(t[0]=[e("div",{class:"bg-blue-500/30 p-4 rounded-lg text-center w-28"},[e("div",{class:"text-2xl"},"📝"),e("p",{class:"font-bold text-sm"},"翻译"),e("p",{class:"text-xs"},".jsp → .java")],-1),e("div",{class:"text-xl"},"➡️",-1),e("div",{class:"bg-blue-500/20 p-3 rounded text-xs w-32"}," JSP容器解析标签 ",-1)])])),[[n,1]]),t[1]||(t[1]=e("pre",null,[e("code",null,`<!-- 第二阶段：编译 -->
<div class="flex items-center gap-2 mt-4" v-click="2">
  <div class="bg-green-500/30 p-4 rounded-lg text-center w-28">
    <div class="text-2xl">🔨</div>
    <p class="font-bold text-sm">编译</p>
    <p class="text-xs">.java → .class</p>
  </div>
  <div class="text-xl">➡️</div>
  <div class="bg-green-500/20 p-3 rounded text-xs w-32">
    JDK编译成字节码
  </div>
</div>

<!-- 第三阶段：加载 -->
<div class="flex items-center gap-2 mt-4" v-click="3">
  <div class="bg-yellow-500/30 p-4 rounded-lg text-center w-28">
    <div class="text-2xl">📥</div>
    <p class="font-bold text-sm">加载</p>
    <p class="text-xs">载入内存</p>
  </div>
  <div class="text-xl">➡️</div>
  <div class="bg-yellow-500/20 p-3 rounded text-xs w-32">
    Servlet容器加载类
  </div>
</div>

<!-- 第四阶段：实例化 -->
<div class="flex items-center gap-2 mt-4" v-click="4">
  <div class="bg-purple-500/30 p-4 rounded-lg text-center w-28">
    <div class="text-2xl">🏗️</div>
    <p class="font-bold text-sm">实例化</p>
    <p class="text-xs">创建对象</p>
  </div>
  <div class="text-xl">➡️</div>
  <div class="bg-purple-500/20 p-3 rounded text-xs w-32">
    创建Servlet实例
  </div>
</div>

<!-- 第五阶段：执行 -->
<div class="flex items-center gap-2 mt-4" v-click="5">
  <div class="bg-red-500/30 p-4 rounded-lg text-center w-28">
    <div class="text-2xl">⚡</div>
    <p class="font-bold text-sm">执行</p>
    <p class="text-xs">service方法</p>
  </div>
  <div class="text-xl">➡️</div>
  <div class="bg-red-500/20 p-3 rounded text-xs w-32">
    输出HTML响应
  </div>
</div>
`)],-1))])]),v((l(),p("div",I,[...t[2]||(t[2]=[e("p",null,[m("🎯 "),e("strong",null,"思政点"),m("：基础打得牢（预处理），后续运行才高效！")],-1)])])),[[n,6]])]),_:1},16)}const E=b(C,[["render",J],["__file","/@slidev/slides/13.md"]]);export{E as default};
