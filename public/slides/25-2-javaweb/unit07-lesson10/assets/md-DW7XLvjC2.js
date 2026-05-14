import{H as e,L as t,T as n,X as r,Z as i,_ as a,_t as o,g as s,ht as c,y as l}from"./modules/shiki-BYY7Vn19.js";import{n as u,t as d}from"./slidev/context-BQHBxFbi.js";import{t as f}from"./slidev/default-3bWBniT1.js";var p={class:`grid grid-cols-2 gap-4 mt-2`},m={class:`bg-yellow-500/20 p-2 rounded-lg`},h={class:`bg-yellow-500/20 p-2 rounded-lg`},g={class:`bg-green-500/20 p-2 rounded-lg`},_={__name:`slides.md__slidev_44`,setup(_){let{$slidev:v,$nav:y,$clicksContext:b,$clicks:x,$page:S,$renderContext:C,$frontmatter:w}=u();return b.setup(),(u,_)=>{let v=e(`click`);return t(),a(f,o(n(c(d)(c(w),43))),{default:r(()=>[_[3]||=s(`h1`,null,`🎯 捉虫大师：答案揭晓`,-1),s(`div`,p,[i((t(),l(`div`,m,[..._[0]||=[s(`div`,{class:`flex items-center gap-1`},[s(`span`,{class:`text-2xl`},`❌`),s(`div`,null,[s(`p`,{class:`font-bold`},`问题1：没判断 readyState 和 status`),s(`p`,{class:`text-sm text-gray-400`},`数据可能还没接收完就开始解析`)])],-1)]])),[[v,1]]),i((t(),l(`div`,h,[..._[1]||=[s(`div`,{class:`flex items-center gap-1`},[s(`span`,{class:`text-2xl`},`❌`),s(`div`,null,[s(`p`,{class:`font-bold`},`问题2：没通过 getElementsByTagName 获取子节点`),s(`p`,{class:`text-sm text-gray-400`},`songs[i].childNodes[0] 取到的是空白文本节点，而非 song 的子元素`)])],-1)]])),[[v,2]])]),_[4]||=s(`br`,null,null,-1),i((t(),l(`div`,g,[..._[2]||=[s(`div`,{class:`flex items-center gap-1`},[s(`span`,{class:`text-2xl`},`✅`),s(`div`,null,[s(`p`,{class:`font-bold`},`正确写法`),s(`div`,{class:`bg-gray-800 text-green-400 p-2 rounded font-mono text-xs mt-2`},[s(`pre`,null,`xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var songs = xmlhttp.responseXML
        .getElementsByTagName("song");
    for (var i = 0; i < songs.length; i++) {
      var name = songs[i]
          .getElementsByTagName("name")[0]
          .childNodes[0].nodeValue;
      table += "<tr><td>" + name + "</td></tr>";
    }
    document.getElementById("songList").innerHTML = table;
  }
};`)])])],-1)]])),[[v,3]])]),_:1},16)}}};export{_ as default};