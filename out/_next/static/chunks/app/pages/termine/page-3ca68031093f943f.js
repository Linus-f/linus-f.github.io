(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[601],{5778:function(t,e,n){Promise.resolve().then(n.bind(n,7762)),Promise.resolve().then(n.bind(n,1317))},7762:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Calendar}});var r=n(2987),a=n(4920),s=n(7177),i=n(7262),l=n(3686),o=n(7420);let c=[{events:[{title:"Kornettausbildung",start:"2023-03-24",end:"2023-03-26"},{title:"Palmen bauen",start:"2023-04-01"},{title:"Palmsonntag",start:"2023-04-02"},{title:"H\xfctteneinsatz",start:"2023-04-29"},{title:"Stafette X-trem",start:"2023-06-17",end:"2023-06-18"},{title:"Sommerlager",start:"2023-08-05",end:"2023-08-19"},{title:"\xdcbergabe",start:"2023-10-18"},{title:"H\xfctteneinsatz",start:"2023-10-21"},{title:"Schl\xf6ssle in Flammen",start:"2023-11-18"},{title:"Adventsnachmittag",start:"2023-12-03"}]}];function Calendar(){return(0,r.jsx)("div",{className:"not-prose text-sm break-all m-6",children:(0,r.jsx)(a.Z,{height:670,aspectRatio:1,plugins:[i.Z,l.Z,o.Z],initialView:"dayGridMonth",locales:[s.Z],weekNumbers:!0,headerToolbar:{left:"",center:"title",right:""},footerToolbar:{left:"prev,next",center:"",right:"dayGridMonth,timeGridWeek,listYear"},buttonText:{today:"Heute",month:"Monat",week:"Woche",day:"Tag",list:"Liste"},eventSources:c,eventContent:t=>(0,r.jsx)("div",{className:"event-title",children:t.event.title})})})}},9150:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Img}});var r=n(2987),a=n(8661),s=n(7317);function Img(t){let[e,n]=(0,s.useState)(!0);return(0,r.jsx)(a.default,{...t,className:e?"filter blur-sm":"animate-unblur",onLoadingComplete:()=>n(!1)})}},1317:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return MDXImage}});var r=n(2987),a=n(7317),s=n(1738);let i=[16,32,48,64,96,128,256,384],l=[640,750,828,1080,1200,1920,2048,3840];var o=n(9150);function MDXImage(t){let{setOpen:e,addSlide:n,slides:c}=(0,a.useContext)(s.p),[u,d]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(u){var e,r,a,s=!1;c.forEach(e=>{s=s||e.src==t.src}),s||n({src:t.src,alt:t.alt,title:t.alt,srcSet:(e=t.src,r=t.width,a=t.height,i.concat(...l).filter(t=>t<=r).map(t=>({src:function(t,e){let n=t.lastIndexOf("/"),r=t.lastIndexOf("."),a=t.substring(0,n),s=t.substring(n+1,r);return"".concat(a,"/nextImageExportOptimizer/").concat(s,"-opt-").concat(e,".WEBP")}(e,t),width:t,height:Math.round(t/r*a)})))})}},[c]),(0,a.useEffect)(()=>d(!0),[]),(0,r.jsx)(o.default,{src:t.src,alt:t.alt,width:t.width,height:t.height,id:t.src,onClick:()=>e(t.src),className:"object-contain h-auto max-w-full transition duration-300 drop-shadow-xl hover:drop-shadow-2xl hover:scale-105 cursor-pointer",placeholder:"blur"})}},1738:function(t,e,n){"use strict";n.d(e,{p:function(){return a}});var r=n(7317);let a=(0,r.createContext)({open:!1,setOpen:t=>{},slides:[],addSlide:t=>{},setSlides:t=>{}})}},function(t){t.O(0,[297,661,423,195,338,744],function(){return t(t.s=5778)}),_N_E=t.O()}]);