import{r as t,h as e}from"./p-2972acc2.js";import"./p-c662d4c5.js";import"./p-e2eec4d0.js";import{T as o}from"./p-14f25f93.js";const s=class{constructor(e){t(this,e),this.errorLoadingPage=!1}componentWillLoad(){let t=new XMLHttpRequest;t.open("GET",this.pageUrl),t.onload=()=>{200!=t.status?this.errorLoadingPage=!0:this.pageContent=t.responseText},t.onerror=()=>{this.errorLoadingPage=!0},t.send()}render(){return this.errorLoadingPage?e("h4",null,`Page ${this.pageUrl} could not be loaded!`):e("div",{class:"page_content",innerHTML:this.pageContent})}};!function(t,e,o,s){var r,i=arguments.length,p=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,e,o,s);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(p=(i<3?r(p):i>3?r(e,o,p):r(e,o))||p);i>3&&p&&Object.defineProperty(e,o,p)}([o({description:"This property is the url for the page that needs to be loaded",isMandatory:!0,propertyType:"string"})],s.prototype,"pageUrl",void 0);export{s as psk_page_loader};