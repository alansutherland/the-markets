(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{284:function(t,e,n){},285:function(t,e,n){"use strict";var c=n(6),r=n(53).findIndex,o=n(83),l=n(41),d=!0,f=l("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){d=!1})),c({target:"Array",proto:!0,forced:d||!f},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},286:function(t,e,n){},287:function(t,e,n){var map={"./alibaba.png":288,"./amazon.jpg":289,"./amc.jpg":290,"./apple.jpg":291,"./bitcoin.jpg":292,"./blackberry.png":293,"./boeing.jpg":294,"./cardano.jpg":295,"./doge.jpg":296,"./ethereum.png":297,"./facebook.jpg":298,"./gamestop.png":299,"./iota.png":300,"./microsoft.png":301,"./moderna.jpg":302,"./nio.jpg":303,"./nvidia.png":304,"./palantir.png":305,"./pfizer.jpg":306,"./polkadot.png":307,"./santander.png":308,"./tesla.jpg":309,"./xpeng.png":310,"./xrp.png":311};function c(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=r,t.exports=c,c.id=287},288:function(t,e,n){t.exports=n.p+"img/alibaba.5b321e8.png"},289:function(t,e,n){t.exports=n.p+"img/amazon.e14fb79.jpg"},290:function(t,e,n){t.exports=n.p+"img/amc.18d7950.jpg"},291:function(t,e,n){t.exports=n.p+"img/apple.c9042ac.jpg"},292:function(t,e,n){t.exports=n.p+"img/bitcoin.2a20cef.jpg"},293:function(t,e,n){t.exports=n.p+"img/blackberry.097a5e8.png"},294:function(t,e,n){t.exports=n.p+"img/boeing.b9ef302.jpg"},295:function(t,e,n){t.exports=n.p+"img/cardano.013688d.jpg"},296:function(t,e,n){t.exports=n.p+"img/doge.23de2e0.jpg"},297:function(t,e,n){t.exports=n.p+"img/ethereum.7a7635e.png"},298:function(t,e,n){t.exports=n.p+"img/facebook.c62058f.jpg"},299:function(t,e,n){t.exports=n.p+"img/gamestop.8b5c2fa.png"},300:function(t,e,n){t.exports=n.p+"img/iota.c9764d3.png"},301:function(t,e,n){t.exports=n.p+"img/microsoft.a8eb193.png"},302:function(t,e,n){t.exports=n.p+"img/moderna.0435a6a.jpg"},303:function(t,e,n){t.exports=n.p+"img/nio.06f8c95.jpg"},304:function(t,e,n){t.exports=n.p+"img/nvidia.82556ee.png"},305:function(t,e,n){t.exports=n.p+"img/palantir.d0ac211.png"},306:function(t,e,n){t.exports=n.p+"img/pfizer.b9f940e.jpg"},307:function(t,e,n){t.exports=n.p+"img/polkadot.515f475.png"},308:function(t,e,n){t.exports=n.p+"img/santander.59cfe1e.png"},309:function(t,e,n){t.exports=n.p+"img/tesla.ab6574f.jpg"},310:function(t,e,n){t.exports=n.p+"img/xpeng.c184cfe.png"},311:function(t,e,n){t.exports=n.p+"img/xrp.2d0f150.png"},312:function(t,e,n){"use strict";n(284)},313:function(t,e,n){"use strict";n.r(e);var c={name:"IndexList",components:{Price:n(315).default},props:{data:{type:Array,default:function(){return[]}},type:{type:String,default:""},indexPage:{type:Boolean,default:!1}},data:function(){return{mobileScreen:!1}},methods:{priceStatus:function(t){return void 0===t?"":t>0?"up":"down"}},created:function(){window.innerWidth<768&&(this.mobileScreen=!0)}},r=(n(319),n(32)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.indexPage&&!t.mobileScreen?n("div",{staticClass:"row mb-3 mx-0 pb-2 justify-content-between w-100"},[t._m(0),t._v(" "),t._l(t.data,(function(e){return n("div",{key:e.symbol,staticClass:"w-100 grid-wrapper"},["rising"===t.type?n("div",{staticClass:"movers-grid grid"},[n("span",[t._v(t._s(e.symbol))]),t._v(" "),n("span",[t._v(t._s(e.company_name))]),t._v(" "),n("span",{class:e.change>0?"up":"down"},[t._v("$"+t._s(e.price))]),t._v(" "),n("span",{staticClass:"justify-content-center green font-weight-bold"},[t._v(t._s(e.change_percentage))]),t._v(" "),n("span",{staticClass:"justify-content-center"},[t._v(t._s(e.change))])]):n("div",{staticClass:"grid",class:t.priceStatus(e.change)},[n("div",[t._v(t._s(e.symbol))]),t._v(" "),n("div",[n("NuxtLink",{staticClass:"instrument index d-flex icon-wrapper",attrs:{to:"/"+t.type+"/"+e.name.replace(/\s+|[' '\/]/g,"-").toLowerCase()}},[n("i",{staticClass:"icon",class:e.icon}),t._v("\n          "+t._s(e.name)+"\n          "),e.marketOpen?n("span",{staticClass:"indicator"}):t._e()])],1),t._v(" "),n("div",{staticClass:"price ask number-font"},[t._v("$"+t._s(e.price))]),t._v(" "),n("div",{staticClass:"justify-content-center number-font"},[e.change?n("Price",{attrs:{index:e,difference:e.change}}):t._e()],1),t._v(" "),n("div",{staticClass:"justify-content-center number-font"},[e.difference?n("Price",{attrs:{index:e,difference:e.difference}}):t._e()],1)])])}))],2):"rising"===t.type?n("div",{staticClass:"movers-list row mb-3 mx-0 pb-2 justify-content-between w-100"},t._l(t.data,(function(e){return n("div",{key:e.symbol,staticClass:"mover index"},[n("h4",[t._v(t._s(e.company_name)+" "),n("span",{staticClass:"green"},[t._v(t._s(e.change_percentage))])]),t._v(" "),n("Price",{staticClass:"mover-price",attrs:{index:e,price:e.price}})],1)})),0):n("div",{staticClass:"row mb-3 mx-0 pb-2 justify-content-between w-100"},t._l(t.data,(function(e){return n("NuxtLink",{key:e.symbol,staticClass:"instrument index",class:e.change>0?"up":"down",attrs:{to:"/"+t.type+"/"+e.name.replace(/\s+|[' '\/]/g,"-").toLowerCase()}},[n("div",{staticClass:"d-flex icon-wrapper"},[n("div",{staticClass:"icon",class:e.icon}),t._v(" "),n("h4",[t._v(t._s(e.name)),e.marketOpen?n("span",{staticClass:"indicator"}):t._e()])]),t._v(" "),n("Price",{attrs:{index:e,price:e.price}})],1)})),1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[n("div",{staticClass:"pb-3"},[n("strong",[t._v("Symbol")])]),t._v(" "),n("div",{staticClass:"pb-3"},[n("strong",[t._v("Name")])]),t._v(" "),n("div",{staticClass:"pb-3"},[n("strong",[t._v("Price")])]),t._v(" "),n("div",{staticClass:"pb-3 justify-content-center"},[n("strong",[t._v("% Change")])]),t._v(" "),n("div",{staticClass:"pb-3 justify-content-center"},[n("strong",[t._v("$ Change")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Price:n(315).default})},314:function(t,e,n){"use strict";n.r(e);n(65),n(142);var c=n(51),r={name:"News",props:{newsData:{type:Array,default:function(){return[]}}},data:function(){return{stocks:c.g,cryptocurrency:c.c}},methods:{getThumb:function(t){var symbol="";return symbol="cryptocurrency"===t.type?this[t.type].find((function(e){return e.icon===t.symbol})):this[t.type].find((function(e){return e.symbol===t.symbol})),n(287)("./".concat(symbol.thumb))}}},o=(n(312),n(32)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.newsData.length>0?n("div",{staticClass:"news justify-content-between"},[t.newsData.video?n("div",t._l(t.newsData,(function(e){return n("b-card",{key:e.title,attrs:{"no-body":""}},[n("b-row",[n("b-col",{staticClass:"pr-0"},[n("b-embed",{attrs:{type:"iframe",aspect:"16by9",src:e.url,allowfullscreen:""}})],1),t._v(" "),n("b-col",{staticClass:"d-flex align-items-center"},[n("b-card-body",{staticClass:"pl-0 pb-0 pt-0"},[n("b-card-text",[n("h5",{directives:[{name:"snip",rawName:"v-snip",value:2,expression:"2"}],staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),n("span",[t._v(t._s(e.time))])])],1)],1)],1)],1)})),1):t._l(t.newsData,(function(e){return n("a",{key:e.title,attrs:{href:e.url,target:"_blank"}},[n("b-card",{attrs:{"no-body":""}},[e.symbol?n("b-row",[n("b-col",{staticClass:"pr-0"},[n("b-card-img",{attrs:{src:t.getThumb(e),alt:"image"}})],1),t._v(" "),n("b-col",{staticClass:"d-flex align-items-center"},[n("b-card-body",{staticClass:"pl-0 pb-0 pt-0"},[n("b-card-text",[n("h5",{directives:[{name:"snip",rawName:"v-snip",value:2,expression:"2"}],staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),n("p",{directives:[{name:"snip",rawName:"v-snip",value:2,expression:"2"}],staticClass:"card-text"},[t._v(t._s(e.description))]),t._v(" "),n("span",[t._v(t._s(e.time))])])],1)],1)],1):n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-card-body",[n("b-card-text",[e.category?n("p",{staticClass:"category"},[t._v(t._s(e.category))]):t._e(),t._v(" "),n("h5",{directives:[{name:"snip",rawName:"v-snip",value:2,expression:"2"}],staticClass:"card-title"},[t._v(t._s(e.title))]),t._v(" "),n("p",{directives:[{name:"snip",rawName:"v-snip",value:2,expression:"2"}],staticClass:"card-text"},[t._v(t._s(e.description))])])],1)],1)],1)],1)],1)}))],2):n("div",{staticClass:"loading-news"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dummy-item"},[e("h3"),this._v(" "),e("p"),this._v(" "),e("p"),this._v(" "),e("p")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dummy-item"},[e("h3"),this._v(" "),e("p"),this._v(" "),e("p"),this._v(" "),e("p")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dummy-item"},[e("h3"),this._v(" "),e("p"),this._v(" "),e("p"),this._v(" "),e("p")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dummy-item"},[e("h3"),this._v(" "),e("p"),this._v(" "),e("p"),this._v(" "),e("p")])}],!1,null,null,null);e.default=component.exports},315:function(t,e,n){"use strict";n.r(e);n(33);var c={name:"Price",props:{index:{type:Object,default:function(){}},price:{type:String},change:{type:String},difference:{type:String}},data:function(){return{flash:!1}},methods:{showFlash:function(){var t=this;!1===this.flash&&(this.flash=!0,setTimeout((function(){t.flash=!1}),1e3))}},watch:{price:{immediate:!0,handler:function(){this.showFlash()}},change:{immediate:!0,handler:function(){this.showFlash()}},difference:{immediate:!0,handler:function(){this.showFlash()}}}},r=n(32),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"price",class:{flash:t.flash}},[t.index.change_percentage?n("div",[n("strong",[n("span",{staticClass:"small"},[t._v("+"+t._s(t.index.change)+" $"+t._s(t.index.price))])])]):t.change?n("span",{staticClass:"change"},[t._v(t._s(t.change))]):t.difference?n("span",{staticClass:"difference"},[t._v(t._s(t.difference))]):t.index.ask||t.index.price?n("div",[t.index.ask?n("strong",[t._v(t._s(t.index.ask))]):t._e(),t._v(" "),t.price?n("strong",[t._v(t._s(t.price))]):t._e(),t._v(" "),t.index.change?n("p",[n("span",[t._v(t._s(t.index.difference))]),t._v(" "+t._s(t.index.change)+"%")]):t._e()]):n("strong",{staticClass:"loading"})])}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,n){"use strict";n(286)},341:function(t,e,n){"use strict";n.r(e);n(8),n(285),n(10),n(11),n(33);var c=n(51),r={components:{IndexList:n(313).default},data:function(){return{loading:!0,commodities:c.b,view:"list",chartData:null,chartOptions:null,newsData:[]}},methods:{fetchNews:function(symbol){var t=this;this.$axios.$get("https://api.finage.co.uk/news/forex/".concat(symbol,"?apikey=").concat("API_KEYTS5Q5H4EBFHIHT4WK6KB583OZ2HS8ZJJ")).then((function(e){if(void 0!==e.news[0]){var n=t.newsData.findIndex((function(t){return t.title===e.news[0].title})),c=e.news[0];t.loading=!1,-1===n&&t.newsData.push(c),t.newsData.length>10&&t.newsData.pop()}})).catch((function(t){console.log(t)}))},showGrid:function(){this.view="grid"},showList:function(){this.view="list"}},created:function(){var t=this;this.$root.$on("updateCommodity",(function(e){var i=t.commodities.findIndex((function(t){return t.symbol===e.symbol}));t.$set(t.commodities[i],"price",e.price),t.$set(t.commodities[i],"difference",e.difference),t.$set(t.commodities[i],"change",e.change)})),this.commodities.forEach((function(e){t.fetchNews(e.symbol)})),setInterval((function(){t.commodities.forEach((function(e){t.fetchNews(e.symbol)}))}),3e5)}},o=n(32),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",[t._m(0)]):n("div",[n("div",{staticClass:"content container container-fluid w-100 buffer",class:t.view},[n("div",{staticClass:"row m-0"},[n("h2",{staticClass:"col-12"},[t._v("Commodities")]),t._v(" "),n("div",{staticClass:"col-lg-8"},[n("div",{staticClass:"col-12 white-well pt-2"},[n("IndexList",{attrs:{data:t.commodities,indexPage:"",type:"commodities"}})],1)]),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("News",{attrs:{newsData:t.newsData}})],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container d-flex justify-content-around w-50 pt-5 vh-100 text-center"},[e("div",{staticClass:"loading-logo mt-5",attrs:{role:"status"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexList:n(313).default,News:n(314).default})}}]);