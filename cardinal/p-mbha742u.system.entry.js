System.register(["./p-226ad382.system.js","./p-57436eba.system.js","./p-5ca8f7bd.system.js","./p-7db317d0.system.js"],function(t){"use strict";var e,r,i,n,a,s,o;return{setters:[function(t){e=t.r;r=t.g;i=t.h},function(t){n=t.k;a=t.s},function(t){s=t.T},function(t){o=t.C}],execute:function(){var c=undefined&&undefined.__decorate||function(t,e,r,i){var n=arguments.length,a=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)if(s=t[o])a=(n<3?s(a):n>3?s(e,r,a):s(e,r))||a;return n>3&&a&&Object.defineProperty(e,r,a),a};var p=t("psk_toc",function(){function t(t){e(this,t);this.activeChapter=null;this.chapterList=[];this.initialChapterSetupDone=false}t.prototype.connectedCallback=function(){this.pskPageElement=n(r(this),"psk-page")};t.prototype.tocReceived=function(t){if(t.detail){var e=t.detail,r=e.chapters,i=e.active;this.chapterList=this._sortChapters(r);this.activeChapter=i}};t.prototype._sortCurrentChapter=function(t,e){if(t.children.length===0){return t}var r=[];var i=function(i){var s=t.children.find(function(t){return t.guid===e[i]});if(s){e.splice(i--,1);r.push(n._sortCurrentChapter(s,e))}a=i};var n=this,a;for(var s=0;s<e.length;++s){i(s);s=a}return Object.assign({},t,{children:r})};t.prototype._sortChapters=function(t){var e=this.pskPageElement.querySelectorAll("psk-chapter");var r=[];e.forEach(function(t){if(!(t.hasAttribute("data-define-props")||t.hasAttribute("data-define-controller")||t.hasAttribute("data-define-events"))&&t.hasAttribute("guid")){r.push(t.getAttribute("guid"))}});var i=[];var n=function(e){var n=t.find(function(t){return t.guid===r[e]});if(n){r.splice(e--,1);i.push(a._sortCurrentChapter(n,r))}s=e};var a=this,s;for(var o=0;o<r.length;++o){n(o);o=s}return i};t.prototype._renderChapters=function(t,e,r){var n=this;return e.map(function(e,s){var o=r===undefined?s+1+".":""+r+(s+1)+".";return i("li",{class:e.guid===n.activeChapter&&"active",onClick:function(r){r.stopImmediatePropagation();r.preventDefault();a(e.title,t);n.activeChapter=e.guid}},o+" "+e.title,e.children.length===0?null:i("ul",null,n._renderChapters(t,e.children,o)))})};t.prototype.render=function(){if(!this.initialChapterSetupDone&&this.chapterList.length>0){this.activeChapter=this.chapterList[0].guid;this.initialChapterSetupDone=true}return i("div",{class:"table-of-content"},i("psk-card",{title:this.title},i("ul",null,this._renderChapters(this.pskPageElement,this.chapterList))))};return t}());c([o(),s({description:"This property is the title of the psk-card that will be created.",isMandatory:false,propertyType:"string"})],p.prototype,"title",void 0)}}});