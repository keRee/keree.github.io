webpackJsonp([0,2],[,,function(e,t,a){"use strict";var r=a(1),n=a.n(r),s=a(25),i=a.n(s),o=a(19),l=a.n(o);n.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"NumberScroll",component:l.a}]})},function(e,t,a){a(10);var r=a(0)(a(5),a(20),null,null);e.exports=r.exports},function(e,t,a){"use strict";var r=function(e,t){function a(e){return"string"==typeof e?document.getElementById(e):e}var r=t&&t.size||4,n=[],s=t.score_element||null,i=this;i.el="string"==typeof e?document.getElementById(e):e,i.scoreElement=s&&("string"==typeof s?document.getElementById(s):s),i.isFail=!1,i.totalScore=0;var o=i.el.getContext("2d"),l=i.el.width/r-6,c=function(e,t){this.value=0,this.x=l*t+5*(t+1),this.y=l*e+5*(e+1)};i.init=function(){i.reset(),i.addEvents(),a("overlay")&&i.clear(),i.totalScore=0,i.renderTips(),i.createCells(),i.createNewBlock(),i.createNewBlock(),i.drawAllCells()},i.createCells=function(){for(var e=0;e<r;e++){n[e]=[];for(var t=0;t<r;t++)n[e][t]=new c(e,t)}},i.drawCell=function(e){switch(o.beginPath(),o.rect(e.x,e.y,l,l),e.value){case 0:o.fillStyle="#ccc0b0";break;case 2:o.fillStyle="#eee4da";break;case 4:o.fillStyle="#ece0c8";break;case 8:o.fillStyle="#f2b179";break;case 16:o.fillStyle="#f59563";break;case 64:o.fillStyle="#eb5837";break;case 256:o.fillStyle="#f4ce4f";break;case 512:o.fillStyle="#CD950C";break;case 1024:o.fillStyle="#e3ad15";break;case 2048:o.fillStyle="#edbf05";break;case 4096:o.fillStyle="#ffa570";break;default:o.fillStyle="#ccc0b0"}if(o.fill(),e.value){var t=3*l/8,a=l/2;switch(o.font=a+"px Arial",e.value){case 2:o.fillStyle="#888";break;case 4:o.fillStyle="#999";break;default:o.fillStyle="#E3E3E3"}switch(e.value){case 1024:o.font=t+"px Arial";break;case 2048:o.font=t+"px Arial";break;case 4096:o.font=t+"px Arial";break;default:o.font=a+"px Aria"}o.textAlign="center",o.fillText(e.value,e.x+l/2,e.y+l/2+l/7)}},i.drawAllCells=function(){for(var e=0;e<r;e++)for(var t=0;t<r;t++)i.drawCell(n[e][t])},i.createNewBlock=function(){for(;;){var e=Math.floor(Math.random()*r),t=Math.floor(Math.random()*r);if(!n[e][t].value)return n[e][t].value=2*Math.ceil(2*Math.random()),i.drawAllCells(),!1}},i.addEvents=function(){document.onkeydown=function(e){i.isFail||(38===e.keyCode||87===e.keyCode?i.moveUp(e):39===e.keyCode||68===e.keyCode?i.moveRight(e):40===e.keyCode||83===e.keyCode?i.moveDown(e):37!==e.keyCode&&65!==e.keyCode||i.moveLeft(e)),i.scoreElement&&(i.scoreElement.innerHTML="Score: "+i.totalScore/2)}},i.moveUp=function(e){e.preventDefault();for(var t=0;t<r;t++)for(var a=0;a<r-1;a++)if(n[a+1][t].value)for(var s=a;s>=0;){if(n[s][t].value){if(n[s][t].value===n[s+1][t].value){n[s][t].value*=2,n[s+1][t].value=0,i.totalScore+=n[s][t].value;break}break}n[s][t].value=n[s+1][t].value,n[s+1][t].value=0,s--}i.checkFreeBlock()},i.moveRight=function(e){e.preventDefault();for(var t=0;t<r;t++)for(var a=r-1;a>0;a--)if(n[t][a-1].value)for(var s=a;s<r;){if(n[t][s].value){if(n[t][s].value===n[t][s-1].value){n[t][s].value*=2,n[t][s-1].value=0,i.totalScore+=n[t][s].value;break}break}n[t][s].value=n[t][s-1].value,n[t][s-1].value=0,s++}i.checkFreeBlock()},i.moveDown=function(e){e.preventDefault();for(var t=0;t<r;t++)for(var a=r-1;a>0;a--)if(n[a-1][t].value)for(var s=a;s<r;){if(n[s][t].value){if(n[s][t].value===n[s-1][t].value){n[s][t].value*=2,n[s-1][t].value=0,i.totalScore+=n[s][t].value;break}break}n[s][t].value=n[s-1][t].value,n[s-1][t].value=0,s++}i.checkFreeBlock()},i.moveLeft=function(e){e.preventDefault();for(var t=0;t<r;t++)for(var a=0;a<r-1;a++)if(n[t][a+1].value)for(var s=a;s>=0;){if(n[t][s].value){if(n[t][s].value===n[t][s+1].value){n[t][s].value*=2,n[t][s+1].value=0,i.totalScore+=n[t][s].value;break}break}n[t][s].value=n[t][s+1].value,n[t][s+1].value=0,s--}i.checkFreeBlock()},i.checkFreeBlock=function(){for(var e=0,t=0;t<r;t++)for(var a=0;a<r;a++)n[t][a].value||e++;e?(i.isFail=!1,i.createNewBlock()):(i.isFail=!0,i.checkGame())},i.checkGame=function(){for(var e=!1,t="游戏还可以继续哦！加油~",s=0;s<r;s++){for(var o=0;o<r-1;o++){var l=o;if(n[s][l].value&&n[s][l].value===n[s][l+1].value){t="LEFT or RIGHT",e=!0;break}}if(e)break}if(!e)for(var c=0;c<r;c++){for(var u=0;u<r-1;u++){var v=u;if(n[v][c].value&&n[v][c].value===n[v+1][c].value){e=!0,t="UP or DOWN";break}}if(e)break}var f=a("overlay"),d=a("o_title"),p=a("start-again");if(e){var m="You can do ";m+=t,d.innerHTML="Game can continue!",p.innerHTML="Continue",a("total-score").innerHTML=m,f.style.display="block",i.continueGame()}else console.log("no"),d.innerHTML="Game is over!",f.style.display="block",p.innerHTML="Play Again",i.startAgain()},i.startAgain=function(){a("start-again").onclick=function(){i.isFail=!1,i.init(),i.clear(),i.scoreElement&&(i.scoreElement.innerHTML="Score: 0")}},i.continueGame=function(){a("start-again").onclick=function(){i.isFail=!1,i.clear()}},i.clear=function(){i.isFail=!1;var e=a("overlay");e.style.display="none",a("total-score").innerHTML="",a("o_title").innerHTML="",a("start-again").innerHTML=""},i.renderTips=function(){var e="#canvas-bloc{position: relative;}\n    #canvas{background: #bbada0;margin: "+i.el.width/20+"px 0;border-radius: 2px;}\n    a:link,a:visited{color: #42b983;}\n    a:hover,a:active{color: #42b983;}\n    .title{color: #42b983;cursor: pointer;margin-bottom: "+i.el.width/20+"px;}\n    #score{font-size: "+i.el.width/20+"px;color: #999;}\n    #size-title{color: #666;font-weight: bold;}\n    #overlay{display: none;position: absolute;top: "+i.el.width/20+"px;left: 0;width: "+i.el.width+"px;height: "+i.el.width+"px;padding: "+i.el.width/20+"px 0;background: rgba(0, 0, 0, 0.8);text-align: center;}\n    #total-score{color: #f00001;}",t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",r.appendChild(document.createTextNode(e)),t.appendChild(r);var n='<h3 class="title" id="o_title">Game is Over</h3>\n                <p id="total-score"></p>\n                <button class="btn btn-primary" id="start-again">Play Again</button>',s=document.createElement("div");s.id="overlay",s.innerHTML=n,a("canvas-bloc").appendChild(s)},i.reset=function(){o.clearRect(0,0,i.el.width,i.el.width)}};t.a=r},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(18),n=a.n(r),s=a(17),i=a.n(s),o=a(16),l=a.n(o);t.default={name:"app",components:{"tips-head":n.a,"app-head":i.a,"game-box":l.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(4);t.default={data:function(){return{game:null,showGame:!1}},mounted:function(){this.game=new r.a("canvas",{size:4,score_element:document.getElementById("score")})},methods:{startGame:function(){this.showGame=!0,console.log("2048 created"),this.game.init(),window.scrollTo(2e3,1e3)}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{isCloseHeadTips:!1,tipsMsg:"你好，欢迎您的到来！",timer:0,count:0}},methods:{closeHeadTips:function(){this.recordAction(),this.isCloseHeadTips=!this.isCloseHeadTips,clearTimeout(this.timer)},changeHeadTips:function(){var e=this,t=(new Date).toLocaleString();this.count++,this.timer=setTimeout(function(){e.tipsMsg=t,e.changeHeadTips()},1e3)},recordAction:function(){localStorage.setItem("isCloseHeadTips",!0)}},mounted:function(){var e=this;setTimeout(function(){e.changeHeadTips()},3e3)},created:function(){localStorage.getItem("isCloseHeadTips")&&(this.isCloseHeadTips=localStorage.getItem("isCloseHeadTips"))}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{defaultNum:600,startTime:0,rAF:{},startNum:"1949",endNum:"2017",separator:",",useSeparator:!0,duration:2,remaining:0,isPause:!1,step:0}},methods:{aa:function(){var e=this;setInterval(function(){e.defaultNum+=1},30)},bb:function(){var e=this;requestAnimationFrame(e.cc)},cc:function(e){var t=this;t.startTime||(t.startTime=e),t.timestamp=e;var a=e-t.startTime,r=Number(t.endNum),n=Number(t.startNum);t.remaining=2e3-a,t.step=n+(r-n)*a/2e3,n>r?t.step=t.step<r?r:t.step:t.step=t.step>r?r:t.step;var s=t.formatNum(t.step);this.defaultNum=s,a<2e3?t.rAF=requestAnimationFrame(t.cc):(t.startTime=0,t.startNum=t.endNum)},checked:function(){this.useSeparator=!this.useSeparator},formatNum:function(e){var t=this,a=/(\d+)(\d{3})/,r=Math.floor(e).toString().split("."),n=r[0],s=r.length>1?r[1]:"";if(t.useSeparator){for(;a.test(n);)n=n.replace(a,"$1"+t.separator+"$2");return n+s}return n+s},pause:function(){var e=this;e.paused?(this.isPause=!this.isPause,e.paused=!1,delete e.startTime,e.startVal=e.frameVal,requestAnimationFrame(e.count)):(e.isPause=!0,cancelAnimationFrame(e.rAF)),cancelAnimationFrame(this.rAF)},reset:function(){console.log("reset"),cancelAnimationFrame(this.rAF)}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,a){e.exports=a.p+"static/img/2048.93069e0.png"},function(e,t,a){a(11);var r=a(0)(a(6),a(21),"data-v-45f9e065",null);e.exports=r.exports},function(e,t,a){a(13);var r=a(0)(a(7),a(23),"data-v-73e1cc2e",null);e.exports=r.exports},function(e,t,a){a(14);var r=a(0)(a(8),a(24),"data-v-7c954ffb",null);e.exports=r.exports},function(e,t,a){a(12);var r=a(0)(a(9),a(22),"data-v-6dec6cce",null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("tips-head"),e._v(" "),a("app-head"),e._v(" "),a("div",{staticClass:"container"},[a("router-view")],1),e._v(" "),a("div",{staticClass:"container"},[a("game-box")],1)],1)},staticRenderFns:[]}},function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"box"},[e._m(0),e._v(" "),r("p",{attrs:{id:"score"}}),e._v(" "),r("div",[r("button",{staticClass:"btn",class:e.showGame?"btn-danger":"btn-primary",on:{click:e.startGame}},[e._v(e._s(e.showGame?"Reset":"Start"))])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showGame,expression:"showGame"}],attrs:{id:"canvas-bloc"}},[r("canvas",{attrs:{id:"canvas",width:"400",height:"400"}})]),e._v(" "),r("div",[e.showGame?e._e():r("img",{attrs:{src:a(15),alt:"2048"}})])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[a("a",{attrs:{href:"https://github.com/keRee/2048",target:"_blank"}},[e._v("Game 2048")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-sm-12"},[a("h3",[e._v("NumberScroll")]),e._v(" "),a("h1",{staticClass:"num"},[e._v(e._s(e.defaultNum))]),e._v(" "),a("h2",[e._v("Param")]),e._v(" "),a("div",{staticClass:"form-group  col-xs-12"},[a("form",{staticClass:"form-inline  col-xs-6"},[a("label",{staticClass:"col-xs-3",attrs:{for:"endNum"}},[e._v("endNum")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.endNum,expression:"endNum"}],staticClass:"form-control",attrs:{type:"text",id:"endNum",placeholder:"2017"},domProps:{value:e._s(e.endNum)},on:{input:function(t){t.target.composing||(e.endNum=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"form-group col-xs-12"},[a("form",{staticClass:"form-inline"},[a("div",{staticClass:"form-group col-xs-6"},[a("label",{staticClass:"col-xs-3",attrs:{for:"separator"}},[e._v("separator")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.separator,expression:"separator"}],staticClass:"form-control col-xs-3",attrs:{type:"text",id:"separator",placeholder:","},domProps:{value:e._s(e.separator)},on:{input:function(t){t.target.composing||(e.separator=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group  col-xs-6"},[a("label",{staticClass:"col-xs-2",attrs:{for:"useSeparator"}},[e._v("useSeparator")]),e._v(" "),a("input",{staticClass:" col-xs-2",attrs:{type:"checkbox",id:"useSeparator",checked:"checked"},on:{click:e.checked}})])])]),e._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(t){t.preventDefault(),e.bb(t)}}},[e._v("Run")]),e._v(" "),e.isPause?e._e():a("button",{staticClass:"btn btn-default btn-sm",on:{click:function(t){t.preventDefault(),e.pause(t)}}},[e._v("Pause")]),e._v(" "),e.isPause?a("button",{staticClass:"btn btn-info btn-sm",on:{click:function(t){t.preventDefault(),e.pause(t)}}},[e._v("continue")]):e._e(),e._v(" "),a("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(t){t.preventDefault(),e.reset(t)}}},[e._v("Reset")])]),e._v(" "),a("div",{staticClass:"code"},[a("pre",[e._v("{\n  'startNum': "+e._s(e.startNum)+",\n  'endNum': "+e._s(e.endNum)+",\n  'separator': "+e._s(e.separator)+",\n  'useSeparator': "+e._s(e.useSeparator)+"\n}\n")])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-head-wrap"},[a("div",{staticClass:"app-head-container clearfix"},[a("div",{staticClass:"logo"},[e._v("Keree")]),e._v(" "),a("div",{staticClass:"nav"},[a("ul",{staticClass:"clearfix"},[a("li",[a("a",{attrs:{href:"#"}},[e._v("首页")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://keree.github.io/archives/"}},[e._v("博客")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://keree.github.io/about",target:"_blank"}},[e._v("About")])])])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[e.isCloseHeadTips?e._e():a("div",{staticClass:"tips-head-container clearfix"},[a("div",{staticClass:"tips-head"},[e._v("\n\t\t  "+e._s(e.tipsMsg)+"\n\t  ")]),e._v(" "),a("i",{staticClass:"close",attrs:{title:"Close this Tips!"},on:{click:e.closeHeadTips}})])])},staticRenderFns:[]}},,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),n=a.n(r),s=a(3),i=a.n(s),o=a(2);new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})}],[28]);