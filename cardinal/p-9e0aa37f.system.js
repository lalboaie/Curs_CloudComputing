System.register(["./p-51da6f80.system.js","./p-2157456f.system.js"],(function(e){"use strict";var t,r;return{setters:[function(e){t=e.g},function(e){r=e.c}],execute:function(){e("B",u);function a(e){var t=this;Object.keys(e).forEach((function(r){t[r]=e[r]}))}function n(e,t){try{var r=this;if(r.rootModel){var a=e;if(r.parentChain){a=r.parentChain+"."+e}r.rootModel.setChainValue(a,t);return true}return false}catch(n){console.error(n)}return false}function i(e,r){if(e||!r){return}var a=this;var n=t(a);var i,u,l;if(n.getAttribute("data-view-model")!==null&&n.tagName.toLowerCase()==="psk-for-each"){i=n.getAttribute("data-view-model");l=i;a.__assignProperties.call(a,{rootModel:r,parentChain:l});a["render"].call(a);return}i=n.getAttribute("view-model");l=i;if(i===null){u=n.getAttribute("name");if(u===null&&n.getAttribute("label")!==null){u=n.getAttribute("label").replace(/( |:|\/|\.|-)/g,"").toLowerCase()}l=u}if(!i&&!u){return}function o(e,t){a[e]=r.getChainValue(t);r.onChange(t,(function(){a[e]=r.getChainValue(t)}))}function s(){var e=l+".value";var t=r.getChainValue(l);if(!t||r.getChainValue(e)){return}o("value",e)}a.__assignProperties.call(a,{rootModel:r,parentChain:l});if(i){var c=r.getChainValue(l);if(!c){return}Object.keys(c).forEach((function(e){var t=l+"."+e;o(e,t)}));s();return}for(var f=0;f<n.attributes.length;++f){var v=n.attributes[f];if(v.value.startsWith("@")){var g=v.value.split("@")[1];var h=l?l+"."+g:g;o(g,h)}}s()}function u(){return function(e){var u=e.componentWillLoad,l=e.render;e.componentWillLoad=function(){var e=this;var o=t(e);e["render"]=l;e["changeModel"]=n;e["__assignProperties"]=a;r("getModelEvent",{bubbles:true,composed:true,cancellable:true,detail:{callback:i.bind(e)}},true,o);return u&&u.call(e)}}}}}}));