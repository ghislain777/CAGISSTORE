(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[20],{1387:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(3),n=a(0),s=a.n(n),o=a(353),i=a(1374);function l(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},s.a.createElement(o.a,{item:!0}),s.a.createElement(i.a,{color:"error"===n?"secondary":"primary"})," ",s.a.createElement("span",null,a,".")))}},1391:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),s=a(1416),o=a(343),i=a(1766),l=(a(61),a(356)),c=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,d=Object(o.a)(e=>Object(i.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:d.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(c.a,{className:"mt-3"},n.a.createElement(l.a,{value:u}),u,"%"))}},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1397:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(624),o=a(449),i=a(1381);t.a=e=>{const t=e.id,a=e.nom,r=e.label,l=e.valeur,c=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{fullWidth:!0},n.a.createElement(i.a,{name:a,as:n.a.createElement(o.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:c,defaultValue:l,rules:{required:"Required"}})))}},1398:function(e,t,a){"use strict";var r=a(0),n=a.n(r),s=a(1381),o=a(1723),i=a(624),l=a(627),c=a(625),u=a(1322);const d=e=>{const t=e.label,a=e.nom,r=e.table,s=e.options,d=(e.valeur,e.error);return n.a.createElement(i.a,{fullWidth:!0,error:d?"error":""},n.a.createElement(c.a,{htmlFor:a},t),n.a.createElement(l.a,Object.assign({id:a},e),s.map(e=>n.a.createElement(o.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,d?d.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,o=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,Object.assign({name:t,as:d,control:r,nom:t,label:a,valeur:o,rules:{required:"Required"}},e)))}},1399:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(17),n=a(0),s=a.n(n),o=a(1381),i=a(1357),l=a(1356);function c(e){const t=e.nom,a=e.coche,c=e.control,u=e.changement,d=e.label,m=Object(n.useState)(a),p=Object(r.a)(m,2),b=p[0],f=p[1];return s.a.createElement(l.a,{control:s.a.createElement(o.a,{name:t,control:c,render:e=>s.a.createElement(i.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),f(!b),u(!b)}}))}),label:null==d?t:d})}},1400:function(e,t,a){"use strict";a(0),a(1381),a(1723),a(624),a(627),a(625),a(1322)},1401:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(17),n=a(0),s=a.n(n),o=a(624),i=a(1470),l=a(2154),c=a(1404),u=a(1405),d=a(1381);function m(e){const t=e.nom,a=e.label,m=e.control,p=(e.error,e.valeur),b=(e.id,e.handledatechange),f=Object(n.useState)(p),v=Object(r.a)(f,2),g=v[0],h=v[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{fullWidth:!0},s.a.createElement(d.a,Object.assign({name:t,as:s.a.createElement(i.a,{utils:c.a,locale:u.a},s.a.createElement(l.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:g,onChange:e=>(e=>{h(e),b(e)})(e)})),control:m,rules:{required:"Required"}},e))))}},1402:function(e,t,a){"use strict";a(17),a(0),a(624),a(1470),a(2109),a(1404),a(1405),a(1381)},1403:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return d}));var r=a(20),n=a.n(r),s=a(39),o=a(51);function i(e){return l.apply(this,arguments)}function l(){return(l=Object(s.a)(n.a.mark((function e(t){var a,r,s,i,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.objet,s=t.handleprogress,i=new FormData,console.warn(a),i.append("objet",r),i.append("file",a),e.next=7,o.c.post("/fichier/upload",i,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:s});case 7:return l=e.sent,console.log("fichier service::: response.data "+JSON.stringify(l)),e.abrupt("return",l.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e){return u.apply(this,arguments)}function u(){return(u=Object(s.a)(n.a.mark((function e(t){var a,r,s,i,l,c,u,d,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,s=t.modele,i=t.champ,l=t.objet,c=t.obj,u=t.handleprogress,(d=new FormData).append(c.cle,l.id),d.append("modele",s),d.append("champ",i),d.append("nom",r),d.append("cle",c.cle),d.append("valeur",c.valeur),d.append("file",a),e.next=11,o.c.post("/medias/upload",d,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return m=e.sent,e.abrupt("return",m.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.post("/medias/telecharger",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1420:function(e,t,a){"use strict";var r=a(0),n=a(62);t.a=Object(n.a)(r.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1421:function(e,t,a){"use strict";var r=a(0),n=a(62);t.a=Object(n.a)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1435:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(20),n=a.n(r),s=a(39),o=a(51);class i{getTouslesClients(e,t,a,r){return Object(s.a)(n.a.mark((function r(){var s;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.c.get("/clients?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return s=r.sent,r.abrupt("return",s.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutClient(e){return Object(s.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.post("/clients",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourClient(e){return Object(s.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.put("/clients/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionClient(e){return Object(s.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.delete("/clients/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionImage(e){return Object(s.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.post("/medias/delete/".concat(e.id,"/client"),{});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1453:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(20),n=a.n(r),s=a(39),o=a(51);class i{getTouslesAdresses(e,t,a,r){return Object(s.a)(n.a.mark((function r(){var s;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.c.get("/adresses?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return s=r.sent,r.abrupt("return",s.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutAdresse(e){return Object(s.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.post("/adresses",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourAdresse(e){return Object(s.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.put("/adresses/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionAdresse(e){return Object(s.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.delete("/adresses/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}toglepardefautAdresse(e){return Object(s.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.put("/adresses/"+e.id,{pardefaut:!e.pardefaut});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1521:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(20),n=a.n(r),s=a(39),o=a(51);class i{getTouslesQuartiers(e,t,a,r){return Object(s.a)(n.a.mark((function r(){var s;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.c.get("/quartiers?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return s=r.sent,r.abrupt("return",s.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutQuartier(e){return Object(s.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.post("/quartiers",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourQuartier(e){return Object(s.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.put("/quartiers/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionQuartier(e){return Object(s.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.delete("/quartiers/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2151:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),s=a(0),o=a.n(s),i=a(1453),l=a(133),c=a(1412),u=a.n(c),d=a(1396),m=a(447),p=a(2095),b=a(451),f=a(1377),v=a(357),g=a(354),h=a(355),j=a(1387),E=a(1413),O=(a(1414),a(51)),w=a(1371),y=a(1395),A=a(353),C=a(2091),x=a(623),S=a(2090),P=a(2089),q=a(1374),k=a(1397),T=a(1398),M=(a(1399),a(1391),a(1400),a(1401),a(1402),a(2110));function N(e){var t,a,r,n,s,i,l,c,u,d,p,v,g,h,E;const y=e.state,N=e.fonctions,F=e.queries,R=e.useform,D=e.onSubmit;return o.a.createElement("div",null,o.a.createElement(A.a,{container:!0,spacing:1,justify:"center"},o.a.createElement(A.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(w.a,{theme:Object(O.a)()},o.a.createElement(f.a,null,o.a.createElement(C.a,{action:o.a.createElement(x.a,{"aria-label":"",onClick:N.AnnulerEnregistrement},"x"),title:"ajout"===y.pagestate.action?"Nouveau":"Mise \xe0 jour",subheader:""}),o.a.createElement(S.a,{className:" px-6 pt-6 pb-6"}," ",o.a.createElement("form",{onSubmit:R.handleSubmit(D)},o.a.createElement(A.a,{container:!0,spacing:4,direction:"column"},o.a.createElement(A.a,{item:!0},o.a.createElement(k.a,{id:"alias",nom:"alias",label:"Alias de l'adresse",valeur:null===(t=y.adresse)||void 0===t?void 0:t.alias,control:R.control,error:R.errors.alias})),o.a.createElement(A.a,{item:!0},o.a.createElement(k.a,{id:"Nom",nom:"Nom",label:"Nom",valeur:null===(a=y.adresse)||void 0===a?void 0:a.Nom,control:R.control,error:R.errors.Nom})),o.a.createElement(A.a,{item:!0},o.a.createElement(k.a,{id:"prenom",nom:"prenom",label:"Pr\xe9nom",valeur:null===(r=y.adresse)||void 0===r?void 0:r.prenom,control:R.control,error:R.errors.prenom})),o.a.createElement(A.a,{item:!0},o.a.createElement(k.a,{id:"telephone",nom:"telephone",label:"T\xe9l\xe9phone",valeur:null===(n=y.adresse)||void 0===n?void 0:n.telephone,control:R.control,error:R.errors.telephone})),o.a.createElement(A.a,{item:!0},o.a.createElement(k.a,{id:"Adresse",nom:"Adresse",label:"Adresse",valeur:null===(s=y.adresse)||void 0===s?void 0:s.Adresse,control:R.control,error:R.errors.Adresse})),o.a.createElement(A.a,{item:!0},F.queryClients.isLoading?o.a.createElement(j.a,{message:"chargement des Clients"}):o.a.createElement(T.a,{id:"client",name:"client",label:"client",table:"client",control:R.control,options:F.queryClients.data.rows,error:R.errors.client,defaultValue:null!==(i=null===(l=y.adresse)||void 0===l||null===(c=l.Client)||void 0===c?void 0:c.id)&&void 0!==i?i:"1",valeur:null!==(u=null===(d=y.adresse)||void 0===d?void 0:d.client)&&void 0!==u?u:""})),o.a.createElement(A.a,{item:!0},F.queryQuartiers.isLoading?o.a.createElement(j.a,{message:"chargement des Quartiers"}):o.a.createElement(T.a,{id:"quartier",name:"quartier",label:"quartier",table:"quartier",control:R.control,options:F.queryQuartiers.data.rows,error:R.errors.quartier,defaultValue:null!==(p=null===(v=y.adresse)||void 0===v||null===(g=v.Quartier)||void 0===g?void 0:g.id)&&void 0!==p?p:"1",valeur:null!==(h=null===(E=y.adresse)||void 0===E?void 0:E.quartier)&&void 0!==h?h:""}))))),o.a.createElement(P.a,null,o.a.createElement(A.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(A.a,{item:!0},o.a.createElement(b.a,{color:"primary",variant:"contained",type:"submit",onClick:R.handleSubmit(D)},F.mutationMiseajour.isLoading||F.mutationAjout.isLoading?o.a.createElement(q.a,{color:"inherit"}):o.a.createElement(M.a,null),o.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===y.pagestate.action?o.a.createElement(m.a,null,"Enregistrer"):o.a.createElement(m.a,null,"Mettre \xe0 jour")))),o.a.createElement(A.a,{item:!0},o.a.createElement(b.a,{variant:"outlined",color:"secondary",onClick:N.AnnulerEnregistrement},"Annuler")))))))))}var F=e=>{var t,a;const n=e.state,s=e.fonctions,i=e.collonnes,l=e.queries,c=e.useform,y=e.onSubmit;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(v.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>s.handleFermetureAlerte():()=>s.fermerAlerte()}),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(g.a,{routeSegments:[{name:n.titre}]})),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(m.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?o.a.createElement(p.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},o.a.createElement("div",null,o.a.createElement(b.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>s.handleClicksurNouveau()},"Nouveau"),l.queryAdresses.isLoading?o.a.createElement(j.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryAdresses.isError?o.a.createElement(j.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryAdresses.error,type:"error"}):o.a.createElement(E.a,{tag:"div",blocking:!1},o.a.createElement(w.a,{theme:Object(O.a)()},o.a.createElement(u.a,{title:n.titre,data:l.queryAdresses.data.rows.map(e=>({adresse:e})),columns:i,options:Object(r.a)(Object(r.a)({},d.a),{},{serverSide:!0,count:l.queryAdresses.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},d.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},d.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>s.handleChangePage(e),onChangeRowsPerPage:e=>s.handleChangeRowPerPage(e),onSearchChange:e=>s.handleSearchChange(e),onFilterChange:()=>s.handleFilterChange()})}))),o.a.createElement(f.a,{className:"w-full overflow-auto",elevation:8},o.a.createElement(h.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:s.fermerDialogueSuppression,onYesClick:s.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.adresse)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):o.a.createElement(N,{state:n,fonctions:s,queries:l,useform:c,onSubmit:y}))},R=a(13),D=a(87),Q=a(2111),L=a(1420),I=a(1421),z=a(2112),V=a(343),B=a(1626),W=a(1357),H=a(1331),J=a(1723),U=a(1375);Object(V.a)(e=>{e.palette,Object(R.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function G(e){const t=Object(V.a)(e=>{e.palette,Object(R.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"adresse",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"adresse",label:"Alias de l'adresse",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.alias)&&void 0!==r?r:""}}},{name:"adresse",label:"Adresse",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n,s,i,l,c,u,d,p;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex items-center"},o.a.createElement(B.a,null,o.a.createElement(m.a,{style:{whiteSpace:"nowrap"},variant:"subtitle2"},o.a.createElement("strong",null," ",null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:""," ",null!==(n=null===e||void 0===e?void 0:e.prenom)&&void 0!==n?n:""," ")),o.a.createElement(m.a,{style:{whiteSpace:"nowrap"},variant:"caption"},null!==(s=null===e||void 0===e?void 0:e.telephone)&&void 0!==s?s:""),o.a.createElement("br",null),o.a.createElement(m.a,{style:{whiteSpace:"nowrap"},variant:"caption"},null!==(i=null===e||void 0===e||null===(l=e.Quartier)||void 0===l||null===(c=l.Commune)||void 0===c?void 0:c.nom)&&void 0!==i?i:""," / ",null!==(u=null===e||void 0===e||null===(d=e.Quartier)||void 0===d?void 0:d.nom)&&void 0!==u?u:""),o.a.createElement("br",null),o.a.createElement(m.a,{style:{whiteSpace:"nowrap"},variant:"caption"},null!==(p=null===e||void 0===e?void 0:e.adresse)&&void 0!==p?p:""))))}}},{name:"adresse",label:"Adresse",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.Adresse)&&void 0!==r?r:""}}},{name:"adresse",label:"Adresse par d\xe9faut?",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>o.a.createElement(W.a,{checked:t.pardefaut,onChange:()=>e.handleToglepardefaut(t)})}},{name:"adresse",label:"client",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n,s,i,l,c,u,d;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"flex items-center"},o.a.createElement(B.a,null,o.a.createElement(m.a,{style:{whiteSpace:"nowrap"},variant:"subtitle2"},o.a.createElement("strong",null," ",null!==(r=null===(n=e.Client)||void 0===n?void 0:n.nom)&&void 0!==r?r:""," ",null!==(s=null===(i=e.Client)||void 0===i?void 0:i.prenom)&&void 0!==s?s:""," ")),o.a.createElement(m.a,{style:{whiteSpace:"nowrap"},variant:"caption"},null!==(l=null===(c=e.Client)||void 0===c?void 0:c.telephone)&&void 0!==l?l:""),o.a.createElement("br",null),o.a.createElement(m.a,{style:{whiteSpace:"nowrap"},variant:"caption"},null!==(u=null===(d=e.Client)||void 0===d?void 0:d.email)&&void 0!==u?u:""))))}}},{name:"adresse",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>o.a.createElement("div",null,o.a.createElement(D.j,{menuButton:o.a.createElement("div",{className:t.userMenu},o.a.createElement(H.a,{xsDown:!0},o.a.createElement(b.a,{size:"small",variant:"outlined",color:"primary",endIcon:o.a.createElement(z.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(Q.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(Q.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(L.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:o.a.createElement(I.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(L.a,{color:"primary"})}]}})(e).map(t=>o.a.createElement(o.a.Fragment,null,o.a.createElement(J.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",o.a.createElement("span",{className:"ml-5"},t.nom)),o.a.createElement(U.a,null)))))}}]}var Y=a(1381),K=(a(1403),a(1394)),X=a(1435),Z=a(1521);t.default=()=>{const e={adresse:{alias:"",Nom:"",prenom:"",telephone:"",Adresse:"",pardefaut:"",client:1,quartier:1},adresse1:null,titre:"Adresses Clients",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},t=Object(s.useState)(e),a=Object(n.a)(t,2),c=a[0],u=a[1];let d=new i.a,m=new X.a,p=new Z.a;const b=Object(l.useQueryClient)(),f={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},c),{},{titre:"Adresses cleints",alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},c.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},c),{},{adresse:null,titre:"Nouveau",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},c),{},{alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},c),{},{titre:"Adresses clients",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{w.mutate(c.adresse)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},c),{},{dialoguephoto:Object(r.a)(Object(r.a)({},c.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},c),{},{titre:"Mise \xe0 jour ",adresse:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},c),{},{adresse:e,dialogueSuppressionOuvert:!0}))}},handleToglepardefaut:e=>{O.mutate(e)}},v=Object(l.useQuery)(["Adresses",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>d.getTouslesAdresses(c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),g=Object(l.useQuery)(["Clients",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>m.getTouslesClients(0,1e3,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),h=Object(l.useQuery)(["Quartiers",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>p.getTouslesQuartiers(0,1e3,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),j=Object(l.useMutation)(d.ajoutAdresse,{onSuccess:()=>{b.invalidateQueries("Adresses"),u(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b.invalidateQueries("Adresses"),u(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(l.useMutation)(d.miseajourAdresse,{onSuccess:()=>{b.invalidateQueries("Adresses"),u(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b.invalidateQueries("Adresses"),u(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),O=Object(l.useMutation)(d.toglepardefautAdresse,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}}))},onSettled:()=>{b.invalidateQueries("Adresses")}}),w=Object(l.useMutation)(d.suppressionAdresse,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{b.invalidateQueries("Adresses")}}),A={queryAdresses:v,mutationMiseajour:E,mutationAjout:j,mutationSuppression:w,queryClients:g,queryQuartiers:h},C=G(f),x=y.b().shape({alias:y.c().required("Le champs Alias de ladresse est requis"),Nom:y.c().required("Le champs Nom est requis"),telephone:y.c().required("Le champs T\xe9l\xe9phone est requis")}),S=Object(Y.c)({resolver:Object(K.yupResolver)(x),defaultValues:{adresse:c.adresse}});return o.a.createElement(F,{state:c,fonctions:f,collonnes:C,queries:A,useform:S,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},c.adresse),e);void 0!==(null===(t=c.adresse)||void 0===t?void 0:t.id)?A.mutationMiseajour.mutate(Object(r.a)({},a)):A.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);