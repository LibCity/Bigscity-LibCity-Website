(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2719b634"],{"9b7c":function(e,t,a){"use strict";a("b238")},b216:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"content"},[a("p",{staticClass:"title"},[e._v("Download One Dataset")]),a("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),e._m(1),e._m(2),e._m(3),e._m(4),a("p",[e._v("For example, if you download the METR_LA dataset, the directorys structure is as follows:")]),e._m(5),a("br"),a("p",{staticClass:"title"},[e._v("Run Model Pipeline")]),a("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),e._m(6),e._m(7),e._m(8),a("p",[e._v("This script will run the GRU model on the METR_LA dataset for traffic state prediction task under the default configuration.")]),a("p",[e._v("Furthermore, the script supports the input of the following command line parameters to adjust the parameter settings of the pipeline.")]),a("p",[e._v("Supporting parameters:")]),e._m(9),a("br")],1)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("div",{staticStyle:{"padding-top":"20px",color:"white"}},[a("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[e._v("Quick Start")]),a("p",{staticStyle:{margin:"0px 0 20px 130px","font-size":"30px"}},[e._v(" This page will help you quickly know the basic usages of LibTraffic. ")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The dataset used in LibTraffic is stored in a unified data storage format named "),a("a",{attrs:{href:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/atomic_files.html",target:"_blank"}},[e._v("atomic files")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("In order to directly use the "),a("a",{attrs:{href:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html",target:"_blank"}},[e._v("raw datasets")]),e._v(" in LibTraffic, we have converted all these datasets into the format of atomic files, and provide the "),a("a",{attrs:{href:"https://github.com/LibTraffic/Bigscity-LibTraffic-Datasets",target:"_blank"}},[e._v("conversion tools")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("You can simply download the datasets we have processed, the data link is "),a("a",{attrs:{href:"https://pan.baidu.com/s/1qEfcXBO-QwZfiT0G3IYMpQ#list/path=%2F",target:"_blank"}},[e._v("BaiduDisk with code 1231")]),e._v(" or "),a("a",{attrs:{href:"https://drive.google.com/drive/folders/1g5v2Gq1tkOq8XO0HDCZ9nOTtRpB6-gPe?usp=sharing"}},[e._v("Google Drive")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Before run models in LibTraffic, please make sure you download at least one dataset and put it in directory "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("Bigscity-LibTraffic/raw_data/dataset_name/*")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("Bigscity-LibTraffic/raw_data/METR_LA/METR_LA.geo")])]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("Bigscity-LibTraffic/raw_data/METR_LA/METR_LA.rel")])]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("Bigscity-LibTraffic/raw_data/METR_LA/METR_LA.dyna")])]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("Bigscity-LibTraffic/raw_data/METR_LA/config.json")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The script "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("run_model.py")]),e._v(" used for training and evaluating a single model is provided in the root directory of the framework, and a series of command line parameters are provided to allow users to adjust the running parameter configuration.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("When run the "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("run_model.py")]),e._v(", you must specify the following three parameters, namely "),a("b",[e._v("task")]),e._v(", "),a("b",[e._v("dataset")]),e._v(" and "),a("b",[e._v("model")]),e._v(". For example:")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"code"},[a("code",{attrs:{"data-lang":"bash"}},[e._v(" python run_model.py --task traffic_state_pred --model GRU --dataset METR_LA ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("task")]),e._v(": The name of the task to be performed, including "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("traffic_state_pred")]),e._v(" and "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("traj_loc_pred")]),e._v(". Defaults to "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("None")]),e._v(".")]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("model")]),e._v(": The name of the model to be performed. Defaults to "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("None")]),e._v(". ("),a("a",{attrs:{href:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/model.html",target:"_href"}},[e._v("supporting models")]),e._v(")")]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("dataset")]),e._v(": The name of the model to be performed. Defaults to "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("None")]),e._v(". ("),a("a",{attrs:{href:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html",target:"_href"}},[e._v("supporting datasets")]),e._v(")")]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("config_file")]),e._v(": The name of user-defined configuration file. Defaults to "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("None")]),e._v(". ("),a("a",{attrs:{href:"https://bigscity-libtraffic-docs.readthedocs.io/en/latest/user_guide/config_settings.html",target:"_href"}},[e._v("see more")]),e._v(")")]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("saved_model")]),e._v("：Whether to save the trained model. Defaults to "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("True")]),e._v(".")]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("train")]),e._v("：If the model has been pre-trained, whether to retrain the model. Defaults to "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("True")]),e._v(".")]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("batch_size")]),e._v("：The training and evaluation batch size.")]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("train_rate")]),e._v("：The proportion of the training set to the total dataset. (The order of division is training set, validation set, test set)")]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("eval_rate")]),e._v("：The proportion of the validation set.")]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("learning_rate")]),e._v("：Learning_rate. The default learning rate of different models may be different, please refer to the corresponding configuration file for details.")]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("max_epoch")]),e._v("：Maximum rounds of training. The default value varies with the model.")]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("gpu")]),e._v("：Whether to use GPU. Defaults to "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("True")]),e._v(".")]),a("li",[a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("gpu_id")]),e._v("：The id of the GPU used. Defaults to "),a("code",{staticStyle:{color:"#e83e8c","font-size":"90%"}},[e._v("0")]),e._v(".")])])}],r={data:function(){return{}},components:{}},s=r,c=(a("9b7c"),a("2877")),n=Object(c["a"])(s,i,o,!1,null,"6b5c03a4",null);t["default"]=n.exports},b238:function(e,t,a){}}]);
//# sourceMappingURL=chunk-2719b634.2b06560a.js.map