var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,n=0,r=arguments.length;n<r;n++)e+=arguments[n].length;for(var t=Array(e),a=0,n=0;n<r;n++)for(var i=arguments[n],o=0,s=i.length;o<s;o++,a++)t[a]=i[o];return t};System.register(["./p-51da6f80.system.js"],(function(e){"use strict";var n;return{setters:[function(e){n=e.g}],execute:function(){e({T:D,a:w,c:b,f:g,n:k,s:m});var r="definedProperties";var t=e("d","definedEvents");var a=e("e","definedControllers");var i="data-define-props";var o=e("D","data-define-events");var s=e("b","data-define-controller");var c=e("j","Copy to clipboard");var l=e("i","Copied!");var d=e("L","ordered");var f=e("P",{startTag:/<([a-z]+|-*)>/,endTag:/<\/([a-z]+|-*)>/,inlineTag:/.*<([a-z]+|-*)>.*<\/([a-z]+|-*)>.*/});var u=e("A",{view:{value:"eye",color:"rgba(108, 192, 145, 1)"},edit:{value:"edit",color:"#007bff"},cancel:{value:"close",color:"#dc3545"},bid:{value:"gavel"},calendar:{value:"calendar-check-o"}});var v=e("G",["link","psk-for-each"]);var p=e("g",["xs","s","m","l","xl"]);var h=e("h",{xs:"d-none d-sm-block",sm:"d-sm-none d-md-block",md:"d-md-none d-lg-block",lg:"d-lg-none d-xl-block",xl:"d-xl-none"});function m(e,n){var r=e.replace(/( |:|\/|\.)/g,"-").toLowerCase();var t=n.querySelector("#"+r);if(!t){return}t.scrollIntoView({behavior:"smooth"});var a=window.location.href;var i="?";if(a.indexOf("chapter=")!==-1){a=window.location.href.split("chapter=")[0];if(a.length>0){i=a[a.length-1];a=a.substring(0,a.length-1)}}else{i=a.indexOf("?")>0?"&":"?"}var o=i+"chapter=";window.history.pushState({},"",""+a+o+r)}function b(e,n,r,t){if(r===void 0){r=false}if(t===void 0){t=null}var a=new CustomEvent(e,n);if(r){if(t){t.dispatchEvent(a)}else{document.dispatchEvent(a)}}}function g(e,n,r){var t=null;while(e){if(e.matches(n)){t=e;break}else if(r&&e.matches(r)){break}e=e.parentElement}return t}function y(e){return e.split("").map((function(e){if(e===e.toLowerCase()){return e}return"-"+e.toLowerCase()})).join("")}function k(e,n,r,t){if(t===void 0){t=null}var a=e.replace(n,r);if(t){return t(a)}return a}function w(e){if(e.startsWith("psk-")){return true}var n=["article","aside","blockquote","body","div","footer","h1","h2","h3","h4","h5","h6","header","main","nav","p","section","span"].find((function(n){return n===e}));return n===e}function D(e){return function(t,a){var o=t.connectedCallback,s=t.render,c=t.componentWillLoad,l=t.componentDidLoad;t.componentWillLoad=function(){var e=this;var r=n(e);if(!r.hasAttribute(i)){return c&&c.call(e)}};t.componentDidLoad=function(){var e=this;var r=n(e);if(!r.hasAttribute(i)){return l&&l.call(e)}};t.connectedCallback=function(){var t=this;var s=n(t);var c=y(String(a));if(s.hasAttribute(i)){if(!t.componentDefinitions){t.componentDefinitions={definedProperties:[Object.assign(Object.assign({},e),{propertyName:c})]};return o&&o.call(t)}var l=t.componentDefinitions;var d=Object.assign(Object.assign({},e),{propertyName:c});if(l&&l.hasOwnProperty(r)){var f=__spreadArrays(l[r]);f.push(d);l[r]=__spreadArrays(f)}else{l[r]=[d]}t.componentDefinitions=Object.assign({},l)}return o&&o.call(t)};t.render=function(){var e=this;if(!e.componentDefinitions||!(e.componentDefinitions&&e.componentDefinitions[r])){return s&&s.call(e)}var n=e.componentDefinitions[r];if(n){n=n.reverse()}b("psk-send-props",{composed:true,bubbles:true,cancelable:true,detail:n},true)}}}}}}));