(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[37],{2128:function(e,a,t){"use strict";t.r(a);var o=t(3),r=t(17),n=t(0),i=t.n(n),c=t(1622),l=t(133),s=t(1412),m=t.n(s),u=t(1396),g=t(1327),p=t(2094),d=t(447),b=t(2093),h=t(2092),E=t(451),j=t(2095),f=t(1377),O=t(357),v=t(354),C=t(355),y=t(1387),S=t(1413),P=(t(1414),t(55)),k=t(1371),x=t(1395),M=t(353),A=t(2091),w=t(623),N=t(2090),I=t(2089),q=t(1374),F=t(1397),D=(t(1398),t(1399),t(1391)),R=(t(1400),t(1401),t(1402),t(2110));function T(e){var a,t;const o=e.state,r=e.fonctions,n=e.queries,c=e.useforms.categorie;return i.a.createElement("div",null,i.a.createElement(M.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(M.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(k.a,{theme:Object(P.a)()},i.a.createElement(f.a,null,i.a.createElement(A.a,{action:i.a.createElement(w.a,{"aria-label":"",onClick:r.AnnulerEnregistrement},"x"),title:"ajout"===o.pagestate.action?"Nouveau categorie":"Mise \xe0 jour",subheader:""}),i.a.createElement(N.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",null,i.a.createElement(M.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(M.a,{item:!0},i.a.createElement(F.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(a=o.categorie)||void 0===a?void 0:a.nom,control:c.control,error:c.errors.nom})),i.a.createElement(M.a,{item:!0},i.a.createElement(F.a,{id:"description",nom:"description",label:"Description",valeur:null===(t=o.categorie)||void 0===t?void 0:t.description,control:c.control,error:c.errors.description}))))),i.a.createElement(I.a,null,i.a.createElement(M.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(M.a,{item:!0},i.a.createElement(E.a,{variant:"outlined",color:"secondary",onClick:r.allerAPrecedent},"Pr\xe9c\xe9dent")),i.a.createElement(M.a,{item:!0},i.a.createElement(E.a,{color:"primary",variant:"contained",type:"submit",onClick:c.handleSubmit(r.allerAPhotos)},n.mutationAjout.isLoading||n.mutationMiseajour.isLoading?i.a.createElement(q.a,{color:"inherit"}):i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"pl-2 capitalize"},i.a.createElement(d.a,null,"Suivant")),i.a.createElement(R.a,null)))))))))))}var L=t(2105),B=t(2101),Q=t(2102),z=t(1492),G=t(1421),J=t(1494),W=t(1495),U=t(1496);function V(e){const a=e.state,t=e.fonctions,o=e.queries;e.useform,e.onSubmit;return i.a.createElement("div",null,i.a.createElement(M.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(M.a,{item:!0,lg:5,md:5,sm:12,xs:12},i.a.createElement(k.a,{theme:Object(P.a)()},i.a.createElement(f.a,null,i.a.createElement(A.a,{action:i.a.createElement(w.a,{"aria-label":"",onClick:t.AnnulerEnregistrement},"x"),title:"Ajouter une photo au categorie",subheader:"".concat(a.categorie.nom)}),i.a.createElement(N.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",null,i.a.createElement(M.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(M.a,{item:!0},i.a.createElement(D.a,{progress:a.progressphoto,acceptedFiles:[".png",".jpg",".jpeg",".gif"],onUpload:e=>t.uploaderPhoto(e),onSupprimer:()=>t.supprimerphoto(),titre:"Fichier photo .png(faire glisser ou cliquez ici pour charger)"}))))),i.a.createElement(I.a,null,i.a.createElement(M.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(M.a,{item:!0}),i.a.createElement(M.a,{item:!0},i.a.createElement(E.a,{variant:"outlined",color:"secondary",onClick:t.AnnulerEnregistrement},"Quiter"))))))),i.a.createElement(M.a,{item:!0,lg:7,md:7,sm:12,xs:12},i.a.createElement(f.a,null,i.a.createElement(A.a,{action:i.a.createElement(w.a,{"aria-label":"",onClick:t.AnnulerEnregistrement},"x"),title:"".concat(a.categorie.nom),subheader:""}),i.a.createElement(N.a,{className:" px-6 pt-6 pb-6"},i.a.createElement(J.a,{sx:{width:540,height:300},cols:2,gap:8},a.categorie.Media.map(e=>i.a.createElement(W.a,{key:e.id,sx:{borderColor:"primary.main",border:.1}},i.a.createElement("img",{src:"".concat(P.d).concat(e.fichier),alt:e.titre}),i.a.createElement(U.a,{title:e.nom,actionIcon:i.a.createElement(w.a,{"aria-label":"",onClick:()=>t.supprimerImage(e)},i.a.createElement(G.a,{color:"error"}))}))))),i.a.createElement(I.a,null,i.a.createElement(M.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(M.a,{item:!0},i.a.createElement(E.a,{variant:"outlined",color:"secondary",onClick:t.allerAPrecedent},"Pr\xe9c\xe9dent")),i.a.createElement(M.a,{item:!0},i.a.createElement(E.a,{color:"primary",variant:"contained",type:"submit",onClick:t.handleClickSurTerminer},o.mutationAjout.isLoading||o.mutationMiseajour.isLoading?i.a.createElement(q.a,{color:"inherit"}):i.a.createElement(i.a.Fragment,null,i.a.createElement(R.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},i.a.createElement(d.a,null,"Terminer")))))))))))}var Y=t(1403);function H(e){const a=e.fonctions,t=e.queries,s=e.useforms,m=Object(o.a)(Object(o.a)({},e.state),{},{etape:0,progressphoto:0,etapes:[{index:0,label:"Edition du categorie"},{index:1,label:"Photos du categorie"}],complet:!1}),u=Object(n.useState)(m),g=Object(r.a)(u,2),p=g[0],b=g[1];let h=new c.a;a.allerAPhotos=e=>{delete e.Media,0===p.categorie.id?t.mutationAjout.mutate(e):t.mutationMiseajour.mutate(Object(o.a)(Object(o.a)({},p.categorie),e))},a.uploaderPhoto=e=>{e&&f.mutate({fichier:e,modele:"categorie",objet:p.categorie,champ:"photo",nom:"Photo categorie",handleprogress:j,obj:{cle:"categorie",valeur:p.categorie.id}})},a.supprimerImage=e=>{console.log("suppression de l'image"),console.log(e),t.mutationSuppressionImage.mutate(e)};const j=e=>{var a=Math.round(100*e.loaded/e.total);b(Object(o.a)(Object(o.a)({},p),{},{progressphoto:a}))};a.supprimerphoto=()=>{console.log("Suppression du fichier")},a.allerAPrecedent=()=>{b(Object(o.a)(Object(o.a)({},p),{},{etape:0}))},t.mutationAjout=Object(l.useMutation)(h.ajoutCategorie,{onSuccess:e=>{b(Object(o.a)(Object(o.a)({},p),{},{categorie:e,etape:1,alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b(Object(o.a)(Object(o.a)({},p),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),t.mutationMiseajour=Object(l.useMutation)(h.miseajourCategorie,{onSuccess:e=>{b(Object(o.a)(Object(o.a)({},p),{},{categorie:e,etape:1,alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b(Object(o.a)(Object(o.a)({},p),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}});const f=Object(l.useMutation)(Y.c,{onSuccess:e=>{b(Object(o.a)(Object(o.a)({},p),{},{categorie:Object(o.a)(Object(o.a)({},p.categorie),{},{Media:e}),alert:{message:"Upload du fichier r\xe9ussi",open:!0,severity:"success",automaticClose:!1},progressphoto:100}))},onError:()=>{b(Object(o.a)(Object(o.a)({},p),{},{alert:{automaticClose:!1,message:"Echec de chargement du fichier sur le serveur",open:!0,severity:"error"}}))}});return t.mutationSuppressionImage=Object(l.useMutation)(h.suppressionImage,{onSuccess:e=>{b(Object(o.a)(Object(o.a)({},p),{},{categorie:Object(o.a)(Object(o.a)({},p.categorie),{},{Media:e}),dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{b(Object(o.a)(Object(o.a)({},p),{},{alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}}))},onSettled:()=>{}}),i.a.createElement(z.a,{sx:{width:"100%"}},i.a.createElement(L.a,{nonLinear:!0,activeStep:p.etape},p.etapes.map(e=>i.a.createElement(B.a,{key:e.label,completed:p.etape>e.index},i.a.createElement(Q.a,{color:"inherit"},e.label)))),i.a.createElement("div",null,p.complet?i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{sx:{mt:2,mb:1}},"F\xe9licitation, toutes les \xe9tapes ont \xe9t\xe9 achev\xe9s."),i.a.createElement(z.a,{sx:{display:"flex",flexDirection:"row",pt:2}},i.a.createElement(z.a,{sx:{flex:"1 1 auto"}}),i.a.createElement(E.a,{onClick:a.fermerFormulaire},"Quitter"))):i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{sx:{mt:2,mb:1,py:1}},0===p.etape?i.a.createElement(T,{state:p,fonctions:a,queries:t,useforms:s}):1===p.etape?i.a.createElement(V,{state:p,fonctions:a,queries:t,useforms:s,allerAPhotos:a.allerAPhotos}):i.a.createElement("span",null,"Autre")))))}var K=e=>{var a,t;const r=e.state,n=e.fonctions,c=e.collonnes,l=e.queries,s=e.useforms;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(g.a,{open:r.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:n.handleCloseDialoguephoto,objet:r.dialoguephoto.objet,fonctions:n,state:r},i.a.createElement(p.a,{id:""},i.a.createElement(d.a,{variant:"h6",color:"initial"},r.dialoguephoto.titre)),i.a.createElement(b.a,null,i.a.createElement("img",{style:{width:500,height:400,"object-fit":"contain"},src:P.d+r.dialoguephoto.fichier,alt:r.dialoguephoto.objet,srcset:""})),i.a.createElement(h.a,null,i.a.createElement(E.a,{autoFocus:!0,onClick:()=>n.handleClickSurPhotoPrecedent()},"precedent"),i.a.createElement(E.a,{onClick:()=>n.handleClickSurPhotoSuivant(),autoFocus:!0},"suivant"))),i.a.createElement(O.a,{message:r.alert.message,severity:r.alert.severity,open:r.alert.open,handleAlertClose:!0===r.alert.automaticClose?()=>n.handleFermetureAlerte():()=>n.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(v.a,{routeSegments:[{name:r.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(d.a,{variant:"h4"},r.titre)),"affichage"===r.pagestate.mode?i.a.createElement(j.a,{in:r.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(E.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>n.handleClicksurNouveau()},"Nouveau categorie"),l.queryCategories.isLoading?i.a.createElement(y.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryCategories.isError?i.a.createElement(y.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryCategories.error,type:"error"}):i.a.createElement(S.a,{tag:"div",blocking:!1},i.a.createElement(k.a,{theme:Object(P.a)()},i.a.createElement(m.a,{title:r.titre,data:l.queryCategories.data.rows.map(e=>({categorie:e})),columns:c,options:Object(o.a)(Object(o.a)({},u.a),{},{serverSide:!0,count:l.queryCategories.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:r.tableconfig.rowsPerPage,textLabels:Object(o.a)(Object(o.a)({},u.a.textLabels),{},{toolbar:Object(o.a)(Object(o.a)({},u.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>n.handleChangePage(e),onChangeRowsPerPage:e=>n.handleChangeRowPerPage(e),onSearchChange:e=>n.handleSearchChange(e),onFilterChange:()=>n.handleFilterChange()})}))),i.a.createElement(f.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(C.a,{open:r.dialogueSuppressionOuvert,onConfirmDialogClose:n.fermerDialogueSuppression,onYesClick:n.confirmerSuppression,text:null!==(a="Confirmez la suppression de "+(null===(t=r.categorie)||void 0===t?void 0:t.nom))&&void 0!==a?a:""})))):i.a.createElement(H,{state:r,fonctions:n,queries:l,useforms:s}))},X=t(13),Z=t(87),$=t(2111),_=t(1420),ee=t(1488),ae=t(2112),te=t(343),oe=t(1357),re=t(1626),ne=t(1379),ie=t(1331),ce=t(1723),le=t(1375);Object(te.a)(e=>{e.palette,Object(X.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function se(e){const a=Object(te.a)(e=>{e.palette,Object(X.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),t=(a,t)=>{e.handleClickSurAction(a,t)};return[{name:"categorie",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var o,r;return null!==(o=null===(r=e.id)||void 0===r?void 0:r.toLocaleString("fr-FR"))&&void 0!==o?o:""}}},{name:"categorie",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var o;return null!==(o=e.nom)&&void 0!==o?o:""}}},{name:"categorie",label:"Actif?",options:{filter:!1,sort:!1,display:!0,customBodyRender:(a,t,o)=>i.a.createElement(oe.a,{checked:a.actif,onChange:()=>e.handleTogleactif(a)})}},{name:"categorie",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var o;return null!==(o=e.description)&&void 0!==o?o:""}}},{name:"categorie",label:"Photos",options:{filter:!1,sort:!1,display:!0,customBodyRender:(a,t,o)=>{var r;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex items-center"},i.a.createElement(re.a,{onClick:()=>e.handleClickSurphoto(a)},i.a.createElement(E.a,null,i.a.createElement(ne.a,{variant:"rounded",className:"w-48 h-48",src:P.d+(null===(r=a.Media[0])||void 0===r?void 0:r.fichier)}))),i.a.createElement(re.a,{onClick:()=>e.handleAjouterPhoto(a)},i.a.createElement(ee.a,null))),i.a.createElement("small",{className:"text-muted"},a.Media.length))}}},{name:"categorie",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,o,r)=>i.a.createElement("div",null,i.a.createElement(Z.j,{menuButton:i.a.createElement("div",{className:a.userMenu},i.a.createElement(ie.a,{xsDown:!0},i.a.createElement(E.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(ae.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:i.a.createElement($.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:i.a.createElement($.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:i.a.createElement(_.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>t(e,"Supprimer"),icon:i.a.createElement(G.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:i.a.createElement(_.a,{color:"primary"})}]}})(e).map(a=>i.a.createElement(i.a.Fragment,null,i.a.createElement(ce.a,{onClick:()=>a.action(e),key:a.id,value:a.statut},a.icon,"   ",i.a.createElement("span",{className:"ml-5"},a.nom)),i.a.createElement(le.a,null)))))}}]}var me=t(1381),ue=t(1394);a.default=()=>{const e={id:0,nom:"",actif:"",description:"",Media:[]},a={nouvellecategorie:!0,categorie:e,categorie1:null,titre:"Gestion des categories",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(n.useState)(a),s=Object(r.a)(t,2),m=s[0],u=s[1];let g=new c.a;const p=Object(l.useQueryClient)(),d=()=>{p.invalidateQueries("Categories"),u(Object(o.a)(Object(o.a)({},m),{},{titre:"Gestion des categories",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},b={handleFermetureAlerte:()=>{u(Object(o.a)(Object(o.a)({},m),{},{titre:"Gestion des categories",alert:Object(o.a)(Object(o.a)({},m.alert),{},{open:!1}),pagestate:Object(o.a)(Object(o.a)({},m.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(o.a)(Object(o.a)({},m),{},{categorie:e,titre:"Nouveau categorie",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(o.a)(Object(o.a)({},m),{},{alert:Object(o.a)(Object(o.a)({},m.alert),{},{open:!1})}))},AnnulerEnregistrement:d,fermerDialogueSuppression:()=>{u(Object(o.a)(Object(o.a)({},m),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{j.mutate(m.categorie)},handleCloseDialoguephoto:()=>{u(Object(o.a)(Object(o.a)({},m),{},{dialoguephoto:Object(o.a)(Object(o.a)({},m.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(o.a)(Object(o.a)({},m),{},{tableconfig:Object(o.a)(Object(o.a)({},m.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(o.a)(Object(o.a)({},m),{},{tableconfig:Object(o.a)(Object(o.a)({},m.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(o.a)(Object(o.a)({},m),{},{tableconfig:Object(o.a)(Object(o.a)({},m.tableconfig),{},{page:e})}))},handleClickSurAction:(e,a)=>{switch(console.log(a),a){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(o.a)(Object(o.a)({},m),{},{titre:"Mise \xe0 jour ",categorie:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(o.a)(Object(o.a)({},m),{},{categorie:e,dialogueSuppressionOuvert:!0}))}},handleClickSurphoto:e=>{var a;u(Object(o.a)(Object(o.a)({},m),{},{etape:1,categorie:e,dialoguephoto:Object(o.a)(Object(o.a)({},m.dialoguephoto),{},{photoEnCours:0,open:!0,titre:"Photos 1/".concat(e.Media.length),fichier:null===(a=e.Media[0])||void 0===a?void 0:a.fichier,objet:e.titre})}))},handleAjouterPhoto:e=>{console.log("categorie: ".concat(JSON.stringify(e))),u(Object(o.a)(Object(o.a)({},m),{},{etape:2,categorie:e,pagestate:Object(o.a)(Object(o.a)({},m.pagestate),{},{openImage:!0,mode:"edition"})}))},handleClickSurPhotoSuivant:()=>{if(m.dialoguephoto.photoEnCours<m.categorie.Media.length-1){const e=m.dialoguephoto.photoEnCours+1;u(Object(o.a)(Object(o.a)({},m),{},{dialoguephoto:Object(o.a)(Object(o.a)({},m.dialoguephoto),{},{photoEnCours:e,open:!0,titre:"Photos ".concat(e+1,"/").concat(m.categorie.Media.length),fichier:m.categorie.Media[e].fichier,objet:m.categorie.titre})}))}},handleClickSurPhotoPrecedent:()=>{if(m.dialoguephoto.photoEnCours>0){const e=m.dialoguephoto.photoEnCours-1;console.log(m.dialoguephoto.photoEnCours),u(Object(o.a)(Object(o.a)({},m),{},{dialoguephoto:Object(o.a)(Object(o.a)({},m.dialoguephoto),{},{photoEnCours:e,open:!0,titre:"Photos ".concat(e+1,"/").concat(m.categorie.Media.length),fichier:m.categorie.Media[e].fichier,objet:m.categorie.titre})}))}},handleTogleactif:e=>{E.mutate(e)},handleClickSurTerminer:e=>{d()}},h=Object(l.useQuery)(["Categories",m.tableconfig.page,m.tableconfig.rowsPerPage,m.tableconfig.recherche,m.tableconfig.filtre],()=>g.getTouslesCategories(m.tableconfig.page,m.tableconfig.rowsPerPage,m.tableconfig.recherche,m.tableconfig.filtre),{keepPreviousData:!0}),E=Object(l.useMutation)(g.togleactifCategorie,{onSuccess:()=>{u(Object(o.a)(Object(o.a)({},m),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Categories")}}),j=Object(l.useMutation)(g.suppressionCategorie,{onSuccess:()=>{u(Object(o.a)(Object(o.a)({},m),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Categories")}}),f={queryCategories:h,mutationSuppression:j},O=se(b),v=x.b().shape({nom:x.c().required("Le champs Nom est requis")}),C={categorie:Object(me.c)({resolver:Object(ue.yupResolver)(v),defaultValues:{categorie:m.categorie}})};return i.a.createElement(K,{state:m,fonctions:b,collonnes:O,queries:f,useforms:C,onSubmit:e=>{var a;let t=Object(o.a)(Object(o.a)({},m.categorie),e);void 0!==(null===(a=m.categorie)||void 0===a?void 0:a.id)?f.mutationMiseajour.mutate(Object(o.a)({},t)):f.mutationAjout.mutate(Object(o.a)({},t))}})}}}]);