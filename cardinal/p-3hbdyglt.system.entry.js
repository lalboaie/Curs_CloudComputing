System.register(["./p-51da6f80.system.js","./p-2157456f.system.js","./p-77f35bd6.system.js","./p-9e0aa37f.system.js"],(function(e){"use strict";var t,o,n,r,i;return{setters:[function(e){t=e.r;o=e.g},function(e){n=e.T},function(e){r=e.C},function(e){i=e.B}],execute:function(){var a=undefined&&undefined.__decorate||function(e,t,o,n){var r=arguments.length,i=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)if(a=e[l])i=(r<3?a(i):r>3?a(t,o,i):a(t,o))||i;return r>3&&i&&Object.defineProperty(t,o,i),i};var l=e("psk_for_each",function(){function e(e){t(this,e);this.dataViewModel=null}e.prototype.render=function(){this.__renderFormTemplateContent.call(this)};e.prototype.__renderFormTemplateContent=function(){var e=this.__getTemplateContent.call(this);if(e===null){console.error("[psk-for-each] Template content for the component is not defined");return null}if(!this["parentChain"]||!this["rootModel"]||e.content.querySelectorAll("[view-model]").length===0){return null}var t=this["parentChain"];var o=this["rootModel"];var n=o.getChainValue(t);if(n.length===0){console.error("[psk-for-each] Template model defined as -="+t+"=- is not present in the rootModel");return null}this.__host.attachShadow({mode:"open"});for(var r=0;r<n.length;++r){var i=t+"."+r+".";this.__appendTemplateItem.call(this,i,e.content.cloneNode(true))}e.remove()};e.prototype.__getTemplateContent=function(){var e=this.__host.querySelector("template");return e?e:null};e.prototype.__appendTemplateItem=function(e,t){var o=this;var n=t.querySelectorAll("[view-model]");n.forEach((function(t){var o=""+e+t.getAttribute("view-model");t.setAttribute("view-model",o)}));Array.from(t.childNodes).forEach((function(e){o.__host.shadowRoot.appendChild(e)}))};Object.defineProperty(e.prototype,"__host",{get:function(){return o(this)},enumerable:true,configurable:true});return e}());a([r(),i()],l.prototype,"__host",void 0);a([n({description:["This property is the name of the model which will be used to generate the form. The model should be a JavaScript array.",'All the information about how to write a model, hot to use the two-way binding and how to use the model with this component cand be found in the documentation found at: <psk-link page="forms/using-forms">Using forms</psk-link>'],isMandatory:false,propertyType:"string",specialNote:["If this property is not provided, nothing written inside the component's template will be displayed."]})],l.prototype,"dataViewModel",void 0)}}}));