import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,b as s,g as c,ht as l,y as u}from"./modules/shiki-BYY7Vn19.js";import{nt as d,rt as f}from"./index-DFs7hJ5r.js";import{t as p}from"./slidev/default-B0-xJJ-3.js";var m={class:`grid grid-cols-2 gap-4 mt-2`},h={class:`bg-yellow-500/20 p-2 rounded-lg`},g={class:`bg-yellow-500/20 p-2 rounded-lg`},_={class:`bg-green-500/20 p-2 rounded-lg`},v={__name:`slides.md__slidev_44`,setup(v){let{$slidev:y,$nav:b,$clicksContext:x,$clicks:S,$page:C,$renderContext:w,$frontmatter:T}=f();return x.setup(),(f,v)=>{let y=e(`click`);return t(),a(p,o(n(l(d)(l(T),43))),{default:r(()=>[v[3]||=c(`h1`,null,`🎯 捉虫大师：答案揭晓`,-1),c(`div`,m,[i((t(),u(`div`,h,[...v[0]||=[c(`div`,{class:`flex items-center gap-1`},[c(`span`,{class:`text-2xl`},`❌`),c(`div`,null,[c(`p`,{class:`font-bold`},`问题1：没判断 readyState 和 status`),c(`p`,{class:`text-sm text-gray-400`},`数据可能还没接收完就开始解析`)])],-1)]])),[[y,1]]),i((t(),u(`div`,g,[...v[1]||=[c(`div`,{class:`flex items-center gap-1`},[c(`span`,{class:`text-2xl`},`❌`),c(`div`,null,[c(`p`,{class:`font-bold`},`问题2：没通过 getElementsByTagName 获取子节点`),c(`p`,{class:`text-sm text-gray-400`},`songs[i].childNodes[0] 取到的是空白文本节点，而非 song 的子元素`)])],-1)]])),[[y,2]])]),v[4]||=c(`br`,null,null,-1),i((t(),u(`div`,_,[...v[2]||=[c(`div`,{class:`flex items-center gap-1`},[c(`span`,{class:`text-2xl`},`✅`),c(`div`,null,[c(`p`,{class:`font-bold`},`正确写法`),c(`div`,{class:`bg-gray-800 text-green-400 p-2 rounded font-mono text-xs mt-2`},[c(`pre`,null,[s(`xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var songs = xmlhttp.responseXML
        .getElementsByTagName("song");
    for (var i = 0; i < songs.length; i++) {
      var name = songs[i]
          .getElementsByTagName("name")[0]
          .childNodes[0].nodeValue;
      table += "`),c(`tr`,null,[c(`td`,null,`" + name + "`)]),s(`";
    }
    document.getElementById("songList").innerHTML = table;
  }
};`)])])])],-1)]])),[[y,3]])]),_:1},16)}}};export{v as default};