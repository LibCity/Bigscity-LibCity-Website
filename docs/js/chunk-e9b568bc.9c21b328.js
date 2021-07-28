(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9b568bc"],{"1f91":function(t,e,a){"use strict";a("46e9")},"2dc9":function(t,e,a){},"46e9":function(t,e,a){},4863:function(t,e,a){"use strict";a("ec1e")},7718:function(t,e,a){t.exports=a.p+"img/data_flow.4565f1b5.png"},"79f4":function(t,e,a){"use strict";a("ca20")},"8ae8":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"content"},[a("div",[a("p",{staticClass:"title"},[t._v("Data Flow")]),a("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),a("p",[t._v("In consideration of extensibiliy, flexibility and reusability, the data module designs an elegant data flow that transforms raw data into the unified input of model module. The overall data flow can be described as follows:")]),t._m(1),t._m(2),a("br"),a("p",{staticClass:"title"},[t._v("Atomic Files")]),a("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),a("p",[t._v("LibTraffic introduces and implements 6 atomic file types for formating various spatio-temporal datasets, which are able to characterize most forms of the input data required by different spatio-temporal data mining tasks. These atomic files can be identified by their filenames:")]),t._m(3),a("br"),t._m(4),a("br"),a("p",{staticClass:"title"},[t._v("Dataset List")]),a("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),t._m(5),a("a-divider",{staticStyle:{"font-size":"24px"}},[t._v("Traffic Condition Dataset")]),a("condition-data-table",{attrs:{content:t.condition}}),a("br"),a("a-divider",{staticStyle:{"font-size":"24px"}},[t._v("Vehicle Trajectory Dataset")]),a("vehicle-data-table",{attrs:{content:t.vehicle}}),a("br"),a("a-divider",{staticStyle:{"font-size":"24px"}},[t._v("People Flow Trajectory Dataset")]),a("people-data-table",{attrs:{content:t.people}}),a("br")],1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticStyle:{"padding-top":"20px",color:"white"}},[a("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[t._v("Data")]),a("p",{staticStyle:{margin:"0px 0 20px 130px","font-size":"30px"}},[t._v(" LibTraffic provides 29 spatio-temporal datasets and introduces unified "),a("br"),t._v(" data structures to format representations of datas and the input of algorithms. ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{margin:"10px auto 10px auto","text-align":"center"}},[i("img",{attrs:{src:a("7718"),alt:"Data Flow",height:"120"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("span",{staticStyle:{"font-weight":"700"}},[t._v("Raw Data")]),t._v(": Unprocessed open source traffic datasets.")]),a("li",[a("span",{staticStyle:{"font-weight":"700"}},[t._v("Atomic Files")]),t._v(": Basic components for characterizing the input of various traffic prediction tasks.")]),a("li",[a("span",{staticStyle:{"font-weight":"700"}},[t._v("Dataset")]),t._v(": Dataset objects for various traffic prediction tasks, which is responsible for reading atomic files. LibTraffic also provides a series of functions for data preprocessing. Detailed in "),a("a",{attrs:{href:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/data_flow.html",target:"_blank"}},[t._v("Document")]),t._v(".")]),a("li",[a("span",{staticStyle:{"font-weight":"700"}},[t._v("DataLoader")]),t._v(": Mainly based on the "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("torch.utils.data.DataLoader")]),t._v(" in the library of "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("PyTorch")]),t._v(". Responsible for feeding data into models by an internal data structure "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("Batch")]),t._v(". "),a("span",{staticStyle:{"font-weight":"700"}},[t._v("Batch")]),t._v(" is implemented as a abstract data type based on "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("python.dict")]),t._v(", which is a key-value indexed data structure. "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("Key")]),t._v(" corresponds to the feature name of the model input. "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("Value")]),t._v(" corresponds to the tensor (implemented by "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("torch.Tensor")]),t._v(") and the value entry for a specific key stores all the corresponding tensor data in a "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("batch")]),t._v(" or "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[t._v("mini-batch")]),t._v(". Detailed in "),a("a",{attrs:{href:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/data_flow.html",target:"_blank"}},[t._v("Document")]),t._v(".")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticStyle:{width:"1000px"}},[a("thead",{staticStyle:{"font-size":"16px"}},[a("tr",[a("th",{attrs:{width:"12%"}},[t._v("FILENAME")]),a("th",{attrs:{width:"58%"}},[t._v("CONTENT")]),a("th",{attrs:{width:"30%"}},[t._v("EXAMPLE FORMAT")])])]),a("tbody",[a("tr",[a("td",[t._v("xxx.geo")]),a("td",[t._v("Store geographic entity attribute information.")]),a("td",[t._v("geo_id, type, coordinates")])]),a("tr",[a("td",[t._v("xxx.usr")]),a("td",[t._v("Store traffic user information.")]),a("td",[t._v("usr_id, gender, birth_date")])]),a("tr",[a("td",[t._v("xxx.rel")]),a("td",[t._v("Store the relationship information between entities, such as road networks. ")]),a("td",[t._v("rel_id, origin_id, destination_id")])]),a("tr",[a("td",[t._v("xxx.dyna")]),a("td",[t._v("Store traffic condition information.")]),a("td",[t._v("dyna_id, type, entity_id, location_id")])]),a("tr",[a("td",[t._v("xxx.ext")]),a("td",[t._v("Store external information, such as weather, temperature, etc.")]),a("td",[t._v("ext_id, time, properties")])]),a("tr",[a("td",[t._v("config.json")]),a("td",[t._v("Used to supplement the description of the above table information.")]),a("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The essence of the atomic files is feature-based data frames corresponding to different parts of the task input. And atomic files are combined to support the input of different spatio-temporal data mining tasks. Detailed in "),a("a",{attrs:{href:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/atomic_files.html",target:"_blank"}},[t._v("Document")]),t._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("We have already collected 29 spatio-temporal datasets. In order to help users transform the raw data into atomic files, we have released the scripts of formatting these datasets into atomic files for reference. Besides, we have uploaded the processed atomic files in network disks "),a("a",{attrs:{href:"https://pan.baidu.com/s/1qEfcXBO-QwZfiT0G3IYMpQ#list/path=%2F",target:"_blank"}},[t._v("BaiduDisk with code 1231")]),t._v(" or "),a("a",{attrs:{href:"https://drive.google.com/drive/folders/1g5v2Gq1tkOq8XO0HDCZ9nOTtRpB6-gPe?usp=sharing"}},[t._v("Google Drive")]),t._v(".")])}],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[t._m(0),a("tbody",t._l(t.content,(function(e){return a("tr",{key:e.dataset},[a("td",{attrs:{width:"14%"}},[a("a",{attrs:{href:e.plink,target:"_blank"}},[t._v(t._s(e.dataset))])]),a("td",{attrs:{width:"4%"}},[t._v(t._s(e.geo))]),a("td",{attrs:{width:"4%"}},[t._v(t._s(e.rel))]),a("td",{attrs:{width:"8%"}},[t._v(t._s(e.feature))]),a("td",{attrs:{width:"17%"}},[t._v(t._s(e.place))]),a("td",{attrs:{width:"20%"}},[t._v(t._s(e.duration))]),a("td",{attrs:{width:"10%"}},[t._v(t._s(e.interval))]),a("td",{attrs:{width:"23%"}},[a("a-button",{attrs:{type:"primary",shape:"round"}},[a("a",{attrs:{href:e.source,target:"_blank"}},[t._v("Source")])]),a("a-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary",shape:"round"}},[a("a",{attrs:{href:e.slink,target:"_blank"}},[t._v("Script")])])],1)])})),0)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticStyle:{"font-size":"16px"}},[a("tr",[a("th",[t._v("DATASET")]),a("th",[t._v("#GEO")]),a("th",[t._v("#REL")]),a("th",[t._v("FEATURES")]),a("th",[t._v("PLACE")]),a("th",[t._v("DURATION")]),a("th",[t._v("INTERVAL")]),a("th",[t._v("LINK")])])])}],c={props:{content:{type:Array,required:!0}},data:function(){return{}}},n=c,d=(a("79f4"),a("2877")),l=Object(d["a"])(n,r,o,!1,null,null,null),h=l.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[t._m(0),a("tbody",t._l(t.content,(function(e){return a("tr",{key:e.dataset},[a("td",{attrs:{width:"25%"}},[a("a",{attrs:{href:e.plink,target:"_blank"}},[t._v(t._s(e.dataset))])]),a("td",{attrs:{width:"25%"}},[t._v(t._s(e.place))]),a("td",{attrs:{width:"30%"}},[t._v(t._s(e.duration))]),a("td",{attrs:{width:"20%"}},[a("a-button",{attrs:{type:"primary",shape:"round"}},[a("a",{attrs:{href:e.source,target:"_blank"}},[t._v("Source")])])],1)])})),0)])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticStyle:{"font-size":"16px"}},[a("tr",[a("th",[t._v("DATASET")]),a("th",[t._v("PLACE")]),a("th",[t._v("DURATION")]),a("th",[t._v("LINK")])])])}],p={props:{content:{type:Array,required:!0}},data:function(){return{}}},b=p,_=(a("1f91"),Object(d["a"])(b,f,u,!1,null,null,null)),m=_.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[t._m(0),a("tbody",t._l(t.content,(function(e){return a("tr",{key:e.dataset},[a("td",{attrs:{width:"20%"}},[a("a",{attrs:{href:e.plink,target:"_blank"}},[t._v(t._s(e.dataset))])]),a("td",{attrs:{width:"25%"}},[t._v(t._s(e.place))]),a("td",{attrs:{width:"30%"}},[t._v(t._s(e.duration))]),a("td",{attrs:{width:"5%"}},[t._v(t._s(e.vehicle))]),a("td",{attrs:{width:"20%"}},[a("a-button",{attrs:{type:"primary",shape:"round"}},[a("a",{attrs:{href:e.source,target:"_blank"}},[t._v("Source")])])],1)])})),0)])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticStyle:{"font-size":"16px"}},[a("tr",[a("th",[t._v("DATASET")]),a("th",[t._v("PLACE")]),a("th",[t._v("DURATION")]),a("th",[t._v("VEHICLE")]),a("th",[t._v("LINK")])])])}],y={props:{content:{type:Array,required:!0}},data:function(){return{}}},w=y,k=(a("b7b5"),Object(d["a"])(w,g,v,!1,null,null,null)),S=k.exports,T=[{dataset:"METR-LA",geo:"207",rel:"11753",feature:"speed",place:"Los Angeles County, USA",duration:"Mar. 1, 2012 ~ Jun. 27, 2012",interval:"5min",source:"https://github.com/liyaguang/DCRNN",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#metr-la",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/metr_la.py"},{dataset:"Los-loop",geo:"207",rel:"42849",feature:"speed",place:"Los Angeles County, USA",duration:"Mar. 1, 2012 ~ Jun. 27, 2012",interval:"5min",source:"https://github.com/lehaifeng/T-GCN/tree/master/data",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#los-loop",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/los-loop.py"},{dataset:"SZ-Taxi",geo:"156",rel:"24336",feature:"speed",place:"Shenzhen, China",duration:"Jan. 1, 2015 ~ Jan. 31, 2015",interval:"15min",source:"https://github.com/lehaifeng/T-GCN/tree/master/data",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#sz-taxi",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/sz-taxi.py"},{dataset:"Loop Seattle",geo:"323",rel:"104329",feature:"speed",place:"Greater Seattle Area, USA",duration:"over the entirely of 2015",interval:"5min",source:"https://github.com/zhiyongc/Seattle-Loop-Data",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#loop-seattle",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/loop_seattle.py"},{dataset:"Q-Traffic",geo:"45148",rel:"63422",feature:"speed",place:"Beijing, China",duration:"Apr. 1, 2017 ~ May 31, 2017",interval:"15min",source:"https://github.com/JingqingZ/BaiduTraffic",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#q-traffic",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/q-traffic.py"},{dataset:"PeMSD3",geo:"358",rel:"547",feature:"flow",place:"District 3 of California, USA",duration:"Sept. 1, 2018 ~ Nov. 30, 2018",interval:"5min",source:"https://github.com/Davidham3/STSGCN",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd3",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/pemsd3.py"},{dataset:"PeMSD4",geo:"307",rel:"340",feature:"flow, speed, occupancy",place:"San Francisco Bay Area, USA",duration:"Jan. 1, 2018 ~ Feb. 28, 2018",interval:"5min",source:"https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd4",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/pemsd4.py"},{dataset:"PEMSD7",geo:"883",rel:"866",feature:"flow",place:"District 7 of California, USA",duration:"Jul. 1, 2016 ~ Aug. 31, 2016",interval:"5min",source:"https://github.com/Davidham3/STSGCN",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd7",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/pemsd7.py"},{dataset:"PEMSD8",geo:"170",rel:"277",feature:"flow, speed, occupancy",place:"San Bernardino Area, USA",duration:"Jul. 1, 2016 ~ Aug. 31, 2016",interval:"5min",source:"https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd8",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/pemsd8.py"},{dataset:"PEMSD7(M)",geo:"228",rel:"51984",feature:"speed",place:"District 7 of California, USA",duration:"the weekdays of May and June of 2012",interval:"5min",source:"https://github.com/Davidham3/STGCN/tree/master/datasets",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd7-m",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/pemsd7(m).py"},{dataset:"PEMS-BAY",geo:"325",rel:"8358",feature:"speed",place:"San Francisco Bay Area, USA",duration:"Jan. 1, 2017 ~ Jun. 30, 2017",interval:"5min",source:"https://github.com/liyaguang/DCRNN",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pems-bay",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/pems_bay.py"},{dataset:"Beijing subway",geo:"276",rel:"76176",feature:"people flow",place:"Beijing, China",duration:"Feb. 29, 2016 ~ Apr. 3, 2016",interval:"10min, 15min, 30min",source:"https://github.com/JinleiZhangBJTU/ResNet-LSTM-GCN",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#beijing-subway",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/beijing%20subway.py"},{dataset:"M_dense",geo:"30",rel:"-",feature:"car flow",place:"Madrid, Spain",duration:"Jan. 1, 2018 ~ Dec. 21, 2019",interval:"60min",source:"https://github.com/Davidham3/STSGCN",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#m-dense",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/m_dense.py"},{dataset:"Rotterdam",geo:"208",rel:"-",feature:"speed",place:"Rotterdam, Holland",duration:"135 days of 2018",interval:"2min",source:"https://github.com/RomainLITUD/DGCN_traffic_forecasting",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#rotterdam",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/rotterdam.py"},{dataset:"SHMetro",geo:"288",rel:"82944",feature:"people flow",place:"Shanghai, China",duration:"Jul. 1, 2016 ~ Sept. 30, 2016",interval:"15min",source:"https://github.com/ivechan/PVCGN",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#shmetro",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/sh_metro.py"},{dataset:"HZMetro",geo:"80",rel:"6400",feature:"people flow",place:"Hangzhou, China",duration:"Jan. 1, 2019 ~ Jan. 25, 2019",interval:"15min",source:"https://github.com/ivechan/PVCGN",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#hzmetro",slink:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets/blob/master/hz_metro.py"}],D=[{dataset:"Foursquare",place:"415 cities",duration:"Apr. 2012 ~ Sept. 2013",source:"https://sites.google.com/site/yangdingqi/home/foursquare-dataset",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#foursquare-global-scale-check-in-dataset",slink:"#"},{dataset:"Gowalla",place:"-",duration:"Feb. 2009 ~ Oct. 2010",source:"https://snap.stanford.edu/data/loc-gowalla.html",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#gowalla",slink:"#"},{dataset:"Brightkite",place:"-",duration:"Apr. 2008 ~ Oct. 2010",source:"http://snap.stanford.edu/data/loc-brightkite.html",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#brightkite",slink:"#"},{dataset:"GeoLife-GPS",place:"Beijing, China (majority)",duration:"Aug. 2007 ~ Aug. 2012",source:"https://www.microsoft.com/en-us/research/publication/geolife-gps-trajectory-dataset-user-guide/",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#geolife-gps",slink:"#"}],A=[{dataset:"NYC-Bus",place:"New York, USA",duration:"Aug. 1, 2014 ~ Oct. 31, 2014",vehicle:"bus",source:"http://web.mta.info/developers/MTA-Bus-Time-historical-data.html",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyc-bus",slink:"#"},{dataset:"NYC-Taxi",place:"New York, USA",duration:"2009 ~ present",vehicle:"taxi",source:"https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyc-taxi",slink:"#"},{dataset:"NYC-Bike",place:"New York, USA",duration:"Jun. 2013 ~ present",vehicle:"bike",source:"https://www.citibikenyc.com/system-data",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyc-bike",slink:"#"},{dataset:"BikeDC",place:"Washington, USA",duration:"Sept. 20, 2010 ~ Oct. 2020",vehicle:"bike",source:"https://www.capitalbikeshare.com/system-data",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#bikedc",slink:"#"},{dataset:"BikeCHI",place:"Chicago, USA",duration:"Jun. 27, 2013 ~ 2018",vehicle:"bike",source:"https://www.divvybikes.com/system-data",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#bikechi",slink:"#"},{dataset:"AustinRide",place:"Austin, USA",duration:"Jun. 4, 2016 ~ Apr. 13, 2017",vehicle:"bike",source:"https://data.world/ride-austin/ride-austin-june-6-april-13",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#austinride",slink:"#"},{dataset:"I-80",place:"San Francisco Bay, USA",duration:"Apr. 13, 2005",vehicle:"-",source:"https://www.fhwa.dot.gov/publications/research/operations/06137/index.cfm",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#i-80",slink:"#"},{dataset:"T-Drive",place:"Beijing, China",duration:"Feb. 2, 2008 ~ Feb. 8, 2008",vehicle:"taxi",source:"https://www.microsoft.com/en-us/research/publication/t-drive-trajectory-data-sample/",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#t-drive",slink:"#"},{dataset:"Porto",place:"Porto, Portugal",duration:"Jul. 1, 2013 ~ Jun. 30, 2014",vehicle:"taxi",source:"https://archive.ics.uci.edu/ml/datasets/Taxi+Service+Trajectory+-+Prediction+Challenge%2C+ECML+PKDD+2015",plink:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#porto",slink:"#"}],x={data:function(){return{condition:T,people:D,vehicle:A}},components:{conditionDataTable:h,peopleDataTable:m,vehicleDataTable:S}},L=x,C=(a("4863"),Object(d["a"])(L,i,s,!1,null,"1e298ef6",null));e["default"]=C.exports},b7b5:function(t,e,a){"use strict";a("2dc9")},ca20:function(t,e,a){},ec1e:function(t,e,a){}}]);
//# sourceMappingURL=chunk-e9b568bc.9c21b328.js.map