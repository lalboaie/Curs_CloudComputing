import{r as e,g as t}from"./p-bd5842d7.js";import{e as o,T as n}from"./p-1ab92fc4.js";import{C as s}from"./p-92afb37f.js";import{B as i}from"./p-4baef281.js";var r=function(e,t,o,n){var s,i=arguments.length,r=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(i<3?s(r):i>3?s(t,o,r):s(t,o))||r);return i>3&&r&&Object.defineProperty(t,o,r),r};const l=class{constructor(t){e(this,t),this.dataViewModel=null}render(){this.__renderFormTemplateContent.call(this)}__renderFormTemplateContent(){const e=this.__getTemplateContent.call(this);if(null===e)return console.error("[psk-for-each] Template content for the component is not defined"),null;if(!this.parentChain||!this.rootModel)return null;if("done"===e.getAttribute("done"))return e.removeAttribute("done"),null;let t=this.parentChain,n=this.rootModel.getChainValue(t);if(0===n.length)return console.error(`[psk-for-each] Template model defined as -=${t}=- is not present in the rootModel`),null;let s=this.__host.parentElement;s.shadowRoot?null!==s.shadowRoot.querySelector("slot")&&(s=s.shadowRoot.querySelector("slot").parentElement):null!==s.querySelector("slot")&&(s=s.querySelector("slot").parentElement),!s.shadowRoot&&o(s.tagName)&&s.attachShadow({mode:"open"});for(let o=0;o<n.length;++o)this.__appendTemplateItem.call(this,`${t}.${o}.`,e.content.cloneNode(!0),s);e.setAttribute("done","done")}__getTemplateContent(){return this.__host.querySelector("template")||null}__processNode(e,t){let o=Array.from(e.attributes).filter(e=>e.name.startsWith("view-model-"));o.forEach(o=>{const n=o.name.split("view-model-")[1];e.setAttribute(n,this.rootModel.getChainValue(t?`${t}${o.value}`:o.value))}),(o=Array.from(e.attributes).filter(e=>e.value.startsWith("@"))).forEach(o=>{const n=o.value.split("@")[1];e.setAttribute(o.name,this.rootModel.getChainValue(t?`${t}${n}`:n))}),Array.from(e.children).forEach(e=>{this.__processNode.call(this,e,t)})}__appendTemplateItem(e,t,o){let n=t.querySelectorAll("[view-model]");Array.from(t.children).forEach(t=>{this.__processNode.call(this,t,e)}),n.forEach(t=>{const o=`${e}${t.getAttribute("view-model")}`;t.setAttribute("view-model",o),t.setAttribute("get-model","get-model")}),Array.from(t.childNodes).forEach(e=>{o.shadowRoot?o.shadowRoot.append(e):o.append(e)})}get __host(){return t(this)}};r([s(),i()],l.prototype,"__host",void 0),r([n({description:["This property is the name of the model which will be used to generate the form. The model should be a JavaScript array.",'All the information about how to write a model, hot to use the two-way binding and how to use the model with this component cand be found in the documentation found at: <psk-link page="forms/using-forms">Using forms</psk-link>'],isMandatory:!1,propertyType:"string",specialNote:["If this property is not provided, nothing written inside the component's template will be displayed."]})],l.prototype,"dataViewModel",void 0);export{l as psk_for_each};