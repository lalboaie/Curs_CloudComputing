import{r as e,g as t,h as s}from"./p-2eb42df6.js";import"./p-acb9d1e1.js";import"./p-7111d76e.js";import{T as i}from"./p-f3fbe684.js";import{C as o}from"./p-6a61ad0f.js";import{B as r}from"./p-64525f46.js";var a=function(e,t,s,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(r<3?o(a):r>3?o(t,s,a):o(t,s))||a);return r>3&&a&&Object.defineProperty(t,s,a),a};const n=class{constructor(s){e(this,s),this._handleMouseClick=e=>{e.preventDefault(),e.stopImmediatePropagation();let s=e.target;t(this).contains(s)&&(this.opened=!this.opened)},this.opened=!1,this.classes=""}render(){return this.label||this.icon?s("div",{class:`button-group-wrapper ${this.classes}`},s("div",{class:"trigger",onClick:this._handleMouseClick},this.icon&&s("psk-icon",{icon:this.icon,color:this.iconColor}),this.label&&this.label),s("div",{class:"list-group"},s("slot",null))):null}handleClickOutside(e){let s=e.target,i=t(this),o=e.composedPath().indexOf(i)>-1;i.contains(s)||o||(this.opened=!1)}};a([r(),o()],n.prototype,"render",null),a([i({description:["This property shows the state of the button group, if it is expanded or collapsed."],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],n.prototype,"opened",void 0),a([i({description:["This is the label that will be displayed for the button. If it is not set, the button group will not be displayed."],isMandatory:!0,propertyType:"string"})],n.prototype,"label",void 0),a([i({isMandatory:!1,propertyType:"string",description:["This property gives the color of the icon."],defaultValue:"null"})],n.prototype,"icon",void 0),a([i({isMandatory:!0,propertyType:"string",description:["This property is mandatory and it is the icon defined in font-awesome Cascading Style Sheet .","We choose to use these icons because they are popular and quite expressive and very easy to use.(Example: user, eye, share, download"]})],n.prototype,"iconColor",void 0),a([i({isMandatory:!1,propertyType:"string",description:["By defining this property, you can assign more css classes according to your design needs.","These classes will be attached to the existing class, <code>button-group-wrapper</code>. Below in the examples section, this attribute is better illustrated."]})],n.prototype,"classes",void 0);export{n as psk_button_group};