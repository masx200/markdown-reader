(Function("return this")().webpackChunk_masx200_markdown_reader=Function("return this")().webpackChunk_masx200_markdown_reader||[]).push([[10],{59:function(e,t,r){"use strict";r.r(t),r.d(t,{mymounted:function(){return L}});var n=r(1),a=r.n(n),c=r(7),i=r(10),u=r(11),o=r(8),s=r(18),l=r(56),f=r(51),h=r(17),p=r(52),d=r(13),m=r(54),v=r(53);function w(e){return y.apply(this,arguments)}function y(){return(y=(0,c.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{credentials:"omit",method:"HEAD",mode:"cors"});case 2:if((n=e.sent).ok){e.next=7;break}throw new Error("fetch failed:status:"+n.status+"\n"+t);case 7:if(null===(r=n.headers.get("content-type"))||void 0===r?void 0:r.startsWith("text/markdown")){e.next=11;break}throw new Error("fetch failed:content-type:"+n.headers.get("content-type")+"\n"+t);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=r(55);function E(){return k.apply(this,arguments)}function k(){return(k=(0,c.Z)(a().mark((function e(){var t,r,n,c,u,o,y,E;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,d.oq)(),r=t,r=(0,b.N)(r),v.i.unshift(r),e.prev=4,(0,f.bk)(),e.next=8,(0,p.Z)(r);case 8:return n=e.sent,e.next=11,(0,h.$)(n);case 11:return c=e.sent,(u=document.createElement("div")).innerHTML=c,Array.from([].concat((0,l.Z)(u.querySelectorAll("link")),(0,l.Z)(u.querySelectorAll("style")),(0,l.Z)(u.querySelectorAll("script")))).forEach((function(e){e.remove()})),Array.from(u.querySelectorAll("pre code")).forEach((function(e){s.Z.highlightElement(e)})),o='<a href="'.concat(t,'" class="mui-btn mui-btn-primary mui-btn-outlined">\u76ee\u5f55</a>'),u.insertAdjacentHTML("afterbegin",o),Array.from(u.querySelectorAll("ul")).forEach((function(e){return e.classList.add("navbar-nav")})),Array.from(u.querySelectorAll("a")).forEach((function(e){var t;return(t=e.classList).add.apply(t,(0,l.Z)("mui-btn mui-btn-primary mui-btn-outlined mybutton-8731e6c5bb5148e49e14cca7cdfa73e8".split(" ")))})),Array.from(u.querySelectorAll("a")).forEach((function(e){var r=e.getAttribute("href"),n=new URL(location.href);if(null===r||void 0===r?void 0:r.endsWith(".md")){var a=(0,m.G)(r)?new URL(r,t):r,c=(0,b.N)(a);c=c.endsWith(".md")?c:c+".md",v.i.push(c);var i=e.innerText;i&&!f.O0.get(c)&&f.O0.set(c,i),n.hash="#"+c,e.href=n.href}})),Reflect.set(i.El,"showerror",!1),Reflect.set(i.El,"muluhtml",u.innerHTML),y=Reflect.get(i.El,"muluhtml"),f.ir.get(r)||f.ir.set(r,y),E=new Set(v.i),v.i.length=0,E.forEach((function(e){v.i.push(e)})),Object.freeze(v.i),v.i.forEach((function(e){w(e)})),e.abrupt("return");case 34:throw e.prev=34,e.t0=e.catch(4),(0,f.m5)(),Reflect.set(i.El,"errorcontent","\u52a0\u8f7d\u5931\u8d25 "+r),Reflect.set(i.El,"showerror",!0),e.t0;case 41:case"end":return e.stop()}}),e,null,[[4,34]])})))).apply(this,arguments)}var x=r(16);function A(){return g.apply(this,arguments)}function g(){return(g=(0,c.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.i.push((0,b.N)((0,d.ID)())),e.next=3,E();case 3:return e.next=5,(0,x.M)();case 5:s.Z.highlightAll();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(){return q.apply(this,arguments)}function q(){return(q=(0,c.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.default.maintitle,document.title=t,Reflect.set(i.El,"mytitle",t),e.abrupt("return",A());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return R.apply(this,arguments)}function R(){return(R=(0,c.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z();case 2:(t=document.getElementById(i.I))&&(t.style.display="none"),window.dispatchEvent(new Event("hashchange")),window.dispatchEvent(new Event("resize")),S();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){new MutationObserver((function(e){window.dispatchEvent(new Event("resize"))})).observe(u.TN.value,{attributeOldValue:!0,subtree:!0,childList:!0,attributes:!0})}}}]);