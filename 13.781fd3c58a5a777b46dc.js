(Function("return this")().webpackChunk_masx200_markdown_reader=Function("return this")().webpackChunk_masx200_markdown_reader||[]).push([[13],{85:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return N}});var a=n(2),i=n.n(a),r=n(26),s=n(47),c=n(6),o=n(46),l=n(28),d=n(7),b=n(30),u=(0,s.aZ)({props:["href"],computed:{disabled:function(){return!this.enabled},enabled:function(){return this.href!==b.o}}}),f=n(48),m=(0,f.Z)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.enabled?n("a",{staticClass:"\n            mui-btn mui-btn-primary mui-btn-outlined\n            mybutton-8731e6c5bb5148e49e14cca7cdfa73e8\n        ",staticStyle:{height:"100%",width:"100%","line-height":"inherit"},attrs:{href:t.href}},[t._t("default")],2):t._e(),t._v(" "),t.disabled?n("button",{staticClass:"\n            mui-btn mui-btn-primary mui-btn-outlined\n            mybutton-8731e6c5bb5148e49e14cca7cdfa73e8\n        ",staticStyle:{height:"100%",width:"100%"},attrs:{type:"button"}},[t._t("default")],2):t._e()])}),[],!1,null,null,null).exports,h=n(22),v=n(36),p=(0,s.aZ)({props:["title","href"]}),_=(0,f.Z)(p,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"\n        navbar-brand navbar-brand\n        mui-btn mui-btn-primary mui-btn-outlined\n    ",staticStyle:{margin:"0",top:"0px"},attrs:{href:t.href},domProps:{textContent:t._s(t.title)}},[t._v("Markdown Reader")])}),[],!1,null,null,null).exports,w=n(23),y=n(35);var x=(0,s.aZ)({props:["onclick"]}),g=(0,f.Z)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"mui-btn mui-btn-primary mui-btn-outlined",staticStyle:{display:"inline-block"},attrs:{type:"button"},on:{click:t.onclick}},[n("span",{staticClass:"navbar-toggler-icon"})])}),[],!1,null,null,null).exports,k=(0,s.aZ)({props:["html"]}),C=(0,f.Z)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"mysidebar"},[n("div",{staticClass:"container-fluid",staticStyle:{padding:"0"}},[n("div",{ref:"Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644",staticClass:"el-container",staticStyle:{border:"1px solid white",position:"inherit"},attrs:{id:"cebianlan-720feeaf8ee88a6b9b9399876713ed78af4"}},[n("div",{staticClass:"el-aside",staticStyle:{"background-color":"white"},attrs:{id:"mynewsidelan-c887e2d697f11af869981691c9830ebd892"},domProps:{innerHTML:t._s(t.html)}})])])])}),[],!1,null,null,null).exports;function S(){return String(Object.assign(new URL(location.href),{hash:(0,v.ID)()}))}function H(){return l.Z.maintitle}var Z=(0,s.aZ)({components:{Toggledisplayofsidebar:g,NavHomebutton:_,Disableablelinks:m,Sidebarleft:C},setup:function(){var t=(0,o.iH)(),e=(0,o.iH)(),a=(0,o.iH)(),s=(0,o.iH)(),c=(0,o.iH)(),l=(0,o.iH)(!0),b=(0,o.Fl)((function(){return!l.value}));(0,o.bv)((function(){l.value=document.body.clientWidth>550,window.addEventListener("resize",(0,d.D)((function(){requestAnimationFrame((function(){l.value=document.body.clientWidth>550}))})))}));var u={widescreen:l,narrowscreen:b,contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1:s,mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95:a,mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3:e,Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644:c,markdowncontent_2e4c728cac441a0c48939881c2c714361a0:t};return(0,o.bv)((function(){(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(14).then(n.bind(n,86));case 2:e=t.sent,(0,e.mymounted)();case 5:case"end":return t.stop()}}),t)})))()})),u},mounted:function(){this.indexhref=S(),this.mytitle=H(),c.w.value=this,h.t.dispatchEvent(new Event("mount")),this.$el.id="app"},data:function(){return{indexhref:S(),contenthtml:"",muluhtml:"",nextpagelink:b.o,prevpagelink:b.o,mytitle:H(),showerror:!1,errorcontent:"",showsrc:!1,urltext:"",xianshicebianlan:!0,showload:!0}},methods:{togglecebian:function(){this.xianshicebianlan=!this.xianshicebianlan},scrolltotop:function(){var t=(0,y.w)();w.N.setparams({md:t,id:"top"}),scrollTo(0,0)},scrolltobottom:function(){var t=(0,y.w)();w.N.setparams({md:t,id:"bottom"}),scrollTo(0,document.body.scrollHeight)}}}),N=(0,f.Z)(Z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("div",{ref:"mynavigationbar_dceff036a563faf668b4d4a50fd702d1d95",staticClass:"container-fluid fixed-top",staticStyle:{"padding-right":"0","padding-left":"0"},attrs:{id:"mynavigationbar-dceff036a563faf668b4d4a50fd702d1d95"}},[n("nav",{staticClass:"navbar navbar-expand-sm bg-light navbar-light",staticStyle:{"padding-right":"0","padding-left":"0"}},[t.narrowscreen?n("div",{staticStyle:{display:"flex",width:"100%","justify-content":"space-between","flex-direction":"row","align-items":"stretch"},attrs:{id:"nav-6fc6d0bc9128ba5f98a1e493cb2adf11550"}},[n("Toggledisplayofsidebar",{attrs:{onclick:t.togglecebian}}),t._v(" "),n("NavHomebutton",{attrs:{href:t.indexhref,title:t.mytitle}})],1):t._e(),t._v(" "),t.narrowscreen?n("div",{staticStyle:{display:"flex",width:"100%","justify-content":"space-between","flex-direction":"row","align-items":"stretch"},attrs:{id:"nav-7e7dd758bdb27a9c889a4eaa0fce55cf2d7"}},[n("button",{staticClass:"\n                            mui-btn mui-btn-primary mui-btn-outlined\n                            mybutton-8731e6c5bb5148e49e14cca7cdfa73e8\n                        ",attrs:{type:"button"},on:{click:t.scrolltotop}},[t._v("\n                        \u9876\u90e8\n                    ")]),t._v(" "),n("button",{staticClass:"\n                            mui-btn mui-btn-primary mui-btn-outlined\n                            mybutton-8731e6c5bb5148e49e14cca7cdfa73e8\n                        ",attrs:{type:"button"},on:{click:t.scrolltobottom}},[t._v("\n                        \u5e95\u90e8\n                    ")]),t._v(" "),n("Disableablelinks",{attrs:{href:t.prevpagelink}},[t._v("\n                        \u524d\u9875\n                    ")]),t._v(" "),n("Disableablelinks",{attrs:{href:t.nextpagelink}},[t._v("\n                        \u540e\u9875\n                    ")])],1):t._e(),t._v(" "),t.widescreen?n("div",{staticStyle:{display:"flex",width:"100%","justify-content":"space-between","flex-direction":"row","align-items":"stretch"},attrs:{id:"nav-3fa9878ebc0dbb05688f058e3bcafc57386"}},[n("Toggledisplayofsidebar",{attrs:{onclick:t.togglecebian}}),t._v(" "),n("NavHomebutton",{attrs:{href:t.indexhref,title:t.mytitle}}),t._v(" "),n("button",{staticClass:"\n                            mui-btn mui-btn-primary mui-btn-outlined\n                            mybutton-8731e6c5bb5148e49e14cca7cdfa73e8\n                        ",attrs:{type:"button"},on:{click:t.scrolltotop}},[t._v("\n                        \u9876\u90e8\n                    ")]),t._v(" "),n("button",{staticClass:"\n                            mui-btn mui-btn-primary mui-btn-outlined\n                            mybutton-8731e6c5bb5148e49e14cca7cdfa73e8\n                        ",attrs:{type:"button"},on:{click:t.scrolltobottom}},[t._v("\n                        \u5e95\u90e8\n                    ")]),t._v(" "),n("Disableablelinks",{attrs:{href:t.prevpagelink}},[t._v("\n                        \u524d\u9875\n                    ")]),t._v(" "),n("Disableablelinks",{attrs:{href:t.nextpagelink}},[t._v("\n                        \u540e\u9875\n                    ")])],1):t._e(),t._v(" "),t.narrowscreen?n("Sidebarleft",{directives:[{name:"show",rawName:"v-show",value:t.xianshicebianlan,expression:"xianshicebianlan"}],ref:"Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644",attrs:{html:t.muluhtml}}):t._e()],1)])]),t._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:t.showload,expression:"showload"}]},[t._m(0)]),t._v(" "),n("div",{ref:"mybody_143af32b9b8f396b798aeb8d4ee68ed9ca3",staticStyle:{display:"flex",width:"100%","flex-direction":"row","align-items":"flex-start","justify-content":"space-between","align-content":"stretch","flex-wrap":"nowrap"},attrs:{id:"mybody-143af32b9b8f396b798aeb8d4ee68ed9ca3"}},[t.widescreen?n("Sidebarleft",{directives:[{name:"show",rawName:"v-show",value:t.xianshicebianlan,expression:"xianshicebianlan"}],ref:"Mysidebar_c41e47b3b3bbc85fdbb7dbba7d3a0743644",attrs:{html:t.muluhtml}}):t._e(),t._v(" "),n("main",{staticStyle:{"max-width":"fit-content",width:"max-content"}},[n("div",{staticClass:"container"},[n("div",[n("div",{ref:"contentcontainer_9ce8d13b9be97b46e89aeea8f242169cfa1",staticStyle:{"margin-left":"auto"},attrs:{id:"contentcontainer-9ce8d13b9be97b46e89aeea8f242169cfa1"}},[n("h5",{directives:[{name:"show",rawName:"v-show",value:t.showsrc,expression:"showsrc"}],attrs:{id:"markdownurlsrc-63228f01b0737ac6a8b1c08af92dec0eb11"},domProps:{textContent:t._s(t.urltext)}}),t._v(" "),n("h5",{directives:[{name:"show",rawName:"v-show",value:t.showerror,expression:"showerror"}],attrs:{id:"markdownerror-4c6b19f7b26c2b519b8ff480769b5565d6b"},domProps:{textContent:t._s(t.errorcontent)}}),t._v(" "),n("article",[n("div",{ref:"markdowncontent_2e4c728cac441a0c48939881c2c714361a0",attrs:{id:"content-aa867a1d8c5dfbf2abbff8bc2af55a88a36"},domProps:{innerHTML:t._s(t.contenthtml)}})])])])])])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"loadingparent-b80f303d89182a8e58b02981c0822deb975"}},[n("div",{attrs:{id:"loading-36bec0d286ad9ab9ca8c1d923b0095c1c06"}},[n("h1",{staticStyle:{"font-size":"50px","background-color":"white","border-radius":"10px",border:"black 3px solid",padding:"5px"}},[t._v("\n                    Loading...\n                ")])])])}],!1,null,null,null).exports}}]);