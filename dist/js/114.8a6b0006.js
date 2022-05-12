"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[114],{3733:(e,t,n)=>{n.d(t,{Z:()=>C});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-lg":"","fill-width":"",fluid:""}},[n("v-row",{staticClass:"pt-3 mx-16",attrs:{justify:"center",align:"start"}},[n("v-col",{attrs:{cols:"10"}},[n("v-autocomplete",{attrs:{items:e.ingredient_options,label:"Ingredients",multiple:"",chips:"","small-chips":"",clearable:"","deletable-chips":"",dense:"",outlined:"","menu-props":{offsetY:!0}},model:{value:e.curIngredient,callback:function(t){e.curIngredient=t},expression:"curIngredient"}})],1),n("v-col",{attrs:{cols:"2"}},[e.searchButton?n("v-btn",{attrs:{color:"secondary",dark:"",block:""},on:{click:e.onSearch}},[e._v("Search")]):n("v-btn",{attrs:{color:"secondary",dark:"",block:""},on:{click:e.onAdd}},[e._v("Add Ingredients")])],1)],1)],1)},s=[];const r={props:{ingredient_options:Array,searchButton:{type:Boolean,default:!0}},data:function(){return{option_searches:[{name:"Liquor",options:["Whiskey","Gin","Vodka","Rum"]},{name:"Mixer",options:["Orange Juice","Cranberry Juice","Simple Syrup","Vermouth"]},{name:"Bitters",options:["Angostura","Orange","Peychauds","Cinnamon"]},{name:"Garnish",options:["Orange","Lime","Cherry","Olive"]}],curIngredient:[]}},created:function(){this.curIngredient=this.curSearch},methods:{onSearch:function(){this.$emit("ingredientSearch",this.curIngredient)},onAdd:function(){this.$emit("ingredientAdd",this.curIngredient)}}},a=r;var l=n(3736),o=n(3453),c=n.n(o),h=n(9811),u=n(5978),d=n(6290),p=n(4589);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=m(m({},h.l),{},{offsetY:!0,offsetOverflow:!0,transition:!1});const g=h.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:h.Z.options.props.menuProps.type,default:function(){return v}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},h.Z.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=(0,p.qF)(t,e.itemText),i=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=h.Z.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},v),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=h.Z.options.computed.listData.call(this);return e.props=m(m({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var i=t[this.$refs.menu.listIndex];i?this.setMenuIndex(e.findIndex((function(e){return e===i}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===p.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===p.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==p.Do.backspace&&e!==p.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var i=this.selectedItems.length,s=e!==i-1?e:e-1,r=this.selectedItems[s];r?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=s}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,h.Z.options.methods.clearableCallback.call(this)},genInput:function(){var e=u.Z.options.methods.genInput.call(this);return e.data=(0,d.ZP)(e.data,{attrs:{"aria-activedescendant":(0,p.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,p.vO)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=h.Z.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?h.Z.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[p.Do.home,p.Do.end].includes(t)||h.Z.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){h.Z.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){h.Z.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){h.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var i=this.selectedItems[this.selectedIndex],s=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",s),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",s),e.preventDefault()}}}});var S=n(3150),y=n(2102),x=n(247),b=n(2877),D=(0,l.Z)(a,i,s,!1,null,null,null);const C=D.exports;c()(D,{VAutocomplete:g,VBtn:S.Z,VCol:y.Z,VContainer:x.Z,VRow:b.Z})},7318:(e,t,n)=>{n.d(t,{Z:()=>I});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-lg":"","fill-width":"",fluid:""}},[n("v-row",{staticClass:"pt-3 mx-16",attrs:{justify:"center",align:"start"}},[n("v-col",{attrs:{cols:"10"}},[n("v-text-field",{attrs:{label:"Drink Name",dark:"",outlined:"",dense:"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-btn",{attrs:{color:"secondary",dark:"",block:""},on:{click:e.onSearch}},[e._v("Search")])],1)],1)],1)},s=[];const r={props:{curSearch:String},data:function(){return{search:""}},created:function(){this.search=this.curSearch},methods:{onSearch:function(){this.$emit("nameSearch",this.search)}}},a=r;var l=n(3736),o=n(3453),c=n.n(o),h=n(3150),u=n(2102),d=n(247),p=n(2877),f=n(5978),m=(0,l.Z)(a,i,s,!1,null,null,null);const I=m.exports;c()(m,{VBtn:h.Z,VCol:u.Z,VContainer:d.Z,VRow:p.Z,VTextField:f.Z})}}]);
//# sourceMappingURL=114.8a6b0006.js.map