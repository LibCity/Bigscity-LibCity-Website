(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21e8dac6"],{"099ad":function(e,t,m){"use strict";m("edcb")},1148:function(e,t,m){"use strict";var _=m("a691"),s=m("1d80");e.exports="".repeat||function(e){var t=String(s(this)),m="",p=_(e);if(p<0||p==1/0)throw RangeError("Wrong number of repetitions");for(;p>0;(p>>>=1)&&(t+=t))1&p&&(m+=t);return m}},"159b":function(e,t,m){var _=m("da84"),s=m("fdbc"),p=m("17c2"),a=m("9112");for(var r in s){var n=_[r],i=n&&n.prototype;if(i&&i.forEach!==p)try{a(i,"forEach",p)}catch(o){i.forEach=p}}},"17c2":function(e,t,m){"use strict";var _=m("b727").forEach,s=m("a640"),p=m("ae40"),a=s("forEach"),r=p("forEach");e.exports=a&&r?[].forEach:function(e){return _(this,e,arguments.length>1?arguments[1]:void 0)}},"408a":function(e,t,m){var _=m("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=_(e))throw TypeError("Incorrect invocation");return+e}},4160:function(e,t,m){"use strict";var _=m("23e7"),s=m("17c2");_({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"4bd4":function(e,t,m){"use strict";m.r(t);var _=function(){var e=this,t=e.$createElement,m=e._self._c||t;return m("div",{staticClass:"container"},[e._m(0),m("div",{staticClass:"content"},[m("div",{staticClass:"metric"},[e._v(" 视角 "),m("a-select",{staticStyle:{width:"180px","font-size":"14px","margin-left":"10px"},attrs:{"default-value":"MAE12"},on:{change:e.metricsChange}},[m("a-select-option",{attrs:{value:"MAE12"}},[e._v(" MAE @ 12 STEP ")]),m("a-select-option",{attrs:{value:"MAPE12"}},[e._v(" MAPE @ 12 STEP ")]),m("a-select-option",{attrs:{value:"RMSE12"}},[e._v(" RMSE @ 12 STEP ")])],1)],1),m("div",{staticClass:"model-ranking"},[m("table",[m("thead",{staticStyle:{"font-size":"16px"}},[m("tr",[m("th",[e._v("排名")]),m("th",[e._v("模型")]),m("th",[e._v("论文")]),m("th",[e._v("年份")]),m("th",[e._v("3 STEP"),m("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy3}})],1),m("th",[e._v("6 STEP"),m("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy6}})],1),m("th",[e._v("9 STEP"),m("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy9}})],1),m("th",[e._v("12 STEP"),m("a-button",{staticStyle:{color:"white"},attrs:{type:"link",icon:"caret-down",size:"small"},on:{click:e.sortBy12}})],1)])]),m("tbody",e._l(e.rankingData,(function(t){return m("tr",{key:t.model},[m("td",{attrs:{width:"6%"}},[e._v(e._s(t.rank))]),m("td",{attrs:{width:"8%"}},[m("a",{attrs:{href:t.mlink,target:"_blank"}},[e._v(e._s(t.model))])]),m("td",{attrs:{width:"33%"}},[m("a",{staticClass:"paper",attrs:{href:t.plink,target:"_blank"}},[e._v(e._s(t.paper))])]),m("td",{attrs:{width:"5%"}},[e._v(e._s(t.year))]),m("td",{attrs:{width:"12%"}},[e._v(e._s(t.step3))]),m("td",{attrs:{width:"12%"}},[e._v(e._s(t.step6))]),m("td",{attrs:{width:"12%"}},[e._v(e._s(t.step9))]),m("td",{attrs:{width:"12%"}},[e._v(e._s(t.step12))])])})),0)])]),m("br"),m("br")])])},s=[function(){var e=this,t=e.$createElement,m=e._self._c||t;return m("div",{staticClass:"header"},[m("div",{staticStyle:{"padding-top":"20px",color:"white"}},[m("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[e._v("METR-LA")])])])}],p=(m("4160"),m("b680"),m("159b"),[{rank:0,model:"MTGNN",mlink:"#",paper:"Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks",plink:"https://arxiv.org/abs/2005.11650",year:"2020",step3:2.659704,step6:3.038436,step9:3.279131,step12:3.467195,m_mae_step1:2.231438,m_mae_step2:2.479285,m_mae_step3:2.659704,m_mae_step4:2.803102,m_mae_step5:2.919593,m_mae_step6:3.038436,m_mae_step7:3.120745,m_mae_step8:3.204792,m_mae_step9:3.279131,m_mae_step10:3.342231,m_mae_step11:3.405136,m_mae_step12:3.467195,m_mape_step1:.054049,m_mape_step2:.062278,m_mape_step3:.068652,m_mape_step4:.073884,m_mape_step5:.078296,m_mape_step6:.082662,m_mape_step7:.086021,m_mape_step8:.089056,m_mape_step9:.091896,m_mape_step10:.094251,m_mape_step11:.096581,m_mape_step12:.098959,m_rmse_step1:3.905577,m_rmse_step2:4.617566,m_rmse_step3:5.1141,m_rmse_step4:5.516919,m_rmse_step5:5.840521,m_rmse_step6:6.131934,m_rmse_step7:6.377653,m_rmse_step8:6.598508,m_rmse_step9:6.792513,m_rmse_step10:6.951753,m_rmse_step11:7.084561,m_rmse_step12:7.216567},{rank:0,model:"STGCN",mlink:"#",paper:"Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting",plink:"https://www.ijcai.org/Proceedings/2018/0505",year:"2018",step3:2.79312253,step6:3.16742754,step9:3.387797594,step12:3.540053844,m_mae_step1:2.376001835,m_mae_step2:2.607872963,m_mae_step3:2.79312253,m_mae_step4:2.939201832,m_mae_step5:3.054983854,m_mae_step6:3.16742754,m_mae_step7:3.242025614,m_mae_step8:3.318369865,m_mae_step9:3.387797594,m_mae_step10:3.441800356,m_mae_step11:3.49410367,m_mae_step12:3.540053844,m_mape_step1:.058572508,m_mape_step2:.066515915,m_mape_step3:.073082395,m_mape_step4:.078322716,m_mape_step5:.082748361,m_mape_step6:.086854525,m_mape_step7:.089964069,m_mape_step8:.092953496,m_mape_step9:.095547549,m_mape_step10:.09776552,m_mape_step11:.0998348,m_mape_step12:.101720192,m_rmse_step1:4.068007469,m_rmse_step2:4.886314392,m_rmse_step3:5.45522213,m_rmse_step4:5.889332771,m_rmse_step5:6.228505611,m_rmse_step6:6.514095783,m_rmse_step7:6.740705013,m_rmse_step8:6.945337296,m_rmse_step9:7.123343468,m_rmse_step10:7.272731304,m_rmse_step11:7.404423714,m_rmse_step12:7.525319099},{rank:0,model:"AGCRN",mlink:"#",paper:"Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting",plink:"https://arxiv.org/abs/2007.02842",year:"2020",step3:"2.83642",step6:"3.20918",step9:"3.41369",step12:"3.57438",m_mae_step1:2.383758,m_mae_step2:2.645373,m_mae_step3:2.836422,m_mae_step4:2.985652,m_mae_step5:3.101156,m_mae_step6:3.209178,m_mae_step7:3.280743,m_mae_step8:3.351473,m_mae_step9:3.413689,m_mae_step10:3.462089,m_mae_step11:3.518892,m_mae_step12:3.574384,m_mape_step1:.059421,m_mape_step2:.068142,m_mape_step3:.075029,m_mape_step4:.08035,m_mape_step5:.08464,m_mape_step6:.088574,m_mape_step7:.091287,m_mape_step8:.093814,m_mape_step9:.09594,m_mape_step10:.097839,m_mape_step11:.099365,m_mape_step12:.101541,m_rmse_step1:4.228353,m_rmse_step2:4.990636,m_rmse_step3:5.507213,m_rmse_step4:5.927253,m_rmse_step5:6.269229,m_rmse_step6:6.53495,m_rmse_step7:6.720445,m_rmse_step8:6.893378,m_rmse_step9:7.049877,m_rmse_step10:7.172032,m_rmse_step11:7.308388,m_rmse_step12:7.424428},{rank:0,model:"GWNET",mlink:"#",paper:"Graph Wavenet for Deep Spatial-Temporal Graph Modeling",plink:"https://arxiv.org/abs/1906.00121",year:"2019",step3:2.80364,step6:3.206028,step9:3.43401,step12:3.586501,m_mae_step1:2.325558,m_mae_step2:2.609335,m_mae_step3:2.80364,m_mae_step4:2.9599,m_mae_step5:3.084779,m_mae_step6:3.206028,m_mae_step7:3.285505,m_mae_step8:3.367512,m_mae_step9:3.43401,m_mae_step10:3.48861,m_mae_step11:3.546927,m_mae_step12:3.586501,m_mape_step1:.056459,m_mape_step2:.066598,m_mape_step3:.074257,m_mape_step4:.08071,m_mape_step5:.086026,m_mape_step6:.0909,m_mape_step7:.094666,m_mape_step8:.098574,m_mape_step9:.101082,m_mape_step10:.103383,m_mape_step11:.106222,m_mape_step12:.107554,m_rmse_step1:4.09463,m_rmse_step2:4.949437,m_rmse_step3:5.490851,m_rmse_step4:5.905853,m_rmse_step5:6.242605,m_rmse_step6:6.530153,m_rmse_step7:6.754984,m_rmse_step8:6.95005,m_rmse_step9:7.106978,m_rmse_step10:7.227374,m_rmse_step11:7.339231,m_rmse_step12:7.42097},{rank:0,model:"DCRNN",mlink:"#",paper:"Diffusion convolutional recurrent neural network: Data-driven traffic forecasting",plink:"https://arxiv.org/abs/1707.01926",year:"2018",step3:2.708904,step6:3.12476,step9:3.388868,step12:3.598647,m_mae_step1:2.233182,m_mae_step2:2.514858,m_mae_step3:2.708904,m_mae_step4:2.867617,m_mae_step5:2.996041,m_mae_step6:3.12476,m_mae_step7:3.214641,m_mae_step8:3.306041,m_mae_step9:3.388868,m_mae_step10:3.459951,m_mae_step11:3.531481,m_mae_step12:3.598647,m_mape_step1:.053379,m_mape_step2:.062617,m_mape_step3:.069608,m_mape_step4:.075579,m_mape_step5:.080622,m_mape_step6:.085369,m_mape_step7:.089234,m_mape_step8:.092946,m_mape_step9:.096338,m_mape_step10:.099348,m_mape_step11:.102261,m_mape_step12:.105056,m_rmse_step1:3.885079,m_rmse_step2:4.694417,m_rmse_step3:5.254325,m_rmse_step4:5.702601,m_rmse_step5:6.063174,m_rmse_step6:6.386195,m_rmse_step7:6.648911,m_rmse_step8:6.887054,m_rmse_step9:7.096212,m_rmse_step10:7.282915,m_rmse_step11:7.456735,m_rmse_step12:7.620445},{rank:0,model:"GMAN",mlink:"#",paper:"GMAN: A Graph Multi-Attention Network for Traffic Prediction",plink:"https://ojs.aaai.org//index.php/AAAI/article/view/5477",year:"2020",step3:2.978763342,step6:3.3314569,step9:3.567911148,step12:3.764382362,m_mae_step1:2.605838776,m_mae_step2:2.820083857,m_mae_step3:2.978763342,m_mae_step4:3.114732504,m_mae_step5:3.229729652,m_mae_step6:3.3314569,m_mae_step7:3.419331551,m_mae_step8:3.496765852,m_mae_step9:3.567911148,m_mae_step10:3.634637594,m_mae_step11:3.699738026,m_mae_step12:3.764382362,m_mape_step1:.067342557,m_mape_step2:.074998863,m_mape_step3:.080787405,m_mape_step4:.085830055,m_mape_step5:.090009339,m_mape_step6:.09367498,m_mape_step7:.096849285,m_mape_step8:.099637799,m_mape_step9:.102123946,m_mape_step10:.104438722,m_mape_step11:.10674037,m_mape_step12:.109014869,m_rmse_step1:4.459854603,m_rmse_step2:5.062326908,m_rmse_step3:5.460591793,m_rmse_step4:5.778544426,m_rmse_step5:6.041573524,m_rmse_step6:6.264275074,m_rmse_step7:6.457974434,m_rmse_step8:6.623810768,m_rmse_step9:6.773949623,m_rmse_step10:6.912739754,m_rmse_step11:7.04447031,m_rmse_step12:7.170487881},{rank:0,model:"STG2Seq",mlink:"#",paper:"STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting",plink:"https://arxiv.org/abs/1905.10069",year:"2019",step3:3.207009554,step6:3.513832569,step9:3.75211978,step12:3.989217758,m_mae_step1:2.873410225,m_mae_step2:3.057595015,m_mae_step3:3.207009554,m_mae_step4:3.317353964,m_mae_step5:3.428559542,m_mae_step6:3.513832569,m_mae_step7:3.598775148,m_mae_step8:3.676764727,m_mae_step9:3.75211978,m_mae_step10:3.831633329,m_mae_step11:3.908805609,m_mae_step12:3.989217758,m_mape_step1:.076765589,m_mape_step2:.084222488,m_mape_step3:.090530291,m_mape_step4:.095138408,m_mape_step5:.099454805,m_mape_step6:.102760814,m_mape_step7:.105884999,m_mape_step8:.108615607,m_mape_step9:.111189872,m_mape_step10:.11381913,m_mape_step11:.116323486,m_mape_step12:.119050145,m_rmse_step1:5.200129032,m_rmse_step2:5.706233978,m_rmse_step3:6.165689468,m_rmse_step4:6.511514187,m_rmse_step5:6.823247433,m_rmse_step6:7.066045284,m_rmse_step7:7.286650181,m_rmse_step8:7.484865665,m_rmse_step9:7.669331074,m_rmse_step10:7.851381779,m_rmse_step11:8.031019211,m_rmse_step12:8.219035149},{rank:0,model:"GRU",mlink:"#",paper:"Using LSTM and GRU neural network methods for traffic flow prediction",plink:"https://ieeexplore.ieee.org/abstract/document/7804912",year:"2016",step3:3.878579855,step6:3.970649958,step9:4.034152031,step12:4.101053238,m_mae_step1:3.850193739,m_mae_step2:3.851273537,m_mae_step3:3.878579855,m_mae_step4:3.906800985,m_mae_step5:3.931890249,m_mae_step6:3.970649958,m_mae_step7:3.984755278,m_mae_step8:4.010480404,m_mae_step9:4.034152031,m_mae_step10:4.053321838,m_mae_step11:4.078495502,m_mae_step12:4.101053238,m_mape_step1:.106071219,m_mape_step2:.107352138,m_mape_step3:.108841695,m_mape_step4:.110093407,m_mape_step5:.111291245,m_mape_step6:.112729222,m_mape_step7:.113699824,m_mape_step8:.114966668,m_mape_step9:.11614003,m_mape_step10:.117237188,m_mape_step11:.118597224,m_mape_step12:.120193705,m_rmse_step1:7.225396633,m_rmse_step2:7.350177765,m_rmse_step3:7.467576981,m_rmse_step4:7.562798023,m_rmse_step5:7.653656483,m_rmse_step6:7.746285915,m_rmse_step7:7.823867798,m_rmse_step8:7.907803059,m_rmse_step9:7.98797369,m_rmse_step10:8.066348076,m_rmse_step11:8.147593498,m_rmse_step12:8.231281281},{rank:0,model:"Seq2Seq",mlink:"#",paper:"Sequence to Sequence Learning with Neural Networks",plink:"https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html",year:"2014",step3:3.724226475,step6:3.843455315,step9:3.968490362,step12:4.107018471,m_mae_step1:3.819587469,m_mae_step2:3.724068165,m_mae_step3:3.724226475,m_mae_step4:3.752555609,m_mae_step5:3.78818965,m_mae_step6:3.843455315,m_mae_step7:3.876490831,m_mae_step8:3.920360088,m_mae_step9:3.968490362,m_mae_step10:4.010913849,m_mae_step11:4.058806419,m_mae_step12:4.107018471,m_mape_step1:.103649862,m_mape_step2:.101111762,m_mape_step3:.101771593,m_mape_step4:.10322006,m_mape_step5:.104992926,m_mape_step6:.107199162,m_mape_step7:.10892316,m_mape_step8:.110896237,m_mape_step9:.11297448,m_mape_step10:.114957705,m_mape_step11:.117068611,m_mape_step12:.119241968,m_rmse_step1:7.024469852,m_rmse_step2:7.010651588,m_rmse_step3:7.074892044,m_rmse_step4:7.165113449,m_rmse_step5:7.266774178,m_rmse_step6:7.384478092,m_rmse_step7:7.486323833,m_rmse_step8:7.601319313,m_rmse_step9:7.714835644,m_rmse_step10:7.824673653,m_rmse_step11:7.933192253,m_rmse_step12:8.044482231},{rank:0,model:"AE",mlink:"#",paper:"Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction",plink:"https://ieeexplore.ieee.org/document/6910027",year:"2014",step3:4.296033382,step6:4.329978943,step9:4.385020733,step12:4.49087286,m_mae_step1:4.317168713,m_mae_step2:4.303926945,m_mae_step3:4.296033382,m_mae_step4:4.298787594,m_mae_step5:4.304625988,m_mae_step6:4.329978943,m_mae_step7:4.336397648,m_mae_step8:4.36009264,m_mae_step9:4.385020733,m_mae_step10:4.414586544,m_mae_step11:4.450531006,m_mae_step12:4.49087286,m_mape_step1:.132474214,m_mape_step2:.13165547,m_mape_step3:.131113023,m_mape_step4:.131020755,m_mape_step5:.131198823,m_mape_step6:.131778046,m_mape_step7:.132190943,m_mape_step8:.132935554,m_mape_step9:.133905694,m_mape_step10:.135093436,m_mape_step11:.136639744,m_mape_step12:.138492659,m_rmse_step1:8.647931099,m_rmse_step2:8.613793373,m_rmse_step3:8.5912323,m_rmse_step4:8.591352463,m_rmse_step5:8.602626801,m_rmse_step6:8.629518509,m_rmse_step7:8.651073456,m_rmse_step8:8.694066048,m_rmse_step9:8.735411644,m_rmse_step10:8.784210205,m_rmse_step11:8.844249725,m_rmse_step12:8.918504715},{rank:0,model:"ASTGCN",mlink:"#",paper:"Attention based spatial-temporal graph convolutional networks for traffic flow forecasting",plink:"https://ojs.aaai.org//index.php/AAAI/article/view/3881",year:"2019",step3:3.219216585,step6:3.840982914,step9:4.261841297,step12:4.641474724,m_mae_step1:2.61618185,m_mae_step2:2.963646889,m_mae_step3:3.219216585,m_mae_step4:3.453998566,m_mae_step5:3.627777576,m_mae_step6:3.840982914,m_mae_step7:3.97155571,m_mae_step8:4.126669884,m_mae_step9:4.261841297,m_mae_step10:4.381239414,m_mae_step11:4.527229309,m_mae_step12:4.641474724,m_mape_step1:.064834476,m_mape_step2:.076637767,m_mape_step3:.085326545,m_mape_step4:.09283904,m_mape_step5:.099343926,m_mape_step6:.105527394,m_mape_step7:.110651836,m_mape_step8:.115420245,m_mape_step9:.120354041,m_mape_step10:.124574624,m_mape_step11:.128994927,m_mape_step12:.133610293,m_rmse_step1:4.327045441,m_rmse_step2:5.162874222,m_rmse_step3:5.705645561,m_rmse_step4:6.126878262,m_rmse_step5:6.475745201,m_rmse_step6:6.780195236,m_rmse_step7:7.036572456,m_rmse_step8:7.277525902,m_rmse_step9:7.492752075,m_rmse_step10:7.699422836,m_rmse_step11:7.886809349,m_rmse_step12:8.080669403},{rank:0,model:"RNN",mlink:"#",paper:"Using LSTM and GRU neural network methods for traffic flow prediction",plink:"https://ieeexplore.ieee.org/abstract/document/7804912",year:"2016",step3:3.383401632,step6:3.891369343,step9:4.334444046,step12:4.756340027,m_mae_step1:3.086241484,m_mae_step2:3.219494581,m_mae_step3:3.383401632,m_mae_step4:3.549940825,m_mae_step5:3.715070248,m_mae_step6:3.891369343,m_mae_step7:4.03785038,m_mae_step8:4.190167904,m_mae_step9:4.334444046,m_mae_step10:4.475232601,m_mae_step11:4.616316795,m_mae_step12:4.756340027,m_mape_step1:.078872748,m_mape_step2:.086111061,m_mape_step3:.09301582,m_mape_step4:.099485233,m_mape_step5:.105716825,m_mape_step6:.112059802,m_mape_step7:.117375508,m_mape_step8:.122642159,m_mape_step9:.127617583,m_mape_step10:.132449344,m_mape_step11:.137280196,m_mape_step12:.142090142,m_rmse_step1:5.446045876,m_rmse_step2:5.937510014,m_rmse_step3:6.443620682,m_rmse_step4:6.91625452,m_rmse_step5:7.352768898,m_rmse_step6:7.767692566,m_rmse_step7:8.123303413,m_rmse_step8:8.466333389,m_rmse_step9:8.783629417,m_rmse_step10:9.087506294,m_rmse_step11:9.379055977,m_rmse_step12:9.662265778},{rank:0,model:"TGCN",mlink:"#",paper:"T-gcn: A temporal graph convolutional network for traffic prediction",plink:"https://ieeexplore.ieee.org/abstract/document/8809901/",year:"2020",step3:4.152167797,step6:4.318911076,step9:4.532141685,step12:4.806584358,m_mae_step1:4.112214088,m_mae_step2:4.134264469,m_mae_step3:4.152167797,m_mae_step4:4.197789669,m_mae_step5:4.246117592,m_mae_step6:4.318911076,m_mae_step7:4.373990059,m_mae_step8:4.451738834,m_mae_step9:4.532141685,m_mae_step10:4.616886139,m_mae_step11:4.706166744,m_mae_step12:4.806584358,m_mape_step1:.126902744,m_mape_step2:.127654418,m_mape_step3:.128371462,m_mape_step4:.129968867,m_mape_step5:.13147597,m_mape_step6:.133735314,m_mape_step7:.135732993,m_mape_step8:.138307169,m_mape_step9:.141159698,m_mape_step10:.143973291,m_mape_step11:.146996051,m_mape_step12:.150433451,m_rmse_step1:7.728711605,m_rmse_step2:7.775081635,m_rmse_step3:7.827650547,m_rmse_step4:7.926627636,m_rmse_step5:8.021657944,m_rmse_step6:8.152430534,m_rmse_step7:8.27451992,m_rmse_step8:8.419816017,m_rmse_step9:8.579461098,m_rmse_step10:8.73675251,m_rmse_step11:8.90237236,m_rmse_step12:9.084186554}]),a={data:function(){return{METR_LA_origin:p,rankingData:[],metrics:"MAE12"}},components:{},mounted:function(){this.rankingData=p,this.metricsChange("MAE12")},methods:{sortBy3:function(){this.rankingData.sort((function(e,t){return e.step3-t.step3}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},sortBy6:function(){this.rankingData.sort((function(e,t){return e.step6-t.step6}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},sortBy9:function(){this.rankingData.sort((function(e,t){return e.step9-t.step9}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},sortBy12:function(){this.rankingData.sort((function(e,t){return e.step12-t.step12}));var e=0;this.rankingData.forEach((function(t){e+=1,t.rank=e}))},metricsChange:function(e){"MAE12"==e?this.rankingData.forEach((function(e){e.step3=e.m_mae_step3.toFixed(5),e.step6=e.m_mae_step6.toFixed(5),e.step9=e.m_mae_step9.toFixed(5),e.step12=e.m_mae_step12.toFixed(5)})):"MAPE12"==e?this.rankingData.forEach((function(e){e.step3=e.m_mape_step3.toFixed(5),e.step6=e.m_mape_step6.toFixed(5),e.step9=e.m_mape_step9.toFixed(5),e.step12=e.m_mape_step12.toFixed(5)})):"RMSE12"==e&&this.rankingData.forEach((function(e){e.step3=e.m_rmse_step3.toFixed(5),e.step6=e.m_rmse_step6.toFixed(5),e.step9=e.m_rmse_step9.toFixed(5),e.step12=e.m_rmse_step12.toFixed(5)})),this.sortBy12()}}},r=a,n=(m("099ad"),m("2877")),i=Object(n["a"])(r,_,s,!1,null,"6f5ca01e",null);t["default"]=i.exports},"65f0":function(e,t,m){var _=m("861d"),s=m("e8b5"),p=m("b622"),a=p("species");e.exports=function(e,t){var m;return s(e)&&(m=e.constructor,"function"!=typeof m||m!==Array&&!s(m.prototype)?_(m)&&(m=m[a],null===m&&(m=void 0)):m=void 0),new(void 0===m?Array:m)(0===t?0:t)}},a640:function(e,t,m){"use strict";var _=m("d039");e.exports=function(e,t){var m=[][e];return!!m&&_((function(){m.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,m){var _=m("83ab"),s=m("d039"),p=m("5135"),a=Object.defineProperty,r={},n=function(e){throw e};e.exports=function(e,t){if(p(r,e))return r[e];t||(t={});var m=[][e],i=!!p(t,"ACCESSORS")&&t.ACCESSORS,o=p(t,0)?t[0]:n,c=p(t,1)?t[1]:void 0;return r[e]=!!m&&!s((function(){if(i&&!_)return!0;var e={length:-1};i?a(e,1,{enumerable:!0,get:n}):e[1]=1,m.call(e,o,c)}))}},b680:function(e,t,m){"use strict";var _=m("23e7"),s=m("a691"),p=m("408a"),a=m("1148"),r=m("d039"),n=1..toFixed,i=Math.floor,o=function(e,t,m){return 0===t?m:t%2===1?o(e,t-1,m*e):o(e*e,t/2,m)},c=function(e){var t=0,m=e;while(m>=4096)t+=12,m/=4096;while(m>=2)t+=1,m/=2;return t},l=n&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){n.call({})}));_({target:"Number",proto:!0,forced:l},{toFixed:function(e){var t,m,_,r,n=p(this),l=s(e),f=[0,0,0,0,0,0],u="",d="0",h=function(e,t){var m=-1,_=t;while(++m<6)_+=e*f[m],f[m]=_%1e7,_=i(_/1e7)},k=function(e){var t=6,m=0;while(--t>=0)m+=f[t],f[t]=i(m/e),m=m%e*1e7},v=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==f[e]){var m=String(f[e]);t=""===t?m:t+a.call("0",7-m.length)+m}return t};if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return String(n);if(n<0&&(u="-",n=-n),n>1e-21)if(t=c(n*o(2,69,1))-69,m=t<0?n*o(2,-t,1):n/o(2,t,1),m*=4503599627370496,t=52-t,t>0){h(0,m),_=l;while(_>=7)h(1e7,0),_-=7;h(o(10,_,1),0),_=t-1;while(_>=23)k(1<<23),_-=23;k(1<<_),h(1,1),k(2),d=v()}else h(0,m),h(1<<-t,0),d=v()+a.call("0",l);return l>0?(r=d.length,d=u+(r<=l?"0."+a.call("0",l-r)+d:d.slice(0,r-l)+"."+d.slice(r-l))):d=u+d,d}})},b727:function(e,t,m){var _=m("0366"),s=m("44ad"),p=m("7b0b"),a=m("50c4"),r=m("65f0"),n=[].push,i=function(e){var t=1==e,m=2==e,i=3==e,o=4==e,c=6==e,l=7==e,f=5==e||c;return function(u,d,h,k){for(var v,g,S=p(u),w=s(S),y=_(d,h,3),x=a(w.length),b=0,E=k||r,A=t?E(u,x):m||l?E(u,0):void 0;x>b;b++)if((f||b in w)&&(v=w[b],g=y(v,b,S),e))if(t)A[b]=g;else if(g)switch(e){case 3:return!0;case 5:return v;case 6:return b;case 2:n.call(A,v)}else switch(e){case 4:return!1;case 7:n.call(A,v)}return c?-1:i||o?o:A}};e.exports={forEach:i(0),map:i(1),filter:i(2),some:i(3),every:i(4),find:i(5),findIndex:i(6),filterOut:i(7)}},e8b5:function(e,t,m){var _=m("c6b6");e.exports=Array.isArray||function(e){return"Array"==_(e)}},edcb:function(e,t,m){},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-21e8dac6.51dca012.js.map