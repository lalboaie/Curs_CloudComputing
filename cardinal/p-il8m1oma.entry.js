import{r as t,h as e}from"./p-bd5842d7.js";import"./p-da2b6023.js";import"./p-134c536d.js";import{T as i}from"./p-2d85cc7e.js";import{C as r}from"./p-92afb37f.js";var s=function(t,e,i,r){var s,o=arguments.length,a=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var p=t.length-1;p>=0;p--)(s=t[p])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a};const o=class{constructor(e){t(this,e)}render(){return e("div",{class:"image_container"},e("div",{class:"image_wrapper"},e("img",{src:this.src,class:"img-fluid",alt:this.title})),this.title?e("div",{class:"image_description"},this.title):null)}};s([r(),i({description:'This property is the path to the image source (Example:"page/PrivateSky/EDFS.png").',isMandatory:!0,propertyType:"string"})],o.prototype,"src",void 0),s([i({description:"This property is the title of the image(the alt attribute) and the description of the image.",isMandatory:!1,propertyType:"string",specialNote:"If no title is given,there will not be assumed one and there will be no image description/alt."})],o.prototype,"title",void 0);export{o as psk_img};