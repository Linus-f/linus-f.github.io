(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15,201,787,421,252,441,686,143,466],{3852:function(t,e,n){Promise.resolve().then(n.bind(n,7264))},4254:function(t,e,n){"use strict";n.d(e,{default:function(){return a}});var r=n(2984),c=n(9402),s=n(4986);function a(t){let[e,n]=(0,s.useState)(!0);return(0,r.jsx)(c.default,{...t,className:"".concat(t.className," ").concat(e?"filter blur-sm":"animate-unblur"),onLoad:()=>n(!1)})}},7264:function(t,e,n){"use strict";n.d(e,{default:function(){return o}});var r=n(2984),c=n(4986),s=n(971);let a=[16,32,48,64,96,128,256,384],u=[640,750,828,1080,1200,1920,2048,3840];var i=n(4254);function o(t){let{setOpen:e,addSlide:n,slides:o}=(0,c.useContext)(s.p),[l,f]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{if(l){var e,r,c,s=!1;o.forEach(e=>{s=s||e.src==t.src}),s||n({src:t.src,alt:t.alt,title:t.alt,srcSet:(e=t.src,r=t.width,c=t.height,a.concat(...u).filter(t=>t<=r).map(t=>({src:function(t,e){let n=t.lastIndexOf("/"),r=t.lastIndexOf("."),c=t.substring(0,n),s=t.substring(n+1,r);return"".concat(c,"/nextImageExportOptimizer/").concat(s,"-opt-").concat(e,".WEBP")}(e,t),width:t,height:Math.round(t/r*c)})))})}},[o]),(0,c.useEffect)(()=>f(!0),[]),(0,r.jsx)(i.default,{src:t.src,alt:t.alt,width:t.width,height:t.height,id:t.src,onClick:()=>e(t.src),className:"object-contain h-auto max-w-full transition duration-300 drop-shadow-xl hover:drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] cursor-pointer",placeholder:"blur"})}},971:function(t,e,n){"use strict";n.d(e,{p:function(){return r}});let r=(0,n(4986).createContext)({open:!1,setOpen:t=>{},slides:[],addSlide:t=>{},setSlides:t=>{}})}},function(t){t.O(0,[402,645,563,744],function(){return t(t.s=3852)}),_N_E=t.O()}]);