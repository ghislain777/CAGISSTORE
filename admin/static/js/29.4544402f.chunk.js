(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[29],{1387:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(3),n=a(0),o=a.n(n),i=a(353),l=a(1374);function c(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(l.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1391:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),o=a(1416),i=a(343),l=a(1766),c=(a(61),a(356)),s=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(i.a)(e=>Object(l.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(c.a,{value:u}),u,"%"))}},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1397:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(624),i=a(449),l=a(1381);t.a=e=>{const t=e.id,a=e.nom,r=e.label,c=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(l.a,{name:a,as:n.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:c,rules:{required:"Required"}})))}},1398:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1381),i=a(1723),l=a(624),c=a(627),s=a(625),u=a(1322);const m=e=>{const t=e.label,a=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error);return n.a.createElement(l.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(c.a,Object.assign({id:a},e),o.map(e=>n.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,i=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:i,rules:{required:"Required"}},e)))}},1399:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(17),n=a(0),o=a.n(n),i=a(1381),l=a(1357),c=a(1356);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,p=Object(n.useState)(a),d=Object(r.a)(p,2),b=d[0],g=d[1];return o.a.createElement(c.a,{control:o.a.createElement(i.a,{name:t,control:s,render:e=>o.a.createElement(l.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),g(!b),u(!b)}}))}),label:null==m?t:m})}},1400:function(e,t,a){"use strict";a(0),a(1381),a(1723),a(624),a(627),a(625),a(1322)},1401:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(17),n=a(0),o=a.n(n),i=a(624),l=a(1470),c=a(2154),s=a(1404),u=a(1405),m=a(1381);function p(e){const t=e.nom,a=e.label,p=e.control,d=(e.error,e.valeur),b=(e.id,e.handledatechange),g=Object(n.useState)(d),f=Object(r.a)(g,2),h=f[0],j=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:t,as:o.a.createElement(l.a,{utils:s.a,locale:u.a},o.a.createElement(c.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:h,onChange:e=>(e=>{j(e),b(e)})(e)})),control:p,rules:{required:"Required"}},e))))}},1402:function(e,t,a){"use strict";a(17),a(0),a(624),a(1470),a(2109),a(1404),a(1405),a(1381)},1403:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return m}));var r=a(20),n=a.n(r),o=a(39),i=a(55);function l(e){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(n.a.mark((function e(t){var a,r,o,l,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.objet,o=t.handleprogress,l=new FormData,console.warn(a),l.append("objet",r),l.append("file",a),e.next=7,i.c.post("/fichier/upload",l,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:o});case 7:return c=e.sent,console.log("fichier service::: response.data "+JSON.stringify(c)),e.abrupt("return",c.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(n.a.mark((function e(t){var a,r,o,l,c,s,u,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,o=t.modele,l=t.champ,c=t.objet,s=t.obj,u=t.handleprogress,(m=new FormData).append(s.cle,c.id),m.append("modele",o),m.append("champ",l),m.append("nom",r),m.append("cle",s.cle),m.append("valeur",s.valeur),m.append("file",a),e.next=11,i.c.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return p=e.sent,e.abrupt("return",p.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.post("/medias/telecharger",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1420:function(e,t,a){"use strict";var r=a(0),n=a(62);t.a=Object(n.a)(r.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1421:function(e,t,a){"use strict";var r=a(0),n=a(62);t.a=Object(n.a)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1500:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),o=a(39),i=a(55);class l{getTouslesRoles(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.c.get("/roles?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutRole(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.post("/roles",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourRole(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.put("/roles/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionRole(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.delete("/roles/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2141:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),o=a(0),i=a.n(o),l=a(1500),c=a(133),s=a(1412),u=a.n(s),m=a(1396),p=a(1327),d=a(2094),b=a(2093),g=a(447),f=a(2095),h=a(451),j=a(1377),v=a(357),E=a(354),O=a(355),y=a(1387),w=a(1413),C=(a(1414),a(1395)),R=a(353),S=a(2091),x=a(623),P=a(2090),D=a(2089),k=a(1374),M=a(1397),A=(a(1398),a(1399),a(1391),a(1400),a(1401),a(1402),a(2110));function F(e){var t,a;const r=e.state,n=e.fonctions,o=e.queries,l=e.useform,c=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(R.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(R.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(j.a,null,i.a.createElement(S.a,{action:i.a.createElement(x.a,{"aria-label":"",onClick:n.AnnulerEnregistrement},"x"),title:"ajout"===r.pagestate.action?"Nouveau r\xf4le":"Mise \xe0 jour ",subheader:""}),i.a.createElement(P.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:l.handleSubmit(c)},i.a.createElement(R.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(R.a,{item:!0},i.a.createElement(M.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=r.role)||void 0===t?void 0:t.nom,control:l.control,error:l.errors.nom})),i.a.createElement(R.a,{item:!0},i.a.createElement(M.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=r.role)||void 0===a?void 0:a.description,control:l.control,error:l.errors.description}))))),i.a.createElement(D.a,null,i.a.createElement(R.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(R.a,{item:!0},i.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit",onClick:l.handleSubmit(c)},o.mutationMiseajour.isLoading||o.mutationAjout.isLoading?i.a.createElement(k.a,{color:"inherit"}):i.a.createElement(A.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===r.pagestate.action?i.a.createElement(g.a,null,"Enregistrer"):i.a.createElement(g.a,null,"Mettre \xe0 jour")))),i.a.createElement(R.a,{item:!0},i.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:n.AnnulerEnregistrement},"Annuler"))))))))}var q=a(55);var N=e=>{var t,a;const n=e.state,o=e.fonctions,l=e.collonnes,c=e.queries,s=e.useform,C=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(p.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},i.a.createElement(d.a,{id:""},n.dialoguephoto.titre),i.a.createElement(b.a,null,i.a.createElement("img",{src:q.d+"/fichiers/"+n.dialoguephoto.objet+"/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),i.a.createElement(v.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(E.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(g.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(f.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(h.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau r\xf4le"),c.queryRoles.isLoading?i.a.createElement(y.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryRoles.isError?i.a.createElement(y.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryRoles.error,type:"error"}):i.a.createElement(w.a,{tag:"div",blocking:!1},i.a.createElement(u.a,{title:n.titre,data:c.queryRoles.data.rows,columns:l,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:c.queryRoles.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})})),i.a.createElement(j.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(O.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.role)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(F,{state:n,fonctions:o,queries:c,useform:s,onSubmit:C}))},T=a(13),L=a(87),I=a(2111),z=a(1420),W=a(1421),Q=a(2112),V=a(343),B=a(1331),G=a(1723),H=a(1375);a(584);Object(V.a)(e=>{e.palette,Object(T.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function J(e){const t=Object(V.a)(e=>{e.palette,Object(T.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(L.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(B.a,{xsDown:!0},i.a.createElement(h.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(Q.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(I.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(I.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(z.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(W.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(z.a,{color:"primary"})}]}})({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2]}).map(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(G.a,{onClick:()=>e.action({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2]}),key:e.id,value:e.statut},e.icon,"   ",i.a.createElement("span",{className:"ml-5"},e.nom)),i.a.createElement(H.a,null)))))}}]}var U=a(1381),Y=(a(1403),a(1394));t.default=()=>{const e={role:{nom:"",description:""},role1:null,titre:"Gestion des roles",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(o.useState)(e),a=Object(n.a)(t,2),s=a[0],u=a[1];let m=new l.a;const p=Object(c.useQueryClient)(),d={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des roles",alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},s),{},{role:null,titre:"Nouveau r\xf4le ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des roles",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{h.mutate(s.role)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialoguephoto:Object(r.a)(Object(r.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},s),{},{titre:"Mise \xe0 jour ",role:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},s),{},{role:e,dialogueSuppressionOuvert:!0}))}}},b=Object(c.useQuery)(["Roles",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>m.getTouslesRoles(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),g=Object(c.useMutation)(m.ajoutRole,{onSuccess:()=>{p.invalidateQueries("Roles"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Roles"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(c.useMutation)(m.miseajourRole,{onSuccess:()=>{p.invalidateQueries("Roles"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Roles"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(c.useMutation)(m.suppressionRole,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Roles")}}),j={queryRoles:b,mutationMiseajour:f,mutationAjout:g,mutationSuppression:h},v=J(d),E=C.b().shape({nom:C.c().required("Le champs Nom est requis"),description:C.c().required("Le champs Description est requis")}),O=Object(U.c)({resolver:Object(Y.yupResolver)(E),defaultValues:{role:s.role}});return i.a.createElement(N,{state:s,fonctions:d,collonnes:v,queries:j,useform:O,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},s.role),e);void 0!==(null===(t=s.role)||void 0===t?void 0:t.id)?j.mutationMiseajour.mutate(Object(r.a)({},a)):j.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);