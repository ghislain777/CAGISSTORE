(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[21],{1387:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(3),n=a(0),i=a.n(n),o=a(353),c=a(1374);function l(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},i.a.createElement(o.a,{item:!0}),i.a.createElement(c.a,{color:"error"===n?"secondary":"primary"})," ",i.a.createElement("span",null,a,".")))}},1391:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),i=a(1416),o=a(343),c=a(1766),l=(a(60),a(356)),s=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(o.a)(e=>Object(c.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(l.a,{value:u}),u,"%"))}},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1397:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(624),o=a(449),c=a(1381);t.a=e=>{const t=e.id,a=e.nom,r=e.label,l=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{fullWidth:!0},n.a.createElement(c.a,{name:a,as:n.a.createElement(o.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:l,rules:{required:"Required"}})))}},1398:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1381),o=a(1723),c=a(624),l=a(627),s=a(625),u=a(1322);const m=e=>{const t=e.label,a=e.nom,r=e.table,i=e.options,m=(e.valeur,e.error);return n.a.createElement(c.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(l.a,Object.assign({id:a},e),i.map(e=>n.a.createElement(o.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,o=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:o,rules:{required:"Required"}},e)))}},1399:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(17),n=a(0),i=a.n(n),o=a(1381),c=a(1357),l=a(1356);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,p=Object(n.useState)(a),d=Object(r.a)(p,2),g=d[0],v=d[1];return i.a.createElement(l.a,{control:i.a.createElement(o.a,{name:t,control:s,render:e=>i.a.createElement(c.a,Object.assign({},e,{checked:g,onChange:t=>{e.onChange(t.target.checked),v(!g),u(!g)}}))}),label:null==m?t:m})}},1400:function(e,t,a){"use strict";a(0),a(1381),a(1723),a(624),a(627),a(625),a(1322)},1401:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(17),n=a(0),i=a.n(n),o=a(624),c=a(1470),l=a(2154),s=a(1404),u=a(1405),m=a(1381);function p(e){const t=e.nom,a=e.label,p=e.control,d=(e.error,e.valeur),g=(e.id,e.handledatechange),v=Object(n.useState)(d),b=Object(r.a)(v,2),f=b[0],h=b[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{fullWidth:!0},i.a.createElement(m.a,Object.assign({name:t,as:i.a.createElement(c.a,{utils:s.a,locale:u.a},i.a.createElement(l.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:f,onChange:e=>(e=>{h(e),g(e)})(e)})),control:p,rules:{required:"Required"}},e))))}},1402:function(e,t,a){"use strict";a(17),a(0),a(624),a(1470),a(2109),a(1404),a(1405),a(1381)},1403:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return m}));var r=a(20),n=a.n(r),i=a(39),o=a(75);function c(e){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(n.a.mark((function e(t){var a,r,i,c,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.objet,i=t.handleprogress,c=new FormData,console.warn(a),c.append("objet",r),c.append("file",a),e.next=7,o.b.post("/fichier/upload",c,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:i});case 7:return l=e.sent,console.log("fichier service::: response.data "+JSON.stringify(l)),e.abrupt("return",l.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return u.apply(this,arguments)}function u(){return(u=Object(i.a)(n.a.mark((function e(t){var a,r,i,c,l,s,u,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,i=t.modele,c=t.champ,l=t.objet,s=t.obj,u=t.handleprogress,(m=new FormData).append(s.cle,l.id),m.append("modele",i),m.append("champ",c),m.append("nom",r),m.append("cle",s.cle),m.append("valeur",s.valeur),m.append("file",a),e.next=11,o.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return p=e.sent,e.abrupt("return",p.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.post("/medias/telecharger",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1420:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"}),"EditOutlined")},1421:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1500:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),i=a(39),o=a(75);class c{getTouslesRoles(e,t,a,r){return Object(i.a)(n.a.mark((function r(){var i;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/roles?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return i=r.sent,r.abrupt("return",i.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/roles",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/roles/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/roles/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1612:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),i=a(39),o=a(75);class c{getTouslesActivites(e,t,a,r){return Object(i.a)(n.a.mark((function r(){var i;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/activites?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return i=r.sent,r.abrupt("return",i.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutActivite(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/activites",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourActivite(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/activites/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionActivite(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/activites/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2133:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),i=a(0),o=a.n(i),c=a(20),l=a.n(c),s=a(39),u=a(75);class m{getTouslesPrivileges(e,t,a,r){return Object(s.a)(l.a.mark((function n(){var i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,u.b.get("/privileges?itemsPerPage="+t+"&page="+e+"&id="+a+"&role="+r.role.id+"&activite="+r.activite.id);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutPrivilege(e){return Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.post("/privileges",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourPrivilege(e){return Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/privileges/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionPrivilege(e){return Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.delete("/privileges/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleactifPrivilege(e){return Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/privileges/"+e.id,{actif:!e.actif});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}var p=a(133),d=a(1412),g=a.n(d),v=a(1396),b=a(1327),f=a(2094),h=a(2093),j=a(447),E=a(2095),O=a(1377),w=a(353),y=a(624),P=a(625),C=a(627),x=a(1723),A=a(1322),S=a(357),R=a(354),k=a(355),D=a(1387),q=a(1413),T=(a(1414),a(1395)),M=a(2091),F=a(623),L=a(2090),N=a(2089),z=a(451),I=a(1374),Q=a(1397),W=a(1398),V=a(1399),B=(a(1391),a(1400),a(1401),a(1402),a(1371)),G=a(2110);function H(e){var t,a,r,n,i,c,l,s,m,p,d,g,v;const b=e.state,f=e.fonctions,h=e.queries,E=e.useform,y=e.onSubmit;return o.a.createElement("div",null,o.a.createElement(w.a,{container:!0,spacing:1,justify:"center"},o.a.createElement(w.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(B.a,{theme:Object(u.a)()},o.a.createElement(O.a,null,o.a.createElement(M.a,{action:o.a.createElement(F.a,{"aria-label":"",onClick:f.AnnulerEnregistrement},"x"),title:"ajout"===b.pagestate.action?"Nouveau privil\xe8ge":"Mise \xe0 jour ",subheader:""}),o.a.createElement(L.a,{className:" px-6 pt-6 pb-6"}," ",o.a.createElement("form",{onSubmit:E.handleSubmit(y)},o.a.createElement(w.a,{container:!0,spacing:4,direction:"column"},o.a.createElement(w.a,{item:!0},o.a.createElement(Q.a,{id:"description",nom:"description",label:"Description",valeur:null===(t=b.privilege)||void 0===t?void 0:t.description,control:E.control,error:E.errors.description})),o.a.createElement(w.a,{item:!0},o.a.createElement(V.a,{id:"actif",nom:"actif",control:E.control,coche:Boolean(null!==(a=null===(r=b.privilege)||void 0===r?void 0:r.actif)&&void 0!==a?a:""),onChange:e=>f.handleChangementactif(e),changement:f.handleChangementactif})),o.a.createElement(w.a,{item:!0},h.queryActivites.isLoading?o.a.createElement(D.a,{message:"chargement des roles"}):o.a.createElement(W.a,{id:"activite",name:"activite",label:"Activit\xe9",table:"activite",control:E.control,options:h.queryActivites.data.rows,error:E.errors.activite,defaultValue:null!==(n=null===(i=b.privilege)||void 0===i||null===(c=i.activite)||void 0===c?void 0:c.id)&&void 0!==n?n:"1",valeur:null!==(l=null===(s=b.utilisateur)||void 0===s?void 0:s.activite)&&void 0!==l?l:""})),o.a.createElement(w.a,{item:!0},h.queryRoles.isLoading?o.a.createElement(D.a,{message:"chargement des roles"}):o.a.createElement(W.a,{id:"role",name:"role",label:"Role",table:"role",control:E.control,options:h.queryRoles.data.rows,error:E.errors.role,defaultValue:null!==(m=null===(p=b.privilege)||void 0===p||null===(d=p.role)||void 0===d?void 0:d.id)&&void 0!==m?m:"1",valeur:null!==(g=null===(v=b.utilisateur)||void 0===v?void 0:v.role)&&void 0!==g?g:""}))))),o.a.createElement(N.a,null,o.a.createElement(w.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(w.a,{item:!0},o.a.createElement(z.a,{color:"primary",variant:"contained",type:"submit",onClick:E.handleSubmit(y)},h.mutationMiseajour.isLoading||h.mutationAjout.isLoading?o.a.createElement(I.a,{color:"inherit"}):o.a.createElement(G.a,null),o.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===b.pagestate.action?o.a.createElement(j.a,null,"Enregistrer"):o.a.createElement(j.a,null,"Mettre \xe0 jour")))),o.a.createElement(w.a,{item:!0},o.a.createElement(z.a,{variant:"outlined",color:"secondary",onClick:f.AnnulerEnregistrement},"Annuler")))))))))}var J=e=>{var t,a;const n=e.state,i=e.fonctions,c=e.collonnes,l=e.queries,s=e.useform,m=e.onSubmit;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(b.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:i.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},o.a.createElement(f.a,{id:""},n.dialoguephoto.titre),o.a.createElement(h.a,null,o.a.createElement("img",{src:u.c+"/fichiers/"+n.dialoguephoto.objet+"/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),o.a.createElement(S.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>i.handleFermetureAlerte():()=>i.fermerAlerte()}),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(R.a,{routeSegments:[{name:n.titre}]})),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(j.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?o.a.createElement(E.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},o.a.createElement("div",null,o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(O.a,{className:"mb-sm-30"},o.a.createElement("form",null,o.a.createElement(w.a,{container:!0,spacing:2,direction:"column"},o.a.createElement(w.a,{item:!0},o.a.createElement(w.a,{container:!0,spacing:10,direction:"row"})),o.a.createElement(w.a,{item:!0},o.a.createElement(w.a,{container:!0,spacing:5,direction:"row"},o.a.createElement(w.a,{item:!0,sm:1}),o.a.createElement(w.a,{item:!0,sm:3,p:5},l.queryRoles.isLoading?o.a.createElement(D.a,{message:"chargement des roles"}):o.a.createElement(y.a,{fullWidth:!0},o.a.createElement(P.a,{htmlFor:"Role"},"Choisir un role"),o.a.createElement(C.a,{id:"Role",variant:"outlined",onChange:i.handleChangeRole},o.a.createElement(x.a,{key:"0",value:null},"Tous les roles"),l.queryRoles.data.rows.map(e=>o.a.createElement(x.a,{key:e.id,value:e.id},e.nom))),o.a.createElement(A.a,null))),o.a.createElement(w.a,{item:!0,sm:3},l.queryActivites.isLoading?o.a.createElement(D.a,{message:"chargement des activit\xe9s"}):o.a.createElement(y.a,{fullWidth:!0},o.a.createElement(P.a,{htmlFor:"Activite"},"Choisir une activit\xe9"),o.a.createElement(C.a,{id:"activite",variant:"outlined",onChange:i.handleChangeActivite},o.a.createElement(x.a,{key:"0",value:null},"Toutes les activit\xe9s"),l.queryActivites.data.rows.map(e=>o.a.createElement(x.a,{key:e.id,value:e.id},e.nom))),o.a.createElement(A.a,null))),o.a.createElement(w.a,{item:!0,sm:3}))))))),l.queryPrivileges.isLoading?o.a.createElement(D.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryPrivileges.isError?o.a.createElement(D.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryPrivileges.error,type:"error"}):o.a.createElement(q.a,{tag:"div",blocking:!1},o.a.createElement(g.a,{title:n.titre,data:l.queryPrivileges.data.rows,columns:c,options:Object(r.a)(Object(r.a)({},v.a),{},{serverSide:!0,count:l.queryPrivileges.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},v.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},v.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>i.handleChangePage(e),onChangeRowsPerPage:e=>i.handleChangeRowPerPage(e),onSearchChange:e=>i.handleSearchChange(e),onFilterChange:()=>i.handleFilterChange()})})),o.a.createElement(O.a,{className:"w-full overflow-auto",elevation:8},o.a.createElement(k.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:i.fermerDialogueSuppression,onYesClick:i.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.privilege)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):o.a.createElement(H,{state:n,fonctions:i,queries:l,useform:s,onSubmit:m}))},U=a(13),Y=a(87),K=a(2111),X=a(1420),Z=a(1421),$=a(2112),_=a(343),ee=a(1357),te=a(1331),ae=a(1375);Object(_.a)(e=>{e.palette,Object(U.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function re(e){const t=Object(_.a)(e=>{e.palette,Object(U.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"Role",label:"Role",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" "}}},{name:"Activite",label:"Activit\xe9",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" "}}},{name:"actif",label:"Actif?",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>o.a.createElement(ee.a,{checked:t,onChange:()=>e.handleTogleactif({id:a.rowData[0],actif:t})})}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>o.a.createElement("div",null,o.a.createElement(Y.j,{menuButton:o.a.createElement("div",{className:t.userMenu},o.a.createElement(te.a,{xsDown:!0},o.a.createElement(z.a,{size:"small",variant:"outlined",color:"primary",endIcon:o.a.createElement($.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(K.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(K.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(X.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:o.a.createElement(Z.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(X.a,{color:"primary"})}]}})({id:r.rowData[0],description:r.rowData[4],actif:r.rowData[3],activite:r.rowData[2],role:r.rowData[1]}).map(e=>o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{onClick:()=>e.action({id:r.rowData[0],description:r.rowData[4],actif:r.rowData[3],activite:r.rowData[2],role:r.rowData[1]}),key:e.id,value:e.statut},e.icon,"   ",o.a.createElement("span",{className:"ml-5"},e.nom)),o.a.createElement(ae.a,null)))))}}]}var ne=a(1381),ie=(a(1403),a(1394)),oe=a(1612),ce=a(1500);t.default=()=>{const e={privilege:{description:"",actif:"",activite:"1",role:"1"},privilege1:null,titre:"Gestion des privil\xe8ges",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:{activite:{id:null},role:{id:null}}},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(i.useState)(e),a=Object(n.a)(t,2),c=a[0],l=a[1];let s=new m,u=new oe.a,d=new ce.a;const g=Object(p.useQueryClient)(),v={handleFermetureAlerte:()=>{l(Object(r.a)(Object(r.a)({},c),{},{titre:"Gestion des privil\xe8ges",alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},c.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{l(Object(r.a)(Object(r.a)({},c),{},{privilege:null,titre:"Nouveau privil\xe8ge ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{l(Object(r.a)(Object(r.a)({},c),{},{alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),l(Object(r.a)(Object(r.a)({},c),{},{titre:"Gestion des privil\xe8ges",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{w.mutate(c.privilege)},handleCloseDialoguephoto:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialoguephoto:Object(r.a)(Object(r.a)({},c.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":l(Object(r.a)(Object(r.a)({},c),{},{titre:"Mise \xe0 jour ",privilege:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":l(Object(r.a)(Object(r.a)({},c),{},{privilege:e,dialogueSuppressionOuvert:!0}))}},handleTogleactif:e=>{O.mutate(e)},handleChangeActivite:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{filtre:Object(r.a)(Object(r.a)({},c.tableconfig.filtre),{},{activite:{id:e.target.value}})})}))},handleChangeRole:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{filtre:Object(r.a)(Object(r.a)({},c.tableconfig.filtre),{},{role:{id:e.target.value}})})}))}},b=Object(p.useQuery)(["Privileges",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>s.getTouslesPrivileges(c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),f=Object(p.useQuery)(["Activites",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>u.getTouslesActivites(c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),h=Object(p.useQuery)(["Roles",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>d.getTouslesRoles(c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),j=Object(p.useMutation)(s.ajoutPrivilege,{onSuccess:()=>{g.invalidateQueries("Privileges"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{g.invalidateQueries("Privileges"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(p.useMutation)(s.miseajourPrivilege,{onSuccess:()=>{g.invalidateQueries("Privileges"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{g.invalidateQueries("Privileges"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),O=Object(p.useMutation)(s.togleactifPrivilege,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l({alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}})},onSettled:()=>{g.invalidateQueries("Privileges")}}),w=Object(p.useMutation)(s.suppressionPrivilege,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{g.invalidateQueries("Privileges")}}),y={queryPrivileges:b,mutationMiseajour:E,mutationAjout:j,mutationSuppression:w,queryActivites:f,queryRoles:h},P=re(v),C=T.b().shape({description:T.c().required("Le champs Description est requis"),activite:T.c().required("Le champs Activite est requis"),role:T.c().required("Le champs Role est requis")}),x=Object(ne.c)({resolver:Object(ie.yupResolver)(C),defaultValues:{privilege:c.privilege}});return o.a.createElement(J,{state:c,fonctions:v,collonnes:P,queries:y,useform:x,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},c.privilege),e);void 0!==(null===(t=c.privilege)||void 0===t?void 0:t.id)?y.mutationMiseajour.mutate(Object(r.a)({},a)):y.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);