import{r as t,h as e}from"./p-9835b40a.js";import{T as s}from"./p-539bc613.js";import"./p-3ebe5698.js";const i=class{constructor(e){t(this,e),this.title=""}render(){const t=e("div",{class:"psk-description"},e("slot",null));return""===this.title.replace(/\s/g,"")?e("psk-card",null,t):e("psk-chapter",{title:this.title},t)}};!function(t,e,s,i){var r,p=arguments.length,o=p<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(o=(p<3?r(o):p>3?r(e,s,o):r(e,s))||o);p>3&&o&&Object.defineProperty(e,s,o)}([s({description:"This property is the title of the new psk-card/psk-chapter that will be created.",isMandatory:!1,propertyType:"string",specialNote:"All the empty spaces in the title will be deleted."})],i.prototype,"title",void 0);export{i as psk_description};