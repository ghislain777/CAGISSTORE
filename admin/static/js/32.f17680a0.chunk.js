(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[32],{1490:function(e,t,a){"use strict";var n=a(17),l=a(13),r=a(0),o=a.n(r),i=a(623),c=a(2060),s=a(605),m=a(1684),d=a(451),u=a(1371),p=a(196),b=a(96),h=a(343),g=a(4),v=a(45),f=a(76),x=a(111);const E=Object(h.a)(e=>{e.palette,Object(l.a)(e,["palette"]);return{miniCart:{width:"var(--sidenav-width)","& .cart__topbar":{height:"var(--topbar-height)"},"& .mini-cart__item":{transition:"background 300ms ease","&:hover":{background:"rgba(0,0,0,0.01)"}}}}});let y=!1;t.a=function({container:e}){const t=Object(r.useState)(0),a=Object(n.a)(t,2),l=a[0],h=a[1],O=Object(r.useState)(!1),j=Object(n.a)(O,2),w=j[0],N=j[1],S=E(),k=Object(p.b)(),z=Object(v.g)(),C=Object(x.a)().utilisateur,I=Object(p.c)(e=>e.ecommerce).cartList,_=Object(f.a)().settings;y||(k(Object(b.j)(C.id)),y=!0);const L=()=>{N(!w)};return Object(r.useEffect)(()=>{let e=0;I.forEach(t=>{e+=t.price*t.amount}),h(e)},[I]),o.a.createElement(r.Fragment,null,o.a.createElement(i.a,{onClick:L},o.a.createElement(c.a,{color:"secondary",badgeContent:I.length},o.a.createElement(s.a,null,"shopping_cart"))),o.a.createElement(u.a,{theme:_.themes[_.activeTheme]},o.a.createElement(m.a,{container:e,variant:"temporary",anchor:"right",open:w,onClose:L,ModalProps:{keepMounted:!0}},o.a.createElement("div",{className:Object(g.default)("flex-column h-full",S.miniCart)},o.a.createElement("div",{className:"cart__topbar elevation-z6 flex items-center p-1 mb-2 pl-4"},o.a.createElement(s.a,{color:"primary"},"shopping_cart"),o.a.createElement("h5",{className:"ml-2 my-0 font-medium"},"Cart")),o.a.createElement("div",{className:"flex-grow overflow-auto"},I.map(e=>o.a.createElement("div",{key:e.id,className:"mini-cart__item flex items-center py-2 px-2"},o.a.createElement("div",{className:"flex flex-column mr-1"},o.a.createElement(i.a,{size:"small",onClick:()=>k(Object(b.k)(C.id,e.id,e.amount+1))},o.a.createElement(s.a,{className:"cursor-pointer"},"keyboard_arrow_up")),o.a.createElement(i.a,{disabled:!(e.amount-1),size:"small",onClick:()=>k(Object(b.k)(C.id,e.id,e.amount-1))},o.a.createElement(s.a,{className:"cursor-pointer"},"keyboard_arrow_down"))),o.a.createElement("div",{className:"mr-2"},o.a.createElement("img",{className:"w-48",src:e.imgUrl,alt:e.title})),o.a.createElement("div",{className:"mr-2 text-center flex-grow flex-column"},o.a.createElement("h6",{className:"m-0 mb-1 ellipsis w-120"},e.title),o.a.createElement("small",{className:"text-muted"},"$",e.price," x ",e.amount)),o.a.createElement(i.a,{size:"small",onClick:()=>k(Object(b.i)(C.id,e.id))},o.a.createElement(s.a,{fontSize:"small"},"clear"))))),o.a.createElement(d.a,{className:"w-full border-radius-0",variant:"contained",color:"primary",onClick:()=>{l>0&&(z.push("/ecommerce/checkout"),N(!1))}},"Checkout ($",l.toFixed(2),")")))))}},1584:function(e,t,a){"use strict";var n=a(13),l=a(0),r=a.n(l),o=a(343),i=a(51),c=a(1371),s=a(2059),m=a(1695),d=a(4),u=a(76);const p=Object(o.a)(e=>{e.palette,Object(n.a)(e,["palette"]);return{footer:{minHeight:"var(--topbar-height)","@media (max-width: 499px)":{display:"table",width:"100%",minHeight:"auto",padding:"1rem 0","& .container":{flexDirection:"column !important","& a":{margin:"0 0 16px !important"}}}},appbar:{zIndex:96}}});t.a=()=>{const e=p(),t=Object(i.a)(),a=Object(u.a)().settings,n=a.themes[a.footer.theme]||t;return r.a.createElement(c.a,{theme:n},r.a.createElement(s.a,{color:"primary",position:"static",className:e.appbar},r.a.createElement(m.a,{className:Object(d.default)("flex items-center",e.footer)},r.a.createElement("div",{className:"flex items-center container w-full"},r.a.createElement("span",{className:"m-auto"}),r.a.createElement("p",{className:"m-0"},"Design and Developement:",r.a.createElement("a",{href:"http://www.zentechnologies.net"}," Zen Techinologies"))))))}},1585:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(1371),o=a(51),i=a(76);t.a=({children:e})=>{const t=Object(o.a)(),a=Object(i.a)().settings,n=a.themes[a.layout1Settings.leftSidebar.theme]||t;return l.a.createElement(r.a,{theme:n},e)}},1586:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(45),l=a(1),r=a(0),o=a.n(r);function i(e,t,a){return void 0===t&&(t={}),void 0===a&&(a={}),e?o.a.createElement(n.d,a,e.map((function(e,a){return o.a.createElement(n.b,{key:e.key||a,path:e.path,exact:e.exact,strict:e.strict,render:function(a){return e.render?e.render(Object(l.a)({},a,{},t,{route:e})):o.a.createElement(e.component,Object(l.a)({},a,t,{route:e}))}})}))):null}},1588:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(13),o=a(623),i=a(605),c=a(2068),s=a(343),m=a(4),d=a(76);const u=Object(s.a)(e=>{e.palette,Object(r.a)(e,["palette"]);return{toggle:{position:"fixed",right:"30px",bottom:"50px",zIndex:99,transition:"all 0.15s ease","&.open":{right:"10px"}}}});var p=()=>{const e=u(),t=Object(d.a)(),a=t.settings,n=t.updateSettings,r=()=>{n({secondarySidebar:{open:!a.secondarySidebar.open}})};return l.a.createElement("div",{className:Object(m.default)({[e.toggle]:!0,open:a.secondarySidebar.open})},a.secondarySidebar.open&&l.a.createElement(o.a,{onClick:r,size:"small","aria-label":"toggle"},l.a.createElement(i.a,null,"close")),!a.secondarySidebar.open&&l.a.createElement(c.a,{color:"primary","aria-label":"expand",className:"",onClick:r},l.a.createElement(i.a,null,"settings")))},b=a(3),h=a(17),g=a(1697),v=a(1684),f=a(451),x=a(1377),E=a(2070),y=a(361),O=a.n(y),j=a(2060),w=a(8);var N=Object(w.a)(e=>({badge:{top:"0",right:"0",height:"32px",width:"32px",borderRadius:"50%"}}))(j.a),S=a(1371);const k=Object(s.a)(e=>{let t=e.palette;Object(r.a)(e,["palette"]);return{label:{color:t.secondary.main,backgroundColor:t.primary.dark,fontWeight:700,transform:"rotate(90deg)",marginBottom:"2.5rem",padding:".25rem .5rem",borderRadius:"4px",cursor:"pointer",letterSpacing:"1.5px",fontSize:"1rem","&:hover, &.open":{backgroundColor:t.secondary.main,color:t.secondary.contrastText}},helpText:{margin:"0px .5rem 1rem"},maxCustomizer:{position:"fixed",top:0,right:0,zIndex:50},customizerCloseButton:{position:"absolute",right:8,top:8},layoutBox:{"&:hover":{"& .layout-name":{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",background:"rgba(0,0,0,0.3)",zIndex:12}}}}}),z=[{name:"Light Sidebar",thumbnail:"/assets/images/screenshots/layout1-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"whiteBlue",bgOpacity:.98},topbar:{theme:"blueDark",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Compact Sidebar",thumbnail:"/assets/images/screenshots/layout5-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"compact",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"whiteBlue",fixed:!0}}}},{name:"Dark Sidebar",thumbnail:"/assets/images/screenshots/layout1-blue-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"blueDark",fixed:!0}}}},{name:"Dark Theme",thumbnail:"/assets/images/screenshots/layout3-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"purpleDark1",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"purpleDark1",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Horizontal Navigation",thumbnail:"/assets/images/screenshots/layout4-customizer.png",isPro:!0,options:{activeLayout:"layout2",activeTheme:"purple1",layout2Settings:{mode:"full"},footer:{theme:"slateDark1"}}}];var C=e=>{const t=Object(n.useState)(!1),a=Object(h.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(0),u=Object(h.a)(s,2),p=u[0],y=u[1],j=k(),w=Object(d.a)(),C=w.settings,I=w.updateSettings,_=()=>{c(!r)},L=e=>{y(e)};let D=Object(b.a)({},C.themes[C.activeTheme]);return l.a.createElement(n.Fragment,null,l.a.createElement(g.a,{title:"Theme Settings",placement:"left"},l.a.createElement("span",{className:Object(m.default)({[j.label]:!0,open:r}),onClick:_},"DEMOS")),l.a.createElement(S.a,{theme:D},l.a.createElement(v.a,{anchor:"right",open:r,variant:"temporary",onClose:_,ModalProps:{keepMounted:!0}},l.a.createElement("div",{className:Object(m.default)("flex-column w-320 pb-8 elevation-z12 h-full-screen bg-default",j.maxCustomizer)},l.a.createElement("div",{className:"flex items-center px-5 py-4 mb-4 min-h-64 elevation-z6"},l.a.createElement(i.a,{color:"primary"},"settings"),l.a.createElement("h5",{className:"mb-0 ml-2"},"Theme Settings"),l.a.createElement(o.a,{onClick:_,className:j.customizerCloseButton},l.a.createElement(i.a,null,"close"))),l.a.createElement("div",{className:"px-6 mb-4 flex"},l.a.createElement(f.a,{variant:"outlined",color:0===p?"secondary":"primary",onClick:()=>L(0),className:"mr-4"},"Demos"),l.a.createElement(f.a,{variant:"outlined",color:1===p?"secondary":"primary",onClick:()=>L(1)},"Settings")),l.a.createElement(O.a,{options:{suppressScrollX:!0},className:"px-4"},0===p&&l.a.createElement("div",{className:"mb-8 mx-2"},l.a.createElement("div",{className:"text-muted"},"Layouts"),l.a.createElement("div",{className:"flex-column"},z.map(e=>l.a.createElement(N,{color:"secondary",className:Object(m.default)("w-full my-3 max-h-152 cursor-pointer",j.layoutBox),badgeContent:"Pro",invisible:!e.isPro,key:e.name},l.a.createElement(x.a,{className:"relative",onClick:()=>I(e.options),elevation:4},l.a.createElement("div",{className:"layout-name hidden"},l.a.createElement(f.a,{variant:"contained",color:"secondary"},e.name)),l.a.createElement("img",{className:"w-full",src:e.thumbnail,alt:e.name})))))),1===p&&l.a.createElement("div",null,l.a.createElement("div",{className:j.helpText},"We used React context API to control layout. Check out the"," ",l.a.createElement(E.a,{href:"http://demos.ui-lib.com/matx-react-doc/layout.html",target:"_blank"},"Documentation"))))))))},I=a(1490),_=a(87);const L=Object(s.a)(e=>{let t=e.palette;return{root:{position:"fixed",height:"100vh",width:e=>e.width,right:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:Object(r.a)(e,["palette"]).shadows[8],backgroundColor:t.primary.main,zIndex:98,transition:"all 0.15s ease"},"@global":{"@media screen and (min-width: 767px)":{".content-wrap, .layout2.layout-contained, .layout2.layout-full":{marginRight:e=>e.width},".matx-customizer":{right:e=>e.width}},"@media screen and (max-width: 959px)":{".toolbar-menu-wrap .menu-area":{width:e=>"calc(100% - ".concat(e.width,")")}}}}});var D=()=>{const e=L({width:"50px"});return l.a.createElement("div",{className:Object(m.default)("secondary-sidebar",e.root)},l.a.createElement("span",{className:"m-auto"}),l.a.createElement(C,null),l.a.createElement(I.a,null),l.a.createElement(_.b,{icon:l.a.createElement(o.a,{className:"my-3",size:"small"},l.a.createElement(i.a,null,"comments"))},l.a.createElement(_.c,null)),l.a.createElement("span",{className:"m-auto"}))};var T=({theme:e,classes:t,children:a,open:n})=>l.a.createElement(S.a,{theme:e},a);t.a=()=>{const e=Object(d.a)().settings,t=e.themes[e.secondarySidebar.theme];return l.a.createElement(T,{theme:t},e.secondarySidebar.open&&l.a.createElement(D,null),l.a.createElement(p,null))}},1590:function(e,t,a){"use strict";var n=a(3),l=a(13),r=a(0),o=a.n(r),i=a(343),c=a(51),s=a(361),m=a.n(s),d=(a(367),a(87)),u=a(4),p=a(76);a(111),a(371);const b=Object(i.a)(e=>{e.palette;return{scrollable:{paddingLeft:20,paddingRight:20},sidenavMobileOverlay:{position:"fixed",top:0,left:0,bottom:0,right:0,width:"100vw",background:"rgba(0, 0, 0, 0.54)",zIndex:-1,[Object(l.a)(e,["palette"]).breakpoints.up("lg")]:{display:"none"}}}});var h=({children:e})=>{const t=b(),a=Object(p.a)(),l=a.settings,i=a.updateSettings,c=JSON.parse(sessionStorage.getItem("session")).navigation;return o.a.createElement(r.Fragment,null,o.a.createElement(m.a,{options:{suppressScrollX:!0},className:Object(u.default)("relative px-4",t.scrollable)},e,o.a.createElement(d.o,{items:c})),o.a.createElement("div",{onClick:()=>(e=>{let t=l.activeLayout+"Settings",a=l[t];i(Object(n.a)(Object(n.a)({},l),{},{[t]:Object(n.a)(Object(n.a)({},a),{},{leftSidebar:Object(n.a)(Object(n.a)({},a.leftSidebar),e)})}))})({mode:"close"}),className:t.sidenavMobileOverlay}))},g=a(620);const v=Object(i.a)(e=>{e.palette;let t=Object(l.a)(e,["palette"]);return{brand:{padding:"20px 18px 20px 24px"},hideOnCompact:{display:"none"},large:{width:t.spacing(15),height:t.spacing(7)},logo:{margin:t.spacing(0),width:200,height:100,display:"flex",alignItems:"left","& span":{fontSize:26,lineHeight:1.3,fontWeight:100}}}});var f=({children:e})=>{const t=v(),a=Object(p.a)().settings.layout1Settings.leftSidebar.mode;return o.a.createElement("div",{className:Object(u.default)("flex items-center justify-between",t.brand)},o.a.createElement("div",{className:"flex items-center"},o.a.createElement("div",{className:t.logo},o.a.createElement(g.a,null)),o.a.createElement("span",{className:Object(u.default)({"text-18 ml-2 font-medium sidenavHoverShow":!0,[t.hideOnCompact]:"compact"===a})})),o.a.createElement("div",{className:Object(u.default)({sidenavHoverShow:!0,[t.hideOnCompact]:"compact"===a})},e||null))},x=a(1331),E=a(2078),y=a(126);const O=Object(i.a)(e=>{let t=e.palette,a=Object(l.a)(e,["palette"]);return{sidenav:({width:e,primaryRGB:n,bgImgURL:l})=>({position:"fixed",top:0,left:0,height:"100vh",width:e,boxShadow:a.shadows[8],backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover",zIndex:111,overflow:"hidden",color:t.text.primary,transition:"all 250ms ease-in-out",backgroundImage:"linear-gradient(to bottom, rgba(".concat(n,", 0.96), rgba(").concat(n,", 0.96)), url(").concat(l,")"),"&:hover":{width:"var(--sidenav-width)","& .sidenavHoverShow":{display:"block"},"& .compactNavItem":{width:"100%",maxWidth:"100%","& .nav-bullet":{display:"block"},"& .nav-bullet-text":{display:"none"}}}}),hideOnCompact:{display:"none"},userInfo:{}}});t.a=o.a.memo(()=>{const e=Object(c.a)(),t=Object(p.a)(),a=t.settings,l=t.updateSettings,r=a.layout1Settings.leftSidebar,i=r.mode,s=Object(y.b)(e.palette.primary.main),m=O(Object(n.a)(Object(n.a)({},r),{},{width:(()=>{switch(i){case"compact":return"var(--sidenav-compact-width)";default:return"var(--sidenav-width)"}})(),primaryRGB:s}));return o.a.createElement("div",{className:m.sidenav},o.a.createElement("div",{className:"flex-column relative h-full"},o.a.createElement(f,null,o.a.createElement(x.a,{smDown:!0},o.a.createElement(E.a,{onChange:()=>{var e;e={mode:"compact"===i?"full":"compact"},l({layout1Settings:{leftSidebar:Object(n.a)({},e)}})},checked:"full"!==r.mode,color:"secondary",size:"small"}))),o.a.createElement(h,null)))})},2104:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(1371),o=a(1331),i=a(369),c=a(1584),s=a(13),m=a(87),d=a(367),u=a(343),p=a(4);const b=Object(u.a)(e=>{let t=e.palette;Object(s.a)(e,["palette"]);return{root:{"&, & .horizontal-nav ul ul":{background:t.primary.main},"& .horizontal-nav a, & .horizontal-nav label":{color:t.primary.contrastText},"& .horizontal-nav ul li ul li:hover, & .horizontal-nav ul li ul li.open":{background:t.primary.dark}}}});var h=()=>{const e=b();return l.a.createElement("div",{className:Object(p.default)("navbar",e.root)},l.a.createElement("div",{className:"pl-6"},l.a.createElement(m.g,{navigation:d.a,max:6})))},g=a(3),v=a(1379),f=a(1687),x=a(605),E=a(623),y=a(17),O=a(2060),j=a(1684),w=a(451),N=a(51),S=a(187),k=a(196),z=a(126),C=a(46),I=a(1375);const _=Object(u.a)(e=>{e.palette;return{circle:{position:"absolute",height:16,width:16,borderRadius:"50%",boxShadow:Object(s.a)(e,["palette"]).shadows[3],left:18,top:23},verticalLine:{position:"absolute",left:25,width:2,background:"rgba(var(--body), 0.1)"},upperLine:{top:0,height:23},lowerLine:{position:"absolute",top:40,left:25,bottom:0},lightBG:{background:"rgba(var(--body),0.03)",borderRadius:4},icon:{}}});var L=({notification:e,isFirstIndex:t,isLastIndex:a})=>{const n=_();return l.a.createElement("div",{className:"relative"},l.a.createElement("div",{className:"pl-12 pr-8 py-6"},!t&&l.a.createElement("div",{className:Object(p.default)(n.upperLine,n.verticalLine)}),l.a.createElement("div",{className:Object(p.default)("flex items-center justify-center",n.circle)},l.a.createElement("div",{className:"p-1 bg-primary rounded"})),!a&&l.a.createElement("div",{className:Object(p.default)(n.lowerLine,n.verticalLine)}),l.a.createElement("div",{className:"flex justify-between"},l.a.createElement("div",{className:"text-13"},l.a.createElement("h5",{className:"mt-0 mb-1 text-14"},e.title),l.a.createElement("span",{className:"text-muted"},"on"),l.a.createElement(C.a,{className:"ml-1 text-primary font-medium",to:"/"},"Project Name")),l.a.createElement("small",{className:"text-muted"},Object(z.c)(new Date(e.timestamp))," ","ago")),l.a.createElement("p",{className:Object(p.default)("my-2 py-6px px-3 text-14",n.lightBG)},e.subtitle)),l.a.createElement(I.a,null))},D=a(76);const T=Object(u.a)(e=>{e.palette;return{notification:{width:360,[Object(s.a)(e,["palette"]).breakpoints.down("xs")]:{width:"100vw"},"& .notification__topbar":{height:"var(--topbar-height)"}},notificationCard:{"&:hover":{"& .delete-button":{cursor:"pointer",display:"unset",right:0,marginTop:6,top:0,zIndex:2},"& .card__topbar__time":{display:"none"}},"& .delete-button":{display:"none",position:"absolute",right:0,marginTop:9},"& .card__topbar__button":{borderRadius:15,opacity:.9}}}});var B=({container:e})=>{const t=Object(n.useState)(!1),a=Object(y.a)(t,2),o=a[0],i=a[1],c=Object(N.a)(),s=Object(k.b)(),m=T(),d=Object(D.a)().settings,u=Object(k.c)(e=>e.notifications),p=()=>{o||s(Object(S.e)()),i(!o)},b=c.palette;return l.a.createElement(r.a,{theme:d.themes[d.activeTheme]},l.a.createElement(E.a,{onClick:p,style:{color:"light"===b.type?b.text.secondary:b.text.primary}},l.a.createElement(O.a,{color:"secondary",badgeContent:5},l.a.createElement(x.a,null,"notifications"))),l.a.createElement(j.a,{width:"100px",variant:"temporary",anchor:"right",open:o,onClose:p,ModalProps:{keepMounted:!0}},l.a.createElement("div",{className:m.notification},l.a.createElement("div",{className:"notification__topbar elevation-z6 flex items-center p-4"},l.a.createElement(x.a,{color:"primary"},"notifications"),l.a.createElement("h5",{className:"ml-2 my-0 font-medium"},"Notifications")),u.map((e,t)=>l.a.createElement(L,{notification:e,isLastIndex:t===u.length-1,isFirstIndex:0===t,key:t})),!!u.length&&l.a.createElement("div",{className:"text-center m-8"},l.a.createElement(w.a,{className:"w-full",variant:"contained",color:"primary"},"View All Notifications")))))},P=a(1490),R=a(111);const M=Object(u.a)(e=>{let t=e.palette,a=Object(s.a)(e,["palette"]);return{root:{backgroundColor:t.primary.main,borderColor:t.divider,height:"var(--topbar-height)",borderBottom:"1px solid transparent",paddingTop:"1rem",paddingBottom:"1rem",zIndex:98,paddingLeft:"1.75rem",[a.breakpoints.down("sm")]:{paddingLeft:"1rem"}},brandText:{color:t.primary.contrastText},menuItem:{minWidth:185,display:"flex",alignItems:"center"}}});var H=()=>{const e=M(),t=Object(D.a)(),a=t.settings,n=t.updateSettings,r=Object(R.a)(),i=r.logout,c=r.user;return l.a.createElement("div",{className:Object(p.default)("relative w-full",e.root)},l.a.createElement("div",{className:"flex justify-between items-center h-full"},l.a.createElement("div",{className:"flex items-center h-full"},l.a.createElement("img",{className:"h-32",src:"/assets/images/logo.svg",alt:"company-logo"}),l.a.createElement("span",{className:Object(p.default)("font-medium text-24 mx-4",e.brandText)},"Matx")),l.a.createElement("div",{className:"mx-auto"}),l.a.createElement("div",{className:"flex items-center"},l.a.createElement(m.n,{offsetTop:"64px"},l.a.createElement(m.k,null),l.a.createElement(B,null),l.a.createElement(P.a,null),l.a.createElement(m.j,{menuButton:l.a.createElement(v.a,{className:"cursor-pointer mx-2",src:c.avatar})},l.a.createElement(f.a,{className:e.menuItem},l.a.createElement(x.a,null," home "),l.a.createElement("span",{className:"pl-4"}," Home ")),l.a.createElement(f.a,null,l.a.createElement(C.a,{className:e.menuItem,to:"/page-layouts/user-profile"},l.a.createElement(x.a,null," person "),l.a.createElement("span",{className:"pl-4"}," Profile "))),l.a.createElement(f.a,{className:e.menuItem},l.a.createElement(x.a,null," settings "),l.a.createElement("span",{className:"pl-4"}," Settings ")),l.a.createElement(f.a,{onClick:i,className:e.menuItem},l.a.createElement(x.a,null," power_settings_new "),l.a.createElement("span",{className:"pl-4"}," Logout ")))),l.a.createElement(o.a,{mdUp:!0},l.a.createElement(E.a,{className:"text-white",onClick:()=>{let e="close"===a.layout2Settings.leftSidebar.mode?"mobile":"close";var t;t={mode:e},n({layout2Settings:{leftSidebar:Object(g.a)({},t)}})}},l.a.createElement(x.a,null,"menu"))))))},W=a(361),F=a.n(W),G=a(1588),X=a(1586),J=a(262);const U=Object(u.a)(e=>{e.palette,Object(s.a)(e,["palette"]);return{"@global":{".layout2":{transition:"all 0.15s ease"},".layout2.sidenav-close .sidenav":{left:"-var(--sidenav-width)"},".layout2 .navbar":{position:"relative",height:"var(--navbar-height)",boxShadow:"var(--elevation-z8)",zIndex:"98"},".horizontal-nav ul":{padding:"0",margin:"0",listStyle:"none",position:"relative"},".horizontal-nav ul.menu":{float:"left",paddingRight:"45px",marginLeft:"-20px",zIndex:"99"},".horizontal-nav ul.menu > li":{float:"left"},".horizontal-nav ul.menu > li > div > a, .horizontal-nav ul.menu > li > div > div":{borderBottom:"2px solid",height:"48px",boxSizing:"border-box",borderColor:"transparent",margin:"0 6px"},".horizontal-nav ul li":{position:"relative",margin:"0px",display:"inline-block"},".horizontal-nav ul li ul a":{padding:"8px 20px",height:"48px"},".horizontal-nav a, .horizontal-nav label":{display:"flex",flexDirection:"row",alignItems:"center",padding:"13px 20px",height:"var(--navbar-height)",fontSize:"0.875rem",textDecoration:"none",boxSizing:"border-box"},".horizontal-nav a .material-icons, .horizontal-nav label .material-icons":{fontSize:"14px",margin:"0 4px"},".horizontal-nav ul ul":{opacity:"0",visibility:"hidden",position:"absolute",left:"20px",boxShadow:"var(--elevation-z8)",top:"var(--navbar-height)",transform:"translateY(-10px)",transition:"all 0.3s ease-in-out",zIndex:"-1"},".horizontal-nav ul li:hover > div > div > ul, .horizontal-nav ul li:hover > div > ul, .horizontal-nav li:hover > ul":{opacity:"1",visibility:"visible",transform:"translateY(0)"},".horizontal-nav ul ul li":{width:"170px",float:"none",display:"list-item",position:"relative"},".horizontal-nav ul ul ul":{top:"0",left:"170px"},".horizontal-nav ul ul ul li":{position:"relative",top:"0"},".horizontal-nav li > a:after":{content:'"arrow_drop_down"',fontFamily:'"Material Icons"',fontWeight:"normal",fontStyle:"normal",fontSize:"14px",lineHeight:"1",marginLeft:"auto",letterSpacing:"normal",textTransform:"none",display:"inline-block",whiteSpace:"nowrap",wordWrap:"normal",direction:"ltr",W:"antialiased",fallbacks:[{W:'"liga"'}]},".horizontal-nav li > a:only-child:after":{content:'" "'}}}});var A=a(1585),Y=a(1590);t.default=()=>{U();const e=Object(J.a)(),t=Object(n.useContext)(i.a).routes,a=Object(D.a)().settings;let s=a.layout2Settings,m=a.themes[s.topbar.theme],d=a.themes[s.navbar.theme];const u=s.leftSidebar,b=u.mode,g=u.show;let v={[a.activeLayout]:!0,"bg-default text-primary":!0,["sidenav-".concat(s.leftSidebar.mode)]:!0,["layout-".concat(s.mode," theme-").concat(e.palette.type)]:!0};return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:Object(p.default)(v,"flex-grow flex-column relative overflow-hidden h-full-screen")},s.topbar.show&&l.a.createElement(r.a,{theme:m},l.a.createElement(H,null)),l.a.createElement(o.a,{smDown:!0},s.navbar.show&&l.a.createElement(r.a,{theme:d},l.a.createElement(h,null))),g&&"close"!==b&&l.a.createElement(A.a,null,l.a.createElement(Y.a,null)),a.perfectScrollbar&&l.a.createElement(F.a,{options:{suppressScrollX:!0},className:"flex-column flex-grow relative"},l.a.createElement("div",{className:"flex-grow relative p-0"},Object(X.a)(t)),a.footer.show&&!a.footer.fixed&&l.a.createElement(c.a,null)),!a.perfectScrollbar&&l.a.createElement("div",{options:{suppressScrollX:!0},className:"flex-column flex-grow relative scroll-y p-0"},l.a.createElement("div",{className:"flex-grow relative p-0"},Object(X.a)(t)),a.footer.show&&!a.footer.fixed&&l.a.createElement(c.a,null)),a.footer.show&&a.footer.fixed&&l.a.createElement(c.a,null)),a.secondarySidebar.show&&l.a.createElement(G.a,null))}}}]);