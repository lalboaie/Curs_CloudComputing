System.register(["./p-24276ee4.system.js"],(function(e){"use strict";var t,n,i;return{setters:[function(e){t=e.r;n=e.g;i=e.h}],execute:function(){var s=e("dropdown_renderer",function(){function e(e){t(this,e);this.isOpened=false;this.dropDownHasChildActive=false;this.somethingChanged=false}e.prototype.handleClick=function(e){var t=e.target;if(!n(this).contains(t)){this.isOpened=false}};e.prototype.routeChanged=function(){this.dropDownHasChildActive=window.location.href.includes(this.url)};e.prototype.toggleDropdown=function(e){var t=e.target;var n=false;while(t.parentElement){t=t.parentElement;if(t.classList.contains("children")){n=true;break}}if(!n){e.stopImmediatePropagation()}this.isOpened=!this.isOpened};e.prototype.render=function(){var e=this;this.routeChanged();return i("div",{class:"dropdown "+(this.dropDownHasChildActive?"active":"")+" "+(this.isOpened?"isOpened":""),onClick:function(t){return e.toggleDropdown(t)}},i("slot",null))};return e}())}}}));