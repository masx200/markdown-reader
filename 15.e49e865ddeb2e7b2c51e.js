(Function("return this")().webpackChunk_masx200_markdown_reader=Function("return this")().webpackChunk_masx200_markdown_reader||[]).push([[15],{86:function(e,t,n){"use strict";n.r(t),n.d(t,{mymounted:function(){return N}});var r=n(2),a=n.n(r),c=n(26),i=n(6),u=n(7),o=n(41),s=n(40),f=n(33),l=n(32),h=n(38),d=n(27),p=n(28),m=n(25),b=n(29),y=n(35),v=n(47);function w(e){return x.apply(this,arguments)}function x(){return(x=(0,c.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{credentials:"omit",method:"HEAD",mode:"cors"});case 2:if((r=e.sent).ok){e.next=7;break}throw new Error("fetch failed:status:"+r.status+"\n"+t);case 7:if(null===(n=r.headers.get("content-type"))||void 0===n?void 0:n.startsWith("text/markdown")){e.next=11;break}throw new Error("fetch failed:content-type:"+r.headers.get("content-type")+"\n"+t);case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=n(36),k=n(34);function g(){return A.apply(this,arguments)}function A(){return(A=(0,c.Z)(a().mark((function e(){var t,r,c,i,o,s,f,h,y,x,g;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,u.m)(),r=(0,l.oq)(),c=r,c=(0,k.N)(c),v.i.unshift(c),e.prev=5,(0,p.bk)(),e.next=9,(0,b.Z)(c);case 9:return i=e.sent,e.next=12,(0,m.$)(i,{baseUrl:c});case 12:return o=e.sent,(s=document.implementation.createHTMLDocument("")).body.innerHTML=o,(0,d.G)(s,r),(f=document.createElement("div")).innerHTML=s.body.innerHTML,(0,E.E)(f),e.next=21,Promise.all([n.e(10),n.e(11),n.e(12),n.e(9)]).then(n.bind(n,51));case 21:return h=e.sent.default,Array.from(f.querySelectorAll("pre code")).forEach((function(e){h.highlightElement(e)})),y=(0,l.ID)(),v.i.unshift(y),R(r,y,f),L(f),M(f,r),Z(f),Reflect.set(t,"showerror",!1),x=f.innerHTML,Reflect.set(t,"muluhtml",x),p.ir.get(c)||p.ir.set(c,x),g=new Set(v.i),v.i.length=0,g.forEach((function(e){v.i.push(e)})),v.i.forEach((function(e){w(e)})),e.abrupt("return");case 41:throw e.prev=41,e.t0=e.catch(5),(0,p.m5)(),Reflect.set(t,"errorcontent","\u52a0\u8f7d\u5931\u8d25 "+c),Reflect.set(t,"showerror",!0),Reflect.set(t,"showsrc",!1),e.t0;case 49:case"end":return e.stop()}}),e,null,[[5,41]])})))).apply(this,arguments)}function L(e){Array.from(e.querySelectorAll("ul")).forEach((function(e){return e.classList.add("navbar-nav")})),Array.from(e.querySelectorAll("a")).forEach((function(e){var t;return(t=e.classList).add.apply(t,(0,h.Z)("mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8".split(" ")))}))}function M(e,t){Array.from(e.querySelectorAll("a")).forEach((function(e){var n=e.getAttribute("href"),r=new URL(location.href);if(null===n||void 0===n?void 0:n.endsWith(".md")){var a,c=(0,y.G)(n)?new URL(n,t):n,i=(0,k.N)(c),u=i=i.endsWith(".md")?i:i+".md";if(!new URL(u).pathname.endsWith(".md"))return;v.i.push(u);var o=e.innerText;o&&!p.O0.get(u)&&p.O0.set(u,o),r.hash="#"+u,e.href=r.href,(a=e.classList).add.apply(a,(0,h.Z)("mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8".split(" ")))}}))}function R(e,t,n){[{u:e,d:"\u76ee\u5f55"},{u:t,d:"\u4e3b\u9875"}].forEach((function(e){var t=e.u,r=e.d,a='<a href="'.concat(t,'" class="mui-btn mui-btn-primary mui-btn-outlined">').concat(r,"</a><br/>");n.insertAdjacentHTML("afterbegin",a)}))}function Z(e){new Set(Array.from(e.querySelectorAll("a")).map((function(e){return e.href}))).forEach((function(t){e.querySelectorAll('a[href="'.concat(t,'"]')).forEach((function(e,t){if(t>0){var n=e.parentNode;if(e.remove(),n&&!n.childNodes.length){var r=Reflect.get(n,"remove");"function"===typeof r&&Reflect.apply(r,n,[])}}}))}))}var q=n(31),S=n(24);function H(){return T.apply(this,arguments)}function T(){return(T=(0,c.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(0,l.oq)(),r=(0,q.w)(),!Object.is(r,t)){e.next=9;break}return e.next=5,g();case 5:return e.next=7,(0,S.M)();case 7:e.next=11;break;case 9:return e.next=11,Promise.all([g(),(0,S.M)()]);case 11:return e.next=13,Promise.all([n.e(10),n.e(11),n.e(12),n.e(9)]).then(n.bind(n,51));case 13:e.sent.default.highlightAll();case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(){return O.apply(this,arguments)}function O(){return(O=(0,c.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.Z.maintitle,document.title=t,e.abrupt("return",H());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return U.apply(this,arguments)}function U(){return(U=(0,c.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:(t=document.getElementById(o.I))&&(t.style.display="none"),window.dispatchEvent(new Event("hashchange")),window.dispatchEvent(new Event("resize")),W();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){var e=new MutationObserver((function(){(0,i.M)(),(0,s.M)()})),t=(0,u.m)();e.observe(t.Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644,{attributeOldValue:!0,subtree:!0,childList:!0,attributes:!0})}}}]);