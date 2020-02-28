import{r as e,h as t,g as s}from"./p-bd5842d7.js";import{C as r}from"./p-92afb37f.js";import{L as i,P as l,T as n}from"./p-cf37cfa5.js";const o=class{constructor(t){e(this,t),this.listContent=null}render(){return t(this.listType===i?"ol":"ul",null,this.listContent)}componentWillLoad(){let e="";this.getInnerContent&&(e=this.getInnerContent("innerHTML"));const t=e.split(/\n/g).map(e=>e.trim()).filter(e=>e.length>0&&"\x3c!----\x3e"!==e);if(0===t.length)return;const s=[];let r=!1,i=null,n=0,o="";t.forEach(e=>{if(null!==l.inlineTag.exec(e))r?o+=e:s.push(this._stringToHTMLElement("li",e));else{let t=l.startTag.exec(e);if(null!==t)r=!0,o+=e,i===t[0]?n++:i||(i=t[0]);else{let t=l.endTag.exec(e);null!==t?(o+=e,i===t[0].replace(/\//g,"")&&(0===n?(s.push(this._stringToHTMLElement("li",o)),i=null,o="",r=!1):n--)):r?o+=e:s.push(this._stringToHTMLElement("li",e))}}}),this.element.innerHTML="",this.listContent=[...s]}_stringToHTMLElement(e,s){return t(e,{innerHTML:s})}get element(){return s(this)}};!function(e,t,s,r){var i,l=arguments.length,n=l<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,r);else for(var o=e.length-1;o>=0;o--)(i=e[o])&&(n=(l<3?i(n):l>3?i(t,s,n):i(t,s))||n);l>3&&n&&Object.defineProperty(t,s,n)}([r(),n({description:['This property gives the type of the list. It has two type of values, "ordered" or "unordered"','If this property is missing, "unordered is assumed"'],isMandatory:!1,propertyType:"string",defaultValue:"unordered"})],o.prototype,"listType",void 0);export{o as psk_list};