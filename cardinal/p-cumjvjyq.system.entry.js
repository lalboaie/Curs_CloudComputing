System.register(["./p-226ad382.system.js","./p-7db317d0.system.js","./p-3545cce0.system.js"],function(e){"use strict";var t,n,r,i,s,l,o;return{setters:[function(e){t=e.r;n=e.h;r=e.g},function(e){i=e.C},function(e){s=e.L;l=e.P;o=e.T}],execute:function(){var u=undefined&&undefined.__decorate||function(e,t,n,r){var i=arguments.length,s=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)if(l=e[o])s=(i<3?l(s):i>3?l(t,n,s):l(t,n))||s;return i>3&&s&&Object.defineProperty(t,n,s),s};var f=e("psk_list",function(){function e(e){t(this,e);this.listContent=null}e.prototype.render=function(){if(this.listType===s){return n("ol",null,this.listContent)}return n("ul",null,this.listContent)};e.prototype.componentWillLoad=function(){var e=this;var t="";if(this["getInnerContent"]){t=this["getInnerContent"]("innerHTML")}var n=t.split(/\n/g).map(function(e){return e.trim()}).filter(function(e){return e.length>0&&e!=="\x3c!----\x3e"});if(n.length===0){return}var r=[];var i=false,s=null,o=0,u="";n.forEach(function(t){var n=l.inlineTag.exec(t);if(n!==null){if(i){u+=t}else{r.push(e._stringToHTMLElement("li",t))}}else{var f=l.startTag.exec(t);if(f!==null){i=true;u+=t;if(s===f[0]){o++}else if(!s){s=f[0]}}else{var c=l.endTag.exec(t);if(c!==null){u+=t;if(s===c[0].replace(/\//g,"")){if(o===0){r.push(e._stringToHTMLElement("li",u));s=null;u="";i=false}else{o--}}}else{if(i){u+=t}else{r.push(e._stringToHTMLElement("li",t))}}}}});this.element.innerHTML="";this.listContent=r.slice()};e.prototype._stringToHTMLElement=function(e,t){var r=e;return n(r,{innerHTML:t})};Object.defineProperty(e.prototype,"element",{get:function(){return r(this)},enumerable:true,configurable:true});return e}());u([i(),o({description:['This property gives the type of the list. It has two type of values, "ordered" or "unordered"','If this property is missing, "unordered is assumed"'],isMandatory:false,propertyType:"string",defaultValue:"unordered"})],f.prototype,"listType",void 0)}}});