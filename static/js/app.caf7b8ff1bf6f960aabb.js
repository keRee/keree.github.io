webpackJsonp([0,2],[,,function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(27),i=a.n(o),s=a(20),l=a.n(s),c=a(18),u=a.n(c),v=a(21),f=a.n(v);r.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"Home",component:l.a},{path:"/2048",name:"GameBox",component:u.a},{path:"/numberscroll",name:"Numberscroll",component:f.a}]})},function(e,t,a){a(13);var n=a(0)(a(7),a(23),null,null);e.exports=n.exports},function(e,t,a){"use strict";var n=function(e,t){function a(e){return"string"==typeof e?document.getElementById(e):e}var n=t&&t.size||4,r=[],o=t.score_element||null,i=this;i.el="string"==typeof e?document.getElementById(e):e,i.scoreElement=o&&("string"==typeof o?document.getElementById(o):o),i.isFail=!1,i.totalScore=0;var s=i.el.getContext("2d"),l=i.el.width/n-6,c=function(e,t){this.value=0,this.x=l*t+5*(t+1),this.y=l*e+5*(e+1)};i.init=function(){i.reset(),i.addEvents(),a("overlay")&&i.clear(),i.totalScore=0,i.renderTips(),i.createCells(),i.createNewBlock(),i.createNewBlock(),i.drawAllCells()},i.createCells=function(){for(var e=0;e<n;e++){r[e]=[];for(var t=0;t<n;t++)r[e][t]=new c(e,t)}},i.drawCell=function(e){switch(s.beginPath(),s.rect(e.x,e.y,l,l),e.value){case 0:s.fillStyle="#ccc0b0";break;case 2:s.fillStyle="#eee4da";break;case 4:s.fillStyle="#ece0c8";break;case 8:s.fillStyle="#f2b179";break;case 16:s.fillStyle="#f59563";break;case 32:s.fillStyle="#f57c5f";break;case 64:s.fillStyle="#eb5837";break;case 128:s.fillStyle="#e1bb00";break;case 256:s.fillStyle="#f4ce4f";break;case 512:s.fillStyle="#CD950C";break;case 1024:s.fillStyle="#e3ad15";break;case 2048:s.fillStyle="#edbf05";break;case 4096:s.fillStyle="#ffa570";break;default:s.fillStyle="#ccc0b0"}if(s.fill(),e.value){var t=3*l/8,a=l/2;switch(s.font=a+"px Arial",e.value){case 2:s.fillStyle="#888";break;case 4:s.fillStyle="#999";break;default:s.fillStyle="#E3E3E3"}switch(e.value){case 1024:s.font=t+"px Arial";break;case 2048:s.font=t+"px Arial";break;case 4096:s.font=t+"px Arial";break;default:s.font=a+"px Aria"}s.textAlign="center",s.fillText(e.value,e.x+l/2,e.y+l/2+l/7)}},i.drawAllCells=function(){for(var e=0;e<n;e++)for(var t=0;t<n;t++)i.drawCell(r[e][t])},i.createNewBlock=function(){for(;;){var e=Math.floor(Math.random()*n),t=Math.floor(Math.random()*n);if(!r[e][t].value)return r[e][t].value=2*Math.ceil(2*Math.random()),i.drawAllCells(),!1}},i.addEvents=function(e){if(e)switch(e){case"up":i.moveUp(event);break;case"right":i.moveRight(event);break;case"down":i.moveDown(event);break;case"left":i.moveLeft(event)}else document.onkeydown=function(e){i.isFail||(38===e.keyCode||87===e.keyCode?i.moveUp(e):39===e.keyCode||68===e.keyCode?i.moveRight(e):40===e.keyCode||83===e.keyCode?i.moveDown(e):37!==e.keyCode&&65!==e.keyCode||i.moveLeft(e))}},i.moveUp=function(e){e.preventDefault();for(var t=0;t<n;t++)for(var a=0;a<n-1;a++)if(r[a+1][t].value)for(var o=a;o>=0;){if(r[o][t].value){if(r[o][t].value===r[o+1][t].value){r[o][t].value*=2,r[o+1][t].value=0,i.totalScore+=r[o][t].value,i.scoreElement&&(i.scoreElement.innerHTML="Score: "+i.totalScore);break}break}r[o][t].value=r[o+1][t].value,r[o+1][t].value=0,o--}i.checkFreeBlock()},i.moveRight=function(e){e.preventDefault();for(var t=0;t<n;t++)for(var a=n-1;a>0;a--)if(r[t][a-1].value)for(var o=a;o<n;){if(r[t][o].value){if(r[t][o].value===r[t][o-1].value){r[t][o].value*=2,r[t][o-1].value=0,i.totalScore+=r[t][o].value,i.scoreElement&&(i.scoreElement.innerHTML="Score: "+i.totalScore);break}break}r[t][o].value=r[t][o-1].value,r[t][o-1].value=0,o++}i.checkFreeBlock()},i.moveDown=function(e){e.preventDefault();for(var t=0;t<n;t++)for(var a=n-1;a>0;a--)if(r[a-1][t].value)for(var o=a;o<n;){if(r[o][t].value){if(r[o][t].value===r[o-1][t].value){r[o][t].value*=2,r[o-1][t].value=0,i.totalScore+=r[o][t].value,i.scoreElement&&(i.scoreElement.innerHTML="Score: "+i.totalScore);break}break}r[o][t].value=r[o-1][t].value,r[o-1][t].value=0,o++}i.checkFreeBlock()},i.moveLeft=function(e){e.preventDefault();for(var t=0;t<n;t++)for(var a=0;a<n-1;a++)if(r[t][a+1].value)for(var o=a;o>=0;){if(r[t][o].value){if(r[t][o].value===r[t][o+1].value){r[t][o].value*=2,r[t][o+1].value=0,i.totalScore+=r[t][o].value,i.scoreElement&&(i.scoreElement.innerHTML="Score: "+i.totalScore);break}break}r[t][o].value=r[t][o+1].value,r[t][o+1].value=0,o--}i.checkFreeBlock()},i.checkFreeBlock=function(){for(var e=0,t=0;t<n;t++)for(var a=0;a<n;a++)r[t][a].value||e++;e?(i.isFail=!1,i.createNewBlock()):(i.isFail=!0,i.checkGame())},i.checkGame=function(){for(var e=!1,t="游戏还可以继续哦！加油~",o=0;o<n;o++){for(var s=0;s<n-1;s++){var l=s;if(r[o][l].value&&r[o][l].value===r[o][l+1].value){t="LEFT or RIGHT",e=!0;break}}if(e)break}if(!e)for(var c=0;c<n;c++){for(var u=0;u<n-1;u++){var v=u;if(r[v][c].value&&r[v][c].value===r[v+1][c].value){e=!0,t="UP or DOWN";break}}if(e)break}var f=a("overlay"),m=a("o_title"),d=a("start-again");if(e){var h="You can do ";h+=t,m.innerHTML="Game can continue!",d.innerHTML="Continue",a("total-score").innerHTML=h,f.style.display="block",i.continueGame()}else console.log("no"),m.innerHTML="Game is over!",f.style.display="block",d.innerHTML="Play Again",i.startAgain()},i.startAgain=function(){a("start-again").onclick=function(){i.isFail=!1,i.init(),i.clear(),i.scoreElement&&(i.scoreElement.innerHTML="Score: 0")}},i.continueGame=function(){a("start-again").onclick=function(){i.isFail=!1,i.clear()}},i.clear=function(){i.isFail=!1;var e=a("overlay");e.style.display="none",a("total-score").innerHTML="",a("o_title").innerHTML="",a("start-again").innerHTML=""},i.renderTips=function(){var e="#canvas-bloc{position: relative;}\n    #canvas{background: #bbada0;margin: "+i.el.width/20+"px 0;border-radius: 2px;}\n    a:link,a:visited{color: #42b983;}\n    a:hover,a:active{color: #42b983;}\n    .title{color: #42b983;cursor: pointer;margin-bottom: "+i.el.width/20+"px;}\n    #score{font-size: "+i.el.width/20+"px;color: #999;}\n    #size-title{color: #666;font-weight: bold;}\n    #overlay{display: none;position: absolute;top: "+i.el.width/20+"px;left: 0;width: "+i.el.width+"px;height: "+i.el.width+"px;padding: "+i.el.width/20+"px 0;background: rgba(0, 0, 0, 0.8);text-align: center;}\n    #total-score{color: #f00001;}",t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.appendChild(document.createTextNode(e)),t.appendChild(n);var r='<h3 class="title" id="o_title">Game is Over</h3>\n                <p id="total-score"></p>\n                <button class="btn btn-primary" id="start-again">Play Again</button>',o=document.createElement("div");o.id="overlay",o.innerHTML=r,a("canvas-bloc").appendChild(o)},i.reset=function(){s.clearRect(0,0,i.el.width,i.el.width)}};t.a=n},function(e,t,a){"use strict";var n={shuffleArr:function(e){var t=[];if(!e.length)return!1;for(var a=0,n=e.length;a<n;a++)t[a]=e[a];for(var r=[],o=t.length;o>=1;){var i=Math.floor(Math.random()*o);r.push(t[i]),t.splice(i,1),o=t.length}return r}};t.a=n},function(e,t,a){"use strict";var n=function(){var e=this;e.el=document.getElementById("home-canvas");var t=e.el.getContext("2d"),a=window.innerWidth/2,n=window.innerHeight/2;e.draw=function(){var r=Math.floor(a),o=Math.floor(n-30),i=Math.floor(a-120),s=Math.floor(n+40),l=Math.floor(a+120),c=Math.floor(n/2-5);e.clearCanvasBloc(),t.beginPath(),t.moveTo(r,o),t.lineTo(i,s),t.lineTo(l,c),t.closePath(),t.fillStyle="rgba(255, 34, 32, 0.4)",t.fill()},e.drawHeart=function(){var e=a*Math.random()*2;t.beginPath(),t.moveTo(78+e,40+e),t.bezierCurveTo(60+e,28+e,44+e,54.5+e,75+e,68+e),t.bezierCurveTo(90+e,70.5+e,110+e,26.5+e,72+e,40+e),t.fill(),t.closePath()},e.clearCanvasBloc=function(){t.clearRect(0,0,2*a,2*n)}};t.a=n},function(e,t){},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(4);t.default={data:function(){return{game:null,showGame:!1,aa:{}}},mounted:function(){var e=this;e.game=new n.a("canvas",{size:4,score_element:document.getElementById("score")})},beforeDestroy:function(){var e=this;console.log("beforeDestroy"),document.removeEventListener("touchend",e.aa)},methods:{startGame:function(){this.touchEvent(),this.showGame=!0,this.game.init()},touchEvent:function(){var e=this,t={swipe:function(){var t=void 0,a=void 0,n=void 0,r=void 0,o=void 0;document.addEventListener("touchstart",function(e){o=!1,t=e.touches[0].clientX,a=e.touches[0].clientY},!1),document.addEventListener("touchmove",function(e){o=!0,e.preventDefault()},!1),document.addEventListener("touchend",function(i){if(o){n=i.changedTouches[0].clientX,r=i.changedTouches[0].clientY;var s=n-t,l=r-a,c=Math.abs(s),u=Math.abs(l);e.test(),(c>10||u>10)&&(c>=u?s>0?(console.log("Right"),e.game.addEvents("right")):(console.log("Left"),e.game.addEvents("left")):l>0?(console.log("Down"),e.game.addEvents("down")):(console.log("Up"),e.game.addEvents("up")))}},!1)}};e.aa=function(){t.swipe()},document.addEventListener("touchend",e.aa(),!1)},test:function(){}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(6);t.default={data:function(){return{w:0,h:0}},mounted:function(){var e=this;this.w=window.innerWidth,this.h=window.innerHeight,window.onresize=function(){e.w=window.innerWidth,e.h=window.innerHeight,setTimeout(function(){e.canvas_ani()},300)},setTimeout(function(){e.canvas_ani()},300)},methods:{canvas_ani:function(){var e=new n.a;e.draw()}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(19),r=a.n(n),o=a(5);t.default={name:"home",data:function(){return{title:"keRee",isShow:0,items:[],startTime:0,totalTime:0,rAF:0,atimer:0,aText:"",aIndex:0,aArr:["","","W","We","Wel","Welc","Welco","Welcom","Welcome","Welcome","Welcome","Welcome","Welcome","Welcom","Welco","Welc","Wel","We","W","","","欢","欢迎","欢迎","欢","","","我","我是","我是一","我是一名","我是一名前","我是一名前端","我是一名前端工","我是一名前端工程","我是一名前端工程师","我是一名前端工程师","我是一名前端工程师","我是一名前端工程师","我是一名前端工程师","我是一名前端工程","我是一名前端工","我是一名前端","我是一名前","我是一名","我是一","我是","我","","","","欢","欢迎","欢迎共","欢迎共同","欢迎共同学","欢迎共同学习","欢迎共同学习与","欢迎共同学习与交","欢迎共同学习与交流"],isActive:!0}},mounted:function(){var e=this;this.items=this.title.split(""),e.rAF=window.requestAnimationFrame(e.changerReverse),window.localStorage.getItem("keree_home")&&(e.isShow=Number(window.localStorage.getItem("keree_home"))),e.changeTxt()},components:{"canvas-box":r.a},methods:{getMore:function(){this.isShow=!this.isShow,window.localStorage.setItem("keree_home",this.isShow?1:0)},changerReverse:function(e){var t=this,a=+new Date;t.startTime||(t.startTime=e),t.totalTime||(t.totalTime=+new Date);var n=e-t.startTime,r=a-t.totalTime;if(n>3500){if(r>15e3)return window.cancelAnimationFrame(t.rAF),void(t.items=t.title.split(""));t.items=o.a.shuffleArr(t.items),t.startTime="",t.rAF=window.requestAnimationFrame(t.changerReverse)}else r>15e3&&window.cancelAnimationFrame(t.rAF),t.rAF=window.requestAnimationFrame(t.changerReverse)},changeTxt:function(){var e=this,t=e.aArr.length;if(e.isActive=!0,e.aIndex>=t)return e.aIndex=0,e.isActive=!1,clearTimeout(e.aTimer),void setTimeout(function(){e.changeTxt()},Math.ceil(2e4*Math.random()));var a=Math.ceil(800*Math.random());e.aTimer=setTimeout(function(){e.aText=e.aArr[e.aIndex],e.aIndex++,e.changeTxt()},a)}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{defaultNum:600,startTime:0,rAF:{},startNum:"600",endNum:"2017",separator:",",useSeparator:!0,duration:2,remaining:0,isPause:!1,step:0}},methods:{aa:function(){var e=this;setInterval(function(){e.defaultNum+=1},30)},bb:function(){var e=this;requestAnimationFrame(e.cc)},cc:function(e){var t=this;t.startTime||(t.startTime=e),t.timestamp=e;var a=e-t.startTime,n=Number(t.endNum),r=Number(t.startNum);t.remaining=2e3-a,t.step=r+(n-r)*a/2e3,r>n?t.step=t.step<n?n:t.step:t.step=t.step>n?n:t.step;var o=t.formatNum(t.step);this.defaultNum=o,a<2e3?t.rAF=requestAnimationFrame(t.cc):(t.startTime=0,t.startNum=t.endNum)},checked:function(){this.useSeparator=!this.useSeparator},formatNum:function(e){var t=this,a=/(\d+)(\d{3})/,n=Math.floor(e).toString().split("."),r=n[0],o=n.length>1?n[1]:"";if(t.useSeparator){for(;a.test(r);)r=r.replace(a,"$1"+t.separator+"$2");return r+o}return r+o},pause:function(){var e=this;e.paused?(this.isPause=!this.isPause,e.paused=!1,delete e.startTime,e.startVal=e.frameVal,requestAnimationFrame(e.count)):(e.isPause=!0,cancelAnimationFrame(e.rAF)),cancelAnimationFrame(this.rAF)},reset:function(){cancelAnimationFrame(this.rAF);var e=this;e.startNum=108}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,a){e.exports=a.p+"static/img/2048.93069e0.png"},function(e,t,a){a(14);var n=a(0)(a(8),a(24),"data-v-45f9e065",null);e.exports=n.exports},function(e,t,a){a(12);var n=a(0)(a(9),a(22),"data-v-0efeea4a",null);e.exports=n.exports},function(e,t,a){a(16);var n=a(0)(a(10),a(26),"data-v-c88aa4bc",null);e.exports=n.exports},function(e,t,a){a(15);var n=a(0)(a(11),a(25),"data-v-5237ed79",null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("canvas",{attrs:{width:e.w,height:e.h,id:"home-canvas"}})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]}},function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"box",attrs:{id:"game-box"}},[e._m(0),e._v(" "),n("p",{attrs:{id:"score"}}),e._v(" "),n("div",[n("button",{staticClass:"btn",class:e.showGame?"btn-danger":"btn-primary",on:{click:e.startGame}},[e._v(e._s(e.showGame?"Reset":"Start"))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.showGame,expression:"showGame"}],attrs:{id:"canvas-bloc"}},[n("canvas",{attrs:{id:"canvas",width:"320",height:"320"}})]),e._v(" "),n("div",[e.showGame?e._e():n("img",{attrs:{src:a(17),alt:"2048"}})])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[a("a",{attrs:{href:"https://github.com/keRee/2048",target:"_blank"}},[e._v("Game 2048")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-sm-12"},[a("h3",[e._v("NumberScroll")]),e._v(" "),a("h1",{staticClass:"num"},[e._v(e._s(e.defaultNum))]),e._v(" "),a("h2",[e._v("Param")]),e._v(" "),a("div",{staticClass:"form-group"},[a("form",{staticClass:"form-inline"},[a("label",{attrs:{for:"endNum"}},[e._v("endNum")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.endNum,expression:"endNum"}],staticClass:"form-control",attrs:{type:"text",id:"endNum",placeholder:"2017"},domProps:{value:e._s(e.endNum)},on:{input:function(t){t.target.composing||(e.endNum=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"form-group"},[a("form",{staticClass:"form-inline"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"separator"}},[e._v("separator")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.separator,expression:"separator"}],staticClass:"form-control",attrs:{type:"text",id:"separator",placeholder:","},domProps:{value:e._s(e.separator)},on:{input:function(t){t.target.composing||(e.separator=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useSeparator"}},[e._v("useSeparator")]),e._v(" "),a("input",{attrs:{type:"checkbox",id:"useSeparator",checked:"checked"},on:{click:e.checked}})])])]),e._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(t){t.preventDefault(),e.bb(t)}}},[e._v("Run")]),e._v(" "),a("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(t){t.preventDefault(),e.reset(t)}}},[e._v("Reset")])]),e._v(" "),a("div",{staticClass:"code"},[a("pre",[e._v("{\n  'startNum': "+e._s(e.startNum)+",\n  'endNum': "+e._s(e.endNum)+",\n  'separator': "+e._s(e.separator)+",\n  'useSeparator': "+e._s(e.useSeparator)+"\n}\n")])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"wrap"},[a("div",[a("transition-group",{attrs:{name:"list-complete",tag:"div"}},e._l(e.items,function(t){return a("span",{key:t,staticClass:"list-complete-item"},[e._v(e._s(t))])}))],1),e._v(" "),a("h4",{class:{active_txt:e.isActive}},[e._v(e._s(e.aText))]),e._v(" "),a("transition",{attrs:{name:"flip-list",mode:"out-in"}},[e.isShow?e._e():a("p",[a("a",{attrs:{href:"https://github.com/keree",target:"_blank"}},[e._v("Github")])])]),e._v(" "),a("transition",{attrs:{name:"flip-list"}},[e.isShow?e._e():a("p",[a("a",{attrs:{href:"https://keree.github.io/archives/"}},[e._v("Blog")])])]),e._v(" "),a("transition",{attrs:{name:"flip-list"}},[e.isShow?a("p",[a("router-link",{attrs:{to:"/2048"}},[e._v("Game 2048")])],1):e._e()]),e._v(" "),a("transition",{attrs:{name:"flip-list"}},[e.isShow?a("p",[a("a",{attrs:{href:"https://github.com/keRee/datePicker"}},[e._v("Datepicker")])]):e._e()]),e._v(" "),a("transition",{attrs:{name:"flip-list"}},[e.isShow?a("p",[a("router-link",{attrs:{to:"/numberScroll"}},[e._v("NumberScroll")])],1):e._e()])],1),e._v(" "),a("p",{staticClass:"more-btn",on:{click:e.getMore}},[e._v(e._s(e.isShow?"Back":"More"))]),e._v(" "),a("canvas-box")],1)},staticRenderFns:[]}},,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=a.n(n),o=a(3),i=a.n(o),s=a(2);new r.a({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})}],[30]);