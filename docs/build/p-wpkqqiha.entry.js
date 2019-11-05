import{r as e,c as t,h as s,g as i,d as o}from"./p-2972acc2.js";import{C as n}from"./p-f32d949e.js";import"./p-7518ade5.js";import"./p-e2eec4d0.js";import{T as r}from"./p-5d6835ac.js";import{T as a}from"./p-33ddd21d.js";import{m as c,a as l,s as h,b as p,c as u,d,e as f,f as m,g as y,h as v,i as g,j as b,k,l as w,n as T,o as P,p as I}from"./p-aa67fb06.js";import{A as S}from"./p-e66d1723.js";var C=function(e,t,s,i){var o,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,s,r):o(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r};const E=class{constructor(s){e(this,s),this.menuItems=null,this.hamburgerMaxWidth=600,this.showHamburgerMenu=!1,this.showNavBar=!1,this.menuItemClicked=t(this,"menuEvent",7),this.needMenuItemsEvt=t(this,"needMenuItems",7)}checkIfHamburgerIsNeeded(){this.showHamburgerMenu=document.documentElement.clientWidth<this.hamburgerMaxWidth}componentDidLoad(){this.checkIfHamburgerIsNeeded()}handleClick(e){e.preventDefault();let t=e.target.value;for(let s=0;s<this.menuItems.length;s++)this.menuItems[s].active=t===this.menuItems[s];this.menuItemClicked.emit(e.target.value),this.menuItems=[...this.menuItems]}toggleNavBar(){this.showNavBar=!this.showNavBar}componentWillLoad(){this.menuItems||this.needMenuItemsEvt.emit((e,t)=>{e?console.log(e):this.menuItems=t})}renderItem(e){let t=this.itemRenderer?this.itemRenderer:"psk-menu-item-renderer",i=[];if(e.children)for(let s=0;s<e.children.length;s++)i.push(this.renderItem(e.children[s]));return s(t,{onclick:e=>this.handleClick(e),active:!!e.active&&e.active,children:i,hamburger:this.showHamburgerMenu,value:e})}render(){if(!this.menuItems)return;let e=[];for(let s=0;s<this.menuItems.length;s++)e.push(this.renderItem(this.menuItems[s]));let t=this.menuItems.find(e=>e.active);if(this.showHamburgerMenu){e=e.map(e=>s("li",{onClick:this.toggleNavBar.bind(this),class:"nav-item"},e));let i="collapse navbar-collapse "+`${1==this.showNavBar?"show":""}`;return s("nav",{class:"navbar navbar-dark "},s("a",{class:"navbar-brand",href:"#"},t?t.name:"Home"),s("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:this.toggleNavBar.bind(this),"aria-label":"Toggle navigation"},s("span",{class:"navbar-toggler-icon"})),s("div",{class:i},s("ul",{class:"navbar-nav mr-auto"},e)))}return e}static get style(){return":host{width:100%}.navbar{padding:.5rem 1rem .5rem 0}.navbar-brand{padding:5px}"}};C([n(),r({description:"Another web component that can render each menu item.\n     This component is responsible for rendering children (nested menu items).",isMandatory:!1,propertyType:"string"})],E.prototype,"itemRenderer",void 0),C([r({description:"Menu items datasource. It should be an array if MenuItem[]. \n      If it is not provided, it the component will emit an event (needMenuItems) in order to get the menu items.",isMandatory:!1,propertyType:"array of MenuItem items (MenuItem[])",defaultValue:"null"})],E.prototype,"menuItems",void 0),C([r({description:"This property is intended to be added when you want to change the default value of 600px for switching between normal and hamburger menu.",isMandatory:!1,propertyType:"number",defaultValue:"600"})],E.prototype,"hamburgerMaxWidth",void 0),C([a({eventName:"menuEvent",description:"This event will be emited when you click on a menu item and it will create another CustomEvent that will change your route to the page you want to access."})],E.prototype,"menuItemClicked",void 0),C([a({eventName:"needMenuItems",controllerInteraction:!0,description:"If no data is provided for the menuItems property this event will be emited that will render a default menuItem created by us."})],E.prototype,"needMenuItemsEvt",void 0);const O={basePagesUrl:globalConfig.pagesBasePath?globalConfig.pagesBasePath:"https://raw.githubusercontent.com/PrivateSky/pwc-apps/master/pages/",defaultPageProp:{icon:"fa-bars",type:"route",component:"psk-page-loader",exact:!0},profile:{username:"PrivateSky",email:"privatesky@axiologic.net",avatar:"https://privatesky.xyz/assets/icon/privatesky.png"}},M=[{name:"PSK Components",path:"/psk-components",icon:"fa-bars",type:"abstract",children:[{name:"App Menu",path:"/psk-components/app-menu",component:"app-menu-usage",icon:"fa-bars",type:"route",exact:!0},{name:"App Router",component:"app-router-usage",path:"/psk-components/app-router",icon:"fa-bars",type:"route",exact:!0},{name:"Attachments List",component:"attachment-list-usage",path:"/psk-components/attach-list",icon:"fa-bars",type:"route",exact:!0},{name:"Files Chooser",component:"files-chooser-usage",path:"/psk-components/files-chooser",icon:"fa-bars",type:"route",exact:!0},{name:"Modal",component:"modal-usage",path:"/psk-components/modal",icon:"fa-bars",type:"route",exact:!0},{name:"PIN Popup",component:"pin-popup-usage",path:"/psk-components/pin-popup",icon:"fa-bars",type:"route",exact:!0},{name:"UI Loader",component:"ui-loader-usage",path:"/psk-components/ui-loader",icon:"fa-bars",type:"route",exact:!0},{name:"User Profile",path:"/psk-components/user-profile",icon:"fa-bars",type:"route",component:"user-profile-usage",exact:!0},{name:"Feedback List",path:"/psk-components/list-feedback",icon:"fa-bars",type:"route",component:"feedback-list-usage",exact:!0},{name:"Wizard",path:"/psk-components/wizard",icon:"fa-bars",type:"route",component:"wizard-usage",exact:!0}]}],L=[{stepName:"Name your CSB",stepIndex:0,stepComponent:"enter-csb-name"},{stepName:"Select CSB type(s)",stepIndex:1,stepComponent:"select-csb-type"},{stepName:"Save recovery Phrase",stepIndex:2,stepComponent:"save-recovery-phrase"},{stepName:"Finish",stepIndex:3,stepComponent:"finish-page"}],j=O.basePagesUrl+"pages-structure.json";class R{constructor(e){this.element=i(e),this.openFeedbackRequest=null;let t=JSON.parse(JSON.stringify(M));this._fetchPagesStructure(t),this.element.addEventListener("menuEvent",e=>{e.stopImmediatePropagation(),"href"===e.detail.type&&(window.location.href=e.detail.path);let t=new CustomEvent("routeChanged",{bubbles:!0,cancelable:!1,detail:e.detail});this.element.dispatchEvent(t)}),this.element.addEventListener("needMenuItems",e=>{e.stopImmediatePropagation();let t=e.detail;if(t&&"function"==typeof t){let e=setInterval(()=>{this.pagesStructure&&(t(null,this.pagesStructure),s())},100),s=()=>{clearInterval(e)}}else console.error("Callback was not properly provided!")}),this.element.addEventListener("validateUrl",e=>{e.stopImmediatePropagation();let{sourceUrl:t,callback:s}=e.detail;s&&"function"==typeof s?this._parseSourceUrl(t,s):console.error("Callback was not properly provided!")}),this.element.addEventListener("getUserInfo",e=>{let t=e.detail;t&&"function"==typeof t?t(null,O.profile):console.error("Callback was not properly provided!")}),this.element.addEventListener("needWizardConfiguration",e=>{let t=e.detail;t&&"function"==typeof t?t(L):console.error("Callback was not properly provided!")}),this.element.addEventListener("changeStep",e=>{let t=e.detail.callback;t&&"function"==typeof t?this._handleChangeStep(e.detail):console.error("Callback was not properly provided!")}),this.element.addEventListener("openFeedback",e=>{this.openFeedbackRequest=e.detail}),this.element.addEventListener("showFeedback",e=>{this.openFeedbackRequest(e.detail.message,e.detail.name,e.detail.type)}),this.element.addEventListener("sendPin",e=>{let t=e.detail.callback;t&&"function"==typeof t?this._handleSendPin(e.detail):console.error("Callback was not properly provided!")})}_parseSourceUrl(e,t){let s="",i=!1,o=!1,n=JSON.parse(JSON.stringify(this.pagesStructure)),r=e.split("/").map(e=>e.replace(/(\s+|:+|\/+)/g,"").toLowerCase());r.forEach((a,c)=>{if(o)return;if(0===n.length)return t(`${e} is not a valid path in the application!`),void(o=!0);s=`${s}${a}`;let l=n.find(e=>{let t=e.path.replace(/(\s+|:+|\/+|-+)/g,"").toLowerCase(),i=e.name.replace(/(\s+|:+|\/+|-+)/g,"").toLowerCase();return a===i||s===t});return l?c===r.length-1&&"route"===l.type?(t(null,l.path),void(i=!0)):void(n=l.hasOwnProperty("children")?l.children:[]):(t(`${e} is not a valid path in the application!`),void(o=!0))}),i||o||t(`${e} is not a valid path in the application!`)}_handleSendPin({pin:e,callback:t}){!e||e.trim().length<6?t("Invalid PIN length. Minimum is 6!"):(console.log(e),t(null))}__getPropertyValue(e,t){return e.stepProperties&&e.stepProperties.hasOwnProperty(t)?e.stepProperties[t]:null}_handleChangeStep(e){let t=e.stepIndexToDisplay,s=e.callback,i=e.wizardSteps,o=e.activeStep,n=null;if(t<0||t>=i.length)n="Index has no valid value";else if(t<=o.stepIndex)i[o.stepIndex]={...o},o={...i[t]};else switch(o.stepProperties.stepPhase){case"csb-name":{const e=this.__getPropertyValue(o,"csbName");null===e||0===e.trim().length?n="CSB Name is empty":(o.stepCompleted=!0,i[o.stepIndex]={...o},o={...i[t]});break}case"csb-type":{const e=this.__getPropertyValue(o,"csbType");null===e||0===e.trim().length?n="CSB Type is empty":(o.stepCompleted=!0,i[o.stepIndex]={...o},o={...i[t]});break}case"save-recovery-phrase":null===this.__getPropertyValue(o,"saveRecoveryPhrase")?n="Recovery phase property is not sent":(o.stepCompleted=!0,i[o.stepIndex]={...o},o={...i[t]})}s(n,{activeStep:o,wizardSteps:i})}_fetchPagesStructure(e){let t=new XMLHttpRequest;t.open("GET",j),t.onload=()=>{if(200!=t.status)this._prepareNavigationStructure(e);else{let s=JSON.parse(t.responseText);this._fillOptionalProps(s);let i=e.map(e=>e.name);s.forEach((t,o)=>{if(t.parent>-1){let n=i.indexOf(t.parent);n&&(e[n].children||(e[n].children=[]),t.path=e[n].path+t.path,e[n].children.push(t),s.splice(o,1))}}),this._prepareNavigationStructure(s.concat(e))}},t.onerror=()=>{this._prepareNavigationStructure(e)},t.send()}_prepareNavigationStructure(e){this.pagesStructure=JSON.parse(JSON.stringify(e))}_fillOptionalProps(e,t){e.forEach(e=>{if(!e.path){let t=e.name.toLowerCase().toLowerCase().replace(/\s+/g,"-");t=t.replace(/[:\/]/g,""),e.path=t}if(t&&(e.path=t+"/"+e.path),e.children)e.type="abstract",e.icon||(e.icon=O.defaultPageProp.icon);else{for(let t in O.defaultPageProp)e[t]||(e[t]=O.defaultPageProp[t]);if("psk-page-loader"===e.component)if(e.componentProps||(e.componentProps={}),e.pageSrc)e.componentProps.pageUrl=O.basePagesUrl+e.pageSrc;else{let s=e.name.replace(/\s(.)/g,(function(e){return e.toUpperCase()})).replace(/\s/g,""),i=t.replace(/^\//,"");e.componentProps.pageUrl=O.basePagesUrl+i+"/"+s+".html"}}e.children&&this._fillOptionalProps(e.children,e.path)})}}const _=class{constructor(s){e(this,s),this.mobileLayout=!1,this.controller||(this.controller=new R(this)),this.routeChangedEvent=t(this,"routeChanged",7)}checkLayout(){this.mobileLayout=document.documentElement.clientWidth<650}componentWillLoad(){this.checkLayout()}render(){return s("div",{class:`global_container ${this.mobileLayout?"is-mobile":""}`},s("aside",null,s("psk-user-profile",null),s("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:650}," "),!1===this.mobileLayout?s("div",{class:"nav-footer"},"version 0.1"):null),s("section",null,s("psk-app-router",{failRedirectTo:"/home",historyType:"hash"}," "),!0===this.mobileLayout?s("div",{class:"nav-footer bottom-stick"},"version 0.1"):null))}static get style(){return"div.global_container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;height:100%;background-color:#f8f9fc}div.global_container.is-mobile{width:100%;-ms-flex-direction:column;flex-direction:column}.is-mobile aside{width:100%;height:auto;overflow:inherit}aside{height:100%;background-color:#4e73df;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(10%,#4e73df),to(#224abe));background-image:linear-gradient(180deg,#4e73df 10%,#224abe);color:#fff;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-ms-flex-order:1;order:1;-ms-flex:1;flex:1;min-width:320px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:auto;scrollbar-color:#4e73df #e5e5e5;scrollbar-width:thin}.nav-footer{text-align:center;width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#142b86;font-size:85%}.nav-footer.bottom-stick{color:#fff;background:#224abe}section{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden auto;scrollbar-color:#4e73df #e5e5e5;scrollbar-width:thin}app-menu,psk-app-router{-ms-flex-positive:1;flex-grow:1}psk-user-profile{-ms-flex-direction:column;flex-direction:column}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}section{-ms-flex-order:2;order:2;-ms-flex:8;flex:8}aside::-webkit-scrollbar,section::-webkit-scrollbar{background-color:#fff;width:8px}aside::-webkit-scrollbar-track,section::-webkit-scrollbar-track{background-color:#e5e5e5}aside::-webkit-scrollbar-thumb,section::-webkit-scrollbar-thumb{background-color:#4e73df;border-radius:8px;border:2px solid #fff}aside::-webkit-scrollbar-button{display:none}"}};var x=function(e,t,s,i){var o,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,s,r):o(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r};const N=class{constructor(s){e(this,s),this.menuItems=[],this.failRedirectTo="",this.needMenuItemsEvt=t(this,"needMenuItems",7)}componentDidLoad(){this.needMenuItemsEvt.emit((e,t)=>{e?console.log(e):this.menuItems=t})}renderItems(e){return e.map(e=>e.children?this.renderItems(e.children):s("stencil-route",{url:e.path,exact:e.exact,component:e.component,componentProps:e.componentProps}))}render(){let e=this.renderItems(this.menuItems);return 0===e.length?s("psk-ui-loader",{shouldBeRendered:!0}):s("div",{class:"app_container"},s("stencil-router",{historyType:this.historyType},s("stencil-route-switch",{scrollTopOffset:0},e,s("stencil-route",{component:"psk-page-not-found",componentProps:{urlDestination:this.menuItems[0].path}}))))}};x([r({description:"This parameter holds the datasource for the creation of the application routes. If this property is not provided, the component will emit an event (needMenuItems) in order to fetch this information.",specialNote:"The same configuration file is used in generating the App Menu component",isMandatory:!1,propertyType:"Array of MenuItem types(MenuItem[])"})],N.prototype,"menuItems",void 0),x([r({description:"This is the history type that will be passed along to the stencil-router",isMandatory:!1,propertyType:"string",defaultValue:"browser"})],N.prototype,"historyType",void 0),x([a({eventName:"needMenuItems",description:"This event gets the data as parameter and it is emitted immediately after the component is loaded in order to create the application routes "})],N.prototype,"needMenuItemsEvt",void 0);const U=class{constructor(t){e(this,t),this.shouldBeRendered=!1}render(){if(this.shouldBeRendered)return s("div",{class:"loader-container"},s("div",{class:"sk-fading-circle"},s("div",{class:"sk-circle1 sk-circle"}),s("div",{class:"sk-circle2 sk-circle"}),s("div",{class:"sk-circle3 sk-circle"}),s("div",{class:"sk-circle4 sk-circle"}),s("div",{class:"sk-circle5 sk-circle"}),s("div",{class:"sk-circle6 sk-circle"}),s("div",{class:"sk-circle7 sk-circle"}),s("div",{class:"sk-circle8 sk-circle"}),s("div",{class:"sk-circle9 sk-circle"}),s("div",{class:"sk-circle10 sk-circle"}),s("div",{class:"sk-circle11 sk-circle"}),s("div",{class:"sk-circle12 sk-circle"})))}static get watchers(){return{shouldBeRendered:["render"]}}static get style(){return".sk-fading-circle{margin:auto;width:40px;height:60px;position:relative}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#3944ff;border-radius:100%;-webkit-animation:sk-circleFadeDelay 1.2s ease-in-out infinite both;animation:sk-circleFadeDelay 1.2s ease-in-out infinite both}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}\@-webkit-keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}\@keyframes sk-circleFadeDelay{0%,39%,to{opacity:0}40%{opacity:1}}.loader-container{background:rgba(173,174,255,.6);height:100%;display:-ms-flexbox;display:flex}"}};!function(e,t,s,i){var o,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,s,r):o(t,s))||r);n>3&&r&&Object.defineProperty(t,s,r)}([r({description:"This is the property that gives the state of the loader, if it is displayed or not. The posible values are true or false.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],U.prototype,"shouldBeRendered",void 0);var A=function(e,t,s,i){var o,n=arguments.length,r=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,s,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(n<3?o(r):n>3?o(t,s,r):o(t,s))||r);return n>3&&r&&Object.defineProperty(t,s,r),r};const H=class{constructor(s){e(this,s),this.userInfo=null,this.getUserInfoEvent=t(this,"getUserInfo",7)}componentWillLoad(){this.userInfo||this.getUserInfoEvent.emit((e,t)=>{e?console.error("Error getting user info",e):this.userInfo=t})}render(){return s(this.profileRenderer?this.profileRenderer:"psk-user-profile-renderer",{userInfo:this.userInfo})}};A([r({description:"should receive an object with the following properties if the default renderer is wanted: username, avatar, email.",isMandatory:!1,propertyType:"any",defaultValue:"null"})],H.prototype,"userInfo",void 0),A([r({description:"This property allows the component to display a custom User Profile in case the default one is not preferred. ",isMandatory:!1,propertyType:"any"})],H.prototype,"profileRenderer",void 0),A([a({eventName:"getUserInfo",description:"This event is emitted only if the userInfo property is null in order to get the desired data."})],H.prototype,"getUserInfoEvent",void 0);const B=class{constructor(t){e(this,t),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(e){const t=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(e&&!t)return this.previousMatch=this.match,this.match=c(e.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let e={};this.history&&this.history.location.hash?e={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(e={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(e):this.match&&!l(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(e)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const e=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},e,{component:this.component})):this.component?s(this.component,Object.assign({},e)):void 0}get el(){return i(this)}static get watchers(){return{location:["computeMatch"]}}static get style(){return"stencil-route.inactive{display:none}"}};S.injectProps(B,["location","history","historyType","routeViewsUpdated"]);const D=e=>"STENCIL-ROUTE"===e.tagName,J=class{constructor(t){e(this,t),this.group=(()=>((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"))(),this.subscribers=[],this.queue=o(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(e){if(null==e)return;let t=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(D).map((s,i)=>{const o=((e,t,s)=>c(e,{path:t,exact:s,strict:!0}))(e.pathname,s.url,s.exact);return o&&-1===t&&(t=i),{el:s,match:o}}),-1===t)return;if(this.activeIndex===t)return void(this.subscribers[t].el.match=this.subscribers[t].match);this.activeIndex=t;const s=this.subscribers[this.activeIndex];this.scrollTopOffset&&(s.el.scrollTopOffset=this.scrollTopOffset),s.el.group=this.group,s.el.match=s.match,s.el.componentUpdated=e=>{this.queue.write(()=>{this.subscribers.forEach((e,t)=>{if(e.el.componentUpdated=void 0,t===this.activeIndex)return e.el.style.display="";this.scrollTopOffset&&(e.el.scrollTopOffset=this.scrollTopOffset),e.el.group=this.group,e.el.match=null,e.el.style.display="none"})}),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},e))}}render(){return s("slot",null)}get el(){return i(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};S.injectProps(J,["location","routeViewsUpdated"]);const V=(e,...t)=>{e||console.warn(...t)},W=()=>{let e,t=[];return{setPrompt:t=>(V(null==e,"A history supports only one prompt at a time"),e=t,()=>{e===t&&(e=null)}),confirmTransitionTo:(t,s,i,o)=>{if(null!=e){const n="function"==typeof e?e(t,s):e;"string"==typeof n?"function"==typeof i?i(n,o):(V(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),o(!0)):o(!1!==n)}else o(!0)},appendListener:e=>{let s=!0;const i=(...t)=>{s&&e(...t)};return t.push(i),()=>{s=!1,t=t.filter(e=>e!==i)}},notifyListeners:(...e)=>{t.forEach(t=>t(...e))}}},Y=(e,t="scrollPositions")=>{let s=new Map;const i=(t,i)=>{if(s.set(t,i),h(e,"sessionStorage")){const t=[];s.forEach((e,s)=>{t.push([s,e])}),e.sessionStorage.setItem("scrollPositions",JSON.stringify(t))}};if(h(e,"sessionStorage")){const i=e.sessionStorage.getItem(t);s=i?new Map(JSON.parse(i)):s}return"scrollRestoration"in e.history&&(history.scrollRestoration="manual"),{set:i,get:e=>s.get(e),has:e=>s.has(e),capture:t=>{i(t,[e.scrollX,e.scrollY])}}},F={hashbang:{encodePath:e=>"!"===e.charAt(0)?e:"!/"+P(e),decodePath:e=>"!"===e.charAt(0)?e.substr(1):e},noslash:{encodePath:P,decodePath:f},slash:{encodePath:f,decodePath:f}},$=(e,t)=>{const s=0==e.pathname.indexOf(t)?"/"+e.pathname.slice(t.length):e.pathname;return Object.assign({},e,{pathname:s})},z={browser:(e,t={})=>{let s=!1;const i=e.history,o=e.location,n=e.navigator,r=p(e),a=!u(n),c=Y(e),l=null!=t.forceRefresh&&t.forceRefresh,h=null!=t.getUserConfirmation?t.getUserConfirmation:k,T=null!=t.keyLength?t.keyLength:6,P=t.basename?d(f(t.basename)):"",I=()=>{try{return e.history.state||{}}catch(t){return{}}},S=e=>{e=e||{};const{key:t,state:s}=e,{pathname:i,search:n,hash:r}=o;let a=i+n+r;return V(!P||v(a,P),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+P+'".'),P&&(a=g(a,P)),m(a,s,t||y(T))},C=W(),E=e=>{c.capture(B.location.key),Object.assign(B,e),B.location.scrollPosition=c.get(B.location.key),B.length=i.length,C.notifyListeners(B.location,B.action)},O=e=>{w(n,e)||L(S(e.state))},M=()=>{L(S(I()))},L=e=>{if(s)s=!1,E();else{const t="POP";C.confirmTransitionTo(e,t,h,s=>{s?E({action:t,location:e}):j(e)})}},j=e=>{let t=_.indexOf(B.location.key),i=_.indexOf(e.key);-1===t&&(t=0),-1===i&&(i=0);const o=t-i;o&&(s=!0,A(o))},R=S(I());let _=[R.key],x=0,N=!1;const U=e=>P+b(e),A=e=>{i.go(e)},H=t=>{1===(x+=t)?(e.addEventListener("popstate",O),a&&e.addEventListener("hashchange",M)):0===x&&(e.removeEventListener("popstate",O),a&&e.removeEventListener("hashchange",M))},B={length:i.length,action:"POP",location:R,createHref:U,push:(e,t)=>{V(!("object"==typeof e&&void 0!==e.state&&void 0!==t),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const s=m(e,t,y(T),B.location);C.confirmTransitionTo(s,"PUSH",h,e=>{if(!e)return;const t=U(s),{key:n,state:a}=s;if(r)if(i.pushState({key:n,state:a},"",t),l)o.href=t;else{const e=_.indexOf(B.location.key),t=_.slice(0,-1===e?0:e+1);t.push(s.key),_=t,E({action:"PUSH",location:s})}else V(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),o.href=t})},replace:(e,t)=>{V(!("object"==typeof e&&void 0!==e.state&&void 0!==t),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const s=m(e,t,y(T),B.location);C.confirmTransitionTo(s,"REPLACE",h,e=>{if(!e)return;const t=U(s),{key:n,state:a}=s;if(r)if(i.replaceState({key:n,state:a},"",t),l)o.replace(t);else{const e=_.indexOf(B.location.key);-1!==e&&(_[e]=s.key),E({action:"REPLACE",location:s})}else V(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),o.replace(t)})},go:A,goBack:()=>A(-1),goForward:()=>A(1),block:(e="")=>{const t=C.setPrompt(e);return N||(H(1),N=!0),()=>(N&&(N=!1,H(-1)),t())},listen:e=>{const t=C.appendListener(e);return H(1),()=>{H(-1),t()}},win:e};return B},hash:(e,t={})=>{let s=!1,i=null,o=0,n=!1;const r=e.location,a=e.history,c=T(e.navigator),l=null!=t.keyLength?t.keyLength:6,{getUserConfirmation:h=k,hashType:p="slash"}=t,u=t.basename?d(f(t.basename)):"",{encodePath:w,decodePath:P}=F[p],S=()=>{const e=r.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)},C=e=>{const t=r.href.indexOf("#");r.replace(r.href.slice(0,t>=0?t:0)+"#"+e)},E=()=>{let e=P(S());return V(!u||v(e,u),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+e+'" to begin with "'+u+'".'),u&&(e=g(e,u)),m(e,void 0,y(l))},O=W(),M=e=>{Object.assign(B,e),B.length=a.length,O.notifyListeners(B.location,B.action)},L=()=>{const e=S(),t=w(e);if(e!==t)C(t);else{const e=E(),t=B.location;if(!s&&I(t,e))return;if(i===b(e))return;i=null,j(e)}},j=e=>{if(s)s=!1,M();else{const t="POP";O.confirmTransitionTo(e,t,h,s=>{s?M({action:t,location:e}):R(e)})}},R=e=>{let t=U.lastIndexOf(b(B.location)),i=U.lastIndexOf(b(e));-1===t&&(t=0),-1===i&&(i=0);const o=t-i;o&&(s=!0,A(o))},_=S(),x=w(_);_!==x&&C(x);const N=E();let U=[b(N)];const A=e=>{V(c,"Hash history go(n) causes a full page reload in this browser"),a.go(e)},H=(e,t)=>{1===(o+=t)?e.addEventListener("hashchange",L):0===o&&e.removeEventListener("hashchange",L)},B={length:a.length,action:"POP",location:N,createHref:e=>"#"+w(u+b(e)),push:(e,t)=>{V(void 0===t,"Hash history cannot push state; it is ignored");const s=m(e,void 0,y(l),B.location);O.confirmTransitionTo(s,"PUSH",h,e=>{if(!e)return;const t=b(s),o=w(u+t);if(S()!==o){i=t,(e=>r.hash=e)(o);const e=U.lastIndexOf(b(B.location)),n=U.slice(0,-1===e?0:e+1);n.push(t),U=n,M({action:"PUSH",location:s})}else V(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),M()})},replace:(e,t)=>{V(void 0===t,"Hash history cannot replace state; it is ignored");const s=m(e,void 0,y(l),B.location);O.confirmTransitionTo(s,"REPLACE",h,e=>{if(!e)return;const t=b(s),o=w(u+t);S()!==o&&(i=t,C(o));const n=U.indexOf(b(B.location));-1!==n&&(U[n]=t),M({action:"REPLACE",location:s})})},go:A,goBack:()=>A(-1),goForward:()=>A(1),block:(t="")=>{const s=O.setPrompt(t);return n||(H(e,1),n=!0),()=>(n&&(n=!1,H(e,-1)),s())},listen:t=>{const s=O.appendListener(t);return H(e,1),()=>{H(e,-1),s()}},win:e};return B}},X=class{constructor(t){e(this,t),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(e={})=>{if(this.history&&e.scrollToId&&"browser"===this.historyType){const t=this.history.win.document.getElementById(e.scrollToId);if(t)return t.scrollIntoView()}this.scrollTo(e.scrollTopOffset||this.scrollTopOffset)},this.isServer=o(this,"isServer"),this.queue=o(this,"queue")}componentWillLoad(){this.history=z[this.historyType](this.el.ownerDocument.defaultView),this.history.listen(e=>{e=$(e,this.root),this.location=e}),this.location=$(this.history.location,this.root)}scrollTo(e){const t=this.history;if(null!=e&&!this.isServer&&t)return"POP"===t.action&&Array.isArray(t.location.scrollPosition)?this.queue.write(()=>{t&&t.location&&Array.isArray(t.location.scrollPosition)&&t.win.scrollTo(t.location.scrollPosition[0],t.location.scrollPosition[1])}):this.queue.write(()=>{t.win.scrollTo(0,e)})}render(){if(this.location&&this.history)return s(S.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},s("slot",null))}get el(){return i(this)}};export{E as app_menu,_ as app_root,N as psk_app_router,U as psk_ui_loader,H as psk_user_profile,B as stencil_route,J as stencil_route_switch,X as stencil_router};