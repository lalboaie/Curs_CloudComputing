var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,s=arguments.length;t<s;t++)e+=arguments[t].length;for(var i=Array(e),n=0,t=0;t<s;t++)for(var o=arguments[t],r=0,a=o.length;r<a;r++,n++)i[n]=o[r];return i};System.register(["./p-24276ee4.system.js"],(function(e){"use strict";var t,s,i;return{setters:[function(e){t=e.r;s=e.c;i=e.h}],execute:function(){var n=e("psk_list_feedbacks",function(){function e(e){t(this,e);this.alertOpened=false;this._messagesQueue=[];this._messagesContent=[];this.timer=0;this.opened=false;this.messagesToDisplay=3;this.second=1e3;this.minute=60*this.second;this.hour=60*this.minute;this.openFeedbackHandler=s(this,"openFeedback",7);this.showFeedbackHandler=s(this,"showFeedback",7)}e.prototype.closeFeedbackHandler=function(e){if(this.alertOpened){this.alertOpened=false}var t=this._messagesContent.indexOf(e.detail);if(t>-1){this._messagesContent.splice(t,1);this._messagesContent=this._messagesContent.slice();if(this._messagesQueue.length>0){this._messagesContent=__spreadArrays(this._messagesContent,[this._messagesQueue.shift()])}}};e.prototype.componentWillLoad=function(){var e=this;this.openFeedbackHandler.emit((function(t){e.alertOpened=true;console.log(t);if(t instanceof Array){t.forEach((function(t){e.addToMessageArray.bind(e)(t)}))}else{e.addToMessageArray.bind(e)(t)}}))};e.prototype.timerToShow=function(e){var t=this;if(this._messagesContent.length>0){var s=(new Date).getTime();var i=e.timer;if(Math.floor((s-i)/this.second)<60){this.timeMeasure="seconds";this.timer=Math.floor((s-i)/this.second);setTimeout((function(){t.timerToShow.bind(t)(e)}),500)}else if(Math.floor((s-i)/this.minute)<60){this.timer=Math.floor((s-i)/this.minute);this.timeMeasure="minutes";setTimeout((function(){t.timerToShow.bind(t)(e)}),4e4)}else{this.timer=Math.floor((s-i)/this.hour);this.timeMeasure="hours";setTimeout((function(){t.timerToShow.bind(t)(e)}),3e6)}}else{return}};e.prototype.addToMessageArray=function(e){var t=new Date;var s={content:e,timer:t.getTime()};if(this._messagesContent.length+1<=this.messagesToDisplay){this._messagesContent=__spreadArrays(this._messagesContent,[s])}else{this._messagesQueue=__spreadArrays(this._messagesQueue,[s])}};e.prototype.showOneAlert=function(){this.opened=true;this.showFeedbackHandler.emit("Example!")};e.prototype.showThreeAlerts=function(){this.opened=true;this.showFeedbackHandler.emit(["SPIDERMAN!","BEST!","AVENGER!"])};e.prototype.render=function(){var e=this;var t=[];this._messagesContent.forEach((function(s){e.timerToShow.bind(e)(s);console.log(s);t.push(i("psk-ui-feedback",{opened:e.opened,message:s,"type-of-alert":"toast",timeSinceCreation:e.timer,timeMeasure:e.timeMeasure}))}));return i("div",null,i("button",{onClick:this.showOneAlert.bind(this)},"Show One Alert!"),i("button",{onClick:this.showThreeAlerts.bind(this)},"Show Three Alerts!"),t?t:null)};return e}())}}}));