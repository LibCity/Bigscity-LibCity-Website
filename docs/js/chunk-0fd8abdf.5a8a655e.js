(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fd8abdf"],{"165b":function(e,t,r){"use strict";var a=r("e3bf"),s=r("f8dc"),n=r("6d8c"),i=r("7623"),o=r("89cb"),p=r("0c82"),c=r("ba34"),l=r("944c"),f=r("aab3"),u=r("19da"),m=r("68ea"),d=r("6711"),h=[],_=h.sort,v=p((function(){h.sort(void 0)})),k=p((function(){h.sort(null)})),g=l("sort"),w=!p((function(){if(m)return m<70;if(!(f&&f>3)){if(u)return!0;if(d)return d<603;var e,t,r,a,s="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(a=0;a<47;a++)h.push({k:t+a,v:r})}for(h.sort((function(e,t){return t.v-e.v})),a=0;a<h.length;a++)t=h[a].k.charAt(0),s.charAt(s.length-1)!==t&&(s+=t);return"DGBEFHACIJK"!==s}})),b=v||!k||!g||!w,x=function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:o(t)>o(r)?1:-1}};a({target:"Array",proto:!0,forced:b},{sort:function(e){void 0!==e&&s(e);var t=n(this);if(w)return void 0===e?_.call(t):_.call(t,e);var r,a,o=[],p=i(t.length);for(a=0;a<p;a++)a in t&&o.push(t[a]);o=c(o,x(e)),r=o.length,a=0;while(a<r)t[a]=o[a++];while(a<p)delete t[a++];return t}})},"16ee":function(e,t,r){var a=r("2235"),s=r("4f3a"),n=r("7eb2"),i=n("species");e.exports=function(e){var t;return s(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!s(t.prototype)?a(t)&&(t=t[i],null===t&&(t=void 0)):t=void 0),void 0===t?Array:t}},"19da":function(e,t,r){var a=r("a3d7");e.exports=/MSIE|Trident/.test(a)},"27da":function(e,t,r){"use strict";var a=r("e3bf"),s=r("916f"),n=r("fe50"),i=r("bcec"),o=r("0c82"),p=1..toFixed,c=Math.floor,l=function(e,t,r){return 0===t?r:t%2===1?l(e,t-1,r*e):l(e*e,t/2,r)},f=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},u=function(e,t,r){var a=-1,s=r;while(++a<6)s+=t*e[a],e[a]=s%1e7,s=c(s/1e7)},m=function(e,t){var r=6,a=0;while(--r>=0)a+=e[r],e[r]=c(a/t),a=a%t*1e7},d=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var a=String(e[t]);r=""===r?a:r+i.call("0",7-a.length)+a}return r},h=p&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){p.call({})}));a({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,r,a,o,p=n(this),c=s(e),h=[0,0,0,0,0,0],_="",v="0";if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(p!=p)return"NaN";if(p<=-1e21||p>=1e21)return String(p);if(p<0&&(_="-",p=-p),p>1e-21)if(t=f(p*l(2,69,1))-69,r=t<0?p*l(2,-t,1):p/l(2,t,1),r*=4503599627370496,t=52-t,t>0){u(h,0,r),a=c;while(a>=7)u(h,1e7,0),a-=7;u(h,l(10,a,1),0),a=t-1;while(a>=23)m(h,1<<23),a-=23;m(h,1<<a),u(h,1,1),m(h,2),v=d(h)}else u(h,0,r),u(h,1<<-t,0),v=d(h)+i.call("0",c);return c>0?(o=v.length,v=_+(o<=c?"0."+i.call("0",c-o)+v:v.slice(0,o-c)+"."+v.slice(o-c))):v=_+v,v}})},"35d3":function(e,t,r){"use strict";var a=r("aacd").forEach,s=r("944c"),n=s("forEach");e.exports=n?[].forEach:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}},"4f3a":function(e,t,r){var a=r("4893");e.exports=Array.isArray||function(e){return"Array"==a(e)}},"5b3c":function(e,t,r){var a=r("16ee");e.exports=function(e,t){return new(a(e))(0===t?0:t)}},6711:function(e,t,r){var a=r("a3d7"),s=a.match(/AppleWebKit\/(\d+)\./);e.exports=!!s&&+s[1]},"944c":function(e,t,r){"use strict";var a=r("0c82");e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){throw 1},1)}))}},a4aa:function(e,t,r){"use strict";r("de9c")},aab3:function(e,t,r){var a=r("a3d7"),s=a.match(/firefox\/(\d+)/i);e.exports=!!s&&+s[1]},aacd:function(e,t,r){var a=r("98a1"),s=r("8c7a"),n=r("6d8c"),i=r("7623"),o=r("5b3c"),p=[].push,c=function(e){var t=1==e,r=2==e,c=3==e,l=4==e,f=6==e,u=7==e,m=5==e||f;return function(d,h,_,v){for(var k,g,w=n(d),b=s(w),x=a(h,_,3),y=i(b.length),E=0,S=v||o,A=t?S(d,y):r||u?S(d,0):void 0;y>E;E++)if((m||E in b)&&(k=b[E],g=x(k,E,w),e))if(t)A[E]=g;else if(g)switch(e){case 3:return!0;case 5:return k;case 6:return E;case 2:p.call(A,k)}else switch(e){case 4:return!1;case 7:p.call(A,k)}return f?-1:c||l?l:A}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)}},b55f:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._m(0),r("div",{staticClass:"content"},[r("div",{staticClass:"metric"},[e._v(" View "),r("a-select",{staticStyle:{width:"180px","font-size":"14px","margin-left":"10px"},attrs:{"default-value":"MAE3"},on:{change:e.metricsChange}},[r("a-select-option",{attrs:{value:"MAE3"}},[e._v(" MAE @ 3 STEP ")]),r("a-select-option",{attrs:{value:"RMSE3"}},[e._v(" RMSE @ 3 STEP ")])],1)],1),r("div",{staticClass:"model-ranking"},[r("table",[r("thead",[r("tr",[r("th",[e._v("RANK")]),r("th",[e._v("MODEL")]),r("th",[e._v("PAPER")]),r("th",[e._v("YEAR")]),r("th",[e._v("1 STEP"),r("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy1}})],1),r("th",[e._v("2 STEP"),r("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy2}})],1),r("th",[e._v("3 STEP"),r("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy3}})],1)])]),r("tbody",e._l(e.rankingData,(function(t){return r("tr",{key:t.model},[r("td",{attrs:{width:"6%"}},[e._v(e._s(t.rank))]),r("td",{attrs:{width:"8%"}},[r("a",{attrs:{href:t.mlink,target:"_blank"}},[e._v(e._s(t.model))])]),r("td",{attrs:{width:"39%"}},[r("a",{staticClass:"paper",attrs:{href:t.plink,target:"_blank"}},[e._v(e._s(t.paper))])]),r("td",{attrs:{width:"5%"}},[e._v(e._s(t.year))]),r("td",{attrs:{width:"14%"}},[e._v(e._s(t.step1))]),r("td",{attrs:{width:"14%"}},[e._v(e._s(t.step2))]),r("td",{attrs:{width:"14%"}},[e._v(e._s(t.step3))])])})),0)])]),r("br"),r("br")])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("div",{staticStyle:{"padding-top":"20px",color:"white"}},[r("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[e._v("T-Drive20150206")])])])}],n=(r("165b"),r("cd8f"),r("27da"),[{rank:0,model:"MTGNN",mlink:"#",paper:"Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks",plink:"https://arxiv.org/abs/2005.11650",year:"2020",step1:13.74689102,step2:15.27115917,step3:16.77351189,mae_step1:13.74689102,mae_step2:15.27115917,mae_step3:16.77351189,rmse_step1:31.55865288,rmse_step2:35.0679512,rmse_step3:38.00547791},{rank:0,model:"AGCRN",mlink:"#",paper:"Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting",plink:"https://arxiv.org/abs/2007.02842",year:"2018",step1:14.17639446,step2:16.22584724,step3:17.62712097,mae_step1:14.17639446,mae_step2:16.22584724,mae_step3:17.62712097,rmse_step1:32.01177979,rmse_step2:37.80277634,rmse_step3:41.55196381},{rank:0,model:"GWNET",mlink:"#",paper:"Graph Wavenet for Deep Spatial-Temporal Graph Modeling",plink:"https://arxiv.org/abs/1906.00121",year:"2019",step1:14.97860622,step2:16.68260574,step3:18.08253479,mae_step1:14.97860622,mae_step2:16.68260574,mae_step3:18.08253479,rmse_step1:35.14050674,rmse_step2:39.26478577,rmse_step3:42.89715958},{rank:0,model:"STResNet",mlink:"#",paper:"Deep Spatio-Temporal Residual Networks for Citywide Crowd Flows Prediction",plink:"https://arxiv.org/abs/1610.00081",year:"2017",step1:16.75712204,step2:17.81740952,step3:18.66376305,mae_step1:16.75712204,mae_step2:17.81740952,mae_step3:18.66376305,rmse_step1:33.97605133,rmse_step2:37.78026962,rmse_step3:40.36789322},{rank:0,model:"STGCN",mlink:"#",paper:"Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting",plink:"https://www.ijcai.org/Proceedings/2018/0505",year:"2018",step1:16.05446434,step2:17.7893219,step3:18.80679131,mae_step1:16.05446434,mae_step2:17.7893219,mae_step3:18.80679131,rmse_step1:36.23188019,rmse_step2:41.0978241,rmse_step3:43.96533966},{rank:0,model:"ACFM",mlink:"#",paper:"Attentive Crowd Flow Machines",plink:"https://dl.acm.org/doi/10.1145/3240508.3240681",year:"2018",step1:16.85341835,step2:18.28788376,step3:19.23842621,mae_step1:16.85341835,mae_step2:18.28788376,mae_step3:19.23842621,rmse_step1:33.65074158,rmse_step2:38.01238251,rmse_step3:40.74593353},{rank:0,model:"STG2Seq",mlink:"#",paper:"STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting",plink:"https://arxiv.org/abs/1905.10069",year:"2019",step1:20.3590374,step2:23.62875175,step3:26.91706467,mae_step1:20.3590374,mae_step2:23.62875175,mae_step3:26.91706467,rmse_step1:41.7979393,rmse_step2:54.63908386,rmse_step3:65.13134766},{rank:0,model:"DCRNN",mlink:"#",paper:"Diffusion convolutional recurrent neural network: Data-driven traffic forecasting",plink:"https://arxiv.org/abs/1707.01926",year:"2018",step1:17.45099068,step2:21.89573669,step3:24.30697441,mae_step1:17.45099068,mae_step2:21.89573669,mae_step3:24.30697441,rmse_step1:37.01754379,rmse_step2:46.28843307,rmse_step3:50.93449783},{rank:0,model:"TGCN",mlink:"#",paper:"T-gcn: A temporal graph convolutional network for traffic prediction",plink:"https://ieeexplore.ieee.org/abstract/document/8809901/",year:"2020",step1:21.09132004,step2:24.21822166,step3:26.93297005,mae_step1:21.09132004,mae_step2:24.21822166,mae_step3:26.93297005,rmse_step1:42.27409363,rmse_step2:50.06852341,rmse_step3:55.01656342},{rank:0,model:"ASTGCN",mlink:"#",paper:"Attention based spatial-temporal graph convolutional networks for traffic flow forecasting",plink:"https://ojs.aaai.org//index.php/AAAI/article/view/3881",year:"2019",step1:26.08333206,step2:20.69397163,step3:29.63371468,mae_step1:26.08333206,mae_step2:20.69397163,mae_step3:29.63371468,rmse_step1:56.4733696,rmse_step2:44.39962769,rmse_step3:66.05281067},{rank:0,model:"Seq2Seq",mlink:"#",paper:"Sequence to Sequence Learning with Neural Networks",plink:"https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html",year:"2014",step1:32.11812973,step2:34.5651741,step3:38.60456467,mae_step1:32.11812973,mae_step2:34.5651741,mae_step3:38.60456467,rmse_step1:63.86069489,rmse_step2:69.91119385,rmse_step3:78.48886871},{rank:0,model:"GRU",mlink:"#",paper:"Using LSTM and GRU neural network methods for traffic flow prediction",plink:"https://ieeexplore.ieee.org/abstract/document/7804912",year:"2016",step1:35.39633179,step2:42.33786774,step3:49.56669235,mae_step1:35.39633179,mae_step2:42.33786774,mae_step3:49.56669235,rmse_step1:74.23458099,rmse_step2:88.16832733,rmse_step3:102.8905106},{rank:0,model:"AE",mlink:"#",paper:"Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction",plink:"https://ieeexplore.ieee.org/document/6910027",year:"2014",step1:71.19487,step2:71.55797577,step3:71.82874298,mae_step1:71.19487,mae_step2:71.55797577,mae_step3:71.82874298,rmse_step1:136.1842346,rmse_step2:136.7357178,rmse_step3:136.9564209}]),i={data:function(){return{T_Drive20150206_origin:n,rankingData:[],metrics:"MAE3"}},mounted:function(){this.rankingData=n,this.metricsChange("MAE3")},methods:{sortBy1:function(){this.rankingData.sort((function(e,t){return e.step1-t.step1}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},sortBy2:function(){this.rankingData.sort((function(e,t){return e.step2-t.step2}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},sortBy3:function(){this.rankingData.sort((function(e,t){return e.step3-t.step3}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},metricsChange:function(e){"MAE3"==e?this.rankingData.forEach((function(e){e.step1=e.mae_step1.toFixed(5),e.step2=e.mae_step2.toFixed(5),e.step3=e.mae_step3.toFixed(5)})):"RMSE3"==e&&this.rankingData.forEach((function(e){e.step1=e.rmse_step1.toFixed(5),e.step2=e.rmse_step2.toFixed(5),e.step3=e.rmse_step3.toFixed(5)})),this.sortBy3()}}},o=i,p=(r("a4aa"),r("cba8")),c=Object(p["a"])(o,a,s,!1,null,"5482d486",null);t["default"]=c.exports},ba34:function(e,t){var r=Math.floor,a=function(e,t){var i=e.length,o=r(i/2);return i<8?s(e,t):n(a(e.slice(0,o),t),a(e.slice(o),t),t)},s=function(e,t){var r,a,s=e.length,n=1;while(n<s){a=n,r=e[n];while(a&&t(e[a-1],r)>0)e[a]=e[--a];a!==n++&&(e[a]=r)}return e},n=function(e,t,r){var a=e.length,s=t.length,n=0,i=0,o=[];while(n<a||i<s)n<a&&i<s?o.push(r(e[n],t[i])<=0?e[n++]:t[i++]):o.push(n<a?e[n++]:t[i++]);return o};e.exports=a},bcec:function(e,t,r){"use strict";var a=r("916f"),s=r("89cb"),n=r("ff7a");e.exports=function(e){var t=s(n(this)),r="",i=a(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(r+=t);return r}},cd8f:function(e,t,r){var a=r("6c1a"),s=r("3e36"),n=r("35d3"),i=r("6e1f");for(var o in s){var p=a[o],c=p&&p.prototype;if(c&&c.forEach!==n)try{i(c,"forEach",n)}catch(l){c.forEach=n}}},de9c:function(e,t,r){},fe50:function(e,t){var r=1..valueOf;e.exports=function(e){return r.call(e)}}}]);
//# sourceMappingURL=chunk-0fd8abdf.5a8a655e.js.map