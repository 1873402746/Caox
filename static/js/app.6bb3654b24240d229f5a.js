webpackJsonp([1],[,,function(t,e){},,function(t,e,s){var o=s(1)(s(8),s(16),null,null,null);t.exports=o.exports},,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"record",props:["record"]}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(10),i=s.n(o),n=s(14),r=s.n(n);e.default={name:"app",components:{Record:r.a},data:function(){return{h5url:"https://h5.niu.xunlei.com/",appid:"wx33d87c078872bf59",openid:"",tokenid:"",prizeType:"",myqq:"",myaddress:"",myname:"",myphone:"",myxunlei:"",isAddr:!1,isAddrShow:!1,records:[],recordsShow:null,recordsIdx:2,pageno:1,ticket_id:""}},methods:{goGame:function(){window.location.href="https://game.niu.xunlei.com/dfw/jww.html"},showPageno:function(t){var e=this;t.target.scrollTop/80>14*e.pageno&&(e.pageno=e.pageno+1,e.getRecords())},showAddr:function(t){1==t.state&&(this.prize=t.pro_info.name,this.prizeType=t.pro_info.type,this.ticket_id=t.ticket_id,this.isPop=!0,this.isAddr=!0)},cloPop:function(){this.isPop=!1,this.isAddr=!1},subAddr:function(){var t=this;if(!/^1[34578]\d{9}$/.test(t.myphone))return alert("手机号码有误，请重填"),!1;var e={name:t.myname,tel:t.myphone,qq:t.myqq,xlusername:t.myxunlei,addr:t.myaddress},s=encodeURIComponent(i()(e));this.$http.jsonp(this.h5url+"lottery/dolls/addr?ticket_id="+t.ticket_id+"&info="+s,{jsonp:"cb"}).then(function(t){0==t.body.rtn?(alert("提交成功"),this.cloPop()):alert("提交失败")},function(t){alert(t.errinfo)})},setName:function(t){this.myname=t.target.value},setQQ:function(t){this.myqq=t.target.value},setAddress:function(t){this.myaddress=t.target.value},setPhone:function(t){this.myphone=t.target.value},setXunlei:function(t){this.myxunlei=t.target.value},getRecords:function(){var t=this;t.$http.jsonp(t.h5url+"lottery/dolls/querylog?openid="+t.openid+"&pageno="+t.pageno+"&state=0",{jsonp:"cb"}).then(function(e){0==e.body.rtn?(t.records=t.records.concat(e.body.data.record),t.recordsShow=t.records.filter(function(t,e){return t.ticket_id})):console.log(e.body.errinfo)},function(t){console.log("后台无反应")})},filterNoadr:function(){this.recordsShow=this.records.filter(function(t,e){return 1==t.state}),this.recordsIdx=0},filterGood:function(){this.recordsShow=this.records.filter(function(t,e){return 2==t.state}),this.recordsIdx=1},filterAll:function(){this.recordsShow=this.records.filter(function(t,e){return t.ticket_id}),this.recordsIdx=2},filterOut:function(){this.recordsShow=this.records.filter(function(t,e){return 3==t.state}),this.recordsIdx=3},addPageno:function(){this.pageno++},loginTo:function(){var t=location.href,e=encodeURIComponent(t);e=encodeURIComponent(this.h5url+"wechat/openid?redirect="+e);var s="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+this.appid+"&redirect_uri="+e+"&response_type=code&scope=snsapi_base&state=login#wechat_redirect";location.href=s}},mounted:function(){var t=this,e=t.$cookie.get("openid"),s=t.$cookie.get("tokenid");e?(t.openid=e,t.tokenid=s,t.$cookie.set("openid",e,{domain:".xunlei.com"}),t.$cookie.set("tokenid",s,{domain:".xunlei.com"}),t.getRecords()):t.loginTo()}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s(0),i=s(4),n=s.n(i),r=s(5),a=s(3),c=s.n(a),d=s(6),l=s.n(d),u=s(2);s.n(u);o.default.config.productionTip=!1,o.default.use(r.a),o.default.use(c.a),o.default.use(l.a),new o.default({el:"#app",template:"<Records/>",components:{Records:n.a}})},,,,,function(t,e,s){var o=s(1)(s(7),s(15),null,null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"fl"},[s("div",{staticClass:"prize_img"},[s("img",{attrs:{src:t.record.pro_info.imgurl,alt:""}})]),t._v(" "),s("strong",[t._v(t._s(t.record.pro_info.name))]),t._v(" "),s("p",{staticClass:"time"},[t._v(t._s(t.record.ts))])]),t._v(" "),s("div",{staticClass:"fr"},[s("span",{staticClass:"status",class:{fc_green:2==t.record.state}}),t._v(" "),2==t.record.state?s("span",{staticClass:"status fc_green"},[t._v("奖品已发放")]):1==t.record.state?s("span",{staticClass:"status"},[t._v("待填写")]):3==t.record.state?s("span",{staticClass:"status"},[t._v("待发放")]):s("span",{staticClass:"status"},[t._v("未中奖")]),t._v(" "),s("div",{staticClass:"status"},[s("span",{staticClass:"use_up"},[t._v("消耗"+t._s(t.record.consume)+"金豆")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{directives:[{name:"scroll",rawName:"v-scroll",value:t.showPageno,expression:"showPageno"}],staticClass:"wrap wp02"},[s("div",{staticClass:"tab_area"},[s("div",{staticClass:"tab_nav"},[s("ul",[s("li",{class:{on:0==t.recordsIdx},on:{click:t.filterNoadr}},[t._v("待填写")]),t._v(" "),s("li",{class:{on:3==t.recordsIdx},on:{click:t.filterOut}},[t._v("待发放")]),t._v(" "),s("li",{class:{on:1==t.recordsIdx},on:{click:t.filterGood}},[t._v("已中奖")]),t._v(" "),s("li",{class:{on:2==t.recordsIdx},on:{click:t.filterAll}},[t._v("全部")])])]),t._v(" "),s("div",{staticClass:"tab_cont"},[s("div",{staticClass:"tab_list"},[s("ul",t._l(t.recordsShow,function(e,o){return o>=0?s("li",{key:o,on:{click:function(s){s.stopPropagation(),t.showAddr(e)}}},[s("Record",{attrs:{record:e}})],1):t._e()})),t._v(" "),s("div",{staticClass:"p_btn_wp"},[s("a",{staticClass:"p_btn",attrs:{href:"#",title:"返回夹娃娃"},on:{click:function(e){e.preventDefault(),t.goGame(e)}}},[t._v("返回夹娃娃")])])])])]),t._v(" "),s("transition",{attrs:{name:"fadein"}},[t.isAddr?s("div",{staticClass:"mpop_box"},[s("div",{staticClass:"mpop_hd"},[s("h4",{staticClass:"mpop_tit"},[t._v("填写收货信息")]),t._v(" "),s("a",{staticClass:"mpop_clo",attrs:{href:"#",title:"关闭"},on:{click:function(e){e.preventDefault(),t.cloPop(e)}}},[t._v("关闭")])]),t._v(" "),s("div",{staticClass:"mpop_cont"},[s("div",{staticClass:"fill_addr"},[s("div",{staticClass:"input_box"},[s("label",[t._v("收货人：")]),t._v(" "),s("input",{attrs:{type:"text"},domProps:{value:t.myname},on:{input:t.setName}})]),t._v(" "),s("div",{staticClass:"input_box"},[s("label",[t._v("手机号码：")]),t._v(" "),s("input",{attrs:{type:"text"},domProps:{value:t.myphone},on:{input:t.setPhone}})]),t._v(" "),"thing"==t.prizeType?s("div",{staticClass:"input_box"},[s("label",[t._v("收货地址：")]),t._v(" "),s("input",{attrs:{type:"text"},domProps:{value:t.myaddress},on:{input:t.setAddress}})]):"qb"==t.prizeType?s("div",{staticClass:"input_box"},[s("label",[t._v("QQ号码：")]),t._v(" "),s("input",{attrs:{type:"text"},domProps:{value:t.myqq},on:{input:t.setQQ}})]):s("div",{staticClass:"input_box"},[s("label",[t._v("迅雷帐号：")]),t._v(" "),s("input",{attrs:{type:"text"},on:{input:t.setXunlei}})]),t._v(" "),s("p",{staticClass:"tips"},[t._v("请确认填写无误，收货信息无法二次修改")]),t._v(" "),s("div",{staticClass:"p_btn_wp"},[s("a",{staticClass:"btn_submit",attrs:{href:"#",title:"确定"},on:{click:function(e){e.preventDefault(),t.subAddr(e)}}},[t._v("确定")])])])])]):t._e()])],1)},staticRenderFns:[]}},,,,function(t,e){}],[9]);
//# sourceMappingURL=app.6bb3654b24240d229f5a.js.map