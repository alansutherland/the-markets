(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{285:function(t,e,n){"use strict";var c=n(6),r=n(53).findIndex,o=n(83),l=n(41),d=!0,f=l("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){d=!1})),c({target:"Array",proto:!0,forced:d||!f},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},286:function(t,e,n){},313:function(t,e,n){"use strict";n.r(e);var c={name:"IndexList",components:{Price:n(315).default},props:{data:{type:Array,default:function(){return[]}},type:{type:String,default:""},indexPage:{type:Boolean,default:!1}},data:function(){return{mobileScreen:!1}},methods:{priceStatus:function(t){return void 0===t?"":t>0?"up":"down"}},created:function(){window.innerWidth<768&&(this.mobileScreen=!0)}},r=(n(319),n(32)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.indexPage&&!t.mobileScreen?n("div",{staticClass:"row mb-3 mx-0 pb-2 justify-content-between w-100"},[t._m(0),t._v(" "),t._l(t.data,(function(e){return n("div",{key:e.symbol,staticClass:"w-100 grid-wrapper"},["rising"===t.type?n("div",{staticClass:"movers-grid grid"},[n("span",[t._v(t._s(e.symbol))]),t._v(" "),n("span",[t._v(t._s(e.company_name))]),t._v(" "),n("span",{class:e.change>0?"up":"down"},[t._v("$"+t._s(e.price))]),t._v(" "),n("span",{staticClass:"justify-content-center green font-weight-bold"},[t._v(t._s(e.change_percentage))]),t._v(" "),n("span",{staticClass:"justify-content-center"},[t._v(t._s(e.change))])]):n("div",{staticClass:"grid",class:t.priceStatus(e.change)},[n("div",[t._v(t._s(e.symbol))]),t._v(" "),n("div",[n("NuxtLink",{staticClass:"instrument index d-flex icon-wrapper",attrs:{to:"/"+t.type+"/"+e.name.replace(/\s+|[' '\/]/g,"-").toLowerCase()}},[n("i",{staticClass:"icon",class:e.icon}),t._v("\n          "+t._s(e.name)+"\n          "),e.marketOpen?n("span",{staticClass:"indicator"}):t._e()])],1),t._v(" "),n("div",{staticClass:"price ask number-font"},[t._v("$"+t._s(e.price))]),t._v(" "),n("div",{staticClass:"justify-content-center number-font"},[e.change?n("Price",{attrs:{index:e,difference:e.change}}):t._e()],1),t._v(" "),n("div",{staticClass:"justify-content-center number-font"},[e.difference?n("Price",{attrs:{index:e,difference:e.difference}}):t._e()],1)])])}))],2):"rising"===t.type?n("div",{staticClass:"movers-list row mb-3 mx-0 pb-2 justify-content-between w-100"},t._l(t.data,(function(e){return n("div",{key:e.symbol,staticClass:"mover index"},[n("h4",[t._v(t._s(e.company_name)+" "),n("span",{staticClass:"green"},[t._v(t._s(e.change_percentage))])]),t._v(" "),n("Price",{staticClass:"mover-price",attrs:{index:e,price:e.price}})],1)})),0):n("div",{staticClass:"row mb-3 mx-0 pb-2 justify-content-between w-100"},t._l(t.data,(function(e){return n("NuxtLink",{key:e.symbol,staticClass:"instrument index",class:e.change>0?"up":"down",attrs:{to:"/"+t.type+"/"+e.name.replace(/\s+|[' '\/]/g,"-").toLowerCase()}},[n("div",{staticClass:"d-flex icon-wrapper"},[n("div",{staticClass:"icon",class:e.icon}),t._v(" "),n("h4",[t._v(t._s(e.name)),e.marketOpen?n("span",{staticClass:"indicator"}):t._e()])]),t._v(" "),n("Price",{attrs:{index:e,price:e.price}})],1)})),1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[n("div",{staticClass:"pb-3"},[n("strong",[t._v("Symbol")])]),t._v(" "),n("div",{staticClass:"pb-3"},[n("strong",[t._v("Name")])]),t._v(" "),n("div",{staticClass:"pb-3"},[n("strong",[t._v("Price")])]),t._v(" "),n("div",{staticClass:"pb-3 justify-content-center"},[n("strong",[t._v("% Change")])]),t._v(" "),n("div",{staticClass:"pb-3 justify-content-center"},[n("strong",[t._v("$ Change")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Price:n(315).default})},315:function(t,e,n){"use strict";n.r(e);n(33);var c={name:"Price",props:{index:{type:Object,default:function(){}},price:{type:String},change:{type:String},difference:{type:String}},data:function(){return{flash:!1}},methods:{showFlash:function(){var t=this;!1===this.flash&&(this.flash=!0,setTimeout((function(){t.flash=!1}),1e3))}},watch:{price:{immediate:!0,handler:function(){this.showFlash()}},change:{immediate:!0,handler:function(){this.showFlash()}},difference:{immediate:!0,handler:function(){this.showFlash()}}}},r=n(32),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"price",class:{flash:t.flash}},[t.index.change_percentage?n("div",[n("strong",[n("span",{staticClass:"small"},[t._v("+"+t._s(t.index.change)+" $"+t._s(t.index.price))])])]):t.change?n("span",{staticClass:"change"},[t._v(t._s(t.change))]):t.difference?n("span",{staticClass:"difference"},[t._v(t._s(t.difference))]):t.index.ask||t.index.price?n("div",[t.index.ask?n("strong",[t._v(t._s(t.index.ask))]):t._e(),t._v(" "),t.price?n("strong",[t._v(t._s(t.price))]):t._e(),t._v(" "),t.index.change?n("p",[n("span",[t._v(t._s(t.index.difference))]),t._v(" "+t._s(t.index.change)+"%")]):t._e()]):n("strong",{staticClass:"loading"})])}),[],!1,null,null,null);e.default=component.exports},319:function(t,e,n){"use strict";n(286)},346:function(t,e,n){"use strict";n.r(e);n(8),n(285),n(10),n(11),n(33);var c=n(51),r={components:{IndexList:n(313).default},data:function(){return{loading:!0,rising:c.f,view:"list",chartData:null,chartOptions:null,newsData:[]}},methods:{fetchNews:function(symbol){var t=this;this.$axios.$get("https://api.finage.co.uk/news/market/".concat(symbol,"?apikey=").concat("API_KEYTS5Q5H4EBFHIHT4WK6KB583OZ2HS8ZJJ")).then((function(e){void 0!==e[0]&&(-1===t.newsData.findIndex((function(t){return t.title===e[0].title}))&&t.newsData.push(e[0]),t.newsData.length>16&&t.newsData.pop())})).catch((function(t){console.log(t)}))},showGrid:function(){this.view="grid"},showList:function(){this.view="list"}},created:function(){var t=this;this.$root.$on("updateRising",(function(e){t.rising=e,t.$nextTick((function(){t.loading=!1}))})),this.rising.forEach((function(e){t.fetchNews(e.symbol)})),setInterval((function(){t.rising.forEach((function(e){t.fetchNews(e.symbol)}))}),3e5)}},o=n(32),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.loading?e("div",[this._m(0)]):e("div",[e("div",{staticClass:"list-page content container w-100 buffer",class:this.view},[e("div",{staticClass:"row m-0 justify-content-center"},[e("div",{staticClass:"col-12 col-lg-8"},[e("h2",{staticClass:"col-12"},[this._v("Movers")]),this._v(" "),e("div",{staticClass:"col-12 white-well pt-2"},[e("IndexList",{attrs:{data:this.rising,indexPage:"",type:"rising"}})],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container d-flex justify-content-around w-50 pt-5 vh-100 text-center"},[e("div",{staticClass:"loading-logo mt-5",attrs:{role:"status"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{IndexList:n(313).default})}}]);