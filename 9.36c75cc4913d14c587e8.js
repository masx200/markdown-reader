(Function("return this")().webpackChunk_masx200_markdown_reader=Function("return this")().webpackChunk_masx200_markdown_reader||[]).push([[9],{74:function(t,e,r){"use strict";r.r(e),r.d(e,{mymounted:function(){return M}});var n=r(1),a=r.n(n),i=r(7),c=r(9),u=r(25),o=r(26),s=r(33),f=r(71),h=r(66),l=r(32),p=r(67),d=r(27),m=r(69),v=r(68);function w(t){return y.apply(this,arguments)}function y(){return(y=(0,i.Z)(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{credentials:"omit",method:"HEAD",mode:"cors"});case 2:if((n=t.sent).ok){t.next=7;break}throw new Error("fetch failed:status:"+n.status+"\n"+e);case 7:if(null===(r=n.headers.get("content-type"))||void 0===r?void 0:r.startsWith("text/markdown")){t.next=11;break}throw new Error("fetch failed:content-type:"+n.headers.get("content-type")+"\n"+e);case 11:return t.abrupt("return",n);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var b=r(70),E=r(28);function A(){return x.apply(this,arguments)}function x(){return(x=(0,i.Z)(a().mark((function t(){var e,r,n,i,u,o,y,A,x;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(0,d.oq)(),r=e,r=(0,E.N)(r),v.i.unshift(r),t.prev=4,(0,h.bk)(),t.next=8,(0,p.Z)(r);case 8:return n=t.sent,t.next=11,(0,l.$)(n);case 11:return i=t.sent,(u=document.implementation.createHTMLDocument("title")).body.innerHTML=i,Array.from(u.body.querySelectorAll("img")).forEach((function(t){var r=t.getAttribute("src");if(r&&!r.startsWith("http://")&&!r.startsWith("https://")){var n=String(new URL(r,e));t.src=n}})),(o=document.createElement("div")).innerHTML=u.body.innerHTML,(0,b.E)(o),Array.from(o.querySelectorAll("pre code")).forEach((function(t){s.Z.highlightElement(t)})),y=(0,d.ID)(),v.i.unshift(y),[{u:e,d:"\u76ee\u5f55"},{u:y,d:"\u4e3b\u9875"}].forEach((function(t){var e=t.u,r=t.d,n='<a href="'.concat(e,'" class="mui-btn mui-btn-primary mui-btn-outlined">').concat(r,"</a><br/>");o.insertAdjacentHTML("afterbegin",n)})),Array.from(o.querySelectorAll("ul")).forEach((function(t){return t.classList.add("navbar-nav")})),Array.from(o.querySelectorAll("a")).forEach((function(t){var e;return(e=t.classList).add.apply(e,(0,f.Z)("mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8".split(" ")))})),Array.from(o.querySelectorAll("a")).forEach((function(t){var r=t.getAttribute("href"),n=new URL(location.href);if(null===r||void 0===r?void 0:r.endsWith(".md")){var a=(0,m.G)(r)?new URL(r,e):r,i=(0,E.N)(a);i=i.endsWith(".md")?i:i+".md",v.i.push(i);var c=t.innerText;c&&!h.O0.get(i)&&h.O0.set(i,c),n.hash="#"+i,t.href=n.href}})),new Set(Array.from(o.querySelectorAll("a")).map((function(t){return t.href}))).forEach((function(t){o.querySelectorAll('a[href="'.concat(t,'"]')).forEach((function(t,e){e>0&&t.remove()}))})),Reflect.set(c.El,"showerror",!1),Reflect.set(c.El,"muluhtml",o.innerHTML),A=o.innerHTML,h.ir.get(r)||h.ir.set(r,A),x=new Set(v.i),v.i.length=0,x.forEach((function(t){v.i.push(t)})),Object.freeze(v.i),v.i.forEach((function(t){w(t)})),t.abrupt("return");case 40:throw t.prev=40,t.t0=t.catch(4),(0,h.m5)(),Reflect.set(c.El,"errorcontent","\u52a0\u8f7d\u5931\u8d25 "+r),Reflect.set(c.El,"showerror",!0),t.t0;case 47:case"end":return t.stop()}}),t,null,[[4,40]])})))).apply(this,arguments)}var g=r(31);function k(){return L.apply(this,arguments)}function L(){return(L=(0,i.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:return t.next=4,(0,g.M)();case 4:s.Z.highlightAll();case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return Z.apply(this,arguments)}function Z(){return(Z=(0,i.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.Z.maintitle,document.title=e,t.abrupt("return",k());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(){return T.apply(this,arguments)}function T(){return(T=(0,i.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:(e=document.getElementById(c.I))&&(e.style.display="none"),window.dispatchEvent(new Event("hashchange")),window.dispatchEvent(new Event("resize")),q();case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function q(){new MutationObserver((function(){window.dispatchEvent(new Event("resize"))})).observe(u.TN.value,{attributeOldValue:!0,subtree:!0,childList:!0,attributes:!0})}}}]);