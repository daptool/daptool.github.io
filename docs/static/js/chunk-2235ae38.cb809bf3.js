(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2235ae38"],{"3b81":function(t,e,a){"use strict";a("6296")},"40a5":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-text",{staticClass:"fng_widget"},[a("img",{class:t.$vuetify.theme.dark?"fng-image-dark":"fng-image",attrs:{src:"https://alternative.me/crypto/fear-and-greed-index.png",alt:"Latest Crypto Fear & Greed Index"}})])],1)},s=[],n={name:"FearAndGreed",data:function(){return{}}},i=n,c=(a("3b81"),a("2877")),o=a("6544"),d=a.n(o),l=a("b0af"),u=a("99d9"),f=Object(c["a"])(i,r,s,!1,null,"31d8ac25",null);e["default"]=f.exports;d()(f,{VCard:l["a"],VCardText:u["c"]})},"615b":function(t,e,a){},6296:function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"d",(function(){return o}));var r=a("b0af"),s=a("80d2"),n=Object(s["i"])("v-card__actions"),i=Object(s["i"])("v-card__subtitle"),c=Object(s["i"])("v-card__text"),o=Object(s["i"])("v-card__title");r["a"]},b0af:function(t,e,a){"use strict";var r=a("5530"),s=(a("a9e3"),a("0481"),a("4069"),a("615b"),a("10d2")),n=a("297c"),i=a("1c87"),c=a("58df");e["a"]=Object(c["a"])(n["a"],i["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-card":!0},i["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var t=Object(r["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,r=e.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-2235ae38.cb809bf3.js.map