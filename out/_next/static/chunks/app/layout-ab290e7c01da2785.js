(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9220:function(e,l,r){Promise.resolve().then(r.t.bind(r,2675,23)),Promise.resolve().then(r.bind(r,7354)),Promise.resolve().then(r.bind(r,9871)),Promise.resolve().then(r.t.bind(r,904,23)),Promise.resolve().then(r.t.bind(r,9159,23))},7354:function(e,l,r){"use strict";r.r(l),r.d(l,{default:function(){return Providers}});var t=r(2987),n=r(819);function Providers(e){let{children:l}=e;return(0,t.jsx)(n.f,{attribute:"class",children:l})}},9871:function(e,l,r){"use strict";r.r(l),r.d(l,{default:function(){return PageLayout}});var t=r(2987),n=r(8661),s=r(5049),i=r.n(s),a=r(3561),o={src:"/_next/static/media/dpsg.5153c8d4.svg",height:242,width:501,blurWidth:0,blurHeight:0};function SocialLink(e){let{children:l,url:r,hoverColor:n}=e;return(0,t.jsx)(i(),{href:r,target:"_blank",children:(0,t.jsx)("div",{className:"text-white ".concat(n," text-2xl ml-4"),children:l})})}function FacebookLink(){return(0,t.jsx)(SocialLink,{url:"https://de-de.facebook.com/dpsgwehr/",hoverColor:"hover:text-blue-600",children:(0,t.jsx)(a.egd,{})})}function InstagramLink(){return(0,t.jsx)(SocialLink,{url:"https://www.instagram.com/pfadfinder_wehr/",hoverColor:"hover:text-pink-600",children:(0,t.jsx)(a.oVe,{})})}function SocialMedia(){return(0,t.jsxs)("div",{className:"w-full flex place-content-between content-center mt-10 mb-0",children:[(0,t.jsxs)("p",{className:"text-center text-white text-sm ml-4",children:["\xa9 ",new Date().getFullYear()," DPSG St. Bernhard Wehr"]}),(0,t.jsxs)("div",{className:"flex place-content-end items-center mr-4",children:[(0,t.jsx)(InstagramLink,{}),(0,t.jsx)(FacebookLink,{})]})]})}function FooterLink(e){let{url:l,text:r,external:n=!0}=e;return(0,t.jsx)(i(),{href:l,target:n?"_blank":"",className:"text-green-50 hover:underline text-sm mb-1",children:r})}function FooterLinkColumn(e){let{title:l,children:r}=e;return(0,t.jsxs)("div",{className:"flex flex-col w-auto m-4 mb-0 sm:flex-1",children:[(0,t.jsx)("h1",{className:"font-semibold text-lg mb-2",children:l}),r]})}function FooterDPSG(){return(0,t.jsxs)("div",{className:"md:flex-shrink-0 m-4 mb-0",children:[(0,t.jsx)("h1",{className:"font-semibold text-lg mb-2",children:"DPSG"}),(0,t.jsx)(i(),{href:"https://www.dpsg.de",target:"_blank",children:(0,t.jsx)(n.default,{src:o,alt:"DPSG Logo",width:"224",height:"108",className:"bg-white w-full sm:w-56"})})]})}function FooterMain(){return(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row flex-wrap gap-4 text-white ",children:[(0,t.jsxs)("div",{className:"flex-1 flex flex-row place-content-between",children:[(0,t.jsxs)(FooterLinkColumn,{title:"H\xfctten",children:[(0,t.jsx)(FooterLink,{url:"https://www.pfadfinderheim-st-raphael.de/",text:"St. Raphael in Todtmoos"}),(0,t.jsx)(FooterLink,{url:"http://www.pfadfinderhaus-noeggenschwiel.de/",text:"Pfadfinderhaus N\xf6ggenschwiel"})]}),(0,t.jsxs)(FooterLinkColumn,{title:"Sonstiges",children:[(0,t.jsx)(FooterLink,{url:"/pages/impressum",text:"Impressum",external:!1}),(0,t.jsx)(FooterLink,{url:"/pages/datenschutz",text:"Datenschutz",external:!1}),(0,t.jsx)(FooterLink,{url:"https://github.com/Linus-f/website-dpsg-wehr",text:"Quellcode"})]})]}),(0,t.jsx)(FooterDPSG,{})]})}function Footer(){return(0,t.jsx)("footer",{className:"bg-gray-800 pb-2 mt-14",children:(0,t.jsxs)("div",{className:"max-w-sm sm:max-w-4xl px-3 flex flex-col justify-center mx-auto my-0",children:[(0,t.jsx)(FooterMain,{}),(0,t.jsx)(SocialMedia,{})]})})}var c=r(4812),d=r(4493),x=r(8145),h=r(819),g=r(7317),u=r(324);function ToggleThemeButton(){let[e,l]=(0,g.useState)(!1),{systemTheme:r,theme:n,setTheme:s}=(0,h.F)();return(0,g.useEffect)(()=>{l(!0)},[]),(0,t.jsx)("div",{onClick:()=>"dark"==n?s("light"):s("dark"),className:" hover:bg-gray-100 dark:hover:bg-gray-500 transition-all duration-100 dark:text-white text-gray-800 py-2 px-3 rounded text-xl ".concat(!e&&"hidden"),children:e&&"dark"==("system"===n?r:n)?(0,t.jsx)(u.jx7,{}):(0,t.jsx)(a.vQG,{})})}let m=[{label:"News",link:"/news",Icon:a.$Kz},{label:"Gruppen",link:"",Icon:a.nfT,links:[{label:"W\xf6lflinge",link:"/pages/gruppen/woelflinge",Icon:"Lilie",color:"#ec661a"},{label:"Jungpfadfinder",link:"/pages/gruppen/jungpfadfinder",Icon:"Lilie",color:"#2d54a1"},{label:"Pfadfinder",link:"/pages/gruppen/pfadfinder",Icon:"Lilie",color:"#08833c"},{label:"Rover",link:"/pages/gruppen/rover",Icon:"Lilie",color:"#cc1e2f"},{label:"Leiterrunde",link:"/pages/gruppen/leiter",Icon:"Lilie",color:"#FFC107"}]},{label:"Fotos",link:"/gallerie",Icon:a.zI7},{label:"Termine",link:"/pages/termine",Icon:a.ORF},{label:"FAQ",link:"/pages/faq",Icon:a.k$3}];var f=r(9943);function Lilie(e){let{color:l}=e;return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",fill:l||"#000",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"auto",fillRule:"evenodd",clipRule:"evenodd"},viewBox:"0 0 182.004 186.404",children:(0,t.jsxs)("g",{id:"Ebene_x0020_1",children:[(0,t.jsx)("path",{d:"m72.601.2-.6.2-.8.4-1 .6-1 1-.6 1-.6 1.6 1.2 18-39.4.4L10.6 43.2l61.001 4.601 2.6 28-2.4-1.6a12.425 12.425 0 0 1-2.2-1.4c-.916-.523-2.05-1.05-2.8-1.8l-1.8-1.2-1.6-1-1.6-1-2-1.2-1.4-.8-1.6-1-4.2-2.4-1.8-1-3-1.4-2.8-1.4-1.6-.8-2.2-1-2.4-1-2.8-1-3.2-1-4.4-1-2.8-.4h-5.4l-1 .2-2 .4-1.6.4-1 .4-1.401.6-.6.4-1 .6-1.4 1-2 2c-.262.524-.672.745-1 1.2l-.6.8c-.1.138-.3.662-.4.8l-1.2 2-.8 1.6-.6 1.4-.8 2.6-.6 1.6-.4 1.8-.4 1.8-.4 2-.4 2.4-.4 3.4-.2 3.4v10.401l.2 3.4.4 3.8.4 2.6.2 1.6.4 2.2.6 3 .4 1.6.6 2.4.4 1.4.4 1.4.2.6.4 1.2c.292.585.353 1.203.6 1.8l.4 1.2.4 1 .2.601.4 1 .6 1.6.4.8.6 1.4.4.8.4.8.6 1.2.4.8.6 1.2.6 1.2 1 1.8.4.6.6 1 .4.6 1 1.6.8 1.2.8 1.2 1 1.4 1 1.4.8 1 1 1.2.6.8 1 1.2 3 3 1 .8 1 .6 1.2.6.8.4 1 .4 2.8.6H38l3.2-.6 1.2-.4 3-1.4 1.4-.8 1-.6 2.001-1.2 1.6-1.2 1.4-1 1.6-1.2 2.6-2.2 1-.8 2.4-2 2-1.8 2.2-2 2.2-1.8c.704-.703 1.89-1.955 2.2-2.2.1-.053.874-.82 1.4-1.2l1.2-1 .2-.2.2-.4v-.6l-.2-.2-5.8-.2-2.2-.4-1.8-.6-1-.6-1-.8-1-1-.8-1-1.2-2.2-1.2-3.4-.8-2.6-.6-3.2-.6-3.4-.6-2.6-.6-3.4-.6-3.2-.8-4v-2l.8-.8h2.6l2 .4 2.4.6c1.357.542 2.688.943 4 1.6l2.2 1 1.4.6.8.4c.807.58 2.086.885 2.8 1.6l2 1.2 2.2 1.6 2.4 2.4.8 1.6 1.4 13.6h23.401l1-10.4.6-2.6 1.2-2.2 2.4-2.4.8-.6c.69-.346 1.377-.933 2-1.4.81-.54 1.721-1.25 2.6-1.6 1.04-.52 1.991-1.096 3-1.6l1.8-.8c.757-.33 1.629-.718 2.4-1l1.8-.6 1-.4 2.4-.6 2-.4h2.601l.8.8v2c-.015.296-1.42 6.984-1.6 8l-.4 2.6-.4 2-.6 3.4-.4 1.8-.4 2-.6 2.2-.6 2-.8 1.8-.6 1.2-.6 1-.8 1-1 1-2 1.4-1.8.6-2.2.4-5.8.2-.2.2v.6l.2.4c.16.222 1.13.954 1.4 1.2l1 1 2 1.8 1 1 1.4 1.2 2.6 2.2 1.6 1.6 4.8 4 1.6 1.2 8.4 5.6s2.962 1.606 3.6 1.8l2 .6 2.4.4h5.6l2.8-.6c.245-.074 2.257-.918 2.4-1l2.2-1.6 3.6-3.6c1.182-1.18 2.016-2.615 3.2-3.8l1.4-2.2 3.4-5 2.4-4.2 1.4-2.6 1-2 1.2-2.8 1-2.4 1.4-3.8.801-2.4 1-3.4.8-3.6 1.2-5.6.2-1.6.4-2.6.2-2.2.4-5V85.201l-.2-3.4-.4-3.4-.4-2.4-.2-1.4-.4-1.8-.4-1.6-.2-.8-.4-1.2-.4-1.4c-.165-.484-.78-1.904-1-2.4l-1-2.2-1-1.8-1.2-1.8-2.2-2.4c-.22-.2-3.7-2.745-3.8-2.8l-2-.8-2-.6-3-.6h-5.4l-2.8.4-3.4.8-3 .8-3 1-2.397.978-2.404 1.021-3 1.4-4 2-4.8 2.6-1.4.8-7 4.2-1.8 1.2-3.2 2-4 2.6-3.2 2.2 2.6-28.8 61.6-4.6-19.2-19.6-40.019-.2 1.418-17.8-.6-1.8-.8-1.2-1.2-1.2-1.4-.8-.6-.2-1.4-.2h-33.6l-1.2.2z",className:"fil0"}),(0,t.jsx)("path",{d:"m51.201 175.604-.6 1v.6l.2.4.4.4.4.2.8.4.8.4 1.6.6 1 .4 2.4.6 1.8.2h1.6l1-.2.6-.4.8-.6 1.8-1.6c3.438-3.437 7.332-6.59 11-9.8l-.8 14v2.4l.2 1 .2.4.2.2.8.2h27.201l.8-.2.2-.2.2-.4.2-1v-2.4l-.8-14 12 10.6.8.8.8.6.6.4 1 .2h1.6l1.8-.2 1.601-.4 1.8-.6 1-.4.6-.2.8-.4.8-.4.4-.2.4-.4.2-.4v-.6c0 .3-29.401-43.8-29.4-43.8H80.001l-28.8 42.8z",className:"fil0"})]})})}let getIconFromname=(e,l)=>"Lilie"===e?(0,t.jsx)(Lilie,{color:l}):null;function Navbar(e){let{sidebarOpened:l,toggleSidebar:r}=e,s=m.map(e=>{var l;let r=null===(l=e.links)||void 0===l?void 0:l.map(e=>{let l=getIconFromname(e.Icon,e.color);return(0,t.jsx)(c.v.Item,{children:(0,t.jsxs)(i(),{href:e.link,className:"leading-none py-2 px-2 font-light hover:bg-gray-200 dark:hover:bg-gray-500 rounded dark:text-white flex flex-row items-center",children:[(0,t.jsx)("div",{className:"w-5 h-5 mr-2",children:l}),e.label]})},e.link)});return r?(0,t.jsxs)(c.v,{trigger:"hover",transitionProps:{exitDuration:0},withinPortal:!0,children:[(0,t.jsx)(c.v.Target,{children:(0,t.jsxs)(i(),{href:e.link,className:"leading-none py-2 px-3 font-light hover:bg-gray-200 dark:hover:bg-gray-500 rounded flex flex-row items-center",children:[(0,t.jsx)("span",{className:"mr-1",children:e.label}),(0,t.jsx)("div",{className:"mt-1 text-gray-600 dark:text-white",children:(0,t.jsx)(a._i7,{})})]})}),(0,t.jsx)(c.v.Dropdown,{className:"dark:bg-gray-700 dark:border-slate-800",children:r})]},e.label):(0,t.jsx)(i(),{href:e.link,className:"block leading-none py-2 px-3 font-light rounded hover:bg-gray-200 dark:hover:bg-gray-500",children:e.label},e.label)});return(0,t.jsx)("header",{className:"h-[72px] px-4 shadow-md sticky top-0 z-50 dark:bg-gray-700 bg-gray-50",children:(0,t.jsxs)("div",{className:"h-full flex justify-between items-center max-w-4xl mx-auto",children:[(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(x.O,{opened:l,onClick:r,size:"sm",hiddenFrom:"sm"}),(0,t.jsx)(i(),{href:"/",children:(0,t.jsxs)("div",{className:"flex flex-row items-center",children:[(0,t.jsx)(n.default,{priority:!0,width:60,height:60,src:f.default,alt:"Logo"}),(0,t.jsx)("h1",{className:"font-bold text-lg ml-2 collapse w-0 xs:w-auto xs:visible",children:"Pfadfinder Wehr"})]})})]}),(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(d.Z,{ml:50,gap:5,visibleFrom:"sm",children:s}),(0,t.jsx)(ToggleThemeButton,{})]})]})})}var p=r(2603),v=r(9137);function LinksGroup(e){let{navigationLinks:l,toggleSidebar:r}=e,{label:n,Icon:s,link:o,links:c}=l,d=Array.isArray(c),[x,h]=(0,g.useState)(!1),u=(d?c:[]).map(e=>(0,t.jsxs)(i(),{className:"font-medium flex flex-row items-center px-4 py-3 ml-4 border-l border-solid border-gray-200 dark:border-gray-500 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600",href:e.link,onClick:r,children:[(0,t.jsx)("div",{className:"w-4 h-4 mr-2",children:getIconFromname(e.Icon,e.color)}),e.label]},e.link)),m=void 0!==s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i(),{href:d?"":o,onClick:()=>{d?h(e=>!e):r()},children:(0,t.jsx)("div",{className:"font-medium block w-full hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded mb-2",children:(0,t.jsxs)("div",{className:"flex flex-row justify-between gap-0 items-center",children:[(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(p.k,{variant:"light",size:30,children:m&&(0,t.jsx)(s,{className:"w-5 h-5"})}),(0,t.jsx)("div",{className:"ml-4 text-lg",children:n})]}),d&&(0,t.jsx)("div",{className:"text-gray-600 dark:text-white ".concat(x?"":"transform -rotate-90"),children:(0,t.jsx)(a._i7,{})})]})})}),d?(0,t.jsx)(v.U,{in:x,className:"mb-2",children:u}):null]})}function NavbarLinksGroup(e){let{toggleSidebar:l}=e,r=m.map(e=>(0,t.jsx)("div",{children:(0,t.jsx)(LinksGroup,{navigationLinks:e,toggleSidebar:l})},e.link));return(0,t.jsx)("div",{className:"m-4",children:r})}function Sidebar(e){let{isOpen:l,toggle:r}=e;return(0,t.jsx)("div",{className:"z-30 ".concat(l?"h-[calc(100vh-56px)]":"0px"," absolute min-w-full bg-gray-100 dark:bg-gray-700 ").concat(l?"visible":"collapse"),onClick:r,children:(0,t.jsx)("div",{onClick:e=>e.stopPropagation(),children:(0,t.jsx)(NavbarLinksGroup,{toggleSidebar:r})})})}var b=r(5919),j=r(4811),k=r(54),w=r(2827),N=r(1738),A=r(6396);r(4467),r(1802);var y=r(6527);function PageLayout(e){let{children:l}=e,[r,n]=(0,g.useState)(!1),[s,i]=(0,g.useState)([]),[a,o]=(0,g.useState)(!1),[c,d]=(0,g.useState)(0),{theme:x}=(0,h.F)(),u=(0,A.usePathname)();(0,g.useEffect)(()=>i([]),[u]);let toggleOpen=()=>n(!r);return(0,t.jsx)(y.M,{forceColorScheme:x,children:(0,t.jsx)(N.p.Provider,{value:{open:a,setOpen:e=>{s.forEach((l,r)=>{l.src==e&&d(r)}),o(!0)},slides:s,addSlide:e=>{s?i([e,...s]):i([e])},setSlides:i},children:(0,t.jsxs)("div",{children:[(0,t.jsx)(Navbar,{sidebarOpened:r,toggleSidebar:toggleOpen}),(0,t.jsxs)("div",{className:"flex flex-col h-[calc(100vh-56px)] overflow-auto justify-between",children:[(0,t.jsx)(Sidebar,{isOpen:r,toggle:toggleOpen}),(0,t.jsx)("div",{className:"max-w-4xl mx-0 px-2 sm:px-4 md:mx-auto my-8 relative flex-1",children:l}),(0,t.jsx)(Footer,{}),(0,t.jsx)(b.ZP,{open:a,close:()=>o(!1),slides:s,index:c,plugins:[j.Z,k.Z,w.Z]})]})]})})})}},1738:function(e,l,r){"use strict";r.d(l,{p:function(){return n}});var t=r(7317);let n=(0,t.createContext)({open:!1,setOpen:e=>{},slides:[],addSlide:e=>{},setSlides:e=>{}})},2675:function(){},9943:function(e,l,r){"use strict";r.r(l),l.default={src:"/_next/static/media/logo.8ba7b57a.png",height:219,width:219,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEVMaXFwTkGFo6H++/317OsxMzWSqLjCr6fZzcm1n5bOubKPsclrQyeGqcKKaVZ5VDurtK/Gt7O3xtTj3dnQ1NHAqp/Czbtud37h3+HRu7ekpabu4OPN08ZgZWODnKatqqq0usJ8fH0F3P9JAAAAG3RSTlMACv79/v4iWdBc+6xTvqBz99no4fro/vv+2vJQvGfVAAAACXBIWXMAACHVAAAh1QEEnLSdAAAAQ0lEQVR4nBXBBRaAIBBAwU+5gN0B1v0v6XMGEB93AUJKabMC3tjbvR415uV07qAYtL7Wx1PWXZ6MDRRIH+fAr2paxQdudgLrwcvrZgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[685,43,390,661,492,221,476,195,338,744],function(){return e(e.s=9220)}),_N_E=e.O()}]);