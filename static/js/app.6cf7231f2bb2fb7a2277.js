webpackJsonp([0,2],[,,function(e,t,s){"use strict";var n=s(1),a=s.n(n),i=s(19),r=s.n(i),o=s(13),c=s.n(o);a.a.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Hello",component:c.a}]})},function(e,t,s){s(8);var n=s(0)(s(4),s(15),null,null);e.exports=n.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(14),a=s.n(n),i=s(12),r=s.n(i);t.default={name:"app",components:{"tips-head":a.a,"app-head":r.a}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome"}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isCloseHeadTips:!1,tipsMsg:"你好，欢迎您的到来！",timer:0,count:0}},methods:{closeHeadTips:function(){this.isCloseHeadTips=!this.isCloseHeadTips,clearTimeout(this.timer)},changeHeadTips:function(){var e=this,t=(new Date).toLocaleString();this.count++,console.log(this.count),this.timer=setTimeout(function(){e.tipsMsg=t,e.changeHeadTips()},1e3)}},mounted:function(){var e=this;setTimeout(function(){e.changeHeadTips()},3e3)}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,s){s(9);var n=s(0)(s(5),s(16),"data-v-73e1cc2e",null);e.exports=n.exports},function(e,t,s){s(11);var n=s(0)(s(6),s(18),"data-v-b1638bc2",null);e.exports=n.exports},function(e,t,s){s(10);var n=s(0)(s(7),s(17),"data-v-7c954ffb",null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("tips-head"),e._v(" "),s("app-head"),e._v(" "),s("div",{staticClass:"container"},[s("router-view")],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-head-wrap"},[s("div",{staticClass:"app-head-container clearfix"},[s("div",{staticClass:"logo"},[e._v("Keree")]),e._v(" "),s("div",{staticClass:"nav"},[s("ul",{staticClass:"clearfix"},[s("li",[s("a",{attrs:{href:"https://keree.github.io/"}},[e._v("首页")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://keree.github.io/"}},[e._v("博客")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://keree.github.io/about",target:"_blank"}},[e._v("About")])])])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade"}},[e.isCloseHeadTips?e._e():s("div",{staticClass:"tips-head-container clearfix"},[s("div",{staticClass:"tips-head"},[e._v("\n\t\t  "+e._s(e.tipsMsg)+"\n\t  ")]),e._v(" "),s("i",{staticClass:"close",attrs:{title:"Close this Tips!"},on:{click:e.closeHeadTips}})])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))])])},staticRenderFns:[]}},,,,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(1),a=s.n(n),i=s(3),r=s.n(i),o=s(2);new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})}],[22]);