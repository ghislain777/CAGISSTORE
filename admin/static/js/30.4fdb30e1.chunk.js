(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[30],{1387:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(3),r=a(0),o=a.n(r),c=a(353),i=a(1374);function s(e){const t=Object(n.a)({},e),a=t.message,r=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(c.a,{item:!0}),o.a.createElement(i.a,{color:"error"===r?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1391:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),o=a(1416),c=a(343),i=a(1766),s=(a(61),a(356)),l=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,n=e.titre,u=e.progress,m=Object(c.a)(e=>Object(i.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==n&&void 0!==n?n:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let n="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(n+="Type de fichier non support\xe9"),e.size>a&&(n+="Fichier trop volumineux."),n},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),r.a.createElement(l.a,{className:"mt-3"},r.a.createElement(s.a,{value:u}),u,"%"))}},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1397:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(624),c=a(449),i=a(1381);t.a=e=>{const t=e.id,a=e.nom,n=e.label,s=e.valeur,l=e.control,u=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{fullWidth:!0},r.a.createElement(i.a,{name:a,as:r.a.createElement(c.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:n,error:!!u})),control:l,defaultValue:s,rules:{required:"Required"}})))}},1398:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1381),c=a(1723),i=a(624),s=a(627),l=a(625),u=a(1322);const m=e=>{const t=e.label,a=e.nom,n=e.table,o=e.options,m=(e.valeur,e.error);return r.a.createElement(i.a,{fullWidth:!0,error:m?"error":""},r.a.createElement(l.a,{htmlFor:a},t),r.a.createElement(s.a,Object.assign({id:a},e),o.map(e=>r.a.createElement(c.a,{key:e.id,value:e.id},e.nom,"vehicule"===n&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===n&&" ("+e.typederequete.nom+")","utilisateur"===n&&" "+e.prenom,"tarif"===n&&"("+e.montant+")","contrat"===n&&e.client.nom+"("+e.produit.nom+")","offre"===n&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),r.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,n=e.control,c=(e.table,e.valeur);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({name:t,as:m,control:n,nom:t,label:a,valeur:c,rules:{required:"Required"}},e)))}},1399:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(17),r=a(0),o=a.n(r),c=a(1381),i=a(1357),s=a(1356);function l(e){const t=e.nom,a=e.coche,l=e.control,u=e.changement,m=e.label,d=Object(r.useState)(a),p=Object(n.a)(d,2),b=p[0],g=p[1];return o.a.createElement(s.a,{control:o.a.createElement(c.a,{name:t,control:l,render:e=>o.a.createElement(i.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),g(!b),u(!b)}}))}),label:null==m?t:m})}},1400:function(e,t,a){"use strict";a(0),a(1381),a(1723),a(624),a(627),a(625),a(1322)},1401:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(17),r=a(0),o=a.n(r),c=a(624),i=a(1470),s=a(2154),l=a(1404),u=a(1405),m=a(1381);function d(e){const t=e.nom,a=e.label,d=e.control,p=(e.error,e.valeur),b=(e.id,e.handledatechange),g=Object(r.useState)(p),f=Object(n.a)(g,2),h=f[0],v=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:t,as:o.a.createElement(i.a,{utils:l.a,locale:u.a},o.a.createElement(s.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:h,onChange:e=>(e=>{v(e),b(e)})(e)})),control:d,rules:{required:"Required"}},e))))}},1402:function(e,t,a){"use strict";a(17),a(0),a(624),a(1470),a(2109),a(1404),a(1405),a(1381)},1403:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return m}));var n=a(20),r=a.n(n),o=a(39),c=a(51);function i(e){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(r.a.mark((function e(t){var a,n,o,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,n=t.objet,o=t.handleprogress,i=new FormData,console.warn(a),i.append("objet",n),i.append("file",a),e.next=7,c.c.post("/fichier/upload",i,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:o});case 7:return s=e.sent,console.log("fichier service::: response.data "+JSON.stringify(s)),e.abrupt("return",s.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(r.a.mark((function e(t){var a,n,o,i,s,l,u,m,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,n=t.nom,o=t.modele,i=t.champ,s=t.objet,l=t.obj,u=t.handleprogress,(m=new FormData).append(l.cle,s.id),m.append("modele",o),m.append("champ",i),m.append("nom",n),m.append("cle",l.cle),m.append("valeur",l.valeur),m.append("file",a),e.next=11,c.c.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return d=e.sent,e.abrupt("return",d.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.c.post("/medias/telecharger",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1420:function(e,t,a){"use strict";var n=a(0),r=a(62);t.a=Object(r.a)(n.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1421:function(e,t,a){"use strict";var n=a(0),r=a(62);t.a=Object(r.a)(n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1450:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(20),r=a.n(n),o=a(39),c=a(51);class i{getTouslesStatutcommandes(e,t,a,n){return Object(o.a)(r.a.mark((function n(){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,c.c.get("/statutcommandes?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutStatutcommande(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.post("/statutcommandes",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourStatutcommande(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.put("/statutcommandes/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionStatutcommande(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.c.delete("/statutcommandes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2149:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(17),o=a(0),c=a.n(o),i=a(1450),s=a(133),l=a(1412),u=a.n(l),m=a(1396),d=a(447),p=a(2095),b=a(451),g=a(1377),f=a(357),h=a(354),v=a(355),j=a(1387),E=a(1413),O=(a(1414),a(51)),y=a(1371),S=a(1395),w=a(353),C=a(2091),x=a(623),P=a(2090),k=a(2089),M=a(1374),A=a(1397),F=(a(1398),a(1399),a(1391),a(1400),a(1401),a(1402),a(2110));function q(e){var t,a;const n=e.state,r=e.fonctions,o=e.queries,i=e.useform,s=e.onSubmit;return c.a.createElement("div",null,c.a.createElement(w.a,{container:!0,spacing:1,justify:"center"},c.a.createElement(w.a,{item:!0,lg:6,md:6,sm:12,xs:12},c.a.createElement(y.a,{theme:Object(O.a)()},c.a.createElement(g.a,null,c.a.createElement(C.a,{action:c.a.createElement(x.a,{"aria-label":"",onClick:r.AnnulerEnregistrement},"x"),title:"ajout"===n.pagestate.action?"Nouveau statut":"Mise \xe0 jour",subheader:""}),c.a.createElement(P.a,{className:" px-6 pt-6 pb-6"}," ",c.a.createElement("form",{onSubmit:i.handleSubmit(s)},c.a.createElement(w.a,{container:!0,spacing:4,direction:"column"},c.a.createElement(w.a,{item:!0},c.a.createElement(A.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=n.statutcommande)||void 0===t?void 0:t.nom,control:i.control,error:i.errors.nom})),c.a.createElement(w.a,{item:!0},c.a.createElement(A.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=n.statutcommande)||void 0===a?void 0:a.description,control:i.control,error:i.errors.description}))))),c.a.createElement(k.a,null,c.a.createElement(w.a,{container:!0,alignItems:"center",justify:"space-between"},c.a.createElement(w.a,{item:!0},c.a.createElement(b.a,{color:"primary",variant:"contained",type:"submit",onClick:i.handleSubmit(s)},o.mutationMiseajour.isLoading||o.mutationAjout.isLoading?c.a.createElement(M.a,{color:"inherit"}):c.a.createElement(F.a,null),c.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===n.pagestate.action?c.a.createElement(d.a,null,"Enregistrer"):c.a.createElement(d.a,null,"Mettre \xe0 jour")))),c.a.createElement(w.a,{item:!0},c.a.createElement(b.a,{variant:"outlined",color:"secondary",onClick:r.AnnulerEnregistrement},"Annuler")))))))))}var D=e=>{var t,a;const r=e.state,o=e.fonctions,i=e.collonnes,s=e.queries,l=e.useform,S=e.onSubmit;return c.a.createElement("div",{className:"m-sm-30"},c.a.createElement(f.a,{message:r.alert.message,severity:r.alert.severity,open:r.alert.open,handleAlertClose:!0===r.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(h.a,{routeSegments:[{name:r.titre}]})),c.a.createElement("div",{className:"mb-sm-30"},c.a.createElement(d.a,{variant:"h4"},r.titre)),"affichage"===r.pagestate.mode?c.a.createElement(p.a,{in:r.pagestate.affichageTable,direction:"right",unmountOnExit:!0},c.a.createElement("div",null,c.a.createElement(b.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau statut"),s.queryStatutcommandes.isLoading?c.a.createElement(j.a,{message:"Chargement des donn\xe9es...",type:"info"}):s.queryStatutcommandes.isError?c.a.createElement(j.a,{message:"Erreur lors du chargement des donn\xe9es::"+s.queryStatutcommandes.error,type:"error"}):c.a.createElement(E.a,{tag:"div",blocking:!1},c.a.createElement(y.a,{theme:Object(O.a)()},c.a.createElement(u.a,{title:r.titre,data:s.queryStatutcommandes.data.rows.map(e=>({statutcommande:e})),columns:i,options:Object(n.a)(Object(n.a)({},m.a),{},{serverSide:!0,count:s.queryStatutcommandes.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:r.tableconfig.rowsPerPage,textLabels:Object(n.a)(Object(n.a)({},m.a.textLabels),{},{toolbar:Object(n.a)(Object(n.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),c.a.createElement(g.a,{className:"w-full overflow-auto",elevation:8},c.a.createElement(v.a,{open:r.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=r.statutcommande)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):c.a.createElement(q,{state:r,fonctions:o,queries:s,useform:l,onSubmit:S}))},R=a(13),N=a(87),T=a(2111),L=a(1420),I=a(1421),z=a(2112),Q=a(343),V=a(1331),W=a(1723),B=a(1375);Object(Q.a)(e=>{e.palette,Object(R.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function H(e){const t=Object(Q.a)(e=>{e.palette,Object(R.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"statutcommande",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n,r;return null!==(n=null===(r=e.id)||void 0===r?void 0:r.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"statutcommande",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=e.nom)&&void 0!==n?n:""}}},{name:"statutcommande",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=e.description)&&void 0!==n?n:""}}},{name:"statutcommande",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,n,r)=>c.a.createElement("div",null,c.a.createElement(N.j,{menuButton:c.a.createElement("div",{className:t.userMenu},c.a.createElement(V.a,{xsDown:!0},c.a.createElement(b.a,{size:"small",variant:"outlined",color:"primary",endIcon:c.a.createElement(z.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:c.a.createElement(T.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:c.a.createElement(T.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:c.a.createElement(L.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:c.a.createElement(I.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:c.a.createElement(L.a,{color:"primary"})}]}})(e).map(t=>c.a.createElement(c.a.Fragment,null,c.a.createElement(W.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",c.a.createElement("span",{className:"ml-5"},t.nom)),c.a.createElement(B.a,null)))))}}]}var J=a(1381),U=(a(1403),a(1394));t.default=()=>{const e={statutcommande:{nom:"",description:""},statutcommande1:null,titre:"Statuts des commandes",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},t=Object(o.useState)(e),a=Object(r.a)(t,2),l=a[0],u=a[1];let m=new i.a;const d=Object(s.useQueryClient)(),p={handleFermetureAlerte:()=>{u(Object(n.a)(Object(n.a)({},l),{},{titre:"Statuts des commandes",alert:Object(n.a)(Object(n.a)({},l.alert),{},{open:!1}),pagestate:Object(n.a)(Object(n.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(n.a)(Object(n.a)({},l),{},{statutcommande:null,titre:"Nouveau statut",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(n.a)(Object(n.a)({},l),{},{alert:Object(n.a)(Object(n.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(n.a)(Object(n.a)({},l),{},{titre:"Statuts des commandes",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{h.mutate(l.statutcommande)},handleCloseDialoguephoto:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialoguephoto:Object(n.a)(Object(n.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(n.a)(Object(n.a)({},l),{},{titre:"Mise \xe0 jour ",statutcommande:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(n.a)(Object(n.a)({},l),{},{statutcommande:e,dialogueSuppressionOuvert:!0}))}}},b=Object(s.useQuery)(["Statutcommandes",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>m.getTouslesStatutcommandes(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),g=Object(s.useMutation)(m.ajoutStatutcommande,{onSuccess:()=>{d.invalidateQueries("Statutcommandes"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Statutcommandes"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(s.useMutation)(m.miseajourStatutcommande,{onSuccess:()=>{d.invalidateQueries("Statutcommandes"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Statutcommandes"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(s.useMutation)(m.suppressionStatutcommande,{onSuccess:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Statutcommandes")}}),v={queryStatutcommandes:b,mutationMiseajour:f,mutationAjout:g,mutationSuppression:h},j=H(p),E=S.b().shape({nom:S.c().required("Le champs Nom est requis"),description:S.c().required("Le champs Description est requis")}),O=Object(J.c)({resolver:Object(U.yupResolver)(E),defaultValues:{statutcommande:l.statutcommande}});return c.a.createElement(D,{state:l,fonctions:p,collonnes:j,queries:v,useform:O,onSubmit:e=>{var t;let a=Object(n.a)(Object(n.a)({},l.statutcommande),e);void 0!==(null===(t=l.statutcommande)||void 0===t?void 0:t.id)?v.mutationMiseajour.mutate(Object(n.a)({},a)):v.mutationAjout.mutate(Object(n.a)({},a))}})}}}]);