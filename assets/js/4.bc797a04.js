(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7],{140:function(t,i,e){},143:function(t,i,e){"use strict";var n=e(140);e.n(n).a},144:function(t,i,e){},149:function(t,i,e){"use strict";var n=e(144);e.n(n).a},160:function(t,i,e){"use strict";e.r(i);var n=e(148),o=e(69),a={props:["config"],name:"ColorPicker",data:function(){return{main:"#2B8AC6",highlight:"#FFFFFF"}},components:{picker:n.Chrome,PodloveWebPlayer:o.default},methods:{onReady:function(t){this.store=t,this.updateColors()},updateColors:function(){var t=this.main.hex8,i=this.highlight.hex8;this.store.dispatch({type:"SET_THEME",payload:{main:t,highlight:i}})}},watch:{main:function(){this.updateColors()},highlight:function(){this.updateColors()}}},s=(e(149),e(0)),l=Object(s.a)(a,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[e("podlove-web-player",{attrs:{config:t.config},on:{ready:t.onReady}}),t._v(" "),e("ClientOnly",[e("div",{staticClass:"row"},[e("div",{staticClass:"column"},[e("h4",[t._v("Main")]),t._v(" "),e("picker",{model:{value:t.main,callback:function(i){t.main=i},expression:"main"}})],1),t._v(" "),e("div",{staticClass:"column"},[e("h4",[t._v("Highlight")]),t._v(" "),e("picker",{model:{value:t.highlight,callback:function(i){t.highlight=i},expression:"highlight"}})],1)])])],1)},[],!1,null,"288df8ad",null);l.options.__file="ColorPicker.vue";i.default=l.exports},69:function(t,i,e){"use strict";e.r(i);var n={name:"PodloveWebPlayer",props:["config","mode","id"],mounted:function(){var t=this;window.podlovePlayer(this.$el,this.config).then(function(i){return t.$emit("ready",i),i}).then(window.registerExternalEvents(this.id))}},o=(e(143),e(0)),a=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"player",attrs:{id:this.id}})},[],!1,null,"fd3824a4",null);a.options.__file="PodloveWebPlayer.vue";i.default=a.exports}}]);