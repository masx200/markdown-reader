if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,l)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=l(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-7027d4db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./10.4d744f0cc23ebf22c780.js",revision:null},{url:"./11.6a077738a32b501d3979.js",revision:null},{url:"./12.8c5b30ef865580a3e7b9.js",revision:null},{url:"./13.da634cbcf2119dd55a93.js",revision:null},{url:"./14.2966f11d8120970fe91f.js",revision:null},{url:"./15.61bb71b2b9afd81e8f87.js",revision:null},{url:"./3.475e1fd8d7bbd5b80b63.js",revision:null},{url:"./4.c106b8bda90c963c3363.js",revision:null},{url:"./5.433421ceb283eba5936b.js",revision:null},{url:"./5.433421ceb283eba5936b.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"},{url:"./6.fefd9b80c3b306553938.js",revision:null},{url:"./7.600323c999876e9b504c.js",revision:null},{url:"./8.962c1849b641af15fe17.js",revision:null},{url:"./8.962c1849b641af15fe17.js.LICENSE.txt",revision:"89123cce5ef7332db0f52238d5ccde29"},{url:"./9.0a5ed5933042090fa98f.js",revision:null},{url:"./favicon.ico",revision:"ac998ede0f8d84c3461f35ecd476c444"},{url:"./index.html",revision:"c9390e6fce286640716dd1d0800ea8c6"},{url:"./javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.1feff74faaf0efc6a044355c92cd15d9.bin",revision:null},{url:"./main.2d5712bc57d35fa7b321.js",revision:null},{url:"./runtime.9a7b31e2cfa9f11f80b5.js",revision:null},{url:"./style.735865b4c5081f9e587b.css",revision:null}],{}),e.registerRoute(/.*\.(?:js|html|\/)$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*\.(?:xml|json|md|css)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
