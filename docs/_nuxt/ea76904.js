(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,5],{288:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(90).default)("b50a5aac",content,!0,{sourceMap:!1})},289:function(t,e,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(90).default)("0fc5776e",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n(288)},291:function(t,e,n){var r=n(89)(!1);r.push([t.i,'.note[data-v-5fad5758]{height:100%;width:100%;display:flex;align-items:center;justify-content:center;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}span[data-v-5fad5758]{color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input[data-v-5fad5758]{height:5rem;width:100%;text-align:center;color:#fff;background-color:transparent;border-width:2px;border-color:#fff}.active[data-v-5fad5758]{background-color:#fff}.note[data-v-5fad5758]{font-size:3rem}@media (max-width:1199.98px){.note[data-v-5fad5758]{font-size:2.4rem}}@media (max-width:991.98px){.note[data-v-5fad5758]{font-size:1.8rem}}@media (max-width:767.98px){.note[data-v-5fad5758]{font-size:1.2rem}}@media (max-width:575.98px){.note[data-v-5fad5758]{font-size:1.8rem}}',""]),t.exports=r},293:function(t,e,n){"use strict";n.r(e);n(14);var r=n(292),o={props:{edit:Boolean,note:{type:[String,Array],default:"C4"},color:{type:String,default:"cornflowerblue"},sustain:{type:Boolean,default:!1}},data:function(){return{internalnote:this.note,active:!1}},computed:{notelabel:function(){if(Array.isArray(this.internalnote)){var t="",e=0;if(this.internalnote.length>=1&&(e=r.a(this.internalnote[0]).toMidi(),t+=this.internalnote[0].slice(0,-1)),this.internalnote.length>=3)r.a(this.internalnote[1]).toMidi()-e==3&&(t+="m"),r.a(this.internalnote[2]).toMidi()-e==6&&(t+="b5");if(this.internalnote.length>=4){var n=r.a(this.internalnote[3]).toMidi();n-e==11?t+="M7":n-e==10&&(t+="7")}return t}return this.internalnote}},watch:{note:function(t){this.internalnote=t}},methods:{play:function(){this.$emit("play",this.internalnote)},attack:function(t){this.active=!0,this.$store.commit("setcurrentnote",this.internalnote),this.sustain?this.$emit("attack",this.internalnote):this.$emit("play",this.internalnote)},attackmove:function(t){this.$store.state.pointerdown&&this.$store.state.currentnote!==this.internalnote&&this.attack(t)},release:function(){this.active=!1,this.sustain&&this.$emit("release",this.internalnote)}}},l=(n(290),n(64)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note",style:{backgroundColor:t.active?"lightgray":t.color},on:{pointerdown:t.attack,pointermove:t.attackmove,pointerleave:t.release,pointerup:t.release}},[n("span",[t._v(t._s(t.notelabel))])])}),[],!1,null,"5fad5758",null);e.default=component.exports},294:function(t,e,n){"use strict";n(289)},295:function(t,e,n){var r=n(89)(!1);r.push([t.i,"Note[data-v-1f153b32]{width:100%;height:100%}.note-container[data-v-1f153b32]{flex-wrap:wrap;flex-flow:wrap-reverse}.note-container[data-v-1f153b32],.note-set[data-v-1f153b32]{height:100%;width:100%;display:flex}.note-set[data-v-1f153b32]{flex-flow:column;flex-shrink:1}",""]),t.exports=r},297:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(90).default)("04b4c089",content,!0,{sourceMap:!1})},299:function(t,e,n){"use strict";n.r(e);var r={props:{edit:Boolean,notes:{type:Array,default:null},revnotes:{type:Array,default:null},colors:{type:Array,default:null},sustain:{type:Boolean,default:!1},width:{type:String,default:"100%"},height:{type:String,default:"100%"}},methods:{play:function(t){this.$emit("play",t)},attack:function(t){this.sustain?this.$emit("attack",t):this.$emit("play",t)},release:function(t){this.sustain&&this.$emit("release",t)},keyplay:function(t,e,n){n?(this.revnotes&&this.$refs["revnote"+t]&&this.$refs["revnote"+t][0].release(),this.$refs["note"+t][0].release()):e&&this.$refs["revnote"+t]?this.$refs["revnote"+t][0].attack():this.$refs["note"+t][0].attack()}}},o=(n(294),n(64)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note-container"},t._l(t.notes,(function(e,r){return n("div",{key:r,staticClass:"note-set",style:{width:t.width,height:t.height}},[n("Note",{ref:"note"+r,refInFor:!0,attrs:{edit:t.edit,note:e,color:t.colors[r],sustain:t.sustain},on:{attack:t.attack,release:t.release,play:t.play}}),t._v(" "),t.revnotes&&e!=t.revnotes[r]?n("Note",{ref:"revnote"+r,refInFor:!0,attrs:{edit:t.edit,note:t.revnotes[r],color:t.colors[r],sustain:t.sustain},on:{attack:t.attack,release:t.release,play:t.play}}):t._e()],1)})),0)}),[],!1,null,"1f153b32",null);e.default=component.exports;installComponents(component,{Note:n(293).default})},300:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjMwIiB5PSIxMTIiIHdpZHRoPSIxOTYiIGhlaWdodD0iMzIiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo="},301:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjMwIiB5PSIxMTIiIHdpZHRoPSIxOTYiIGhlaWdodD0iMzIiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHg9IjE0NC40NTUiIHk9IjMwLjA3NDMiIHdpZHRoPSIxOTYiIGhlaWdodD0iMzIiIHRyYW5zZm9ybT0icm90YXRlKDkwLjEzMzEgMTQ0LjQ1NSAzMC4wNzQzKSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},310:function(t,e,n){"use strict";n(297)},311:function(t,e,n){var r=n(89)(!1);r.push([t.i,'.body[data-v-e048d4ba]{height:100vh;width:100vw;display:flex;flex-flow:column;background-color:#d3d3d3}.header[data-v-e048d4ba]{display:flex;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;width:100%}.scale-container[data-v-e048d4ba]{height:0%;width:100%;display:flex;flex-flow:column-reverse;flex-grow:2}.base-scale-container[data-v-e048d4ba]{height:0%;flex-grow:1}span[data-v-e048d4ba]{color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}Scale[data-v-e048d4ba]{width:100%;height:100%}.header-item[data-v-e048d4ba]{height:100%;align-items:center;background-color:#708090}.header-item[data-v-e048d4ba],.header-item>span[data-v-e048d4ba]{display:flex;justify-content:center}.header-item>span[data-v-e048d4ba]{align-items:right;text-align:center}.header-item.scale>span[data-v-e048d4ba]{justify-content:flex-end}.edit[data-v-e048d4ba]{width:20%}.size-btn[data-v-e048d4ba]{width:5rem}.tr input[data-v-e048d4ba]{width:100%;height:100%;background-color:#708090;border:none;color:#fff;text-align:center}.tr input[data-v-e048d4ba]::-webkit-inner-spin-button,.tr input[data-v-e048d4ba]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.tr input[type=number][data-v-e048d4ba]{-moz-appearance:textfield}.tr[data-v-e048d4ba],.tr-btn[data-v-e048d4ba]{width:5rem}.tr-btn[data-v-e048d4ba]{background-color:#696969}.scale[data-v-e048d4ba]{background-color:#708090;display:flex;justify-content:flex-end;flex-grow:1}.scale span[data-v-e048d4ba]{width:100%}option[data-v-e048d4ba],select[data-v-e048d4ba]{background-color:#708090;color:#fff;text-align:right}select[data-v-e048d4ba]{height:100%;width:100%;max-width:20rem;border:none;outline:none;text-align:right}.header[data-v-e048d4ba],option[data-v-e048d4ba]{font-size:1.6rem}@media (max-width:1199.98px){.header[data-v-e048d4ba],option[data-v-e048d4ba]{font-size:1.3rem}}@media (max-width:991.98px){.header[data-v-e048d4ba],option[data-v-e048d4ba]{font-size:1rem}}@media (max-width:767.98px){.header[data-v-e048d4ba],option[data-v-e048d4ba]{font-size:1rem}}@media (max-width:575.98px){.header[data-v-e048d4ba],option[data-v-e048d4ba]{font-size:1rem}.scale-label.header-item[data-v-e048d4ba],.size-label[data-v-e048d4ba],.tr-label.header-item[data-v-e048d4ba]{display:none}}',""]),t.exports=r},314:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"size-label header-item px-3"},[n("span",[t._v("\n        SIZE\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tr-label header-item px-3"},[n("span",[t._v("\n        TRANSPOSE\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("img",{attrs:{src:n(300),width:"60%",height:"60%"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("img",{attrs:{src:n(301),width:"60%",height:"60%"}})])}],o=n(27),l=(n(12),n(18),n(43),n(1),n(91),n(20),n(11),n(292)),c=["S","M","L","X"],d={};["a","s","d","f","g","h","j","k","l",";",":","]"].forEach((function(element,t){d[element]=t}));var h={};["z","x","c","v","b","n","m",",",".","/","\\"].forEach((function(element,t){h[element]=t}));var f={};["q","w","e","r","t","y","u","i","o","p","@","["].forEach((function(element,t){f[element]=t}));var v={};[1,2,3,4,5,6,7,8,9].forEach((function(element,t){v[element]=t}));var m=window.matchMedia("(max-width: 575.96px)"),y=window.matchMedia("(min-width: 576px)"),w={data:function(){var t=this;return{edit:!1,scaleid:0,rows:1,synth:(new l.b).toDestination(),sustain:!1,cycle:!0,transpose:0,colorList:Object(o.a)(Array(13).keys()).map((function(i){return t.hsv2rgb([30*i,.5,.8])})),sizeIndex:0,base:!1}},computed:{notes:function(){var t=this;return this.$store.state.scaleList[this.scaleid].notes.filter((function(element,e,n){return!!t.cycle||e<n.length-1})).map((function(element){return t.transposenote(element,t.transpose)}))},revnotes:function(){var t=this,e=this.$store.state.scaleList[this.scaleid].revnotes;return null==e?null:e.filter((function(element,e,n){return!!t.cycle||e<n.length-1})).map((function(element){return t.transposenote(element,t.transpose)}))},basenotes:function(){var t=this;return null==this.$store.state.scaleList[this.scaleid].base?this.$store.state.scaleList.find((function(element){return"Chromatic"===element.name})).notes.filter((function(element,e,n){return!!t.cycle||e<n.length-1})).map((function(element){return t.transposenote(element,t.transpose)})):this.$store.state.scaleList[this.scaleid].base.notes.filter((function(element,e,n){return!!t.cycle||e<n.length-1})).map((function(element){return t.transposenote(element,t.transpose)}))},baserevnotes:function(){var t=this;return null==this.$store.state.scaleList[this.scaleid].base||null==this.$store.state.scaleList[this.scaleid].base.revnotes?null:this.$store.state.scaleList[this.scaleid].base.revnotes.filter((function(element,e,n){return!!t.cycle||e<n.length-1})).map((function(element){return t.transposenote(element,t.transpose)}))},type:function(){return this.$store.state.scaleList[this.scaleid].type||"SCALE"},size:function(){return c[this.sizeIndex]},octaves:function(){var t;switch(this.sizeIndex){case 0:t=[0];break;case 1:t=[0,1];break;case 2:t=[-1,0,1];break;case 3:t=[0,1]}return t},colors:function(){var t=this;return this.$store.state.scaleList[this.scaleid].notes.map((function(element,e,n){return t.colorList[parseInt(12*e/(n.length-1))]})).map((function(t){return"rgb(".concat(t[0],", ").concat(t[1],", ").concat(t[2],")")}))},baseColors:function(){var t=this;return null==this.$store.state.scaleList[this.scaleid].base?this.colorList.map((function(t){return"rgb(".concat(t[0],", ").concat(t[1],", ").concat(t[2],")")})):this.$store.state.scaleList[this.scaleid].base.notes.map((function(element,e,n){return t.colorList[parseInt(12*e/(n.length-1))]})).map((function(t){return"rgb(".concat(t[0],", ").concat(t[1],", ").concat(t[2],")")}))},width:function(){var t=parseInt((this.$store.state.scaleList[this.scaleid].notes.length+this.rows-1)/this.rows)*this.rows;return 100*this.rows/t+"%"},baseWidth:function(){if(null==this.$store.state.scaleList[this.scaleid].base){var t=parseInt((12+this.rows)/this.rows)*this.rows;return 100*this.rows/t+"%"}var e=parseInt((this.$store.state.scaleList[this.scaleid].base.notes.length+this.rows-1)/this.rows)*this.rows;return 100*this.rows/e+"%"},height:function(){return 100/this.rows+"%"}},created:function(){m.addEventListener("change",this.handleMQChange),this.handleMQChange(m),y.addEventListener("change",this.handleRevMQChange),this.handleRevMQChange(y)},mounted:function(){var t=this;window.onkeydown=this.keyattack,window.onkeyup=this.keyrelease,window.onpointerdown=function(){t.$store.commit("setpointerdown",!0)},window.onpointerup=function(){t.$store.commit("setpointerdown",!1)}},methods:{toggle:function(t){var e=this.edit;this.edit=!e},handleMQChange:function(t){t.matches?this.rows=2:this.rows=1},handleRevMQChange:function(t){t.matches?this.rows=1:this.rows=2},resize:function(){this.sizeIndex=(this.sizeIndex+1)%4,3===this.sizeIndex?this.base=!0:this.base=!1},decrement:function(){this.transpose--},increment:function(){this.transpose++},blur:function(t){t.target.blur()},play:function(t){this.synth.triggerAttackRelease(t,"8n")},attack:function(t){this.synth.triggerAttack(t,"8n")},release:function(t){var e=l.c();this.synth.triggerRelease(t,e+"8n",.5)},keyattack:function(t){this.keyplay(t)},keyrelease:function(t){this.keyplay(t,!0)},keyplay:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=d[t.key];void 0!==n&&n<this.notes.length&&(this.$refs.scale0[0].keyplay(n,t.ctrlKey,e),t.preventDefault());var r=h[t.key];2===this.sizeIndex&&void 0!==r&&r<this.notes.length&&(this.$refs["scale-1"][0].keyplay(r,t.ctrlKey,e),t.preventDefault());var o=f[t.key];this.sizeIndex>0&&void 0!==o&&o<this.notes.length&&(this.$refs.scale1[0].keyplay(o,t.ctrlKey,e),t.preventDefault());var l=v[t.key];3===this.sizeIndex&&void 0!==l&&l<this.basenotes.length&&this.$refs.basescale.keyplay(l,t.ctrlKey,e)},transposenote:function(t,e){return Array.isArray(t)?t.map((function(element){return l.a(element).transpose(e).toNote()})):l.a(t).transpose(e).toNote()},transposenotes:function(t,e){var n=this;return t.map((function(t){return n.transposenote(t,12*e)}))},hsv2rgb:function(t){var e,n=t[0]/60,s=t[1],r=t[2];if(0===s)return[255*r,255*r,255*r];var i=parseInt(n),o=n-i,l=r*(1-s),c=r*(1-s*o),d=r*(1-s*(1-o));switch(i){case 0:case 6:e=[r,d,l];break;case 1:e=[c,r,l];break;case 2:e=[l,r,d];break;case 3:e=[l,c,r];break;case 4:e=[d,l,r];break;case 5:e=[r,l,c]}return e.map((function(t){return 255*t}))}}},x=(n(310),n(64)),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("div",{staticClass:"header"},[t._m(0),t._v(" "),n("div",{staticClass:"size-btn header-item px-3",on:{click:function(e){return e.stopPropagation(),t.resize.apply(null,arguments)}}},[n("span",[t._v("\n        "+t._s(t.size)+"\n      ")])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"tr-btn header-item px-3",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.decrement.apply(null,arguments)}}},[t._m(2)]),t._v(" "),n("div",{staticClass:"tr header-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.transpose,expression:"transpose"}],attrs:{type:"number",min:"-36",max:"36"},domProps:{value:t.transpose},on:{input:function(e){e.target.composing||(t.transpose=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"tr-btn header-item px-3",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.increment.apply(null,arguments)}}},[t._m(3)]),t._v(" "),n("div",{staticClass:"scale header-item"},[n("span",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.scaleid,expression:"scaleid"}],staticClass:"px-3 py-3 my-0",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.scaleid=e.target.multiple?n:n[0]},t.blur]}},t._l(t.$store.state.scaleList,(function(e,r){return n("option",{key:r,domProps:{value:r}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),0)])]),t._v(" "),n("div",{staticClass:"scale-label header-item px-3"},[n("span",[t._v("\n        "+t._s(t.type)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"scale-container"},t._l(t.octaves,(function(e){return n("Scale",{key:e,ref:"scale"+e,refInFor:!0,attrs:{notes:t.transposenotes(t.notes,e),revnotes:t.revnotes&&t.transposenotes(t.revnotes,e),width:t.width,height:t.height,colors:t.colors,edit:t.edit,sustain:t.sustain},on:{attack:t.attack,release:t.release,play:t.play}})})),1),t._v(" "),t.base?n("div",{staticClass:"scale-container base-scale-container"},[t.base?n("Scale",{ref:"basescale",attrs:{notes:t.transposenotes(t.basenotes,-1),revnotes:t.baserevnotes&&t.transposenotes(t.baserevnotes,-1),width:t.baseWidth,height:t.height,colors:t.baseColors,edit:t.edit,sustain:t.sustain},on:{attack:t.attack,release:t.release,play:t.play}}):t._e()],1):t._e()])}),r,!1,null,"e048d4ba",null);e.default=component.exports;installComponents(component,{Scale:n(299).default})}}]);