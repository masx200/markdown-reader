if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,c)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const l={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return l;default:return e(r)}}))).then((e=>{const r=c(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-7027d4db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./10.f74d884aeb94b69b26b8.js",revision:null},{url:"./11.a1e220da1d69df3f61b8.js",revision:null},{url:"./12.9425f7dcf9c6ab7fc216.js",revision:null},{url:"./13.cf7fb3921f110430285e.js",revision:null},{url:"./14.058948bc683ce4184ed5.js",revision:null},{url:"./15.5a32ae382d422e5af215.js",revision:null},{url:"./3.4187a2039fcd0f45df4d.js",revision:null},{url:"./4.a056a85bdc513dc357fc.js",revision:null},{url:"./5.1aca9bb56768ff23b012.js",revision:null},{url:"./5.1aca9bb56768ff23b012.js.LICENSE.txt",revision:"5b8abc649cf29de3b5de419a078d8c6c"},{url:"./6.b5850daae9578c1a887a.js",revision:null},{url:"./7.d62b73b6fad71679ec4e.js",revision:null},{url:"./8.0615e42ec94580f4571c.js",revision:null},{url:"./8.0615e42ec94580f4571c.js.LICENSE.txt",revision:"89123cce5ef7332db0f52238d5ccde29"},{url:"./9.3eb1b9e7496d5f503c6d.js",revision:null},{url:"./favicon.ico",revision:"ac998ede0f8d84c3461f35ecd476c444"},{url:"./index.html",revision:"0c5954ed7fb5a3569cc6d4fcd8cf0401"},{url:"./javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;.1feff74faaf0efc6a044355c92cd15d9.bin",revision:null},{url:"./main.c7b1e7850bd7a35a36f3.js",revision:null},{url:"./runtime.49f3c2165e03653f15c4.js",revision:null},{url:"./style.87c40fb4f3013ec8ae7c.css",revision:null}],{}),e.registerRoute(/.*\.(?:js|html|\/)$/,new e.NetworkFirst,"GET"),e.registerRoute(/.*\.(?:xml|json|md|css)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,purgeOnQuotaError:!0})]}),"GET")}));
