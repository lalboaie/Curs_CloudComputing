System.register(["./p-51da6f80.system.js","./p-2157456f.system.js","./p-77f35bd6.system.js","./p-9e0aa37f.system.js"],(function(e){"use strict";var t,i,o,s,n,a;return{setters:[function(e){t=e.r;i=e.h},function(e){o=e.n;s=e.T},function(e){n=e.C},function(e){a=e.B}],execute:function(){var l=undefined&&undefined.__decorate||function(e,t,i,o){var s=arguments.length,n=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)if(a=e[l])n=(s<3?a(n):s>3?a(t,i,n):a(t,i))||n;return s>3&&n&&Object.defineProperty(t,i,n),n};var p=e("psk_select",function(){function e(e){t(this,e);this.options=null;this.selectOptions=null;this.label=null;this.value=null;this.selectionType="single";this.placeholder=null;this.required=false;this.disabled=false;this.invalidValue=null}e.prototype.componentWillLoad=function(){if(this.selectionType!=="single"&&this.selectionType!=="multiple"){this.selectionType="single"}};e.prototype.render=function(){this.selectOptions&&this.__createOptions.call(this);var e=this.label&&this.label.replace(/( |:|\/|\.|-)/g,"").toLowerCase();return i("div",{class:"form-group"},i("psk-label",{for:e,label:this.label}),i("select",{name:e,id:e,class:"form-control",disabled:this.disabled,required:this.required,multiple:this.selectionType==="multiple",onChange:this.__onChangeHandler.bind(this)},this.placeholder&&i("option",{disabled:true,label:this.placeholder,value:"",selected:true}),this.options&&this.options.map((function(e){var t=e.value?e.value:e.label&&e.label.replace(/( |:|\/|\.|-)/g,"").toLowerCase();return i("option",{value:t,label:e.label,disabled:e.disabled})}))))};e.prototype.__onChangeHandler=function(e){e.preventDefault();e.stopImmediatePropagation();var t=e.target.value;if(this["changeModel"]){this["changeModel"].call(this,"value",t)}else{console.warn("[psk-select] Function named -=changeModel=- is not defined!")}};e.prototype.__createOptions=function(){var e=this.selectOptions.split("|");this.options=e.map((function(e){var t=e.trim().split(",");var i,s=t[0].trim();if(t.length===1){i=o(s,/( |:|\/|\.)/g,"-",(function(e){return e.toLowerCase()}))}else{i=t[1].trim()}return{label:s,value:i}}))};return e}());l([n(),a()],p.prototype,"options",void 0);l([s({description:["This property is providing the list of the options available for selection.",'Each option is sepparated by the special character "|" (pipe) (e.g. option 1 | option 2 | option 3).',"For each option, as a recommendation, you should add a value sepparated by comma.",'Example of options with values: "Romania, ROM | Italy, ITA | Germany, DE"','If no value is provided for an option, the component will create one. It will take the option and will normalize it to lower case and the special characters will be changed to dash ("-").'],isMandatory:false,propertyType:"string"})],p.prototype,"selectOptions",void 0);l([s({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:false,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],p.prototype,"label",void 0);l([s({description:["Specifies the value of a psk-select component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:false,propertyType:"string"})],p.prototype,"value",void 0);l([s({description:["Specifies the type of the psk-select component.",'There are two possible values, "single" and "multiple". If no value is provided, "single" is assumed.'],isMandatory:false,propertyType:"string",defaultValue:"single"})],p.prototype,"selectionType",void 0);l([s({description:["Specifies a short hint that describes the expected value of an psk-date-input component"],isMandatory:false,propertyType:"string"})],p.prototype,"placeholder",void 0);l([s({description:["Specifies that at least one option must be selected before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],p.prototype,"required",void 0);l([s({description:["\tSpecifies that the component is disabled. Most of the times is used within conditional formatting of components.",'Accepted values: "true" and "false"'],isMandatory:false,propertyType:"boolean",defaultValue:"false"})],p.prototype,"disabled",void 0);l([s({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:false,propertyType:"boolean"})],p.prototype,"invalidValue",void 0)}}}));