(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cb7a2fe"],{"615b":function(t,i,e){},"6fc0":function(t,i,e){"use strict";e("9f6e")},"99d9":function(t,i,e){"use strict";e.d(i,"a",(function(){return s})),e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return c})),e.d(i,"d",(function(){return o}));var n=e("b0af"),r=e("80d2"),s=Object(r["i"])("v-card__actions"),a=Object(r["i"])("v-card__subtitle"),c=Object(r["i"])("v-card__text"),o=Object(r["i"])("v-card__title");n["a"]},"9f6e":function(t,i,e){},b0af:function(t,i,e){"use strict";var n=e("5530"),r=(e("a9e3"),e("0481"),e("4069"),e("615b"),e("10d2")),s=e("297c"),a=e("1c87"),c=e("58df");i["a"]=Object(c["a"])(s["a"],a["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},a["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var t=Object(n["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var i=this.generateRouteLink(),e=i.tag,n=i.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},dc96:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-card",{class:"ticker_tape"===t.show?"trading-view-widget tape_background":"trading-view-widget"},[e("v-card-text",{staticClass:"center_widget"},[e("div",{ref:"tradingview",staticClass:"tradingview-widget-container",attrs:{id:t.container_id}},[e("div",{staticClass:"tradingview-widget-container__widget"})])])],1)},r=[],s=e("5530"),a=(e("4de4"),e("d3b7"),e("e9c4"),e("fb6a"),e("5609")),c=e("2f62"),o={name:"TradingViewWidget",props:{show:String},data:function(){return{container_id:"",script_id:"",tradingview:{technical:{options:{interval:"1m",width:"330",height:"405",isTransparent:!0,symbol:"",locale:"en",showIntervalTabs:!0,colorTheme:this.$vuetify.theme.dark?"dark":"light",largeChartUrl:"https://www.tradingview.com/chart/"},script:"https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"},crypto_market:{options:{width:"770",height:"450",defaultColumn:"overview",screener_type:"crypto_mkt",displayCurrency:"USD",isTransparent:!0,colorTheme:this.$vuetify.theme.dark?"dark":"light",locale:"en"},script:"https://s3.tradingview.com/external-embedding/embed-widget-screener.js"},single_ticker:{options:{symbol:"",width:"100%",colorTheme:this.$vuetify.theme.dark?"dark":"light",isTransparent:!0,locale:"en",largeChartUrl:"https://www.tradingview.com/chart/"},script:"https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js"},ticker_tape:{options:{symbols:[{description:"BTC",proName:"BINANCE:BTCUSDT"},{description:"ETH",proName:"BINANCE:ETHUSDT"},{description:"BNB",proName:"BINANCE:BNBUSDT"},{description:"MATIC",proName:"BINANCE:MATICUSDT"},{description:"AVAX",proName:"BINANCE:AVAXUSDT"},{description:"FTM",proName:"BINANCE:FTMUSDT"}],showSymbolLogo:!0,colorTheme:this.$vuetify.theme.dark?"dark":"light",isTransparent:!0,largeChartUrl:"https://www.tradingview.com/chart/",displayMode:"adaptive",locale:"en"},script:"https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"}}}},computed:Object(s["a"])({},Object(c["d"])({currentChain:function(t){return t.chain.currentChain}})),watch:{currentChain:function(t){if("single_ticker"===this.show||"technical"===this.show){var i=a["a"].filter((function(i){return i.id===t}))[0];if("undefined"!==typeof i){this.tradingview[this.show].options.symbol="BINANCE:"+i.nativeCurrency.symbol+"USDT",document.getElementById(this.container_id).innerHTML="";var e=document.createElement("script");e.id=this.script_id,e.type="text/javascript",e.async=!0,e.onload=this.initWidget,e.textContent=JSON.stringify(this.tradingview[this.show].options),e.src=this.tradingview[this.show].script,this.$refs.tradingview.appendChild(e)}}}},mounted:function(){var t=this,i=this.tradingview[this.show].script.lastIndexOf("/")+1,e=this.tradingview[this.show].script.lastIndexOf(".js"),n=this.tradingview[this.show].script.slice(i,e);this.container_id=n+"_cont",this.script_id=n+"_script",setTimeout((function(){return t.appendScript(t.initWidget)}),500)},methods:{getScriptElement:function(){return document.getElementById(this.script_id)},updateOnloadListener:function(t){var i=this.getScriptElement(),e=i.onload;return i.onload=function(){e(),t()}},scriptExists:function(){return null!==this.getScriptElement()},appendScript:function(t){var i=this;if(this.scriptExists())return"undefined"===typeof TradingView?void this.updateOnloadListener(t):void t();if("single_ticker"===this.show||"technical"===this.show){var e=a["a"].filter((function(t){return t.id===i.currentChain}))[0];e&&(this.tradingview[this.show].options.symbol="BINANCE:"+e.nativeCurrency.symbol+"USDT")}var n=document.createElement("script");n.id=this.script_id,n.type="text/javascript",n.async=!0,n.onload=t,n.textContent=JSON.stringify(this.tradingview[this.show].options),n.src=this.tradingview[this.show].script,this.$refs.tradingview.appendChild(n)},initWidget:function(){"undefined"!==typeof TradingView&&new window.TradingView.widget(Object.assign({container_id:this.container_id}))}}},d=o,h=(e("6fc0"),e("2877")),l=e("6544"),p=e.n(l),u=e("b0af"),g=e("99d9"),w=Object(h["a"])(d,n,r,!1,null,"3dc6cd54",null);i["default"]=w.exports;p()(w,{VCard:u["a"],VCardText:g["c"]})}}]);
//# sourceMappingURL=chunk-5cb7a2fe.b891a7f5.js.map