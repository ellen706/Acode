"use strict";(self.webpackChunkcom_foxdebug_acode=self.webpackChunkcom_foxdebug_acode||[]).push([[260],{92923:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var o=n(8187),i=n.n(o),r=n(53124),a=n(73305),s=n(34325),c=n(96972),u=n(79870),d=n(98206),l=n(17686);async function p(){const t=(0,a.Z)(strings["github login"]),e=i().parse(r.Z.render("<div id='github-login' class='main'>\r\n  <form class='form' action='#'>\r\n    <input type='text' id='token' placeholder='GitHub token' />\r\n\r\n    <span id='error-msg'></span>\r\n    <div class='button-container primary'>\r\n      <button type='submit'>{{login}}</button>\r\n    </div>\r\n  </form>\r\n</div>",strings)),n=e.get(".form"),o=e.get("input"),p=e.get("#token"),g=e.get("#error-msg"),b=i()("a",{className:"icon help",href:u.Z.GITHUB_TOKEN}),f=(0,l.Z)(d.Z.join(DATA_STORAGE,".github"));await f.exists()&&f.delete(),t.header.append(b),t.body=e,o.onclick=()=>g.textContent="",n.onsubmit=function(e){e.preventDefault();let n=p.value;const o=s.Z.credentials;if(!n)return g.textContent="Please enter GitHub token!";localStorage.setItem("token",o.encrypt(n)),(0,c.Z)(t)},actionStack.push({id:"github login",action:t.hide}),t.onhide=function(){s.Z.hideAd(),actionStack.remove("github login")},Object.defineProperty(t,"setMessage",{value(t){g.textContent=t}}),app.append(t),s.Z.showAd()}}}]);