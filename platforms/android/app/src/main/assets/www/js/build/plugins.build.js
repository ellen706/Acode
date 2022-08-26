"use strict";(self.webpackChunkcom_foxdebug_acode=self.webpackChunkcom_foxdebug_acode||[]).push([[414],{72400:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var i=t(53124),a=t(73305),s=t(94082),l=t.n(s),o=t(34325),r=t(87441),c=t(98206),d=t(50673),u=t(17686),p=t(8421),g=t(8187),m=t.n(g),f=t(79870);async function h(n,e=!1,t,s){const g=(0,a.Z)("Plugin");let h,Z,y=c.Z.dirname(n),v="",w="",b="",T={},j=!1,I=!1;actionStack.push({id:"plugin",action:g.hide}),g.onhide=function(){o.Z.hideAd(),actionStack.remove("plugin"),o.Z.removeTitleLoader(),j=!0},g.onclick=function(n){const i=n.target.getAttribute("action");if("install"===i){if(!h)return void toast("Cannot install plugin");(async function(n,e){const t=d.Z.loader.create(n.name,strings.installing);let i;try{n.host=e,n.installed=!0;const t=c.Z.join(e,n.main),s=c.Z.dirname(t),{files:r}=n;i=c.Z.join(PLUGIN_DIR,n.id),await(0,u.Z)(i).exists()&&await(0,u.Z)(i).delete();const g=[];g.push(l()({url:t,method:"GET",contentType:"application/x-www-form-urlencoded",responseType:"arraybuffer",onprogress(e,t){a(n.name,e/t)}}),l()({url:c.Z.join(e,n.icon),method:"GET",contentType:"application/x-www-form-urlencoded",responseType:"arraybuffer",onprogress(n,e){a("icon",n/e)}}),l()({url:c.Z.join(e,n.readme),method:"GET",contentType:"application/x-www-form-urlencoded",responseType:"arraybuffer",onprogress(n,e){a("readme",n/e)}}));const[m,f,h]=await Promise.all(g);await(0,u.Z)(PLUGIN_DIR).createDirectory(n.id);const Z=[];Z.push((0,u.Z)(i).createFile("main.js",m),(0,u.Z)(i).createFile("plugin.json",JSON.stringify(n,null,2)),(0,u.Z)(i).createFile("readme.md",h),(0,u.Z)(i).createFile("icon.png",f)),Array.isArray(r)&&r.forEach((n=>{Z.push((async()=>{await o.Z.createFileRecursive(i,n),await(0,u.Z)(c.Z.join(i,n)).writeFile(await l()({url:c.Z.join(s,n),method:"GET",contentType:"application/x-www-form-urlencoded",responseType:"arraybuffer",onprogress(e,t){a(n,e/t)}}))})())})),await Promise.all(Z),toast(strings.success),(0,p.Z)(n.id)}catch(n){throw i&&await(0,u.Z)(i).delete(),new Error("Cannot install plugin")}finally{d.Z.loader.destroy()}function a(e,i){const a=Math.round(1e4*i)/100;t.setTitle(`${n.name}`),t.setMessage(`file: ${e}\n${strings.installing} ${Math.min(a,100)}%`)}})(h,Z).then((()=>{acode.unmountPlugin(T.id),t(T.id),e=!0,I=!1,x()})).catch((n=>{o.Z.error(n)}))}"uninstall"===i&&(0,u.Z)(c.Z.join(PLUGIN_DIR,T.id)).delete().then((()=>{acode.unmountPlugin(T.id),s(T.id),e=!1,I=!1,x()})).catch((n=>{o.Z.error(n)})),"buy"===i&&system.openInBrowser(f.Z.PAID_VERSION)},app.append(g),o.Z.showAd(),o.Z.showTitleLoader();try{const t=[];let i="";if(e?(t.push((0,u.Z)(n).readFile("utf8"),(0,u.Z)(c.Z.join(y,"readme.md")).readFile("utf8")),w=c.Z.join(y,"icon.png")):t.push(l()({url:n,responseType:"text",contentType:"application/x-www-form-urlencoded"})),j)return;[i,v]=await Promise.all(t),T=o.Z.parseJSON(i),b=T.version,!w&&T.icon&&(w=c.Z.join(y,T.icon)),g.settitle(T.name),x(),!v&&T.readme&&l()({url:c.Z.join(y,T.readme),responseType:"text",contentType:"application/x-www-form-urlencoded"}).then((n=>{v=n,x()})),e?l()({url:c.Z.join(T.host,"plugin.json"),responseType:"text",contentType:"application/x-www-form-urlencoded"}).then((n=>{h=o.Z.parseJSON(n),Z=T.host,h.version!==b&&(I=h.version,x())})):(h=T,Z=y)}catch(n){o.Z.error(n)}finally{o.Z.hideAd(),o.Z.removeTitleLoader()}async function x(){const n=["paid","premium","pro"].includes(T.type)&&IS_FREE_VERSION;if("file:"===c.Z.getProtocol(w)&&(w=await o.Z.toInternalUri(w)),g.body=m().parse(i.Z.render('<div class="main" id="plugin">\n  <div class="header">\n    <div class="info">\n      <span class="logo" style="background-image: url({{icon}})"></span>\n      <div class="desc">\n        <span class="name">{{name}}</span>\n        <span class="version">{{version}} {{#update}}&#8594; v{{update}}{{/update}}</span>\n        <span class="author" action="open">{{author.name}}</span>\n        <div action="github" class="tag">\n          <span>{{#type}}{{type}}{{/type}}{{^type}}free{{/type}}</span>\n        </div>\n      </div>\n    </div>\n    <div class="button-container primary">\n      {{#installed}}<button action="uninstall">{{strings.uninstall}}</button>{{/installed}}\n      {{^installed}}<button action="install">{{strings.install}}</button>{{/installed}}\n      {{#update}}<button action="install">{{strings.update}}</button>{{/update}}\n      {{#isPaid}}<button action="buy">{{#strings}}{{download acode pro}}{{/strings}}</button>{{/isPaid}}\n    </div>\n  </div>\n  <div class="body md">{{{body}}}</div>\n</div>',{...T,readme:v,version:b,icon:w,body:v?(0,r.TU)(v):"",installed:e,update:I,strings:strings,isPaid:n})),n){const n=g.get('[action="install"]');n&&(n.style.display="none")}}}},83051:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var i=t(94082),a=t.n(i),s=t(53124),l=t(8187),o=t.n(l),r='{{#.}}\n<div class="list-item" action="open" {{#installed}}data-installed="true"{{/installed}} data-plugin="{{plugin}}">\n  <span \n    class="icon" \n    style="background-image: url({{#icon}}{{icon}}{{/icon}}{{^icon}}./res/puzzle.png{{/icon}});"\n  ></span>\n  <div class="container">\n    <div class="text" style="justify-content: space-between;">\n      <a>{{name}}</a>\n    </div>\n    <small class="value">\n      {{#author}}<span action="open" data-href="https://github.com/{{github}}" class="text link">{{name}}</span>{{/author}}\n    </small>\n  </div>\n</div>\n{{/.}}',c=t(73305),d=t(34325),u=t(2802),p=t(17686),g=t(98206);function m(n){const e=(0,c.Z)(strings.plugins),i=o()("span",{className:"icon search",attr:{action:"search"}}),l={all:[],installed:[]};let m="installed",f=0,h=0;if(e.body.innerHTML=s.Z.render("<div class='main' id='plugins'>\n  <div class='options'>\n    <span action='select' tabindex='0' value='all' class='active'>All</span>\n    <span action='select' tabindex='0' value='installed'>Installed</span>\n  </div>\n  <div id='plugin-list' class='list scroll' empty-msg='{{msg}}'></div>\n</div>",{msg:strings["loading..."]}),e.header.append(i),actionStack.push({id:"plugins",action:e.hide}),e.onhide=function(){d.Z.hideAd(),actionStack.remove("plugins"),d.Z.removeTitleLoader()},e.onclick=function(n){const i=n.target,a=i.getAttribute("action");"search"!==a?"open"!==a?"select"===a&&(m=i.getAttribute("value"),Z()):function({plugin:n,installed:e},i,a){t.e(414).then(t.bind(t,72400)).then((t=>{(0,t.default)(n,e,i,a)}))}(i.dataset,v,w):(0,u.Z)(e.get("#plugins"))},app.append(e),d.Z.showAd(),n)return e.get(".options").style.display="none",e.settitle(strings.update),void y(n).then(Z);function Z(){const n=e.get("#plugin-list");let t=strings["no plugins found"];"all"===m&&(0===f&&(t=strings["loading..."]),e.get('[action="select"].active')?.classList.remove("active"),e.get('[action="select"][value="all"]')?.classList.add("active"),e.get("#plugin-list").innerHTML=s.Z.render(r,l.all)),"installed"===m&&(0===h&&(t=strings["loading..."]),e.get('[action="select"].active')?.classList.remove("active"),e.get('[action="select"][value="installed"]')?.classList.add("active"),e.get("#plugin-list").innerHTML=s.Z.render(r,l.installed)),n.setAttribute("empty-msg",t)}async function y(n){const e=await(0,p.Z)(PLUGIN_DIR).lsDir();await Promise.all(e.map((async e=>{const t=g.Z.basename(e.url);if(n&&n.includes(t)||!n){const n=g.Z.join(e.url,"plugin.json"),t=await(0,p.Z)(n).readFile("json"),{id:i}=t,a=b(i,"icon.png");t.icon=await d.Z.toInternalUri(a),t.plugin=b(i,"plugin.json"),l.installed.push(t)}}))),h=1}function v(n){const e=l.all.find((e=>e.id===n));e&&(e.installed=!0,l.installed.push(e)),Z()}function w(n){const e=l.installed.find((e=>e.id===n));e&&(e.installed=!1,l.installed=l.installed.filter((e=>e.id!==n))),Z()}function b(n,e){return g.Z.join(PLUGIN_DIR,n,e)}!async function(){try{const n=await(0,p.Z)(PLUGIN_DIR).lsDir(),e=await a()({url:"https://raw.githubusercontent.com/deadlyjack/acode-plugins/main/list.json",method:"GET",responseType:"text",contentType:"application/x-www-form-urlencoded"});l.all=d.Z.parseJSON(e)||[],n.forEach((({url:n})=>{const e=l.all.find((({id:e})=>e===g.Z.basename(n)));e&&(e.installed=!0,e.plugin=b(e.id,"plugin.json"))})),f=1}catch(n){d.Z.error(n)}}(),y().then((()=>{Z()}))}}}]);