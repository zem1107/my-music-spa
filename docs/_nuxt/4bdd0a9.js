(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{280:function(t,e,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(88).default)("3a9dfb5c",content,!0,{sourceMap:!1})},281:function(t,e,n){"use strict";n(280)},282:function(t,e,n){var o=n(87)(!1);o.push([t.i,'.note[data-v-07943738]{height:100%;width:100%;display:flex;align-items:center;justify-content:center;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}span[data-v-07943738]{color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input[data-v-07943738]{height:5rem;width:100%;text-align:center;color:#2f4f4f}.note[data-v-07943738]{font-size:2rem}@media (max-width:1199.98px){.note[data-v-07943738]{font-size:1.8rem}}@media (max-width:991.98px){.note[data-v-07943738]{font-size:1.6rem}}@media (max-width:767.98px){.note[data-v-07943738]{font-size:1.3rem}}@media (max-width:575.98px){.header[data-v-07943738],option[data-v-07943738]{font-size:1rem}}',""]),t.exports=o},286:function(t,e,n){"use strict";n.r(e);var o={props:{edit:Boolean,note:{type:String,default:"C4"},color:{type:String,default:"cornflowerblue"},sustain:{type:Boolean,default:!1}},data:function(){return{internalnote:this.note}},watch:{note:function(t){this.internalnote=t}},methods:{playEmit:function(){this.$emit("play",this.internalnote)},attackEmit:function(){this.sustain?this.$emit("attack",this.internalnote):this.$emit("play",this.internalnote)},releaseEmit:function(){this.sustain&&this.$emit("release",this.internalnote)}}},r=(n(281),n(63)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note",style:{backgroundColor:t.color},on:{pointerdown:function(e){return t.attackEmit()},pointerleave:function(e){return t.releaseEmit()},pointerup:function(e){return t.releaseEmit()}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.edit,expression:"!edit"}]},[t._v(t._s(t.internalnote))]),t._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"},{name:"model",rawName:"v-model",value:t.internalnote,expression:"internalnote"}],attrs:{type:"text"},domProps:{value:t.internalnote},on:{click:function(t){t.stopPropagation()},input:function(e){e.target.composing||(t.internalnote=e.target.value)}}})])}),[],!1,null,"07943738",null);e.default=component.exports}}]);