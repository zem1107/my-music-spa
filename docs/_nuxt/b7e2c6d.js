(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{280:function(e,t,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(88).default)("380396a4",content,!0,{sourceMap:!1})},281:function(e,t,n){"use strict";n(280)},282:function(e,t,n){var o=n(87)(!1);o.push([e.i,'.note[data-v-f5abf8e6]{height:100%;width:100%;display:flex;align-items:center;justify-content:center;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}span[data-v-f5abf8e6]{color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input[data-v-f5abf8e6]{height:5rem;width:100%;text-align:center;color:#2f4f4f}.note[data-v-f5abf8e6]{font-size:2rem}@media (max-width:1199.98px){.note[data-v-f5abf8e6]{font-size:1.8rem}}@media (max-width:991.98px){.note[data-v-f5abf8e6]{font-size:1.6rem}}@media (max-width:767.98px){.note[data-v-f5abf8e6]{font-size:1.3rem}}@media (max-width:575.98px){.header[data-v-f5abf8e6],option[data-v-f5abf8e6]{font-size:1rem}}',""]),e.exports=o},287:function(e,t,n){"use strict";n.r(t);var o=n(286),r={props:{edit:Boolean,note:{type:String,default:"C4"},color:{type:String,default:"cornflowerblue"}},data:function(){return{internalnote:this.note}},watch:{note:function(e){this.internalnote=e}},methods:{play:function(e){(new o.a).toDestination().triggerAttackRelease(this.internalnote,"8n")}}},l=(n(281),n(63)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"note",style:{backgroundColor:e.color},on:{click:e.play}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!e.edit,expression:"!edit"}]},[e._v(e._s(e.internalnote))]),e._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"},{name:"model",rawName:"v-model",value:e.internalnote,expression:"internalnote"}],attrs:{type:"text"},domProps:{value:e.internalnote},on:{click:function(e){e.stopPropagation()},input:function(t){t.target.composing||(e.internalnote=t.target.value)}}})])}),[],!1,null,"f5abf8e6",null);t.default=component.exports}}]);