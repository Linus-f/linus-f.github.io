(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931,201,787,421,15,252,441,686,466,143,42,46,513],{595:function(t,e,r){Promise.resolve().then(r.bind(r,1317))},9150:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Img}});var n=r(2987),o=r(8661),s=r(7317);function Img(t){let[e,r]=(0,s.useState)(!0);return(0,n.jsx)(o.default,{...t,className:e?"filter blur-sm":"animate-unblur",onLoadingComplete:()=>r(!1)})}},1317:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return MDXImage}});var n=r(2987),o=r(7317),s=r(1738);let a=[16,32,48,64,96,128,256,384],c=[640,750,828,1080,1200,1920,2048,3840];var u=r(9150);function MDXImage(t){let{setOpen:e,addSlide:r,slides:i}=(0,o.useContext)(s.p),[l,f]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{if(l){var e,n,o,s=!1;i.forEach(e=>{s=s||e.src==t.src}),s||r({src:t.src,alt:t.alt,title:t.alt,srcSet:(e=t.src,n=t.width,o=t.height,a.concat(...c).filter(t=>t<=n).map(t=>({src:function(t,e){let r=t.lastIndexOf("/"),n=t.lastIndexOf("."),o=t.substring(0,r),s=t.substring(r+1,n);return"".concat(o,"/nextImageExportOptimizer/").concat(s,"-opt-").concat(e,".WEBP")}(e,t),width:t,height:Math.round(t/n*o)})))})}},[i]),(0,o.useEffect)(()=>f(!0),[]),(0,n.jsx)(u.default,{src:t.src,alt:t.alt,width:t.width,height:t.height,id:t.src,onClick:()=>e(t.src),className:"object-contain h-auto max-w-full transition duration-300 drop-shadow-xl hover:drop-shadow-2xl hover:scale-105 cursor-pointer",placeholder:"blur"})}},1738:function(t,e,r){"use strict";r.d(e,{p:function(){return o}});var n=r(7317);let o=(0,n.createContext)({open:!1,setOpen:t=>{},slides:[],addSlide:t=>{},setSlides:t=>{}})},8245:function(t,e,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7317),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function q(t,e,r){var n,s={},i=null,l=null;for(n in void 0!==r&&(i=""+r),void 0!==e.key&&(i=""+e.key),void 0!==e.ref&&(l=e.ref),e)a.call(e,n)&&!u.hasOwnProperty(n)&&(s[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps)void 0===s[n]&&(s[n]=e[n]);return{$$typeof:o,type:t,key:i,ref:l,props:s,_owner:c.current}}e.Fragment=s,e.jsx=q,e.jsxs=q},2987:function(t,e,r){"use strict";t.exports=r(8245)}},function(t){t.O(0,[661,195,338,744],function(){return t(t.s=595)}),_N_E=t.O()}]);