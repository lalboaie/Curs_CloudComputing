System.register(["./p-226ad382.system.js","./p-e811389c.system.js"],function(e){"use strict";var t,r,o,n;return{setters:[function(e){t=e.r;r=e.h;o=e.g},function(e){n=e.C}],execute:function(){var a=e("psk_app_loader",function(){function e(e){t(this,e);this.appIsAvailable=false;this.htmlLoader=a.__createLoader();document.getElementsByTagName("body")[0].appendChild(this.htmlLoader)}e.__createLoader=function(){var e=12;var t="";for(var r=1;r<=e;r++){t+='<div class="sk-circle'+r+' sk-circle"></div>'}var o=document.createElement("div");o.className="app-loader";o.innerHTML="<div class='sk-fading-circle'>"+t+"</div>";return o};e.prototype.componentWillLoad=function(){var e=this;return new Promise(function(t,r){if(e.controllerName){n.getController(e.controllerName).then(function(r){e.controller=new r(e.host);e.controller.checkApp().then(function(r){if(r){console.log(r);e.appIsAvailable=true}t()})}).catch(function(e){r(e)})}else{r("A controller is mandatory!")}})};e.prototype.componentDidLoad=function(){document.getElementsByTagName("body")[0].removeChild(this.htmlLoader)};e.prototype.render=function(){return r("stencil-router",null,r("stencil-route-switch",{scrollTopOffset:0},this.appIsAvailable?r("stencil-route",{url:"/",component:"psk-page-loader",exact:true,componentProps:{pageUrl:"/pages/app.html"}}):[r("stencil-route",{url:"/",component:"psk-page-loader",exact:true,componentProps:{pageUrl:"/pages/wizard/new.html"}}),r("stencil-route",{url:"/init",component:"psk-page-loader",exact:true,componentProps:{pageUrl:"/pages/wizard/init.html"}}),r("stencil-route",{url:"/restore",component:"psk-page-loader",exact:true,componentProps:{pageUrl:"/pages/wizard/restore.html"}})]))};Object.defineProperty(e.prototype,"host",{get:function(){return o(this)},enumerable:true,configurable:true});return e}())}}});