(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[7],{1387:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(3),n=t(0),o=t.n(n),c=t(353),i=t(1374);function l(e){const a=Object(r.a)({},e),t=a.message,n=a.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(c.a,{item:!0}),o.a.createElement(i.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,t,".")))}},1391:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var r=t(0),n=t.n(r),o=t(1416),c=t(343),i=t(1766),l=(t(61),t(356)),s=t(353);function u(e){const a=e.onUpload,t=e.onSupprimer,r=e.titre,u=e.progress,m=Object(c.a)(e=>Object(i.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,a,t)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return a.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>t&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var t;return a(null!==(t=e[0])&&void 0!==t?t:null)},onDelete:t})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(l.a,{value:u}),u,"%"))}},1396:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1397:function(e,a,t){"use strict";var r=t(0),n=t.n(r),o=t(624),c=t(449),i=t(1381);a.a=e=>{const a=e.id,t=e.nom,r=e.label,l=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(i.a,{name:t,as:n.a.createElement(c.a,Object.assign({},e,{id:a,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:l,rules:{required:"Required"}})))}},1398:function(e,a,t){"use strict";var r=t(0),n=t.n(r),o=t(1381),c=t(1723),i=t(624),l=t(627),s=t(625),u=t(1322);const m=e=>{const a=e.label,t=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error);return n.a.createElement(i.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:t},a),n.a.createElement(l.a,Object.assign({id:t},e),o.map(e=>n.a.createElement(c.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,m?m.message:null))};a.a=function(e){const a=e.nom,t=e.label,r=e.control,c=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:a,as:m,control:r,nom:a,label:t,valeur:c,rules:{required:"Required"}},e)))}},1399:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t(17),n=t(0),o=t.n(n),c=t(1381),i=t(1357),l=t(1356);function s(e){const a=e.nom,t=e.coche,s=e.control,u=e.changement,m=e.label,p=Object(n.useState)(t),d=Object(r.a)(p,2),b=d[0],g=d[1];return o.a.createElement(l.a,{control:o.a.createElement(c.a,{name:a,control:s,render:e=>o.a.createElement(i.a,Object.assign({},e,{checked:b,onChange:a=>{e.onChange(a.target.checked),g(!b),u(!b)}}))}),label:null==m?a:m})}},1400:function(e,a,t){"use strict";t(0),t(1381),t(1723),t(624),t(627),t(625),t(1322)},1401:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var r=t(17),n=t(0),o=t.n(n),c=t(624),i=t(1470),l=t(2154),s=t(1404),u=t(1405),m=t(1381);function p(e){const a=e.nom,t=e.label,p=e.control,d=(e.error,e.valeur),b=(e.id,e.handledatechange),g=Object(n.useState)(d),f=Object(r.a)(g,2),h=f[0],v=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:a,as:o.a.createElement(i.a,{utils:s.a,locale:u.a},o.a.createElement(l.a,{id:a,label:t,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:t,inputVariant:"outlined",value:h,onChange:e=>(e=>{v(e),b(e)})(e)})),control:p,rules:{required:"Required"}},e))))}},1402:function(e,a,t){"use strict";t(17),t(0),t(624),t(1470),t(2109),t(1404),t(1405),t(1381)},1403:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"c",(function(){return s})),t.d(a,"b",(function(){return m}));var r=t(20),n=t.n(r),o=t(39),c=t(55);function i(e){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(n.a.mark((function e(a){var t,r,o,i,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.fichier,r=a.objet,o=a.handleprogress,i=new FormData,console.warn(t),i.append("objet",r),i.append("file",t),e.next=7,c.c.post("/fichier/upload",i,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:o});case 7:return l=e.sent,console.log("fichier service::: response.data "+JSON.stringify(l)),e.abrupt("return",l.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(n.a.mark((function e(a){var t,r,o,i,l,s,u,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.fichier,r=a.nom,o=a.modele,i=a.champ,l=a.objet,s=a.obj,u=a.handleprogress,(m=new FormData).append(s.cle,l.id),m.append("modele",o),m.append("champ",i),m.append("nom",r),m.append("cle",s.cle),m.append("valeur",s.valeur),m.append("file",t),e.next=11,c.c.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return p=e.sent,e.abrupt("return",p.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.c.post("/medias/telecharger",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1420:function(e,a,t){"use strict";var r=t(0),n=t(62);a.a=Object(n.a)(r.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1421:function(e,a,t){"use strict";var r=t(0),n=t(62);a.a=Object(n.a)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},2134:function(e,a,t){"use strict";t.r(a);var r=t(3),n=t(17),o=t(0),c=t.n(o),i=t(20),l=t.n(i),s=t(39),u=t(55);class m{getTouslesParametres(e,a,t,r){return Object(s.a)(l.a.mark((function r(){var n;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,u.c.get("/parametres?itemsPerPage=".concat(a,"&page=").concat(e,"&id=").concat(t," "));case 3:return n=r.sent,r.abrupt("return",n.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutParametre(e){return Object(s.a)(l.a.mark((function a(){var t;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.c.post("/parametres",e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourParametre(e){return Object(s.a)(l.a.mark((function a(){var t;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.c.put("/parametres/"+e.id,e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionParametre(e){return Object(s.a)(l.a.mark((function a(){var t;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.c.delete("/parametres/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}var p=t(133),d=t(1412),b=t.n(d),g=t(1396),f=t(447),h=t(2095),v=t(451),j=t(1377),E=t(357),O=t(354),y=t(355),P=t(1387),w=t(1413),C=(t(1414),t(1371)),S=t(1395),x=t(353),k=t(2091),M=t(623),q=t(2090),A=t(2089),F=t(1374),R=t(1397),D=(t(1398),t(1399),t(1391),t(1400),t(1401),t(1402),t(2110));function N(e){var a,t,r;const n=e.state,o=e.fonctions,i=e.queries,l=e.useform,s=e.onSubmit;return c.a.createElement("div",null,c.a.createElement(x.a,{container:!0,spacing:1,justify:"center"},c.a.createElement(x.a,{item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(C.a,{theme:Object(u.a)()},c.a.createElement(j.a,null,c.a.createElement(k.a,{action:c.a.createElement(M.a,{"aria-label":"",onClick:o.AnnulerEnregistrement},"x"),title:"ajout"===n.pagestate.action?"Nouveau parametre":"Mise \xe0 jour",subheader:""}),c.a.createElement(q.a,{className:" px-6 pt-6 pb-6"}," ",c.a.createElement("form",{onSubmit:l.handleSubmit(s)},c.a.createElement(x.a,{container:!0,spacing:4,direction:"column"},c.a.createElement(x.a,{item:!0},c.a.createElement(R.a,{disabled:!0,id:"nom",nom:"nom",label:"Nom du parametre",valeur:null===(a=n.parametre)||void 0===a?void 0:a.nom,control:l.control,error:l.errors.nom})),c.a.createElement(x.a,{item:!0},c.a.createElement(R.a,{id:"valeur",nom:"valeur",label:"Valeur",valeur:null===(t=n.parametre)||void 0===t?void 0:t.valeur,control:l.control,error:l.errors.valeur})),c.a.createElement(x.a,{item:!0},c.a.createElement(R.a,{readOnly:!0,id:"description",nom:"description",label:"Description",valeur:null===(r=n.parametre)||void 0===r?void 0:r.description,control:l.control,error:l.errors.description}))))),c.a.createElement(A.a,null,c.a.createElement(x.a,{container:!0,alignItems:"center",justify:"space-between"},c.a.createElement(x.a,{item:!0},c.a.createElement(v.a,{color:"primary",variant:"contained",type:"submit",onClick:l.handleSubmit(s)},i.mutationMiseajour.isLoading||i.mutationAjout.isLoading?c.a.createElement(F.a,{color:"inherit"}):c.a.createElement(D.a,null),c.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===n.pagestate.action?c.a.createElement(f.a,null,"Enregistrer"):c.a.createElement(f.a,null,"Mettre \xe0 jour")))),c.a.createElement(x.a,{item:!0},c.a.createElement(v.a,{variant:"outlined",color:"secondary",onClick:o.AnnulerEnregistrement},"Annuler")))))))))}var T=e=>{var a,t;const n=e.state,o=e.fonctions,i=e.collonnes,l=e.queries,s=e.useform,m=e.onSubmit;return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement(E.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(O.a,{routeSegments:[{name:n.titre}]})),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(f.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?c.a.createElement(h.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},c.a.createElement("div",null,c.a.createElement(v.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau parametre"),l.queryParametres.isLoading?c.a.createElement(P.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryParametres.isError?c.a.createElement(P.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryParametres.error,type:"error"}):c.a.createElement(w.a,{tag:"div",blocking:!1},c.a.createElement(C.a,{theme:Object(u.a)()},c.a.createElement(b.a,{title:n.titre,data:l.queryParametres.data.rows.map(e=>({parametre:e})),columns:i,options:Object(r.a)(Object(r.a)({},g.a),{},{serverSide:!0,count:l.queryParametres.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},g.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},g.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),c.a.createElement(j.a,{className:"w-full overflow-auto",elevation:8},c.a.createElement(y.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(a="Confirmez la suppression de "+(null===(t=n.parametre)||void 0===t?void 0:t.nom))&&void 0!==a?a:""})))):c.a.createElement(N,{state:n,fonctions:o,queries:l,useform:s,onSubmit:m}))},L=t(13),z=t(87),I=t(2111),V=t(1420),Q=t(1421),W=t(2112),B=t(343),H=t(1331),J=t(1723),U=t(1375);Object(B.a)(e=>{e.palette,Object(L.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function G(e){const a=Object(B.a)(e=>{e.palette,Object(L.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),t=(a,t)=>{e.handleClickSurAction(a,t)};return[{name:"parametre",label:"id",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"parametre",label:"Param\xe8tre",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r;return null!==(r=e.description)&&void 0!==r?r:""}}},{name:"parametre",label:"Nom du parametre",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,a,t)=>{var r;return null!==(r=e.nom)&&void 0!==r?r:""}}},{name:"parametre",label:"Valeur",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r;return null!==(r=e.valeur)&&void 0!==r?r:""}}},{name:"parametre",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>c.a.createElement("div",null,c.a.createElement(z.j,{menuButton:c.a.createElement("div",{className:a.userMenu},c.a.createElement(H.a,{xsDown:!0},c.a.createElement(v.a,{size:"small",variant:"outlined",color:"primary",endIcon:c.a.createElement(W.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:c.a.createElement(I.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:c.a.createElement(I.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:c.a.createElement(V.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>t(e,"Supprimer"),icon:c.a.createElement(Q.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:c.a.createElement(V.a,{color:"primary"})}]}})(e).map(a=>c.a.createElement(c.a.Fragment,null,c.a.createElement(J.a,{onClick:()=>a.action(e),key:a.id,value:a.statut},a.icon,"   ",c.a.createElement("span",{className:"ml-5"},a.nom)),c.a.createElement(U.a,null)))))}}]}var Y=t(1381),K=(t(1403),t(1394));a.default=()=>{const e={parametre:{nom:"",valeur:"",description:""},parametre1:null,titre:"Parametres",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},a=Object(o.useState)(e),t=Object(n.a)(a,2),i=t[0],l=t[1];let s=new m;const u=Object(p.useQueryClient)(),d={handleFermetureAlerte:()=>{l(Object(r.a)(Object(r.a)({},i),{},{titre:"Parametres",alert:Object(r.a)(Object(r.a)({},i.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},i.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{l(Object(r.a)(Object(r.a)({},i),{},{parametre:null,titre:"Nouveau parametre",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{l(Object(r.a)(Object(r.a)({},i),{},{alert:Object(r.a)(Object(r.a)({},i.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),l(Object(r.a)(Object(r.a)({},i),{},{titre:"Parametres",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{l(Object(r.a)(Object(r.a)({},i),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{h.mutate(i.parametre)},handleCloseDialoguephoto:()=>{l(Object(r.a)(Object(r.a)({},i),{},{dialoguephoto:Object(r.a)(Object(r.a)({},i.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{l(Object(r.a)(Object(r.a)({},i),{},{tableconfig:Object(r.a)(Object(r.a)({},i.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{l(Object(r.a)(Object(r.a)({},i),{},{tableconfig:Object(r.a)(Object(r.a)({},i.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{l(Object(r.a)(Object(r.a)({},i),{},{tableconfig:Object(r.a)(Object(r.a)({},i.tableconfig),{},{page:e})}))},handleClickSurAction:(e,a)=>{switch(console.log(a),a){case"D\xe9tails":console.log("action details");break;case"Modifier":l(Object(r.a)(Object(r.a)({},i),{},{titre:"Mise \xe0 jour ",parametre:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":l(Object(r.a)(Object(r.a)({},i),{},{parametre:e,dialogueSuppressionOuvert:!0}))}}},b=Object(p.useQuery)(["Parametres",i.tableconfig.page,i.tableconfig.rowsPerPage,i.tableconfig.recherche,i.tableconfig.filtre],()=>s.getTouslesParametres(i.tableconfig.page,i.tableconfig.rowsPerPage,i.tableconfig.recherche,i.tableconfig.filtre),{keepPreviousData:!0}),g=Object(p.useMutation)(s.ajoutParametre,{onSuccess:()=>{u.invalidateQueries("Parametres"),l(Object(r.a)(Object(r.a)({},i),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{u.invalidateQueries("Parametres"),l(Object(r.a)(Object(r.a)({},i),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(p.useMutation)(s.miseajourParametre,{onSuccess:()=>{u.invalidateQueries("Parametres"),l(Object(r.a)(Object(r.a)({},i),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{u.invalidateQueries("Parametres"),l(Object(r.a)(Object(r.a)({},i),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(p.useMutation)(s.suppressionParametre,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},i),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{u.invalidateQueries("Parametres")}}),v={queryParametres:b,mutationMiseajour:f,mutationAjout:g,mutationSuppression:h},j=G(d),E=S.b().shape({nom:S.c().required("Le champs Nom du parametre est requis"),valeur:S.c().required("Le champs Valeur est requis"),description:S.c().required("Le champs Description est requis")}),O=Object(Y.c)({resolver:Object(K.yupResolver)(E),defaultValues:{parametre:i.parametre}});return c.a.createElement(T,{state:i,fonctions:d,collonnes:j,queries:v,useform:O,onSubmit:e=>{var a;let t=Object(r.a)(Object(r.a)({},i.parametre),e);void 0!==(null===(a=i.parametre)||void 0===a?void 0:a.id)?v.mutationMiseajour.mutate(Object(r.a)({},t)):v.mutationAjout.mutate(Object(r.a)({},t))}})}}}]);