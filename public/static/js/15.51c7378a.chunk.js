(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[15],{1380:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(3),n=a(0),o=a.n(n),i=a(353),c=a(1372);function s(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(c.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1388:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1389:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(622),i=a(449),c=a(1379);t.a=e=>{const t=e.id,a=e.nom,r=e.label,s=e.valeur,l=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(c.a,{name:a,as:n.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:l,defaultValue:s,rules:{required:"Required"}})))}},1390:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1379),i=a(1656),c=a(622),s=a(625),l=a(623),u=a(1320);const m=e=>{const t=e.label,a=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error);return n.a.createElement(c.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(l.a,{htmlFor:a},t),n.a.createElement(s.a,Object.assign({id:a},e),o.map(e=>n.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,i=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:i,rules:{required:"Required"}},e)))}},1391:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(17),n=a(0),o=a.n(n),i=a(1379),c=a(1355),s=a(1354);function l(e){const t=e.nom,a=e.coche,l=e.control,u=e.changement,m=e.label,d=Object(n.useState)(a),p=Object(r.a)(d,2),h=p[0],b=p[1];return o.a.createElement(s.a,{control:o.a.createElement(i.a,{name:t,control:l,render:e=>o.a.createElement(c.a,Object.assign({},e,{checked:h,onChange:t=>{e.onChange(t.target.checked),b(!h),u(!h)}}))}),label:null==m?t:m})}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),o=a(1404),i=a(343),c=a(1704),s=(a(60),a(356)),l=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(i.a)(e=>Object(c.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(l.a,{className:"mt-3"},n.a.createElement(s.a,{value:u}),u,"%"))}},1393:function(e,t,a){"use strict";a(0),a(1379),a(1656),a(622),a(625),a(623),a(1320)},1394:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(17),n=a(0),o=a.n(n),i=a(622),c=a(1438),s=a(2058),l=a(1384),u=a(1385),m=a(1379);function d(e){const t=e.nom,a=e.label,d=e.control,p=(e.error,e.valeur),h=(e.id,e.handledatechange),b=Object(n.useState)(p),g=Object(r.a)(b,2),f=g[0],v=g[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:t,as:o.a.createElement(c.a,{utils:l.a,locale:u.a},o.a.createElement(s.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:f,onChange:e=>(e=>{v(e),h(e)})(e)})),control:d,rules:{required:"Required"}},e))))}},1395:function(e,t,a){"use strict";a(17),a(0),a(622),a(1438),a(2018),a(1384),a(1385),a(1379)},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),o=a(39),i=a(75);function c(e){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(n.a.mark((function e(t){var a,r,o,c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.objet,o=t.handleprogress,c=new FormData,console.warn(a),c.append("objet",r),c.append("file",a),e.next=7,i.b.post("/fichier/upload",c,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:o});case 7:return s=e.sent,e.abrupt("return",s.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1418:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),o=a(39),i=a(75);class c{getTouslesMarchands(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.b.get("/marchands?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutMarchand(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/marchands",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourMarchand(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/marchands/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionMarchand(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/marchands/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1422:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),o=a(39),i=a(75);class c{getTouslesEmployes(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.b.get("/employes?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutEmploye(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/employes",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourEmploye(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/employes/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionEmploye(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/employes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1423:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(1398),n=a(132),o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},i=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,c=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,s=/^([+-])(\d{2})(?::?(\d{2}))?$/;function l(e,t){Object(n.a)(1,arguments);var a=t||{},o=null==a.additionalDigits?2:Object(r.a)(a.additionalDigits);if(2!==o&&1!==o&&0!==o)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,c=u(e);if(c.date){var s=m(c.date,o);i=d(s.restDateString,s.year)}if(isNaN(i)||!i)return new Date(NaN);var l,p=i.getTime(),b=0;if(c.time&&(b=h(c.time),isNaN(b)||null===b))return new Date(NaN);if(!c.timezone){var f=new Date(p+b),v=new Date(f.getUTCFullYear(),f.getUTCMonth(),f.getUTCDate(),f.getUTCHours(),f.getUTCMinutes(),f.getUTCSeconds(),f.getUTCMilliseconds());return v.setFullYear(f.getUTCFullYear()),v}return l=g(c.timezone),isNaN(l)?new Date(NaN):new Date(p+b+l)}function u(e){var t,a={},r=e.split(o.dateTimeDelimiter);if(r.length>2)return a;if(/:/.test(r[0])?(a.date=null,t=r[0]):(a.date=r[0],t=r[1],o.timeZoneDelimiter.test(a.date)&&(a.date=e.split(o.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length))),t){var n=o.timezone.exec(t);n?(a.time=t.replace(n[1],""),a.timezone=n[1]):a.time=t}return a}function m(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(a);if(!r)return{year:null};var n=r[1]&&parseInt(r[1]),o=r[2]&&parseInt(r[2]);return{year:null==o?n:100*o,restDateString:e.slice((r[1]||r[2]).length)}}function d(e,t){if(null===t)return null;var a=e.match(i);if(!a)return null;var r=!!a[4],n=p(a[1]),o=p(a[2])-1,c=p(a[3]),s=p(a[4]),l=p(a[5])-1;if(r)return function(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}(0,s,l)?function(e,t,a){var r=new Date(0);r.setUTCFullYear(e,0,4);var n=r.getUTCDay()||7,o=7*(t-1)+a+1-n;return r.setUTCDate(r.getUTCDate()+o),r}(t,s,l):new Date(NaN);var u=new Date(0);return function(e,t,a){return t>=0&&t<=11&&a>=1&&a<=(f[t]||(v(e)?29:28))}(t,o,c)&&function(e,t){return t>=1&&t<=(v(e)?366:365)}(t,n)?(u.setUTCFullYear(t,o,Math.max(n,c)),u):new Date(NaN)}function p(e){return e?parseInt(e):1}function h(e){var t=e.match(c);if(!t)return null;var a=b(t[1]),r=b(t[2]),n=b(t[3]);return function(e,t,a){if(24===e)return 0===t&&0===a;return a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}(a,r,n)?36e5*a+6e4*r+1e3*n:NaN}function b(e){return e&&parseFloat(e.replace(",","."))||0}function g(e){if("Z"===e)return 0;var t=e.match(s);if(!t)return 0;var a="+"===t[1]?-1:1,r=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,n)?a*(36e5*r+6e4*n):NaN}var f=[31,null,31,30,31,30,31,31,30,31,30,31];function v(e){return e%400===0||e%4===0&&e%100}},2042:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),o=a(0),i=a.n(o),c=a(20),s=a.n(c),l=a(39),u=a(75);class m{getTouslesAchats(e,t,a,r){return Object(l.a)(s.a.mark((function r(){var n;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,u.b.get("/achats?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return n=r.sent,r.abrupt("return",n.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutAchat(e){return Object(l.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.post("/achats",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourAchat(e){return Object(l.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/achats/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionAchat(e){return Object(l.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.delete("/achats/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}misajourStatutAchat(e){return Object(l.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("achats/"+e.id,{statut:e.statut});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}var d=a(133),p=a(1401),h=a.n(p),b=a(1388),g=a(1325),f=a(2008),v=a(2007),j=a(447),E=a(2009),y=a(451),O=a(1375),w=a(357),C=a(354),D=a(355),x=a(1380),A=a(1402),S=(a(1403),a(1369)),P=a(1383),M=a(353),q=a(2005),N=a(621),T=a(2004),k=a(2003),F=a(1372),R=a(1389),L=a(1390),I=(a(1391),a(1392),a(1393),a(1394),a(1395),a(2019));function U(e){var t,a,r,n,o,c,s,l,m,d,p;const h=e.state,b=e.fonctions,g=e.queries,f=e.useform,v=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(M.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(M.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(S.a,{theme:Object(u.a)()},i.a.createElement(O.a,null,i.a.createElement(q.a,{action:i.a.createElement(N.a,{"aria-label":"",onClick:b.AnnulerEnregistrement},"x"),title:"ajout"===h.pagestate.action?"Nouvelle vente":"Mise \xe0 jour ",subheader:""}),i.a.createElement(T.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:f.handleSubmit(v)},i.a.createElement(M.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(M.a,{item:!0},i.a.createElement(R.a,{id:"quantite",nom:"quantite",label:"Quantite de tickets",valeur:null===(t=h.achat)||void 0===t?void 0:t.quantite,control:f.control,error:f.errors.quantite})),i.a.createElement(M.a,{item:!0},g.queryEmployes.isLoading?i.a.createElement(x.a,{message:"chargement des roles"}):i.a.createElement(L.a,{id:"employe",name:"employe",label:"employe",table:"employe",control:f.control,options:g.queryEmployes.data.rows,error:f.errors.employe,defaultValue:null!==(a=null===(r=h.achat)||void 0===r||null===(n=r.employe)||void 0===n?void 0:n.id)&&void 0!==a?a:"1",valeur:null!==(o=null===(c=h.achat)||void 0===c?void 0:c.employe)&&void 0!==o?o:""})),i.a.createElement(M.a,{item:!0},g.queryMarchands.isLoading?i.a.createElement(x.a,{message:"chargement des roles"}):i.a.createElement(L.a,{id:"marchand",name:"marchand",label:"Marchand",table:"marchand",control:f.control,options:g.queryMarchands.data.rows,error:f.errors.marchand,defaultValue:null!==(s=null===(l=h.achat)||void 0===l||null===(m=l.marchand)||void 0===m?void 0:m.id)&&void 0!==s?s:"1",valeur:null!==(d=null===(p=h.achat)||void 0===p?void 0:p.marchand)&&void 0!==d?d:""}))))),i.a.createElement(k.a,null,i.a.createElement(M.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(M.a,{item:!0},i.a.createElement(y.a,{color:"primary",variant:"contained",type:"submit",onClick:f.handleSubmit(v)},g.mutationMiseajour.isLoading||g.mutationAjout.isLoading?i.a.createElement(F.a,{color:"inherit"}):i.a.createElement(I.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===h.pagestate.action?i.a.createElement(j.a,null,"Enregistrer"):i.a.createElement(j.a,null,"Mettre \xe0 jour")))),i.a.createElement(M.a,{item:!0},i.a.createElement(y.a,{variant:"outlined",color:"secondary",onClick:b.AnnulerEnregistrement},"Annuler")))))))))}var z=e=>{var t,a;const n=e.state,o=e.fonctions,c=e.collonnes,s=e.queries,l=e.useform,m=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(g.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},i.a.createElement(f.a,{id:""},n.dialoguephoto.titre),i.a.createElement(v.a,null,i.a.createElement("img",{src:u.c+"/fichiers/"+n.dialoguephoto.objet+"/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),i.a.createElement(w.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(C.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(j.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(E.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(y.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouvelle vente"),s.queryAchats.isLoading?i.a.createElement(x.a,{message:"Chargement des donn\xe9es...",type:"info"}):s.queryAchats.isError?i.a.createElement(x.a,{message:"Erreur lors du chargement des donn\xe9es::"+s.queryAchats.error,type:"error"}):i.a.createElement(A.a,{tag:"div",blocking:!1},i.a.createElement(S.a,{theme:Object(u.a)()},i.a.createElement(h.a,{title:n.titre,data:s.queryAchats.data.rows,columns:c,options:Object(r.a)(Object(r.a)({},b.a),{},{serverSide:!0,count:s.queryAchats.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},b.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},b.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(O.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(D.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.achat)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(U,{state:n,fonctions:o,queries:s,useform:l,onSubmit:m}))},V=a(13),Q=a(87),B=a(2020),W=a(2021),Y=a(2022),Z=a(2023),$=a(343),H=a(1329),J=a(1656),G=a(1373),K=a(1992),X=a(1423);Object($.a)(e=>{e.palette,Object(V.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function _(e){const t=Object($.a)(e=>{e.palette,Object(V.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=e=>{switch(e.statut){case"Annl\xe9e":return"bg-error";case"Nouveau":return"bg-primary";case"Valid\xe9e":return"bg-green";default:return"bg-primary"}},r=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"Date achat",label:"",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null==e?" ":Object(K.a)(Object(X.a)(e),"dd/MM/yyyy HH:mm")}},{name:"quantite",label:"Quantite de tickets",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"statut",label:"Statut",options:{filter:!1,sort:!1,display:!0,customBodyRender:(r,n,o)=>i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(Q.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(H.a,{xsDown:!0},i.a.createElement(y.a,{size:"small",variant:"text",color:"primary",endIcon:i.a.createElement(Z.a,null)},i.a.createElement("small",{className:"border-radius-4  text-white px-2 py-2px "+a({id:n.rowData[0],statut:r})},r))))},(e=>{switch(e.statut){case"Annul\xe9e":return[];case"Nouveau":return[{id:1,nom:"Valider",statut:"Valid\xe9e"},{id:2,nom:"Annuler",statut:"Annul\xe9e"}];case"Valid\xe9e":default:return[]}})({id:n.rowData[0],statut:r}).map(t=>i.a.createElement(J.a,{onClick:()=>e.handleChangementStatut({id:n.rowData[0],statut:t.statut}),key:t.id,value:t.statut},t.nom)))))}},{name:"Employe",label:"Employe",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" "}}},{name:"Marchand",label:"Marchand",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" "}}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,n)=>i.a.createElement("div",null,i.a.createElement(Q.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(H.a,{xsDown:!0},i.a.createElement(y.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(Z.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>r(e,"D\xe9tails"),icon:i.a.createElement(B.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>r(e,"D\xe9tails"),icon:i.a.createElement(B.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>r(e,"Modifier"),icon:i.a.createElement(W.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>r(e,"Supprimer"),icon:i.a.createElement(Y.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>r(e,"Modifier"),icon:i.a.createElement(W.a,{color:"primary"})}]}})({id:a.rowData[0],quantite:a.rowData[1],statut:a.rowData[2],createdAt:a.rowData[3],employe:a.rowData[4],marchand:a.rowData[5]}).map(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(J.a,{onClick:()=>e.action({id:a.rowData[0],quantite:a.rowData[1],statut:a.rowData[2],createdAt:a.rowData[3],employe:a.rowData[4],marchand:a.rowData[5]}),key:e.id,value:e.statut},e.icon,"   ",i.a.createElement("span",{className:"ml-5"},e.nom)),i.a.createElement(G.a,null)))))}}]}var ee=a(1379),te=(a(1396),a(1382)),ae=a(1422),re=a(1418);t.default=()=>{const e={achat:{quantite:0,statut:"",createdAt:"",employe:"1",marchand:"1"},achat1:null,titre:"Vente de produits",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(o.useState)(e),a=Object(n.a)(t,2),c=a[0],s=a[1];let l=new m,u=new ae.a,p=new re.a;const h=Object(d.useQueryClient)(),b=Object(d.useMutation)(l.misajourStatutAchat,{onSuccess:()=>{s(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{s(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))},onSettled:()=>{h.invalidateQueries("Achats")}}),g={handleFermetureAlerte:()=>{s(Object(r.a)(Object(r.a)({},c),{},{titre:"Vente de produits",alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},c.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{s(Object(r.a)(Object(r.a)({},c),{},{achat:null,titre:"Nouvelle vente ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{s(Object(r.a)(Object(r.a)({},c),{},{alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),s(Object(r.a)(Object(r.a)({},c),{},{titre:"Vente de produits",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{s(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{O.mutate(c.achat)},handleCloseDialoguephoto:()=>{s(Object(r.a)(Object(r.a)({},c),{},{dialoguephoto:Object(r.a)(Object(r.a)({},c.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{s(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{s(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{s(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":s(Object(r.a)(Object(r.a)({},c),{},{titre:"Mise \xe0 jour ",achat:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":s(Object(r.a)(Object(r.a)({},c),{},{achat:e,dialogueSuppressionOuvert:!0}))}},handleChangementStatut:({id:e,statut:t})=>{b.mutate({id:e,statut:t})},handledatecreatedAtchange:e=>{s(Object(r.a)(Object(r.a)({},c),{},{achat:Object(r.a)(Object(r.a)({},c.achat),{},{createdAt:e})}))}},f=Object(d.useQuery)(["Achats",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>l.getTouslesAchats(c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),v=Object(d.useQuery)(["Employes",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>u.getTouslesEmployes(0,1e3,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),j=Object(d.useQuery)(["Marchands",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>p.getTouslesMarchands(0,1e3,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),E=Object(d.useMutation)(l.ajoutAchat,{onSuccess:()=>{h.invalidateQueries("Achats"),s(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{h.invalidateQueries("Achats"),s(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),y=Object(d.useMutation)(l.miseajourAchat,{onSuccess:()=>{h.invalidateQueries("Achats"),s(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{h.invalidateQueries("Achats"),s(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),O=Object(d.useMutation)(l.suppressionAchat,{onSuccess:()=>{s(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{s({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{h.invalidateQueries("Achats")}}),w={queryAchats:f,mutationMiseajour:y,mutationAjout:E,mutationSuppression:O,queryEmployes:v,queryMarchands:j},C=_(g),D=P.b().shape({quantite:P.a().required("quantite requis").positive("Le quantite doit \xeatre positif").integer("Le quantite doit \xeatre un nombre entier"),employe:P.c().required("Le champs Employe est requis"),marchand:P.c().required("Le champs Marchand est requis")}),x=Object(ee.c)({resolver:Object(te.yupResolver)(D),defaultValues:{achat:c.achat}});return i.a.createElement(z,{state:c,fonctions:g,collonnes:C,queries:w,useform:x,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},c.achat),e);void 0!==(null===(t=c.achat)||void 0===t?void 0:t.id)?w.mutationMiseajour.mutate(Object(r.a)({},a)):w.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);