(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a4f0fd42"],{"0b52":function(t,e,n){"use strict";n("3390")},"0cb2":function(t,e,n){var r=n("7b0b"),i=Math.floor,a="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,u,l){var f=n+t.length,h=c.length,d=s;return void 0!==u&&(u=r(u),d=o),a.call(l,d,(function(r,a){var o;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":o=u[a.slice(1,-1)];break;default:var s=+a;if(0===s)return r;if(s>h){var l=i(s/10);return 0===l?r:l<=h?void 0===c[l-1]?a.charAt(1):c[l-1]+a.charAt(1):r}o=c[s-1]}return void 0===o?"":o}))}},1115:function(t,e,n){"use strict";n("b9e0")},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),a=n("d039"),o=n("ad6d"),s="toString",c=RegExp.prototype,u=c[s],l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=s;(l||f)&&r(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?o.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},2626:function(t,e,n){"use strict";var r=n("d066"),i=n("9bf2"),a=n("b622"),o=n("83ab"),s=a("species");t.exports=function(t){var e=r(t),n=i.f;o&&e&&!e[s]&&n(e,s,{configurable:!0,get:function(){return this}})}},3390:function(t,e,n){},"4d63":function(t,e,n){var r=n("83ab"),i=n("da84"),a=n("94ca"),o=n("7156"),s=n("9bf2").f,c=n("241c").f,u=n("44e7"),l=n("ad6d"),f=n("9f7f"),h=n("6eeb"),d=n("d039"),v=n("69f3").enforce,p=n("2626"),g=n("b622"),b=g("match"),m=i.RegExp,y=m.prototype,S=/a/g,k=/a/g,x=new m(S)!==S,w=f.UNSUPPORTED_Y,L=r&&a("RegExp",!x||w||d((function(){return k[b]=!1,m(S)!=S||m(k)==k||"/a/i"!=m(S,"i")})));if(L){var E=function(t,e){var n,r=this instanceof E,i=u(t),a=void 0===e;if(!r&&i&&t.constructor===E&&a)return t;x?i&&!a&&(t=t.source):t instanceof E&&(a&&(e=l.call(t)),t=t.source),w&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var s=o(x?new m(t,e):m(t,e),r?this:y,E);if(w&&n){var c=v(s);c.sticky=!0}return s},_=function(t){t in E||s(E,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},C=c(m),H=0;while(C.length>H)_(C[H++]);y.constructor=E,E.prototype=y,h(i,"RegExp",E)}p("RegExp")},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),a=n("50c4"),o=n("a691"),s=n("1d80"),c=n("8aa5"),u=n("0cb2"),l=n("14c3"),f=Math.max,h=Math.min,d=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=r.REPLACE_KEEPS_$0,g=v?"$":"$0";return[function(n,r){var i=s(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!v&&p||"string"===typeof r&&-1===r.indexOf(g)){var s=n(e,t,this,r);if(s.done)return s.value}var b=i(t),m=String(this),y="function"===typeof r;y||(r=String(r));var S=b.global;if(S){var k=b.unicode;b.lastIndex=0}var x=[];while(1){var w=l(b,m);if(null===w)break;if(x.push(w),!S)break;var L=String(w[0]);""===L&&(b.lastIndex=c(m,a(b.lastIndex),k))}for(var E="",_=0,C=0;C<x.length;C++){w=x[C];for(var H=String(w[0]),j=f(h(o(w.index),m.length),0),O=[],R=1;R<w.length;R++)O.push(d(w[R]));var $=w.groups;if(y){var M=[H].concat(O,j,m);void 0!==$&&M.push($);var T=String(r.apply(void 0,M))}else T=u(H,m,j,O,$,r);j>=_&&(E+=m.slice(_,j)+T,_=j+H.length)}return E+m.slice(_)}]}))},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var a,o;return i&&"function"==typeof(a=e.constructor)&&a!==n&&r(o=a.prototype)&&o!==n.prototype&&i(t,o),t}},"79ce":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-container"},[n("div",{staticClass:"search-header"},[n("van-icon",{staticClass:"arr-left",attrs:{name:"arrow-left"},on:{click:function(e){return t.handleClick()}}}),n("van-search",{staticClass:"search",attrs:{"show-action":"",placeholder:t.place},on:{search:t.onSearch,input:t.handleInput,focus:t.handlefocus},scopedSlots:t._u([t.showList?{key:"action",fn:function(){return[n("div",{on:{touchend:function(e){return t.onSearch(t.value)}}},[t._v("搜索")])]},proxy:!0}:{key:"action",fn:function(){return[n("van-icon",{staticClass:"shop-car",attrs:{name:"cart-o",id:"sho-car",badge:t.badge},on:{touchend:function(e){return t.$router.push({name:"Shopping"})}}})]},proxy:!0}],null,!0),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t.showList?n("div",{staticClass:"like-search"},[t.likeList.length?n("van-list",t._l(t.likeList,(function(e){return n("van-cell",{key:e,on:{click:function(n){return t.onSearch(e)}}},[[n("span",{staticClass:"custom-title",domProps:{innerHTML:t._s(t.formatHTML(e))}})]],2)})),1):n("div",{staticClass:"history"},[n("SearchHistory",{attrs:{hisotryData:t.searchHistory},on:{handelHistory:t.onSearch}})],1)],1):n("div",{staticClass:"search-content"},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.goodsList,(function(e){return n("GoodCard",t._b({key:e.id,attrs:{num:t.counterMap[e.id]}},"GoodCard",e,!1))})),1)],1)])},i=[],a=n("2909"),o=n("1da1"),s=n("5530"),c=(n("96cf"),n("07ac"),n("ac1f"),n("841c"),n("99af"),n("7db0"),n("4d63"),n("25f0"),n("5319"),n("9767"),n("409e")),u=n("2f62"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-history-container"},[n("h2",[t._v("历史记录：")]),t._l(t.hisotryData,(function(e){return n("div",{key:e.time,staticClass:"his-item",on:{click:function(n){return t.handelHistory(e.value)}}},[t._v(" "+t._s(e.value)+" ")])}))],2)},f=[],h={props:{hisotryData:{default:[]}},methods:{handelHistory:function(t){this.$emit("handelHistory",t)}}},d=h,v=(n("0b52"),n("2877")),p=Object(v["a"])(d,l,f,!1,null,"07a03e18",null),g=p.exports,b={components:{GoodCard:c["a"],SearchHistory:g},data:function(){return{showList:!0,loading:!1,finished:!1,place:"酒",value:this.place,oldValue:"",likeList:[],timer:null,page:1,size:5,total:0,goodsList:[],searchHistory:[]}},computed:Object(s["a"])(Object(s["a"])({},Object(u["d"])({counterMap:function(t){return t.counterMap}})),{},{badge:function(){var t=Object.values(this.counterMap);if(!t.length)return console.log(this.counterMap),"fjsdkljfjlsdkjfklj";var e=t.reduce((function(t,e){return t+e}));return e>99?"99+":e}}),methods:Object(s["a"])(Object(s["a"])({},Object(u["c"])(["setMotionSearch"])),{},{onLoad:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.search(t.value,t.page,t.size);case 2:n=e.sent,t.goodsList=[].concat(Object(a["a"])(t.goodsList),Object(a["a"])(n.list)),t.total=n.total,t.loading=!1,t.goodsList.length>=t.total?t.finished=!0:t.page+=1;case 7:case"end":return e.stop()}}),e)})))()},onSearch:function(t){var e=this;this.value=t||this.place;var n=this.searchHistory.find((function(t){return t.value===e.value}));n?(n.time=(new Date).getTime(),this.searchHistory.sort((function(t,e){return e.time-t.time}))):(this.searchHistory.unshift({value:this.value,time:(new Date).getTime()}),this.searchHistory.length>=11&&this.searchHistory.pop()),localStorage.setItem("searchHistory",JSON.stringify(this.searchHistory)),this.likeList=[],this.oldValue!==this.value&&(this.page=1,this.goodsList=[],this.onLoad(),this.oldValue=this.value),this.finished=!1,this.showList=!1},handleInput:function(){var t=this;this.showList=!0,""!==this.value?this.timer?(clearTimeout(this.timer),this.timer=null):this.timer=setTimeout(Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.likeSearch(t.value);case 2:n=e.sent,t.likeList=n.result,clearTimeout(t.timer),t.timer=null;case 6:case"end":return e.stop()}}),e)}))),300):this.likeList=[]},handlefocus:function(){this.showList=!0},formatHTML:function(t){var e=new RegExp(this.value,"g");return t.replace(e,this.value.fontcolor("red"))},handleClick:function(){this.setMotionSearch(!0),this.$router.go(-1)}}),created:function(){this.searchHistory=JSON.parse(localStorage.getItem("searchHistory"))||[]}},m=b,y=(n("1115"),Object(v["a"])(m,r,i,!1,null,"0e8e0355",null));e["default"]=y.exports},"7db0":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").find,a=n("44d2"),o="find",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(o)},"857a":function(t,e,n){var r=n("1d80"),i=/"/g;t.exports=function(t,e,n,a){var o=String(r(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),s+">"+o+"</"+e+">"}},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9767:function(t,e,n){"use strict";var r=n("23e7"),i=n("857a"),a=n("af03");r({target:"String",proto:!0,forced:a("fontcolor")},{fontcolor:function(t){return i(this,"font","color",t)}})},af03:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},b9e0:function(t,e,n){}}]);
//# sourceMappingURL=chunk-a4f0fd42.a521621f.js.map