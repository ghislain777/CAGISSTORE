(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[31],{1387:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(3),n=a(0),o=a.n(n),i=a(353),l=a(1374);function c(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(l.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1391:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),o=a(1416),i=a(343),l=a(1766),c=(a(61),a(356)),s=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(i.a)(e=>Object(l.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(c.a,{value:u}),u,"%"))}},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1397:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(624),i=a(449),l=a(1381);t.a=e=>{const t=e.id,a=e.nom,r=e.label,c=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(l.a,{name:a,as:n.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:c,rules:{required:"Required"}})))}},1398:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1381),i=a(1723),l=a(624),c=a(627),s=a(625),u=a(1322);const m=e=>{const t=e.label,a=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error);return n.a.createElement(l.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(c.a,Object.assign({id:a},e),o.map(e=>n.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,i=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:i,rules:{required:"Required"}},e)))}},1399:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(17),n=a(0),o=a.n(n),i=a(1381),l=a(1357),c=a(1356);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,p=Object(n.useState)(a),d=Object(r.a)(p,2),h=d[0],b=d[1];return o.a.createElement(c.a,{control:o.a.createElement(i.a,{name:t,control:s,render:e=>o.a.createElement(l.a,Object.assign({},e,{checked:h,onChange:t=>{e.onChange(t.target.checked),b(!h),u(!h)}}))}),label:null==m?t:m})}},1400:function(e,t,a){"use strict";a(0),a(1381),a(1723),a(624),a(627),a(625),a(1322)},1401:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(17),n=a(0),o=a.n(n),i=a(624),l=a(1470),c=a(2154),s=a(1404),u=a(1405),m=a(1381);function p(e){const t=e.nom,a=e.label,p=e.control,d=(e.error,e.valeur),h=(e.id,e.handledatechange),b=Object(n.useState)(d),g=Object(r.a)(b,2),f=g[0],E=g[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:t,as:o.a.createElement(l.a,{utils:s.a,locale:u.a},o.a.createElement(c.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:f,onChange:e=>(e=>{E(e),h(e)})(e)})),control:p,rules:{required:"Required"}},e))))}},1402:function(e,t,a){"use strict";a(17),a(0),a(624),a(1470),a(2109),a(1404),a(1405),a(1381)},1403:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return m}));var r=a(20),n=a.n(r),o=a(39),i=a(55);function l(e){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(n.a.mark((function e(t){var a,r,o,l,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.objet,o=t.handleprogress,l=new FormData,console.warn(a),l.append("objet",r),l.append("file",a),e.next=7,i.c.post("/fichier/upload",l,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:o});case 7:return c=e.sent,console.log("fichier service::: response.data "+JSON.stringify(c)),e.abrupt("return",c.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(e){return u.apply(this,arguments)}function u(){return(u=Object(o.a)(n.a.mark((function e(t){var a,r,o,l,c,s,u,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,o=t.modele,l=t.champ,c=t.objet,s=t.obj,u=t.handleprogress,(m=new FormData).append(s.cle,c.id),m.append("modele",o),m.append("champ",l),m.append("nom",r),m.append("cle",s.cle),m.append("valeur",s.valeur),m.append("file",a),e.next=11,i.c.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return p=e.sent,e.abrupt("return",p.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.post("/medias/telecharger",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1435:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),o=a(39),i=a(55);class l{getTouslesClients(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.c.get("/clients?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutClient(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.post("/clients",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourClient(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.put("/clients/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionClient(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.delete("/clients/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionImage(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.post("/medias/delete/".concat(e.id,"/client"),{});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1521:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),o=a(39),i=a(55);class l{getTouslesQuartiers(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.c.get("/quartiers?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutQuartier(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.post("/quartiers",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourQuartier(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.put("/quartiers/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionQuartier(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.delete("/quartiers/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2130:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),o=a(0),i=a.n(o),l=a(1435),c=a(133),s=a(1412),u=a.n(s),m=a(1396),p=a(1327),d=a(2094),h=a(447),b=a(2093),g=a(2092),f=a(451),E=a(2095),v=a(1377),j=a(357),O=a(354),y=a(355),C=a(1387),w=a(1413),x=(a(1414),a(55)),P=a(1371),S=a(1395),k=a(353),A=a(2091),M=a(623),q=a(2090),F=a(2089),R=a(1374),T=a(1397),N=a(1398),D=(a(1399),a(1391)),I=(a(1400),a(1401),a(1402),a(2110));function Q(e){var t,a,r,n,o,l,c,s,u;const m=e.state,p=e.fonctions,d=e.queries,b=e.useforms.client;return i.a.createElement("div",null,i.a.createElement(k.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(k.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(P.a,{theme:Object(x.a)()},i.a.createElement(v.a,null,i.a.createElement(A.a,{action:i.a.createElement(M.a,{"aria-label":"",onClick:p.AnnulerEnregistrement},"x"),title:"ajout"===m.pagestate.action?"Nouveau client":"Mise \xe0 jour",subheader:""}),i.a.createElement(q.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",null,i.a.createElement(k.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(k.a,{item:!0},i.a.createElement(T.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=m.client)||void 0===t?void 0:t.nom,control:b.control,error:b.errors.nom})),i.a.createElement(k.a,{item:!0},i.a.createElement(T.a,{id:"prenom",nom:"prenom",label:"Pr\xe9nom",valeur:null===(a=m.client)||void 0===a?void 0:a.prenom,control:b.control,error:b.errors.prenom})),i.a.createElement(k.a,{item:!0},i.a.createElement(T.a,{id:"telephone",nom:"telephone",label:"T\xe9l\xe9phone",valeur:null===(r=m.client)||void 0===r?void 0:r.telephone,control:b.control,error:b.errors.telephone})),i.a.createElement(k.a,{item:!0},i.a.createElement(T.a,{id:"description",nom:"description",label:"Description",valeur:null===(n=m.client)||void 0===n?void 0:n.description,control:b.control,error:b.errors.description})),i.a.createElement(k.a,{item:!0},d.queryQuartiers.isLoading?i.a.createElement(C.a,{message:"chargement des Quartiers"}):i.a.createElement(N.a,{id:"quartier",name:"quartier",label:"quartier",table:"quartier",control:b.control,options:d.queryQuartiers.data.rows,error:b.errors.quartier,defaultValue:null!==(o=null===(l=m.client)||void 0===l||null===(c=l.Quartier)||void 0===c?void 0:c.id)&&void 0!==o?o:"1",valeur:null!==(s=null===(u=m.client)||void 0===u?void 0:u.quartier)&&void 0!==s?s:""}))))),i.a.createElement(F.a,null,i.a.createElement(k.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(k.a,{item:!0},i.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:p.allerAPrecedent},"Pr\xe9c\xe9dent")),i.a.createElement(k.a,{item:!0},i.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit",onClick:b.handleSubmit(p.allerAPhotos)},d.mutationAjout.isLoading||d.mutationMiseajour.isLoading?i.a.createElement(R.a,{color:"inherit"}):i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"pl-2 capitalize"},i.a.createElement(h.a,null,"Suivant")),i.a.createElement(I.a,null)))))))))))}var L=a(2105),B=a(2101),z=a(2102),W=a(1492),V=a(1421),H=a(1494),U=a(1495),G=a(1496);function J(e){const t=e.state,a=e.fonctions,r=e.queries;e.useform,e.onSubmit;return i.a.createElement("div",null,i.a.createElement(k.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(k.a,{item:!0,lg:5,md:5,sm:12,xs:12},i.a.createElement(P.a,{theme:Object(x.a)()},i.a.createElement(v.a,null,i.a.createElement(A.a,{action:i.a.createElement(M.a,{"aria-label":"",onClick:a.AnnulerEnregistrement},"x"),title:"Ajouter une photo au client",subheader:"".concat(t.client.nom)}),i.a.createElement(q.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",null,i.a.createElement(k.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(k.a,{item:!0},i.a.createElement(D.a,{progress:t.progressphoto,acceptedFiles:[".png",".jpg",".jpeg",".gif"],onUpload:e=>a.uploaderPhoto(e),onSupprimer:()=>a.supprimerphoto(),titre:"Fichier photo .png(faire glisser ou cliquez ici pour charger)"}))))),i.a.createElement(F.a,null,i.a.createElement(k.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(k.a,{item:!0}),i.a.createElement(k.a,{item:!0},i.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:a.AnnulerEnregistrement},"Quiter"))))))),i.a.createElement(k.a,{item:!0,lg:7,md:7,sm:12,xs:12},i.a.createElement(v.a,null,i.a.createElement(A.a,{action:i.a.createElement(M.a,{"aria-label":"",onClick:a.AnnulerEnregistrement},"x"),title:"".concat(t.client.nom),subheader:""}),i.a.createElement(q.a,{className:" px-6 pt-6 pb-6"},i.a.createElement(H.a,{sx:{width:540,height:300},cols:2,gap:8},t.client.Media.map(e=>i.a.createElement(U.a,{key:e.id,sx:{borderColor:"primary.main",border:.1}},i.a.createElement("img",{src:"".concat(x.d).concat(e.fichier),alt:e.titre}),i.a.createElement(G.a,{title:e.nom,actionIcon:i.a.createElement(M.a,{"aria-label":"",onClick:()=>a.supprimerImage(e)},i.a.createElement(V.a,{color:"error"}))}))))),i.a.createElement(F.a,null,i.a.createElement(k.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(k.a,{item:!0},i.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:a.allerAPrecedent},"Pr\xe9c\xe9dent")),i.a.createElement(k.a,{item:!0},i.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit",onClick:a.handleClickSurTerminer},r.mutationAjout.isLoading||r.mutationMiseajour.isLoading?i.a.createElement(R.a,{color:"inherit"}):i.a.createElement(i.a.Fragment,null,i.a.createElement(I.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},i.a.createElement(h.a,null,"Terminer")))))))))))}var Y=a(1403);function K(e){const t=e.fonctions,a=e.queries,s=e.useforms,u=Object(r.a)(Object(r.a)({},e.state),{},{etape:0,progressphoto:0,etapes:[{index:0,label:"Edition du client"},{index:1,label:"Photos du client"}],complet:!1}),m=Object(o.useState)(u),p=Object(n.a)(m,2),d=p[0],b=p[1];let g=new l.a;t.allerAPhotos=e=>{delete e.Media,0===d.client.id?a.mutationAjout.mutate(e):a.mutationMiseajour.mutate(Object(r.a)(Object(r.a)({},d.client),e))},t.uploaderPhoto=e=>{e&&v.mutate({fichier:e,modele:"client",objet:d.client,champ:"photo",nom:"Photo client",handleprogress:E,obj:{cle:"client",valeur:d.client.id}})},t.supprimerImage=e=>{console.log("suppression de l'image"),console.log(e),a.mutationSuppressionImage.mutate(e)};const E=e=>{var t=Math.round(100*e.loaded/e.total);b(Object(r.a)(Object(r.a)({},d),{},{progressphoto:t}))};t.supprimerphoto=()=>{console.log("Suppression du fichier")},t.allerAPrecedent=()=>{b(Object(r.a)(Object(r.a)({},d),{},{etape:0}))},a.mutationAjout=Object(c.useMutation)(g.ajoutClient,{onSuccess:e=>{b(Object(r.a)(Object(r.a)({},d),{},{client:e,etape:1,alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b(Object(r.a)(Object(r.a)({},d),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),a.mutationMiseajour=Object(c.useMutation)(g.miseajourClient,{onSuccess:e=>{b(Object(r.a)(Object(r.a)({},d),{},{client:e,etape:1,alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b(Object(r.a)(Object(r.a)({},d),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}});const v=Object(c.useMutation)(Y.c,{onSuccess:e=>{b(Object(r.a)(Object(r.a)({},d),{},{client:Object(r.a)(Object(r.a)({},d.client),{},{Media:e}),alert:{message:"Upload du fichier r\xe9ussi",open:!0,severity:"success",automaticClose:!1},progressphoto:100}))},onError:()=>{b(Object(r.a)(Object(r.a)({},d),{},{alert:{automaticClose:!1,message:"Echec de chargement du fichier sur le serveur",open:!0,severity:"error"}}))}});return a.mutationSuppressionImage=Object(c.useMutation)(g.suppressionImage,{onSuccess:e=>{b(Object(r.a)(Object(r.a)({},d),{},{client:Object(r.a)(Object(r.a)({},d.client),{},{Media:e}),dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{b(Object(r.a)(Object(r.a)({},d),{},{alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}}))},onSettled:()=>{}}),i.a.createElement(W.a,{sx:{width:"100%"}},i.a.createElement(L.a,{nonLinear:!0,activeStep:d.etape},d.etapes.map(e=>i.a.createElement(B.a,{key:e.label,completed:d.etape>e.index},i.a.createElement(z.a,{color:"inherit"},e.label)))),i.a.createElement("div",null,d.complet?i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{sx:{mt:2,mb:1}},"F\xe9licitation, toutes les \xe9tapes ont \xe9t\xe9 achev\xe9s."),i.a.createElement(W.a,{sx:{display:"flex",flexDirection:"row",pt:2}},i.a.createElement(W.a,{sx:{flex:"1 1 auto"}}),i.a.createElement(f.a,{onClick:t.fermerFormulaire},"Quitter"))):i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{sx:{mt:2,mb:1,py:1}},0===d.etape?i.a.createElement(Q,{state:d,fonctions:t,queries:a,useforms:s}):1===d.etape?i.a.createElement(J,{state:d,fonctions:t,queries:a,useforms:s,allerAPhotos:t.allerAPhotos}):i.a.createElement("span",null,"Autre")))))}var X=e=>{var t,a;const n=e.state,o=e.fonctions,l=e.collonnes,c=e.queries,s=e.useforms;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(p.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet,fonctions:o,state:n},i.a.createElement(d.a,{id:""},i.a.createElement(h.a,{variant:"h6",color:"initial"},n.dialoguephoto.titre)),i.a.createElement(b.a,null,i.a.createElement("img",{style:{width:500,height:400,"object-fit":"contain"},src:x.d+n.dialoguephoto.fichier,alt:n.dialoguephoto.objet,srcset:""})),i.a.createElement(g.a,null,i.a.createElement(f.a,{autoFocus:!0,onClick:()=>o.handleClickSurPhotoPrecedent()},"precedent"),i.a.createElement(f.a,{onClick:()=>o.handleClickSurPhotoSuivant(),autoFocus:!0},"suivant"))),i.a.createElement(j.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(O.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(h.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(E.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(f.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau client"),c.queryClients.isLoading?i.a.createElement(C.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryClients.isError?i.a.createElement(C.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryClients.error,type:"error"}):i.a.createElement(w.a,{tag:"div",blocking:!1},i.a.createElement(P.a,{theme:Object(x.a)()},i.a.createElement(u.a,{title:n.titre,data:c.queryClients.data.rows.map(e=>({client:e})),columns:l,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:c.queryClients.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(v.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(y.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.client)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(K,{state:n,fonctions:o,queries:c,useforms:s}))},Z=a(13),$=a(87),_=a(2111),ee=a(1420),te=a(1488),ae=a(2112),re=a(343),ne=a(1626),oe=a(1379),ie=a(1331),le=a(1723),ce=a(1375),se=a(2059),ue=a(1520);Object(re.a)(e=>{e.palette,Object(Z.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function me(e){const t=Object(re.a)(e=>{e.palette,Object(Z.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"client",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"client",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.nom)&&void 0!==r?r:""}}},{name:"client",label:"Pr\xe9nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.prenom)&&void 0!==r?r:""}}},{name:"client",label:"T\xe9l\xe9phone",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.telephone)&&void 0!==r?r:""}}},{name:"client",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.description)&&void 0!==r?r:""}}},{name:"client",label:"Cr\xe9\xe9 le",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null==e.createdAt?" ":Object(se.a)(Object(ue.a)(e.createdAt),"dd/MM/yyyy HH:mm")}},{name:"client",label:"updatedAt",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>null==e.updatedAt?" ":Object(se.a)(Object(ue.a)(e.updatedAt),"dd/MM/yyyy HH:mm")}},{name:"client",label:"Quartier",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n,o,l,c,s,u,m,p;return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{style:{whiteSpace:"nowrap"},variant:"subtitle2"},null!==(r=null===(n=e.Quartier)||void 0===n||null===(o=n.Commune)||void 0===o?void 0:o.nom)&&void 0!==r?r:""," / ",null!==(l=null===(c=e.Quartier)||void 0===c?void 0:c.nom)&&void 0!==l?l:""),i.a.createElement(h.a,{style:{whiteSpace:"nowrap"},variant:"caption"},null!==(s=null===(u=e.Quartier)||void 0===u||null===(m=u.Commune)||void 0===m||null===(p=m.Ville)||void 0===p?void 0:p.nom)&&void 0!==s?s:""))}}},{name:"client",label:"Photos",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(t,a,r)=>{var n;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex items-center"},i.a.createElement(ne.a,{onClick:()=>e.handleClickSurphoto(t)},i.a.createElement(f.a,null,i.a.createElement(oe.a,{variant:"rounded",className:"w-48 h-48",src:x.d+(null===(n=t.Media[0])||void 0===n?void 0:n.fichier)}))),i.a.createElement(ne.a,{onClick:()=>e.handleAjouterPhoto(t)},i.a.createElement(te.a,null))),i.a.createElement("small",{className:"text-muted"},t.Media.length))}}},{name:"client",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement($.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(ie.a,{xsDown:!0},i.a.createElement(f.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(ae.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(_.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(_.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(ee.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(V.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(ee.a,{color:"primary"})}]}})(e).map(t=>i.a.createElement(i.a.Fragment,null,i.a.createElement(le.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",i.a.createElement("span",{className:"ml-5"},t.nom)),i.a.createElement(ce.a,null)))))}}]}var pe=a(1381),de=a(1394),he=a(1521);t.default=()=>{const e={id:0,nom:"",prenom:"",telephone:"",description:"",createdAt:"",updatedAt:"",quartier:1,Media:[]},t={nouvelleclient:!0,client:e,client1:null,titre:"Gestion des clients",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},a=Object(o.useState)(t),s=Object(n.a)(a,2),u=s[0],m=s[1];let p=new l.a,d=new he.a;const h=Object(c.useQueryClient)(),b=()=>{h.invalidateQueries("Clients"),m(Object(r.a)(Object(r.a)({},u),{},{titre:"Gestion des clients",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},g={handleFermetureAlerte:()=>{m(Object(r.a)(Object(r.a)({},u),{},{titre:"Gestion des clients",alert:Object(r.a)(Object(r.a)({},u.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},u.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{m(Object(r.a)(Object(r.a)({},u),{},{client:e,titre:"Nouveau client",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{m(Object(r.a)(Object(r.a)({},u),{},{alert:Object(r.a)(Object(r.a)({},u.alert),{},{open:!1})}))},AnnulerEnregistrement:b,fermerDialogueSuppression:()=>{m(Object(r.a)(Object(r.a)({},u),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{v.mutate(u.client)},handleCloseDialoguephoto:()=>{m(Object(r.a)(Object(r.a)({},u),{},{dialoguephoto:Object(r.a)(Object(r.a)({},u.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{m(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{m(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{m(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":m(Object(r.a)(Object(r.a)({},u),{},{titre:"Mise \xe0 jour ",client:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":m(Object(r.a)(Object(r.a)({},u),{},{client:e,dialogueSuppressionOuvert:!0}))}},handleClickSurphoto:e=>{var t;m(Object(r.a)(Object(r.a)({},u),{},{etape:1,client:e,dialoguephoto:Object(r.a)(Object(r.a)({},u.dialoguephoto),{},{photoEnCours:0,open:!0,titre:"Photos 1/".concat(e.Media.length),fichier:null===(t=e.Media[0])||void 0===t?void 0:t.fichier,objet:e.titre})}))},handleAjouterPhoto:e=>{console.log("client: ".concat(JSON.stringify(e))),m(Object(r.a)(Object(r.a)({},u),{},{etape:2,client:e,pagestate:Object(r.a)(Object(r.a)({},u.pagestate),{},{openImage:!0,mode:"edition"})}))},handleClickSurPhotoSuivant:()=>{if(u.dialoguephoto.photoEnCours<u.client.Media.length-1){const e=u.dialoguephoto.photoEnCours+1;m(Object(r.a)(Object(r.a)({},u),{},{dialoguephoto:Object(r.a)(Object(r.a)({},u.dialoguephoto),{},{photoEnCours:e,open:!0,titre:"Photos ".concat(e+1,"/").concat(u.client.Media.length),fichier:u.client.Media[e].fichier,objet:u.client.titre})}))}},handleClickSurPhotoPrecedent:()=>{if(u.dialoguephoto.photoEnCours>0){const e=u.dialoguephoto.photoEnCours-1;console.log(u.dialoguephoto.photoEnCours),m(Object(r.a)(Object(r.a)({},u),{},{dialoguephoto:Object(r.a)(Object(r.a)({},u.dialoguephoto),{},{photoEnCours:e,open:!0,titre:"Photos ".concat(e+1,"/").concat(u.client.Media.length),fichier:u.client.Media[e].fichier,objet:u.client.titre})}))}},handleClickSurTerminer:e=>{b()}},f=Object(c.useQuery)(["Clients",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>p.getTouslesClients(u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),E=Object(c.useQuery)(["Quartiers",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>d.getTouslesQuartiers(0,1e3,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),v=Object(c.useMutation)(p.suppressionClient,{onSuccess:()=>{m(Object(r.a)(Object(r.a)({},u),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{m({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{h.invalidateQueries("Clients")}}),j={queryClients:f,mutationSuppression:v,queryQuartiers:E},O=me(g),y=S.b().shape({nom:S.c().required("Le champs Nom est requis")}),C={client:Object(pe.c)({resolver:Object(de.yupResolver)(y),defaultValues:{client:u.client}})};return i.a.createElement(X,{state:u,fonctions:g,collonnes:O,queries:j,useforms:C,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},u.client),e);void 0!==(null===(t=u.client)||void 0===t?void 0:t.id)?j.mutationMiseajour.mutate(Object(r.a)({},a)):j.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);