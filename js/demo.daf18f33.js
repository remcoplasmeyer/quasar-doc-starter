(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"020e":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{staticStyle:{width:"200px"},attrs:{color:"primary"}},[n("div",{staticClass:"ellipsis"},[t._v("\n      This is some very long text that is expected to be truncated\n    ")])])],1)},a=[],l=n("2877"),o={},s=Object(l["a"])(o,e,a,!1,null,null,null);r["default"]=s.exports},"0d0d":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{attrs:{padding:"none",color:"primary",icon:"eco"}}),n("q-btn",{attrs:{padding:"xs",color:"primary",icon:"eco"}}),n("q-btn",{attrs:{padding:"lg",color:"primary",icon:"eco"}}),n("q-btn",{attrs:{padding:"10px 5px",color:"primary",icon:"eco"}}),n("q-btn",{attrs:{padding:"xs lg",color:"primary",icon:"eco"}}),n("q-btn",{attrs:{padding:"xl",color:"primary",round:"",icon:"eco"}}),n("q-btn",{attrs:{padding:"xs lg",color:"primary",round:"",icon:"eco"}}),n("q-btn",{attrs:{padding:"lg xs",color:"primary",round:"",icon:"eco"}})],1)},a=[],l={data(){return{sizes:["xs","sm","md","lg","xl"],icons:["navigation","add_a_photo","camera","camera_front","my_location"]}}},o=l,s=n("2877"),i=Object(s["a"])(o,e,a,!1,null,null,null);r["default"]=i.exports},"17e3":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[t._l(t.sizes,(function(t){return n("q-btn",{key:"btn_size_sq_"+t,attrs:{color:"primary",size:t,label:"Size "+t}})})),n("br"),t._l(t.sizes,(function(t){return n("q-btn",{key:"btn_size_rd_"+t,attrs:{rounded:"",color:"primary",size:t,label:"Size "+t}})})),n("br"),t._l(t.sizes,(function(r,e){return n("q-btn",{key:"btn_size_round_"+r,attrs:{round:"",color:"primary",size:r,icon:t.icons[e]}})})),n("br"),t._l(t.sizes,(function(t){return n("q-btn",{key:"btn_size_dense_sq_"+t,attrs:{dense:"",color:"primary",size:t,label:"Size "+t}})})),n("br"),t._l(t.sizes,(function(t){return n("q-btn",{key:"btn_size_dense_rd_"+t,attrs:{rounded:"",dense:"",color:"primary",size:t,label:"Size "+t}})})),n("br"),t._l(t.sizes,(function(r,e){return n("q-btn",{key:"btn_size_dense_round_"+r,attrs:{round:"",dense:"",color:"primary",size:r,icon:t.icons[e]}})})),n("br"),n("q-btn",{attrs:{size:"10px",color:"black",label:"Text height: 10px"}}),n("q-btn",{staticClass:"q-px-xl q-py-xs",attrs:{size:"22px",color:"purple",label:"Custom"}}),n("q-btn",{attrs:{size:"35px",round:"",color:"teal",icon:"map"}})],2)},a=[],l={data(){return{sizes:["xs","sm","md","lg","xl"],icons:["navigation","add_a_photo","camera","camera_front","my_location"]}}},o=l,s=n("2877"),i=Object(s["a"])(o,e,a,!1,null,null,null);r["default"]=i.exports},"2c97":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md column q-gutter-sm"},[n("router-link",{attrs:{to:{hash:"#Handling-links"}},scopedSlots:t._u([{key:"default",fn:function(r){return[n("q-btn",t._b({},"q-btn",t.buttonProps(r),!1))]}}])}),n("router-link",{attrs:{to:{hash:"#Handling-links",query:{search:"1"}}},scopedSlots:t._u([{key:"default",fn:function(r){return[n("q-btn",t._b({},"q-btn",t.buttonProps(r),!1))]}}])}),n("router-link",{attrs:{to:{hash:"#Handling-links",query:{search:"1",test:"1"}}},scopedSlots:t._u([{key:"default",fn:function(r){return[n("q-btn",t._b({},"q-btn",t.buttonProps(r),!1))]}}])}),n("router-link",{attrs:{to:{hash:"#Handling-links",query:{search:"1",test:"2"}}},scopedSlots:t._u([{key:"default",fn:function(r){return[n("q-btn",t._b({},"q-btn",t.buttonProps(r),!1))]}}])}),n("router-link",{attrs:{to:{hash:"#Handling-links",query:{search:"1",test:"1"}}},scopedSlots:t._u([{key:"default",fn:function(r){return[n("q-btn",t._b({attrs:{"icon-right":"timer_3"},on:{click:t.linkClick}},"q-btn",t.buttonProps(r),!1))]}}])})],1)},a=[],l={methods:{linkClick(t,r){t.navigate=!1,setTimeout(()=>{r()},3e3)},buttonProps({href:t,route:r,isActive:n,isExactActive:e}){const a={color:"black",noCaps:!0,label:`To "${r.fullPath}"`,outline:!0,to:t};return a.color=!0===n?!0===e?"primary":"amber-9":"black",a}}},o=l,s=n("2877"),i=Object(s["a"])(o,e,a,!1,null,null,null);r["default"]=i.exports},"2d55":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{attrs:{loading:t.loading1,color:"secondary",label:"Button"},on:{click:function(r){return t.simulateProgress(1)}}}),n("q-btn",{attrs:{loading:t.loading2,color:"red"},on:{click:function(r){return t.simulateProgress(2)}},scopedSlots:t._u([{key:"loading",fn:function(){return[t._v("\n      Loading...\n    ")]},proxy:!0}])},[t._v("\n    Button\n    ")]),n("q-btn",{attrs:{loading:t.loading3,color:"purple"},on:{click:function(r){return t.simulateProgress(3)}},scopedSlots:t._u([{key:"loading",fn:function(){return[n("q-spinner-radio")]},proxy:!0}])},[t._v("\n    Button\n    ")]),n("q-btn",{staticStyle:{width:"150px"},attrs:{loading:t.loading4,color:"primary"},on:{click:function(r){return t.simulateProgress(4)}},scopedSlots:t._u([{key:"loading",fn:function(){return[n("q-spinner-hourglass",{staticClass:"on-left"}),t._v("\n      Loading...\n    ")]},proxy:!0}])},[t._v("\n    Button\n    ")]),n("br"),n("q-btn",{attrs:{round:"",loading:t.loading5,color:"brown",icon:"camera_front"},on:{click:function(r){return t.simulateProgress(5)}},scopedSlots:t._u([{key:"loading",fn:function(){return[n("q-spinner-facebook")]},proxy:!0}])}),n("q-btn",{attrs:{round:"",loading:t.loading6,color:"black",icon:"camera_rear"},on:{click:function(r){return t.simulateProgress(6)}},scopedSlots:t._u([{key:"loading",fn:function(){return[n("q-spinner-gears")]},proxy:!0}])}),n("br"),n("q-btn",{attrs:{loading:t.progress,color:"primary"},on:{click:function(r){t.progress=!0}},scopedSlots:t._u([{key:"loading",fn:function(){return[n("q-spinner-radio",{staticClass:"on-left"}),t._v('\n      Click "Stop" Button\n    ')]},proxy:!0}])},[t._v("\n    Controlled from outside\n    ")]),n("q-btn",{attrs:{disable:!t.progress,color:"negative",label:"Stop"},on:{click:function(r){t.progress=!1}}})],1)},a=[],l={data(){return{loading1:!1,loading2:!1,loading3:!1,loading4:!1,loading5:!1,loading6:!1,progress:!1}},methods:{simulateProgress(t){this["loading"+t]=!0,setTimeout(()=>{this["loading"+t]=!1},3e3)}}},o=l,s=n("2877"),i=Object(s["a"])(o,e,a,!1,null,null,null);r["default"]=i.exports},"398d":function(t,r,n){"use strict";var e=n("5190"),a=n.n(e);a.a},"4b6d":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{staticClass:"btn-fixed-width",attrs:{align:"left",color:"primary",label:"Align to left"}}),n("q-btn",{staticClass:"btn-fixed-width",attrs:{align:"right",color:"secondary",label:"Align to right"}}),n("q-btn",{staticClass:"btn-fixed-width",attrs:{align:"between",color:"accent",label:"Align between",icon:"flight_takeoff"}}),n("q-btn",{staticClass:"btn-fixed-width",attrs:{align:"around",color:"brown-5",label:"Align around",icon:"lightbulb_outline"}})],1)},a=[],l=(n("398d"),n("2877")),o={},s=Object(l["a"])(o,e,a,!1,null,"65394f83",null);r["default"]=s.exports},"4f8f":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{staticStyle:{background:"#FF0080",color:"white"},attrs:{label:"Fuchsia"}}),n("q-btn",{staticStyle:{color:"#FF0080"},attrs:{flat:"",label:"Fuchsia Flat"}}),n("q-btn",{staticStyle:{background:"goldenrod",color:"white"},attrs:{label:"Goldenrod"}}),n("q-btn",{staticStyle:{color:"goldenrod"},attrs:{outline:"",label:"Goldenrod"}}),n("q-btn",{attrs:{color:"grey-4","text-color":"purple",glossy:"",unelevated:"",icon:"camera_enhance",label:"Purple text"}})],1)},a=[],l=n("2877"),o={},s=Object(l["a"])(o,e,a,!1,null,null,null);r["default"]=s.exports},5190:function(t,r,n){},"82e4":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{attrs:{color:"primary",icon:"mail",label:"On Left"}}),n("q-btn",{attrs:{color:"secondary","icon-right":"mail",label:"On Right"}}),n("q-btn",{attrs:{color:"red",icon:"mail","icon-right":"send",label:"On Left and Right"}}),n("br"),n("q-btn",{attrs:{icon:"phone",label:"Stacked",stack:"",glossy:"",color:"purple"}})],1)},a=[],l=n("2877"),o={},s=Object(l["a"])(o,e,a,!1,null,null,null);r["default"]=s.exports},"8d19":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{attrs:{ripple:!1,color:"secondary",label:"No ripple","no-caps":""}}),n("q-btn",{attrs:{ripple:{color:"yellow"},color:"secondary",label:"Yellow ripple","no-caps":""}}),n("q-btn",{attrs:{ripple:{center:!0},color:"secondary",label:"Center ripple","no-caps":""}})],1)},a=[],l=n("2877"),o={},s=Object(l["a"])(o,e,a,!1,null,null,null);r["default"]=s.exports},"8f0f":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{attrs:{round:"",color:"primary",icon:"shopping_cart"}}),n("q-btn",{attrs:{round:"",color:"secondary",icon:"navigation"}}),n("q-btn",{attrs:{round:"",color:"amber",glossy:"","text-color":"black",icon:"layers_clear"}}),n("q-btn",{attrs:{round:"",color:"brown-5",icon:"directions"}}),n("q-btn",{attrs:{round:"",color:"deep-orange",icon:"edit_location"}}),n("q-btn",{attrs:{round:"",color:"purple",glossy:"",icon:"local_grocery_store"}}),n("q-btn",{attrs:{round:"",color:"black",icon:"my_location"}})],1)},a=[],l=n("2877"),o={},s=Object(l["a"])(o,e,a,!1,null,null,null);r["default"]=s.exports},"8fcc":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{attrs:{flat:"",color:"primary",label:"Flat"}}),n("q-btn",{attrs:{flat:"",rounded:"",color:"primary",label:"Flat Rounded"}}),n("q-btn",{attrs:{flat:"",round:"",color:"primary",icon:"card_giftcard"}}),n("br"),n("q-btn",{attrs:{outline:"",color:"primary",label:"Outline"}}),n("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"Outline Rounded"}}),n("q-btn",{attrs:{outline:"",round:"",color:"primary",icon:"card_giftcard"}}),n("br"),n("q-btn",{attrs:{push:"",color:"primary",label:"Push"}}),n("q-btn",{attrs:{push:"",color:"primary",round:"",icon:"card_giftcard"}}),n("q-btn",{attrs:{push:"",color:"white","text-color":"primary",label:"Push"}}),n("q-btn",{attrs:{push:"",color:"white","text-color":"primary",round:"",icon:"card_giftcard"}}),n("br"),n("q-btn",{attrs:{unelevated:"",color:"primary",label:"Unelevated"}}),n("q-btn",{attrs:{unelevated:"",rounded:"",color:"primary",label:"Unelevated Rounded"}}),n("q-btn",{attrs:{unelevated:"",round:"",color:"primary",icon:"card_giftcard"}}),n("br"),n("q-btn",{attrs:{"no-caps":"",color:"primary",label:"No caps"}}),n("br"),n("q-btn",{staticClass:"glossy",attrs:{color:"teal",label:"Glossy"}}),n("q-btn",{staticClass:"glossy",attrs:{rounded:"",color:"deep-orange",label:"Glossy Rounded"}}),n("q-btn",{staticClass:"glossy",attrs:{round:"",color:"primary",icon:"card_giftcard"}}),n("q-btn",{staticClass:"glossy",attrs:{round:"",color:"secondary",icon:"local_florist"}}),n("q-btn",{staticClass:"glossy",attrs:{round:"",color:"deep-orange",icon:"local_activity"}})],1)},a=[],l=n("2877"),o={},s=Object(l["a"])(o,e,a,!1,null,null,null);r["default"]=s.exports},9881:function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-md"},[n("q-btn",{attrs:{color:"teal"}},[n("q-icon",{attrs:{left:"",size:"3em",name:"map"}}),n("div",[t._v("Label")])],1),n("q-btn",{attrs:{round:""}},[n("q-avatar",{attrs:{size:"42px"}},[n("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar2.jpg"}})])],1),n("q-btn",{attrs:{color:"indigo","no-caps":""}},[t._v("\n    Multiline"),n("br"),t._v("Button\n  ")]),n("q-btn",{attrs:{color:"deep-orange",push:""}},[n("div",{staticClass:"row items-center no-wrap"},[n("q-icon",{attrs:{left:"",name:"map"}}),n("div",{staticClass:"text-center"},[t._v("\n        Custom"),n("br"),t._v("Content\n      ")])],1)])],1)},a=[],l=n("2877"),o={},s=Object(l["a"])(o,e,a,!1,null,null,null);r["default"]=s.exports},"9b50":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{attrs:{color:"primary",disable:"",label:"Disabled"}}),n("q-btn",{attrs:{round:"",color:"primary",disable:"",icon:"card_giftcard"}}),n("q-btn",{attrs:{flat:"",color:"primary",disable:"",label:"Disabled"}}),n("q-btn",{attrs:{flat:"",round:"",color:"primary",disable:"",icon:"card_giftcard"}}),n("q-btn",{attrs:{outline:"",color:"primary",disable:"",label:"Disabled"}}),n("q-btn",{attrs:{outline:"",round:"",color:"primary",disable:"",icon:"card_giftcard"}}),n("q-btn",{attrs:{push:"",color:"primary",disable:"",label:"Disabled"}}),n("q-btn",{attrs:{push:"",round:"",color:"primary",disable:"",icon:"card_giftcard"}}),n("q-btn",{staticClass:"glossy",attrs:{color:"primary",disable:"",label:"Disabled"}}),n("q-btn",{staticClass:"glossy",attrs:{round:"",color:"primary",disable:"",icon:"card_giftcard"}})],1)},a=[],l=n("2877"),o={},s=Object(l["a"])(o,e,a,!1,null,null,null);r["default"]=s.exports},"9bf7":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("form",{staticClass:"q-pa-md",on:{submit:function(r){return r.preventDefault(),t.simulateSubmit(r)}}},[n("q-input",{attrs:{filled:"",color:"teal",hint:"Type then hit Enter key above"},model:{value:t.test,callback:function(r){t.test=r},expression:"test"}}),n("div",{staticClass:"row justify-end"},[n("q-btn",{staticClass:"q-mt-md",attrs:{type:"submit",loading:t.submitting,label:"Save",color:"teal"},scopedSlots:t._u([{key:"loading",fn:function(){return[n("q-spinner-facebook")]},proxy:!0}])})],1)],1)},a=[],l={data(){return{test:"",submitting:!1}},methods:{simulateSubmit(){this.submitting=!0,setTimeout(()=>{this.submitting=!1},3e3)}}},o=l,s=n("2877"),i=Object(s["a"])(o,e,a,!1,null,null,null);r["default"]=i.exports},"9f05":function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{attrs:{to:"/start/pick-quasar-flavour",label:"To Docs index",outline:"",color:"purple"}}),n("q-btn",{attrs:{to:"/start/pick-quasar-flavour",label:"To Docs index in 2s",glossy:"",color:"purple"},on:{click:t.linkClick}}),n("q-btn",{attrs:{type:"a",href:"/start/pick-quasar-flavour",label:"Type 'a'",push:"",color:"purple"}}),n("q-btn",{attrs:{type:"a",href:"/start/pick-quasar-flavour",target:"_blank",label:"Type 'a' - external",color:"purple"}})],1)},a=[],l={methods:{linkClick(t,r){t.navigate=!1,setTimeout(()=>{r()},2e3)}}},o=l,s=n("2877"),i=Object(s["a"])(o,e,a,!1,null,null,null);r["default"]=i.exports},d4b0:function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{staticStyle:{width:"150px"},attrs:{loading:t.loading1,percentage:t.percentage1,color:"primary"},on:{click:function(r){return t.startComputing(1)}},scopedSlots:t._u([{key:"loading",fn:function(){return[n("q-spinner-gears",{staticClass:"on-left"}),t._v("\n      Computing...\n    ")]},proxy:!0}])},[t._v("\n    Compute PI\n    ")]),n("q-btn",{attrs:{loading:t.loading2,percentage:t.percentage2,round:"",color:"secondary",icon:"cloud_upload"},on:{click:function(r){return t.startComputing(2)}}}),n("q-btn",{staticStyle:{width:"100px"},attrs:{loading:t.loading3,percentage:t.percentage3,"dark-percentage":"",unelevated:"",color:"orange","text-color":"grey-9",icon:"cloud_upload"},on:{click:function(r){return t.startComputing(3)}}})],1)},a=[],l={data(){return{loading1:!1,percentage1:0,loading2:!1,percentage2:0,loading3:!1,percentage3:0}},methods:{startComputing(t){this["loading"+t]=!0,this["percentage"+t]=0,this["interval"+t]=setInterval(()=>{this["percentage"+t]+=Math.floor(8*Math.random()+10),this["percentage"+t]>=100&&(clearInterval(this["interval"+t]),this["loading"+t]=!1)},700)}},beforeDestroy(){clearInterval(this.interval1),clearInterval(this.interval2)}},o=l,s=n("2877"),i=Object(s["a"])(o,e,a,!1,null,null,null);r["default"]=i.exports},de6e:function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md"},[n("q-btn",{staticClass:"full-width",attrs:{color:"black",label:"Full-width"}}),n("q-btn",{staticClass:"q-mt-md",attrs:{color:"primary",label:"With Tooltip"}},[n("q-tooltip",{attrs:{"content-class":"bg-accent"}},[t._v("I'm a tooltip")])],1)],1)},a=[],l=n("2877"),o={},s=Object(l["a"])(o,e,a,!1,null,null,null);r["default"]=s.exports},e908:function(t,r,n){"use strict";n.r(r);var e=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{attrs:{color:"white","text-color":"black",label:"Standard"}}),n("q-btn",{attrs:{color:"primary",label:"Primary"}}),n("q-btn",{attrs:{color:"secondary",label:"Secondary"}}),n("q-btn",{attrs:{color:"amber",glossy:"",label:"Amber"}}),n("q-btn",{attrs:{color:"brown-5",label:"Brown 5"}}),n("q-btn",{attrs:{color:"deep-orange",glossy:"",label:"Deep Orange"}}),n("q-btn",{attrs:{color:"purple",label:"Purple"}}),n("q-btn",{attrs:{color:"black",label:"Black"}})],1)},a=[],l=n("2877"),o={},s=Object(l["a"])(o,e,a,!1,null,null,null);r["default"]=s.exports}}]);