!function(e){function t(data){for(var t,r,o=data[0],l=data[1],f=data[2],i=0,m=[];i<o.length;i++)r=o[i],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&m.push(c[r][0]),c[r]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);for(y&&y(data);m.length;)m.shift()();return d.push.apply(d,f||[]),n()}function n(){for(var e,i=0;i<d.length;i++){for(var t=d[i],n=!0,r=1;r<t.length;r++){var o=t[r];0!==c[o]&&(n=!1)}n&&(d.splice(i--,1),e=l(l.s=t[0]))}return e}var r={},o={23:0},c={23:0},d=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=function(){try{return document.createElement("link").relList.supports("preload")}catch(e){return!1}}();o[e]?t.push(o[e]):0!==o[e]&&{2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1,11:1,12:1,13:1,14:1,15:1,16:1,17:1,18:1,19:1,20:1,21:1,22:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var c=({2:"pages/analysis",3:"pages/bonds/_symbol",4:"pages/bonds/index",5:"pages/commodities/_symbol",6:"pages/commodities/index",7:"pages/cryptocurrency/_symbol",8:"pages/cryptocurrency/index",9:"pages/currencies/_symbol",10:"pages/currencies/index",11:"pages/index",12:"pages/indices/_symbol",13:"pages/indices/index",14:"pages/magazine/_article",15:"pages/magazine/index",16:"pages/movers",17:"pages/personal-finance",18:"pages/privacy-policy",19:"pages/stocks/_symbol",20:"pages/stocks/index",21:"pages/terms-and-conditions",22:"pages/trading-101"}[e]||e)+"."+{2:"d5e138d",3:"a924213",4:"e6d4ec1",5:"a924213",6:"e6d4ec1",7:"a924213",8:"e6d4ec1",9:"a924213",10:"e6d4ec1",11:"e7debdc",12:"d04f632",13:"3affd8e",14:"4e06c31",15:"d3c8efb",16:"3affd8e",17:"4c3ed35",18:"da8ea30",19:"a924213",20:"e6d4ec1",21:"6de9c72",22:"b005072"}[e]+".css",d=l.p+c,f=document.getElementsByTagName("link"),i=0;i<f.length;i++){var m=(h=f[i]).getAttribute("data-href")||h.getAttribute("href");if(!("stylesheet"!==h.rel&&"preload"!==h.rel||m!==c&&m!==d))return t()}var y=document.getElementsByTagName("style");for(i=0;i<y.length;i++){var h;if((m=(h=y[i]).getAttribute("data-href"))===c||m===d)return t()}var v=document.createElement("link");v.rel=n?"preload":"stylesheet",n?v.as="style":v.type="text/css",v.onload=t,v.onerror=function(t){var n=t&&t.target&&t.target.src||d,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],v.parentNode.removeChild(v),r(c)},v.href=d,document.getElementsByTagName("head")[0].appendChild(v)})).then((function(){if(o[e]=0,n){var t=document.createElement("link");t.href=l.p+""+({2:"pages/analysis",3:"pages/bonds/_symbol",4:"pages/bonds/index",5:"pages/commodities/_symbol",6:"pages/commodities/index",7:"pages/cryptocurrency/_symbol",8:"pages/cryptocurrency/index",9:"pages/currencies/_symbol",10:"pages/currencies/index",11:"pages/index",12:"pages/indices/_symbol",13:"pages/indices/index",14:"pages/magazine/_article",15:"pages/magazine/index",16:"pages/movers",17:"pages/personal-finance",18:"pages/privacy-policy",19:"pages/stocks/_symbol",20:"pages/stocks/index",21:"pages/terms-and-conditions",22:"pages/trading-101"}[e]||e)+"."+{2:"d5e138d",3:"a924213",4:"e6d4ec1",5:"a924213",6:"e6d4ec1",7:"a924213",8:"e6d4ec1",9:"a924213",10:"e6d4ec1",11:"e7debdc",12:"d04f632",13:"3affd8e",14:"4e06c31",15:"d3c8efb",16:"3affd8e",17:"4c3ed35",18:"da8ea30",19:"a924213",20:"e6d4ec1",21:"6de9c72",22:"b005072"}[e]+".css",t.rel="stylesheet",t.type="text/css",document.body.appendChild(t)}})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var d=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=d);var f,script=document.createElement("script");script.charset="utf-8",script.timeout=120,l.nc&&script.setAttribute("nonce",l.nc),script.src=function(e){return l.p+""+{2:"9b656a4",3:"642fc68",4:"0e1041b",5:"7d484f8",6:"cff3d5b",7:"bff2ad0",8:"61d2add",9:"02eac98",10:"b18a478",11:"2bd3d44",12:"f6b4dc2",13:"2d4d20f",14:"936f5b1",15:"72a0fbb",16:"5433079",17:"03b7886",18:"4962244",19:"2fc6a6e",20:"44d4542",21:"ac923e8",22:"b2a4cda"}[e]+".js"}(e);var m=new Error;f=function(t){script.onerror=script.onload=null,clearTimeout(y);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",m.name="ChunkLoadError",m.type=r,m.request=o,n[1](m)}c[e]=void 0}};var y=setTimeout((function(){f({type:"timeout",target:script})}),12e4);script.onerror=script.onload=f,document.head.appendChild(script)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},l.p="/_nuxt/",l.oe=function(e){throw console.error(e),e};var f=window.webpackJsonp=window.webpackJsonp||[],m=f.push.bind(f);f.push=t,f=f.slice();for(var i=0;i<f.length;i++)t(f[i]);var y=m;n()}([]);