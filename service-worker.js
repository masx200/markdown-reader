if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,l)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=l(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-7027d4db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./10.8c7dd852de4d91899ed9.js",revision:null},{url:"./11.a620735a7acb9fa9558d.js",revision:null},{url:"./12.53037796a972ec16fe09.js",revision:null},{url:"./13.5b0b84db0a5c7d2a374e.js",revision:null},{url:"./14.b453426ae6c9ea53090d.js",revision:null},{url:"./15.782d671b56f62eda5048.js",revision:null},{url:"./3.475e1fd8d7bbd5b80b63.js",revision:null},{url:"./4.0cd9e81126b8f2963163.js",revision:null},{url:"./5.eefb4f02284607e836a5.js",revision:null},{url:"./5.eefb4f02284607e836a5.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"},{url:"./6.0801208139c2a3418837.js",revision:null},{url:"./7.04a80313477dcca166a3.js",revision:null},{url:"./8.fbd629ae4e095fdc8702.js",revision:null},{url:"./8.fbd629ae4e095fdc8702.js.LICENSE.txt",revision:"89123cce5ef7332db0f52238d5ccde29"},{url:"./9.332068c63749377512d2.js",revision:null},{url:"./favicon.ico",revision:"ac998ede0f8d84c3461f35ecd476c444"},{url:"./index.html",revision:"9555289033d088f5916fcd72022f0eb0"},{url:"./javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.1feff74faaf0efc6a044355c92cd15d9.bin",revision:null},{url:"./main.59953ba86d5179dfd628.js",revision:null},{url:"./runtime.d36922920b1a53ce0512.js",revision:null},{url:"./style.7f7280d0e100cb34bfb7.css",revision:null}],{}),e.registerRoute(/.*\.(?:js|html|\/)$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*\.(?:xml|json|md|css)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
