import{r as o,h as s}from"./p-9835b40a.js";const t=class{constructor(s){o(this,s)}componentDidLoad(){navigator.serviceWorker.register(this.swPath,{scope:"/"+this.appName+"/"}).then((function(o){console.log("registration with scope: ",o.scope)}),(function(o){console.log("ServiceWorker registration failed: ",o)}))}render(){return s("iframe",{width:"100%",height:"600px",src:this.iframeSrc})}};export{t as psk_ss_app};