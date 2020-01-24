System.register(["./p-51da6f80.system.js","./p-2157456f.system.js","./p-77f35bd6.system.js","./p-9e0aa37f.system.js"],(function(e){"use strict";var t,i,n,a,o;return{setters:[function(e){t=e.r;i=e.h},function(e){n=e.T},function(e){a=e.C},function(e){o=e.B}],execute:function(){var l=undefined&&undefined.__decorate||function(e,t,i,n){var a=arguments.length,o=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)if(l=e[s])o=(a<3?l(o):a>3?l(t,i,o):l(t,i))||o;return a>3&&o&&Object.defineProperty(t,i,o),o};var s=e("psk_email_input",function(){function e(e){var i=this;t(this,e);this.__inputHandler=function(e){e.stopImmediatePropagation();var t=e.target.value;if(i["changeModel"]){i["changeModel"].call(i,"value",t)}else{console.warn("[psk-email-input] Function named -=changeModel=- is not defined!")}};this.label=null;this.value=null;this.name=null;this.placeholder=null;this.required=false;this.readOnly=false;this.invalidValue=null}e.prototype.render=function(){return i("psk-input",{type:"email",label:this.label,name:this.name,value:this.value,placeholder:this.placeholder,required:this.required,readOnly:this.readOnly,invalidValue:this.invalidValue,specificProps:{onKeyUp:this.__inputHandler.bind(this),onChange:this.__inputHandler.bind(this)}})};return e}());l([a(),o()],s.prototype,"render",null);l([n({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:false,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],s.prototype,"label",void 0);l([n({description:["Specifies the value of an psk-email-input component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:false,propertyType:"string"})],s.prototype,"value",void 0);l([n({description:["Specifies the name of a psk-email-input component. It is used along with the psk-label component."],isMandatory:false,propertyType:"string"})],s.prototype,"name",void 0);l([n({description:["Specifies a short hint that describes the expected value of an psk-email-input component"],isMandatory:false,propertyType:"string"})],s.prototype,"placeholder",void 0);l([n({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],s.prototype,"required",void 0);l([n({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],s.prototype,"readOnly",void 0);l([n({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:false,propertyType:"boolean"})],s.prototype,"invalidValue",void 0)}}}));