if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let d={};const n=e=>i(e,o),t={module:{uri:o},exports:d,require:n};s[o]=Promise.all(r.map((e=>t[e]||n(e)))).then((e=>(c(...e),d)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"App.css",revision:"d13a52212899f79d8eaec9710ea53b39"},{url:"App.jsx",revision:"0bedcdfeb5fd6333969b6b6445ba9e84"},{url:"App.test.js",revision:"83ca979af0e840672a4aa673b0c7be01"},{url:"components/ApiUtil.jsx",revision:"06668976dc5771c373716908a311ffa4"},{url:"components/estilos.css",revision:"493b492bde9f90c1c14f3df657ec5c3f"},{url:"index.css",revision:"7386d27f653921d6b5c3b54e0cd9d67d"},{url:"index.js",revision:"efbbca74ba1ad35ba3cadeb3c2040bac"},{url:"logo.svg",revision:"06e733283fa43d1dd57738cfc409adbd"},{url:"reportWebVitals.js",revision:"b528fd380de9b503eb5c84973639cca4"},{url:"setupTests.js",revision:"72158175c4ba432ede32a7c2ca4143e0"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
