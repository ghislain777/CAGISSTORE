(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[18],{1399:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(3),n=a(0),o=a.n(n),i=a(355),c=a(1378);function s(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(c.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1402:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),o=a(1426),i=a(345),c=a(1776),s=(a(61),a(358)),l=a(355);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(i.a)(e=>Object(c.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(l.a,{className:"mt-3"},n.a.createElement(s.a,{value:u}),u,"%"))}},1406:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1407:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(625),i=a(451),c=a(1393);t.a=e=>{const t=e.id,a=e.nom,r=e.label,s=e.valeur,l=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(c.a,{name:a,as:n.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:l,defaultValue:s,rules:{required:"Required"}})))}},1408:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1393),i=a(1733),c=a(625),s=a(628),l=a(626),u=a(1325);const m=e=>{const t=e.label,a=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error);return n.a.createElement(c.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(l.a,{htmlFor:a},t),n.a.createElement(s.a,Object.assign({id:a},e),o.map(e=>{var t,a,o;return n.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"quartier"===r&&" (".concat(null===e||void 0===e||null===(t=e.Commune)||void 0===t||null===(a=t.Ville)||void 0===a?void 0:a.nom,"/").concat(null===e||void 0===e||null===(o=e.Commune)||void 0===o?void 0:o.nom,")"),"offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")")})),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,i=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:i,rules:{required:"Required"}},e)))}},1409:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(17),n=a(0),o=a.n(n),i=a(1393),c=a(1360),s=a(1359);function l(e){const t=e.nom,a=e.coche,l=e.control,u=e.changement,m=e.label,p=Object(n.useState)(a),d=Object(r.a)(p,2),b=d[0],h=d[1];return o.a.createElement(s.a,{control:o.a.createElement(i.a,{name:t,control:l,render:e=>o.a.createElement(c.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),h(!b),u(!b)}}))}),label:null==m?t:m})}},1410:function(e,t,a){"use strict";a(0),a(1393),a(1733),a(625),a(628),a(626),a(1325)},1411:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(17),n=a(0),o=a.n(n),i=a(625),c=a(1480),s=a(2164),l=a(1414),u=a(1415),m=a(1393);function p(e){const t=e.nom,a=e.label,p=e.control,d=(e.error,e.valeur),b=(e.id,e.handledatechange),h=Object(n.useState)(d),g=Object(r.a)(h,2),f=g[0],j=g[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:t,as:o.a.createElement(c.a,{utils:l.a,locale:u.a},o.a.createElement(s.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:f,onChange:e=>(e=>{j(e),b(e)})(e)})),control:p,rules:{required:"Required"}},e))))}},1412:function(e,t,a){"use strict";a(17),a(0),a(625),a(1480),a(2119),a(1414),a(1415),a(1393)},1413:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return m}));var r=a(20),n=a.n(r),o=a(39),i=a(75);function c(e){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(n.a.mark((function e(t){var a,r,o,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.objet,o=t.handleprogress,c=new FormData,console.warn(a),c.append("objet",r),c.append("file",a),e.next=7,i.b.post("/fichier/upload",c,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:o});case 7:return s=e.sent,console.log("fichier service::: response.data "+JSON.stringify(s)),e.abrupt("return",s.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(n.a.mark((function e(t){var a,r,o,c,s,l,u,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,o=t.modele,c=t.champ,s=t.objet,l=t.obj,u=t.handleprogress,(m=new FormData).append(l.cle,s.id),m.append("modele",o),m.append("champ",c),m.append("nom",r),m.append("cle",l.cle),m.append("valeur",l.valeur),m.append("file",a),e.next=11,i.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return p=e.sent,e.abrupt("return",p.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.post("/medias/telecharger",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1430:function(e,t,a){"use strict";var r=a(0),n=a(42);t.a=Object(n.a)(r.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1431:function(e,t,a){"use strict";var r=a(0),n=a(42);t.a=Object(n.a)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1432:function(e,t,a){"use strict";var r=a(0);const n=r.createContext({});t.a=n},1457:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),o=a(39),i=a(75);class c{getTouslesTransporteurs(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.b.get("/transporteurs?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutTransporteur(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/transporteurs",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourTransporteur(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/transporteurs/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionTransporteur(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/transporteurs/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleactifTransporteur(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/transporteurs/"+e.id,{actif:!e.actif});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionImage(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/medias/delete/".concat(e.id,"/transporteur"),{});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1498:function(e,t,a){"use strict";var r=a(0),n=a(42);t.a=Object(n.a)(r.createElement("path",{d:"M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z"}),"AddAPhotoOutlined")},1502:function(e,t,a){"use strict";var r=a(1434),n=a(1437),o=a(0),i=(a(5),a(4)),c=a(1470),s=a(2127),l=a(1469);const u=["sx"];function m(e){const t=e.sx,a=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach(a=>{l.b[a]?t.systemProps[a]=e[a]:t.otherProps[a]=e[a]}),t})(Object(n.a)(e,u)),o=a.systemProps,i=a.otherProps;return Object(r.a)({},i,{sx:Object(r.a)({},o,t)})}var p=a(1468),d=a(1394);const b=["className","component"];const h=function(e={}){const t=e.defaultTheme,a=Object(c.a)("div")(s.a);return o.forwardRef((function(e,o){const c=Object(p.a)(t),s=m(e),l=s.className,u=s.component,h=void 0===u?"div":u,g=Object(n.a)(s,b);return Object(d.jsx)(a,Object(r.a)({as:h,ref:o,className:Object(i.default)(l,"MuiBox-root"),theme:c},g))}))}();t.a=h},1504:function(e,t,a){"use strict";var r=a(1398),n=a(1396),o=a(2123),i=a(4),c=(a(5),a(0)),s=a(1400),l=a(1401),u=a(2124),m=a(2125);function p(e){return Object(u.a)("MuiImageList",e)}Object(m.a)("MuiImageList",["root","masonry","quilted","standard","woven"]);var d=a(1432),b=a(1394);const h=["children","className","cols","component","rowHeight","gap","style","variant"],g=Object(s.a)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,t)=>{const a=e.ownerState;return[t.root,t[a.variant]]}})(({ownerState:e})=>Object(n.a)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===e.variant&&{display:"block"})),f=c.forwardRef((function(e,t){const a=Object(l.a)({props:e,name:"MuiImageList"}),s=a.children,u=a.className,m=a.cols,f=void 0===m?2:m,j=a.component,v=void 0===j?"ul":j,O=a.rowHeight,E=void 0===O?"auto":O,y=a.gap,w=void 0===y?4:y,x=a.style,C=a.variant,S=void 0===C?"standard":C,P=Object(r.a)(a,h),I=c.useMemo(()=>({rowHeight:E,gap:w,variant:S}),[E,w,S]);c.useEffect(()=>{0},[]);const M="masonry"===S?Object(n.a)({columnCount:f,columnGap:w},x):Object(n.a)({gridTemplateColumns:"repeat(".concat(f,", 1fr)"),gap:w},x),k=Object(n.a)({},a,{component:v,gap:w,rowHeight:E,variant:S}),T=(e=>{const t=e.classes,a={root:["root",e.variant]};return Object(o.a)(a,p,t)})(k);return Object(b.jsx)(g,Object(n.a)({as:v,className:Object(i.default)(T.root,T[S],u),ref:t,style:M,ownerState:k},P,{children:Object(b.jsx)(d.a.Provider,{value:I,children:s})}))}));t.a=f},1505:function(e,t,a){"use strict";var r=a(1398),n=a(1396),o=a(2123),i=a(4),c=(a(5),a(0)),s=(a(1456),a(1432)),l=a(1400),u=a(1401),m=a(1471),p=a(2124),d=a(2125);function b(e){return Object(p.a)("MuiImageListItem",e)}var h=Object(d.a)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),g=a(1394);const f=["children","className","cols","component","rows","style"],j=Object(l.a)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,t)=>{const a=e.ownerState;return[{["& .".concat(h.img)]:t.img},t.root,t[a.variant]]}})(({ownerState:e})=>Object(n.a)({display:"inline-block",position:"relative",lineHeight:0},"standard"===e.variant&&{display:"flex",flexDirection:"column"},"woven"===e.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{["& .".concat(h.img)]:Object(n.a)({objectFit:"cover",width:"100%",height:"100%"},"standard"===e.variant&&{height:"auto",flexGrow:1})})),v=c.forwardRef((function(e,t){const a=Object(u.a)({props:e,name:"MuiImageListItem"}),l=a.children,p=a.className,d=a.cols,h=void 0===d?1:d,v=a.component,O=void 0===v?"li":v,E=a.rows,y=void 0===E?1:E,w=a.style,x=Object(r.a)(a,f),C=c.useContext(s.a),S=C.rowHeight,P=void 0===S?"auto":S,I=C.gap,M=C.variant;let k="auto";"woven"===M?k=void 0:"auto"!==P&&(k=P*y+I*(y-1));const T=Object(n.a)({},a,{cols:h,component:O,gap:I,rowHeight:P,rows:y,variant:M}),A=(e=>{const t=e.classes,a={root:["root",e.variant],img:["img"]};return Object(o.a)(a,b,t)})(T);return Object(g.jsx)(j,Object(n.a)({as:O,className:Object(i.default)(A.root,A[M],p),ref:t,style:Object(n.a)({height:k,gridColumnEnd:"masonry"!==M?"span ".concat(h):void 0,gridRowEnd:"masonry"!==M?"span ".concat(y):void 0,marginBottom:"masonry"===M?I:void 0},w),ownerState:T},x,{children:c.Children.map(l,e=>c.isValidElement(e)?"img"===e.type||Object(m.a)(e,["Image"])?c.cloneElement(e,{className:Object(i.default)(A.img,e.props.className)}):e:null)}))}));t.a=v},1506:function(e,t,a){"use strict";var r=a(1398),n=a(1396),o=a(2123),i=a(4),c=(a(5),a(0)),s=a(1400),l=a(1401),u=a(1419),m=a(2124),p=a(2125);function d(e){return Object(m.a)("MuiImageListItemBar",e)}Object(p.a)("MuiImageListItemBar",["root","positionBottom","positionTop","positionBelow","titleWrap","titleWrapBottom","titleWrapTop","titleWrapBelow","titleWrapActionPosLeft","titleWrapActionPosRight","title","subtitle","actionIcon","actionIconActionPosLeft","actionIconActionPosRight"]);var b=a(1394);const h=["actionIcon","actionPosition","className","subtitle","title","position"],g=Object(s.a)("div",{name:"MuiImageListItemBar",slot:"Root",overridesResolver:(e,t)=>{const a=e.ownerState;return[t.root,t["position".concat(Object(u.a)(a.position))]]}})(({theme:e,ownerState:t})=>Object(n.a)({position:"absolute",left:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},"bottom"===t.position&&{bottom:0},"top"===t.position&&{top:0},"below"===t.position&&{position:"relative",background:"transparent",alignItems:"normal"})),f=Object(s.a)("div",{name:"MuiImageListItemBar",slot:"TitleWrap",overridesResolver:(e,t)=>{const a=e.ownerState;return[t.titleWrap,t["titleWrap".concat(Object(u.a)(a.position))],a.actionIcon&&t["titleWrapActionPos".concat(Object(u.a)(a.actionPosition))]]}})(({theme:e,ownerState:t})=>Object(n.a)({flexGrow:1,padding:"12px 16px",color:e.palette.common.white,overflow:"hidden"},"below"===t.position&&{padding:"6px 0 12px",color:"inherit"},t.actionIcon&&"left"===t.actionPosition&&{paddingLeft:0},t.actionIcon&&"right"===t.actionPosition&&{paddingRight:0})),j=Object(s.a)("div",{name:"MuiImageListItemBar",slot:"Title",overridesResolver:(e,t)=>t.title})(({theme:e})=>({fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"})),v=Object(s.a)("div",{name:"MuiImageListItemBar",slot:"Subtitle",overridesResolver:(e,t)=>t.subtitle})(({theme:e})=>({fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"})),O=Object(s.a)("div",{name:"MuiImageListItemBar",slot:"ActionIcon",overridesResolver:(e,t)=>{const a=e.ownerState;return[t.actionIcon,t["actionIconActionPos".concat(Object(u.a)(a.actionPosition))]]}})(({ownerState:e})=>Object(n.a)({},"left"===e.actionPosition&&{order:-1})),E=c.forwardRef((function(e,t){const a=Object(l.a)({props:e,name:"MuiImageListItemBar"}),c=a.actionIcon,s=a.actionPosition,m=void 0===s?"right":s,p=a.className,E=a.subtitle,y=a.title,w=a.position,x=void 0===w?"bottom":w,C=Object(r.a)(a,h),S=Object(n.a)({},a,{position:x,actionPosition:m}),P=(e=>{const t=e.classes,a=e.position,r=e.actionIcon,n=e.actionPosition,i={root:["root","position".concat(Object(u.a)(a))],titleWrap:["titleWrap","titleWrap".concat(Object(u.a)(a)),r&&"titleWrapActionPos".concat(Object(u.a)(n))],title:["title"],subtitle:["subtitle"],actionIcon:["actionIcon","actionIconActionPos".concat(Object(u.a)(n))]};return Object(o.a)(i,d,t)})(S);return Object(b.jsxs)(g,Object(n.a)({ownerState:S,className:Object(i.default)(P.root,p),ref:t},C,{children:[Object(b.jsxs)(f,{ownerState:S,className:P.titleWrap,children:[Object(b.jsx)(j,{className:P.title,children:y}),E?Object(b.jsx)(v,{className:P.subtitle,children:E}):null]}),c?Object(b.jsx)(O,{ownerState:S,className:P.actionIcon,children:c}):null]}))}));t.a=E},2136:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),o=a(0),i=a.n(o),c=a(1457),s=a(134),l=a(1422),u=a.n(l),m=a(1406),p=a(1330),d=a(2104),b=a(449),h=a(2103),g=a(2102),f=a(453),j=a(2105),v=a(1389),O=a(359),E=a(356),y=a(357),w=a(1399),x=a(1423),C=(a(1424),a(75)),S=a(1374),P=a(1405),I=a(355),M=a(2101),k=a(624),T=a(2100),A=a(2099),R=a(1378),N=a(1407),F=(a(1408),a(1409),a(1402)),L=(a(1410),a(1411),a(1412),a(2120));function q(e){var t,a,r,n;const o=e.state,c=e.fonctions,s=e.queries,l=e.useforms.transporteur;return i.a.createElement("div",null,i.a.createElement(I.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(I.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(S.a,{theme:Object(C.a)()},i.a.createElement(v.a,null,i.a.createElement(M.a,{action:i.a.createElement(k.a,{"aria-label":"",onClick:c.AnnulerEnregistrement},"x"),title:"ajout"===o.pagestate.action?"Nouveau transporteur":"Mise \xe0 jour",subheader:""}),i.a.createElement(T.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",null,i.a.createElement(I.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(I.a,{item:!0},i.a.createElement(N.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=o.transporteur)||void 0===t?void 0:t.nom,control:l.control,error:l.errors.nom})),i.a.createElement(I.a,{item:!0},i.a.createElement(N.a,{id:"telephone",nom:"telephone",label:"T\xe9l\xe9phone",valeur:null===(a=o.transporteur)||void 0===a?void 0:a.telephone,control:l.control,error:l.errors.telephone})),i.a.createElement(I.a,{item:!0},i.a.createElement(N.a,{id:"adresse",nom:"adresse",label:"Adresse",valeur:null===(r=o.transporteur)||void 0===r?void 0:r.adresse,control:l.control,error:l.errors.adresse})),i.a.createElement(I.a,{item:!0},i.a.createElement(N.a,{id:"description",nom:"description",label:"Description",valeur:null===(n=o.transporteur)||void 0===n?void 0:n.description,control:l.control,error:l.errors.description}))))),i.a.createElement(A.a,null,i.a.createElement(I.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(I.a,{item:!0},i.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:c.allerAPrecedent},"Pr\xe9c\xe9dent")),i.a.createElement(I.a,{item:!0},i.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit",onClick:l.handleSubmit(c.allerAPhotos)},s.mutationAjout.isLoading||s.mutationMiseajour.isLoading?i.a.createElement(R.a,{color:"inherit"}):i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"pl-2 capitalize"},i.a.createElement(b.a,null,"Suivant")),i.a.createElement(L.a,null)))))))))))}var D=a(2115),W=a(2111),B=a(2112),z=a(1502),H=a(1431),V=a(1504),G=a(1505),Q=a(1506);function U(e){const t=e.state,a=e.fonctions,r=e.queries;e.useform,e.onSubmit;return i.a.createElement("div",null,i.a.createElement(I.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(I.a,{item:!0,lg:5,md:5,sm:12,xs:12},i.a.createElement(S.a,{theme:Object(C.a)()},i.a.createElement(v.a,null,i.a.createElement(M.a,{action:i.a.createElement(k.a,{"aria-label":"",onClick:a.AnnulerEnregistrement},"x"),title:"Ajouter une photo au transporteur",subheader:"".concat(t.transporteur.nom)}),i.a.createElement(T.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",null,i.a.createElement(I.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(I.a,{item:!0},i.a.createElement(F.a,{progress:t.progressphoto,acceptedFiles:[".png",".jpg",".jpeg",".gif"],onUpload:e=>a.uploaderPhoto(e),onSupprimer:()=>a.supprimerphoto(),titre:"Fichier photo .png(faire glisser ou cliquez ici pour charger)"}))))),i.a.createElement(A.a,null,i.a.createElement(I.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(I.a,{item:!0}),i.a.createElement(I.a,{item:!0},i.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:a.AnnulerEnregistrement},"Quiter"))))))),i.a.createElement(I.a,{item:!0,lg:7,md:7,sm:12,xs:12},i.a.createElement(v.a,null,i.a.createElement(M.a,{action:i.a.createElement(k.a,{"aria-label":"",onClick:a.AnnulerEnregistrement},"x"),title:"".concat(t.transporteur.nom),subheader:""}),i.a.createElement(T.a,{className:" px-6 pt-6 pb-6"},i.a.createElement(V.a,{sx:{width:540,height:300},cols:2,gap:8},t.transporteur.Media.map(e=>i.a.createElement(G.a,{key:e.id,sx:{borderColor:"primary.main",border:.1}},i.a.createElement("img",{src:"".concat(C.c).concat(e.fichier),alt:e.titre}),i.a.createElement(Q.a,{title:e.nom,actionIcon:i.a.createElement(k.a,{"aria-label":"",onClick:()=>a.supprimerImage(e)},i.a.createElement(H.a,{color:"error"}))}))))),i.a.createElement(A.a,null,i.a.createElement(I.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(I.a,{item:!0},i.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:a.allerAPrecedent},"Pr\xe9c\xe9dent")),i.a.createElement(I.a,{item:!0},i.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit",onClick:a.handleClickSurTerminer},r.mutationAjout.isLoading||r.mutationMiseajour.isLoading?i.a.createElement(R.a,{color:"inherit"}):i.a.createElement(i.a.Fragment,null,i.a.createElement(L.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},i.a.createElement(b.a,null,"Terminer")))))))))))}var J=a(1413);function Y(e){const t=e.fonctions,a=e.queries,l=e.useforms,u=Object(r.a)(Object(r.a)({},e.state),{},{etape:0,progressphoto:0,etapes:[{index:0,label:"Edition du transporteur"},{index:1,label:"Photos du transporteur"}],complet:!1}),m=Object(o.useState)(u),p=Object(n.a)(m,2),d=p[0],h=p[1];let g=new c.a;t.allerAPhotos=e=>{delete e.Media,0===d.transporteur.id?a.mutationAjout.mutate(e):a.mutationMiseajour.mutate(Object(r.a)(Object(r.a)({},d.transporteur),e))},t.uploaderPhoto=e=>{e&&v.mutate({fichier:e,modele:"transporteur",objet:d.transporteur,champ:"photo",nom:"Photo transporteur",handleprogress:j,obj:{cle:"transporteur",valeur:d.transporteur.id}})},t.supprimerImage=e=>{console.log("suppression de l'image"),console.log(e),a.mutationSuppressionImage.mutate(e)};const j=e=>{var t=Math.round(100*e.loaded/e.total);h(Object(r.a)(Object(r.a)({},d),{},{progressphoto:t}))};t.supprimerphoto=()=>{console.log("Suppression du fichier")},t.allerAPrecedent=()=>{h(Object(r.a)(Object(r.a)({},d),{},{etape:0}))},a.mutationAjout=Object(s.useMutation)(g.ajoutTransporteur,{onSuccess:e=>{h(Object(r.a)(Object(r.a)({},d),{},{transporteur:e,etape:1,alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{h(Object(r.a)(Object(r.a)({},d),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),a.mutationMiseajour=Object(s.useMutation)(g.miseajourTransporteur,{onSuccess:e=>{h(Object(r.a)(Object(r.a)({},d),{},{transporteur:e,etape:1,alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{h(Object(r.a)(Object(r.a)({},d),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}});const v=Object(s.useMutation)(J.c,{onSuccess:e=>{h(Object(r.a)(Object(r.a)({},d),{},{transporteur:Object(r.a)(Object(r.a)({},d.transporteur),{},{Media:e}),alert:{message:"Upload du fichier r\xe9ussi",open:!0,severity:"success",automaticClose:!1},progressphoto:100}))},onError:()=>{h(Object(r.a)(Object(r.a)({},d),{},{alert:{automaticClose:!1,message:"Echec de chargement du fichier sur le serveur",open:!0,severity:"error"}}))}});return a.mutationSuppressionImage=Object(s.useMutation)(g.suppressionImage,{onSuccess:e=>{h(Object(r.a)(Object(r.a)({},d),{},{transporteur:Object(r.a)(Object(r.a)({},d.transporteur),{},{Media:e}),dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{h(Object(r.a)(Object(r.a)({},d),{},{alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}}))},onSettled:()=>{}}),i.a.createElement(z.a,{sx:{width:"100%"}},i.a.createElement(D.a,{nonLinear:!0,activeStep:d.etape},d.etapes.map(e=>i.a.createElement(W.a,{key:e.label,completed:d.etape>e.index},i.a.createElement(B.a,{color:"inherit"},e.label)))),i.a.createElement("div",null,d.complet?i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{sx:{mt:2,mb:1}},"F\xe9licitation, toutes les \xe9tapes ont \xe9t\xe9 achev\xe9s."),i.a.createElement(z.a,{sx:{display:"flex",flexDirection:"row",pt:2}},i.a.createElement(z.a,{sx:{flex:"1 1 auto"}}),i.a.createElement(f.a,{onClick:t.fermerFormulaire},"Quitter"))):i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{sx:{mt:2,mb:1,py:1}},0===d.etape?i.a.createElement(q,{state:d,fonctions:t,queries:a,useforms:l}):1===d.etape?i.a.createElement(U,{state:d,fonctions:t,queries:a,useforms:l,allerAPhotos:t.allerAPhotos}):i.a.createElement("span",null,"Autre")))))}var K=e=>{var t,a;const n=e.state,o=e.fonctions,c=e.collonnes,s=e.queries,l=e.useforms;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(p.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet,fonctions:o,state:n},i.a.createElement(d.a,{id:""},i.a.createElement(b.a,{variant:"h6",color:"initial"},n.dialoguephoto.titre)),i.a.createElement(h.a,null,i.a.createElement("img",{style:{width:500,height:400,"object-fit":"contain"},src:C.c+n.dialoguephoto.fichier,alt:n.dialoguephoto.objet,srcset:""})),i.a.createElement(g.a,null,i.a.createElement(f.a,{autoFocus:!0,onClick:()=>o.handleClickSurPhotoPrecedent()},"precedent"),i.a.createElement(f.a,{onClick:()=>o.handleClickSurPhotoSuivant(),autoFocus:!0},"suivant"))),i.a.createElement(O.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(E.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(b.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(j.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(f.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau transporteur"),s.queryTransporteurs.isLoading?i.a.createElement(w.a,{message:"Chargement des donn\xe9es...",type:"info"}):s.queryTransporteurs.isError?i.a.createElement(w.a,{message:"Erreur lors du chargement des donn\xe9es::"+s.queryTransporteurs.error,type:"error"}):i.a.createElement(x.a,{tag:"div",blocking:!1},i.a.createElement(S.a,{theme:Object(C.a)()},i.a.createElement(u.a,{title:n.titre,data:s.queryTransporteurs.data.rows.map(e=>({transporteur:e})),columns:c,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:s.queryTransporteurs.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(v.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(y.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.transporteur)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(Y,{state:n,fonctions:o,queries:s,useforms:l}))},X=a(13),Z=a(88),$=a(2121),_=a(1430),ee=a(1498),te=a(2122),ae=a(345),re=a(1360),ne=a(1636),oe=a(1391),ie=a(1334),ce=a(1733),se=a(1387);Object(ae.a)(e=>{e.palette,Object(X.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function le(e){const t=Object(ae.a)(e=>{e.palette,Object(X.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"transporteur",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"transporteur",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.nom)&&void 0!==r?r:""}}},{name:"transporteur",label:"T\xe9l\xe9phone",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.telephone)&&void 0!==r?r:""}}},{name:"transporteur",label:"Adresse",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.adresse)&&void 0!==r?r:""}}},{name:"transporteur",label:"Actif?",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>i.a.createElement(re.a,{checked:t.actif,onChange:()=>e.handleTogleactif(t)})}},{name:"transporteur",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.description)&&void 0!==r?r:""}}},{name:"transporteur",label:"Photos",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>{var n;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex items-center"},i.a.createElement(ne.a,{onClick:()=>e.handleClickSurphoto(t)},i.a.createElement(f.a,null,i.a.createElement(oe.a,{variant:"rounded",className:"w-48 h-48",src:C.c+(null===(n=t.Media[0])||void 0===n?void 0:n.fichier)}))),i.a.createElement(ne.a,{onClick:()=>e.handleAjouterPhoto(t)},i.a.createElement(ee.a,null))),i.a.createElement("small",{className:"text-muted"},t.Media.length))}}},{name:"transporteur",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(Z.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(ie.a,{xsDown:!0},i.a.createElement(f.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(te.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement($.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement($.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(_.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(H.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(_.a,{color:"primary"})}]}})(e).map(t=>i.a.createElement(i.a.Fragment,null,i.a.createElement(ce.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",i.a.createElement("span",{className:"ml-5"},t.nom)),i.a.createElement(se.a,null)))))}}]}var ue=a(1393),me=a(1404);t.default=()=>{const e={id:0,nom:"",telephone:"",adresse:"",actif:"",description:"",Media:[]},t={nouvelletransporteur:!0,transporteur:e,transporteur1:null,titre:"Gestion des transporteurs",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},a=Object(o.useState)(t),l=Object(n.a)(a,2),u=l[0],m=l[1];let p=new c.a;const d=Object(s.useQueryClient)(),b=()=>{d.invalidateQueries("Transporteurs"),m(Object(r.a)(Object(r.a)({},u),{},{titre:"Gestion des transporteurs",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},h={handleFermetureAlerte:()=>{m(Object(r.a)(Object(r.a)({},u),{},{titre:"Gestion des transporteurs",alert:Object(r.a)(Object(r.a)({},u.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},u.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{m(Object(r.a)(Object(r.a)({},u),{},{transporteur:e,titre:"Nouveau transporteur",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{m(Object(r.a)(Object(r.a)({},u),{},{alert:Object(r.a)(Object(r.a)({},u.alert),{},{open:!1})}))},AnnulerEnregistrement:b,fermerDialogueSuppression:()=>{m(Object(r.a)(Object(r.a)({},u),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{j.mutate(u.transporteur)},handleCloseDialoguephoto:()=>{m(Object(r.a)(Object(r.a)({},u),{},{dialoguephoto:Object(r.a)(Object(r.a)({},u.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{m(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{m(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{m(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":m(Object(r.a)(Object(r.a)({},u),{},{titre:"Mise \xe0 jour ",transporteur:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":m(Object(r.a)(Object(r.a)({},u),{},{transporteur:e,dialogueSuppressionOuvert:!0}))}},handleClickSurphoto:e=>{var t;m(Object(r.a)(Object(r.a)({},u),{},{etape:1,transporteur:e,dialoguephoto:Object(r.a)(Object(r.a)({},u.dialoguephoto),{},{photoEnCours:0,open:!0,titre:"Photos 1/".concat(e.Media.length),fichier:null===(t=e.Media[0])||void 0===t?void 0:t.fichier,objet:e.titre})}))},handleAjouterPhoto:e=>{console.log("transporteur: ".concat(JSON.stringify(e))),m(Object(r.a)(Object(r.a)({},u),{},{etape:2,transporteur:e,pagestate:Object(r.a)(Object(r.a)({},u.pagestate),{},{openImage:!0,mode:"edition"})}))},handleClickSurPhotoSuivant:()=>{if(u.dialoguephoto.photoEnCours<u.transporteur.Media.length-1){const e=u.dialoguephoto.photoEnCours+1;m(Object(r.a)(Object(r.a)({},u),{},{dialoguephoto:Object(r.a)(Object(r.a)({},u.dialoguephoto),{},{photoEnCours:e,open:!0,titre:"Photos ".concat(e+1,"/").concat(u.transporteur.Media.length),fichier:u.transporteur.Media[e].fichier,objet:u.transporteur.titre})}))}},handleClickSurPhotoPrecedent:()=>{if(u.dialoguephoto.photoEnCours>0){const e=u.dialoguephoto.photoEnCours-1;console.log(u.dialoguephoto.photoEnCours),m(Object(r.a)(Object(r.a)({},u),{},{dialoguephoto:Object(r.a)(Object(r.a)({},u.dialoguephoto),{},{photoEnCours:e,open:!0,titre:"Photos ".concat(e+1,"/").concat(u.transporteur.Media.length),fichier:u.transporteur.Media[e].fichier,objet:u.transporteur.titre})}))}},handleTogleactif:e=>{f.mutate(e)},handleClickSurTerminer:e=>{b()}},g=Object(s.useQuery)(["Transporteurs",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>p.getTouslesTransporteurs(u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),f=Object(s.useMutation)(p.togleactifTransporteur,{onSuccess:()=>{m(Object(r.a)(Object(r.a)({},u),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{m({alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Transporteurs")}}),j=Object(s.useMutation)(p.suppressionTransporteur,{onSuccess:()=>{m(Object(r.a)(Object(r.a)({},u),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{m({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Transporteurs")}}),v={queryTransporteurs:g,mutationSuppression:j},O=le(h),E=P.b().shape({nom:P.c().required("Le champs Nom est requis")}),y={transporteur:Object(ue.c)({resolver:Object(me.yupResolver)(E),defaultValues:{transporteur:u.transporteur}})};return i.a.createElement(K,{state:u,fonctions:h,collonnes:O,queries:v,useforms:y,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},u.transporteur),e);void 0!==(null===(t=u.transporteur)||void 0===t?void 0:t.id)?v.mutationMiseajour.mutate(Object(r.a)({},a)):v.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);