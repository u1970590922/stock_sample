(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{518:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(196);var n=Object.freeze({ASC:"ASC",DESC:"DESC"})},519:function(e,t,r){"use strict";r(101);var n=r(38),o=r(39),c=r(40),f=r(55),l=r(50),d=r(33),h=(r(3),r(8),r(245),r(98),r(152)),v=r(70),m=r(518),y=(r(35),r(520)),O=r(249),j=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(o.a)(this,e),this._storeName=t,this._config=r,this._dbName="demo",this._version=1,this._dbo=null}var t,r,f,l,d,h,v;return Object(c.a)(e,[{key:"_openDB",value:(v=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this._storeName,r=this._config,e.next=4,Object(y.b)(this._dbName,this._version,{upgrade:function(e){var n=e.createObjectStore(t,{keyPath:"id",autoIncrement:!0});r.indexs.forEach((function(e){n.createIndex(e.name,e.name,{unique:e.unique})}))}});case 4:this._dbo=e.sent;case 5:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})},{key:"_closeDB",value:function(){null!=this._dbo&&(this._dbo.close(),this._dbo=null)}},{key:"deleteDB",value:(h=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._closeDB(),e.next=3,Object(y.a)(this._dbName);case 3:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})},{key:"getAll",value:(d=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,n,cursor,o=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:m.a.DESC,e.prev=1,t===m.a.ASC&&(r="push"),r="unshift",e.next=5,this._openDB();case 5:return n=[],e.next=8,this._dbo.transaction(this._storeName).store.openCursor();case 8:cursor=e.sent;case 9:if(!cursor){e.next=16;break}return n[r](cursor.value),e.next=13,cursor.continue();case 13:cursor=e.sent,e.next=9;break;case 16:return e.abrupt("return",n);case 17:return e.prev=17,this._closeDB(),e.finish(17);case 20:case"end":return e.stop()}}),e,this,[[1,,17,20]])}))),function(){return d.apply(this,arguments)})},{key:"getById",value:(l=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._openDB();case 3:return e.next=5,this._dbo.get(this._storeName,t);case 5:return e.abrupt("return",e.sent);case 6:return e.prev=6,this._closeDB(),e.finish(6);case 9:case"end":return e.stop()}}),e,this,[[0,,6,9]])}))),function(e){return l.apply(this,arguments)})},{key:"create",value:(f=Object(n.a)(regeneratorRuntime.mark((function e(data){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._openDB();case 3:return data.created_at=Object(O.a)(new Date),data.updated_at=null,e.next=7,this._dbo.add(this._storeName,data);case 7:return e.abrupt("return",e.sent);case 8:return e.prev=8,this._closeDB(),e.finish(8);case 11:case"end":return e.stop()}}),e,this,[[0,,8,11]])}))),function(e){return f.apply(this,arguments)})},{key:"update",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(data){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._openDB();case 3:return data.updated_at=Object(O.a)(new Date),e.next=6,this._dbo.put(this._storeName,data);case 6:return e.abrupt("return",e.sent);case 7:return e.prev=7,this._closeDB(),e.finish(7);case 10:case"end":return e.stop()}}),e,this,[[0,,7,10]])}))),function(e){return r.apply(this,arguments)})},{key:"destroy",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._openDB();case 2:return e.next=4,this._dbo.delete(this._storeName,t);case 4:this._closeDB();case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}();function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}t.a=new(function(e){Object(f.a)(y,e);var t,r,l,d=_(y);function y(){return Object(o.a)(this,y),d.call(this,"stock",{indexs:[{name:"commodity_id",unique:!1}]})}return Object(c.a)(y,[{key:"getByCommodityId",value:(l=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._openDB();case 3:return e.next=5,this._dbo.getAllFromIndex(this._storeName,"commodity_id",t);case 5:return e.abrupt("return",e.sent);case 6:return e.prev=6,this._closeDB(),e.finish(6);case 9:case"end":return e.stop()}}),e,this,[[0,,6,9]])}))),function(e){return l.apply(this,arguments)})},{key:"getSumOfCommodityId",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._openDB();case 3:return e.next=5,this._dbo.getAllFromIndex(this._storeName,"commodity_id",t);case 5:return r=e.sent,e.abrupt("return",Object(h.sum)(Object(h.map)(r,"quantity")));case 7:return e.prev=7,this._closeDB(),e.finish(7);case 10:case"end":return e.stop()}}),e,this,[[0,,7,10]])}))),function(e){return r.apply(this,arguments)})},{key:"getStatus",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(){var data,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAll(m.a.ASC);case 2:return data=e.sent,t={},Object.values(v.a).forEach((function(e){t[e]=0})),data.forEach((function(e){t[e.commodity_id]+=e.quantity})),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),y}(j))},520:function(e,t,r){"use strict";r.d(t,"a",(function(){return w})),r.d(t,"b",(function(){return _}));let n,o;const c=new WeakMap,f=new WeakMap,l=new WeakMap,d=new WeakMap,h=new WeakMap;let v={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return f.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return O(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function m(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(j(this),t),O(c.get(this))}:function(...t){return O(e.apply(j(this),t))}:function(t,...r){const n=e.call(j(this),t,...r);return l.set(n,t.sort?t.sort():[t]),O(n)}}function y(e){return"function"==typeof e?m(e):(e instanceof IDBTransaction&&function(e){if(f.has(e))return;const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",c),e.removeEventListener("abort",c)},o=()=>{t(),n()},c=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",o),e.addEventListener("error",c),e.addEventListener("abort",c)}));f.set(e,t)}(e),object=e,(n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>object instanceof e))?new Proxy(e,v):e);var object}function O(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const n=()=>{e.removeEventListener("success",o),e.removeEventListener("error",c)},o=()=>{t(O(e.result)),n()},c=()=>{r(e.error),n()};e.addEventListener("success",o),e.addEventListener("error",c)}));return t.then((t=>{t instanceof IDBCursor&&c.set(t,e)})).catch((()=>{})),h.set(t,e),t}(e);if(d.has(e))return d.get(e);const t=y(e);return t!==e&&(d.set(e,t),h.set(t,e)),t}const j=e=>h.get(e);function _(e,t,{blocked:r,upgrade:n,blocking:o,terminated:c}={}){const f=indexedDB.open(e,t),l=O(f);return n&&f.addEventListener("upgradeneeded",(e=>{n(O(f.result),e.oldVersion,e.newVersion,O(f.transaction))})),r&&f.addEventListener("blocked",(()=>r())),l.then((e=>{c&&e.addEventListener("close",(()=>c())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),l}function w(e,{blocked:t}={}){const r=indexedDB.deleteDatabase(e);return t&&r.addEventListener("blocked",(()=>t())),O(r).then((()=>{}))}const x=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],D=new Map;function S(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(D.get(t))return D.get(t);const r=t.replace(/FromIndex$/,""),n=t!==r,o=k.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!o&&!x.includes(r))return;const c=async function(e,...t){const c=this.transaction(e,o?"readwrite":"readonly");let f=c.store;return n&&(f=f.index(t.shift())),(await Promise.all([f[r](...t),o&&c.done]))[0]};return D.set(t,c),c}v=(e=>({...e,get:(t,r,n)=>S(t,r)||e.get(t,r,n),has:(t,r)=>!!S(t,r)||e.has(t,r)}))(v)},531:function(e,t,r){"use strict";r(12),r(3),r(11),r(88),r(34),r(246),r(321);var n=r(248),o=r(100);t.a=Object(n.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var r,n=t.props,data=t.data,c=t.children,f=data.attrs;return f&&(data.attrs={},r=Object.keys(f).filter((function(e){if("slot"===e)return!1;var t=f[e];return e.startsWith("data-")?(data.attrs[e]=t,!1):t||"string"==typeof t}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),e(n.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),c)}})},579:function(e,t,r){"use strict";r(9),r(12),r(15),r(16);var n=r(1),o=(r(3),r(24),r(11),r(26),r(68),r(323),r(43),r(324),r(325),r(326),r(327),r(328),r(329),r(330),r(331),r(332),r(333),r(334),r(335),r(336),r(45),r(42),r(8),r(88),r(321),r(2)),c=r(100),f=r(0);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=["sm","md","lg","xl"],v=h.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),m=h.reduce((function(e,t){return e["offset"+Object(f.G)(t)]={type:[String,Number],default:null},e}),{}),y=h.reduce((function(e,t){return e["order"+Object(f.G)(t)]={type:[String,Number],default:null},e}),{}),O={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(y)};function j(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var _=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,f=(t.parent,"");for(var l in r)f+=String(r[l]);var d=_.get(f);return d||function(){var e,t;for(t in d=[],O)O[t].forEach((function(e){var n=r[e],o=j(t,e,n);o&&d.push(o)}));var o=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),_.set(f,d)}(),e(r.tag,Object(c.a)(data,{class:d}),o)}})},630:function(e,t,r){"use strict";r.r(t);r(11),r(9),r(12),r(3),r(15),r(8),r(16);var n=r(1),o=r(38),c=(r(98),r(41)),f=r(70),l=r(519);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var h={fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getStockStatus();case 2:case"end":return t.stop()}}),t)})))()},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.c)("stock",["commodityDropdown"])),data:function(){return{STOCK_TYPE:f.b,stockStatus:{}}},methods:{getStockStatus:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.getStatus();case 2:e.stockStatus=t.sent;case 3:case"end":return t.stop()}}),t)})))()},change:function(e,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t===f.b.OUT?-1:1,n.next=3,l.a.create({commodity_id:e,type:t,quantity:o,description:"快速 ".concat(String(o))});case 3:r.updateStockStatus(e,o);case 4:case"end":return n.stop()}}),n)})))()},updateStockStatus:function(e,t){this.stockStatus.hasOwnProperty(e)?this.stockStatus[e]+=t:this.stockStatus[e]=t}}},v=h,m=r(29),y=r(36),O=r.n(y),j=r(247),_=r(233),w=r(99),x=r(579),k=r(531),D=r(225),S=r(189),B=r(513),C=r(509),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-card",{staticClass:"mx-auto mt-4"},[r("v-img",{staticClass:"indigo--text align-end",attrs:{height:"200px",src:"./cake.jpg"}},[r("v-card-title",{staticClass:"font-weight-bold"},[r("v-icon",{attrs:{left:"",color:"purple"}},[e._v("mdi-home-circle-outline")]),e._v("\n                礼和菓\n            ")],1)],1),e._v(" "),r("v-card-text",[r("v-row",{staticClass:"mx-auto"},[e._l(e.commodityDropdown,(function(t){return[r("v-col",{attrs:{cols:"6",sm:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{elevation:"12"}},[r("v-card-title",[r("span",{staticClass:"text-h6 font-weight-light"},[e._v(e._s(t.text))])]),e._v(" "),r("v-card-text",{staticClass:"font-weight-bold"},[e._v("\n                                剩餘 "+e._s(e.stockStatus[t.value])+" 個\n                            ")]),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"","x-small":"",color:"red",disabled:e.stockStatus[t.value]<=0},on:{click:function(r){return e.change(t.value,e.STOCK_TYPE.OUT)}}},[r("v-icon",{attrs:{dark:""}},[e._v("\n                                        mdi-minus\n                                    ")])],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"","x-small":"",color:"primary"},on:{click:function(r){return e.change(t.value,e.STOCK_TYPE.IN)}}},[r("v-icon",{attrs:{dark:""}},[e._v("\n                                        mdi-plus\n                                    ")])],1)],1)],1)],1)]}))],2)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;O()(component,{VBtn:j.a,VCard:_.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VCol:x.a,VContainer:k.a,VIcon:D.a,VImg:S.a,VRow:B.a,VSpacer:C.a})}}]);