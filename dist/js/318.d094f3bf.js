"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[318],{8317:(t,e,o)=>{o.r(e),o.d(e,{default:()=>x});var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticStyle:{"background-color":"black"}},[o("v-row",{staticClass:"text-center"},[o("v-col",{staticClass:"mb-4"},[o("h2",{staticStyle:{color:"white"}},[t._v(" Have a question? ")]),o("h2",{staticClass:"subheading font-weight-regular",staticStyle:{color:"white"}},[t._v(" Contact us! "),o("br")]),o("form",{staticStyle:{"background-color":"#3760D6",margin:"auto",width:"400px"}},[o("p",{staticStyle:{color:"white"}},[t._v("Name: ")]),o("input",{staticStyle:{"box-shadow":"1px 1px 2px 2px",color:"black"},attrs:{type:"text",size:"20",placeholder:" John Doe"}}),o("br"),o("br"),o("p",{staticStyle:{color:"white"}},[t._v("Email: ")]),o("input",{staticStyle:{"box-shadow":"1px 1px 2px 2px",color:"black"},attrs:{type:"email",size:"20",placeholder:" john@example.com"}}),o("br"),t._v(" "),o("br"),o("p",{staticStyle:{color:"white"}},[t._v("Question: ")]),o("v-textarea",{staticClass:"my-textarea",staticStyle:{width:"250px",margin:"auto"},attrs:{name:"input-7-1",height:"10","background-color":"white",color:"black",outlined:""}}),o("v-btn",{attrs:{color:"info"}},[t._v("Submit")]),o("p",[t._v("   ")])],1)])],1)],1)},a=[],n=o(3736),i=o(3453),s=o.n(i),c=o(3150),l=o(2102),u=o(247),h=o(2877),p=o(5978),f=o(3325);function w(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function b(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?w(Object(o),!0).forEach((function(e){d(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function d(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var g=(0,f.Z)(p.Z);const v=g.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return b({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},p.Z.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var o;t?e.calculateInputHeight():null==(o=e.$refs.input)||o.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,o=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(o,e)+"px"}},genInput:function(){var t=p.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){p.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}});var y={},m=(0,n.Z)(y,r,a,!1,null,null,null);const x=m.exports;s()(m,{VBtn:c.Z,VCol:l.Z,VContainer:u.Z,VRow:h.Z,VTextarea:v})}}]);
//# sourceMappingURL=318.d094f3bf.js.map