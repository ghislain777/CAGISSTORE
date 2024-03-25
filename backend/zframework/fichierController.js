

const getContenuFichierController = (table, page, champsPhotos, champsDocuments, champsStatuts) => {
    
let contenuController = `
import React, { useState } from \"react\";
import { Icon, IconButton } from '@material-ui/core';
import ${table.model}Model from \"../model/${table.nom}_model\"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import ${table.model}View from '../view/view_${table.nom}'
import getcollones${table.model}s from '../view/collones_${table.nom}'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import uploaderFichier from 'app/services/fichier/fichierService'
import { yupResolver } from '@hookform/resolvers/yup'
`
// importation des modeles de cles etrangères
table.champs.forEach((champ) => {
    if (champ.estCle) {
        contenuController += `
import ${champ.reference.ucfirst()}Model from "app/modules/${champ.nom}/model/${champ.nom}_model"
`
    }
})

let rendu = ""
contenuController += `
const ${table.model}Controller = () => {
    const ${table.nom}0 = {
        `

table.champs.forEach((champ) => {
    rendu = `${champ.nom}: '',
    `

    if (champ.estCle) {
        rendu = `${champ.nom}: 1,
        `
    }
    else {
        if (champ.type == "ENTIER") {
            rendu = `${champ.nom}: 0,
        `
        }
    }
    if (champ.nom != "id") {
        contenuController += rendu
    }
})


contenuController += `
}

const state0 = {
    ${table.nom}: ${table.nom}0,
    ${table.nom}1: null,  // utilisé pour les champs non controllés comme les champs upload
    titre: '${page.titreListe}',
    tableconfig: {
        page: 0,
        rowsPerPage: 30,
        recherche: '',
        filtre: ''
    },
    pagestate: {
        mode: 'affichage',
        action: 'ajout',
        affichageTable: true
    },
    alert: {
        severity: 'severity',
        message: '',
        open: false,
        automaticClose: false
    },
    dialogueSuppressionOuvert: false,
    `
if (table.champImageExiste) {
    contenuController += `
    dialoguephoto:{
        open: false,
        fichier: '',
        titre: '',
        objet:'',
    },  
`
}

table.champs.forEach((champ) => {
    if (champ.type == "IMAGE") {
        contenuController += `
        progress${champ.nom}: 0,
        `
    }
})
contenuController += `   
}

const [state, setState] = useState(state0);
let ${table.nom}Model = new ${table.model}Model();
`
table.champs.forEach((champ) => {
    if (champ.estCle) {
        contenuController += `
        let ${champ.reference}Model = new ${champ.nom.ucfirst()}Model()
        `
    }
})

contenuController += `
const queryClient = useQueryClient()
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "${page.titreListe}",
                alert:{
                    ...state.alert,
                    open:false
                },
                pagestate: {
                    ...state.pagestate,
                    mode: \"affichage\",
                    affichageTable: true

                }

            })
        }


        ////*** click sur le bouton nouveau */
     const   handleClicksurNouveau = () => { // click sur le bouton nouveau ()
            setState({ ...state, ${table.nom}: null, titre: "${page.titreFormulaireAjout}", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
            console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "${page.titreListe}", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

        }
`
table.champs.forEach((champ) => {
    if (champ.type == "IMAGE") {
        contenuController += `
    const uploader${champ.nom}= (fichier) => {
        if (fichier) {
            //    console.log(fichier);
         mutationUpload${champ.nom}.mutate({fichier:fichier, objet:'${champ.nom}${table.nom}', handleprogress: handleProgress${champ.nom}})
            }
      //  console.log('le filtre a changé');
      }
    const supprimer${champ.nom} = () => {
        console.log('Suppression du fichier');
      }

const handleProgress${champ.nom} = (progressEvent) => {
var percentCompleted = Math.round(
(progressEvent.loaded * 100) / progressEvent.total
)
setState({...state, progress${champ.nom}: percentCompleted})
}
`
    }

    if (champ.type == "BOOLEEN") {
        contenuController += `            
const handleTogle${champ.nom} = (${table.nom}) => {
mutation${champ.nom}.mutate(${table.nom})    
}
`
    }

})

contenuController+= `


const fermerDialogueSuppression = () => {
    setState({
        ...state,
        dialogueSuppressionOuvert:false
    })
    
    }
      const confirmerSuppression = () => {
        // setState({
        //     ...state,
        //     dialogueSuppressionOuvert:false
        // })
    mutationSuppression.mutate(state.${table.nom})
    }
    const fermerAlerte = () => {
        setState({
            ...state,
            alert:{
                ...state.alert,
                open:false
            },
           
        }) 
    
    }

    const handleCloseDialoguephoto = () => {
        setState({
            ...state,
            dialoguephoto: {
                ...state.dialoguephoto,
                open: false
            }
    
        })
    }
    
`
table.champs.forEach((champ) => {
    if(champ.type == "IMAGE") {
        contenuController+=`  
    const handleClickSur${champ.nom} = (${table.nom}) => {
        setState({
            ...state,
            dialoguephoto: {
                open: true,
                titre: '${champ.nom}',
                fichier: ${table.nom}.${champ.nom},
                objet: '${champ.nom}${table.nom}'
            }

        })
    }
        `
    }
})


table.champs.forEach((champ) => {
    if(champ.type == "STATUT") {
        contenuController+=` 


       
        
  const handleChangement${champ.nom.ucfirst()} = ({ id, ${champ.nom} }) => {

    mutationUpdate${champ.nom.ucfirst()}.mutate({ id: id, ${champ.nom}: ${champ.nom} })
  }

//mutation


const mutationUpdate${champ.nom.ucfirst()} = useMutation(${table.nom}Model.misajour${champ.nom.ucfirst()}${table.model}, {
    onSuccess: () => {
        setState({
            ...state,
            alert: {
                message: "Enregistrement réussi",
                open: true,
                severity: "success",
                automaticClose: true
            }
        })
    },
    onError: () => {
        setState({
            ...state,
            alert: {
                message: "Echec lors de l'enregistrement",
                open: true,
                severity: "error",
                automaticClose: true
            }
          
        })
    },
    onSettled: () => {
        queryClient.invalidateQueries('${table.model}s')
    },
  }) 
`
    }

    if(champ.type == "DATEHEURE") {
       contenuController+= `
       const handledate${champ.nom}change = (date) => {  
        setState({
            ...state,
            ${table.nom}: {
                ...state.${table.nom},
            ${champ.nom}:date
            }
        })
     }
       ` 

    }
})

contenuController+= `
const handleChangeRowPerPage = (rowPerPage) => {
    setState({
        ...state,
        tableconfig: {
            ...state.tableconfig,
            rowsPerPage: rowPerPage,
        },
        
    })
  }

const handleChangePage = (page) => {
    setState({
        ...state,
        tableconfig: {
            ...state.tableconfig,
            page: page,
        },
        
    })
  }
  const handleClickSurAction = (${table.nom}, action) => {
    console.log(action)

    switch (action) {
      case 'Détails':
        console.log('action details')
        //      history.push('/ventes/nouvellecommande/'+utilisateur.id+'/view')
        break;
      case 'Modifier':
        setState({
            ...state,
            titre: 'Mise à jour ',
            ${table.nom}: ${table.nom},
            pagestate: {
                mode: 'edition',
                action: 'misajour',
                affichageTable: false
            }
        })
        break;
      case 'Supprimer':
        setState({
            ...state,
            ${table.nom}:${table.nom},
            dialogueSuppressionOuvert:true
        })
        break;
      default:
        break;
    }
  }

  const handleSearchChange = (text) => {
    setState({
        ...state,
        tableconfig:{
          ...state.tableconfig,
          recherche:text
        }
        
    })
  }


        const fonctions = {
            handleFermetureAlerte: handleFermetureAlerte,
            handleClicksurNouveau: handleClicksurNouveau, 
            fermerAlerte:fermerAlerte,
          //  handleClickSurEnregistrer: handleClickSurEnregistrer,
            AnnulerEnregistrement: AnnulerEnregistrement, 
            fermerDialogueSuppression:fermerDialogueSuppression,
            confirmerSuppression:confirmerSuppression,
            handleCloseDialoguephoto: handleCloseDialoguephoto,
            handleChangeRowPerPage: handleChangeRowPerPage,
            handleSearchChange:handleSearchChange,
            handleChangePage: handleChangePage,
            handleClickSurAction:handleClickSurAction,
            
`

table.champs.forEach((champ) => {

if(champ.type == "IMAGE") {
    contenuController+= `
    handleProgress${champ.nom}:handleProgress${champ.nom}, 
    uploader${champ.nom}:uploader${champ.nom}, 
    supprimer${champ.nom}: supprimer${champ.nom},  
    handleClickSur${champ.nom}: handleClickSur${champ.nom},
    `
}


if(champ.type == "BOOLEEN") {
    contenuController+= `
    handleTogle${champ.nom}:handleTogle${champ.nom},
    `
}

if(champ.type == "STATUT") {
    contenuController+= `
    handleChangement${champ.nom.ucfirst()}:handleChangement${champ.nom.ucfirst()},
    `
}

if(champ.type == "DATEHEURE") {
    contenuController+= `
   handledate${champ.nom}change:handledate${champ.nom}change,
    `
}
}) 

contenuController+= `          
}
// Usequery fonctions

const query${table.model}s = useQuery(
    ['${table.model}s', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
    () => ${table.nom}Model.getTousles${table.model}s(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
    { keepPreviousData: true })`

table.champs.forEach((champ) => {
    if(champ.estCle) {
        contenuController+= `      
    const query${champ.reference.ucfirst()}s = useQuery(
        ['${champ.reference.ucfirst()}s', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => ${champ.nom}Model.getTousles${champ.reference.ucfirst()}s(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
        `
    }
})
contenuController+= `

const mutationAjout = useMutation(${table.nom}Model.ajout${table.model}, {
    onSuccess: () => {
        queryClient.invalidateQueries('${table.model}s')
        setState({
            ...state,
            alert: {
                message: "Enregistrement réussi",
                open: true,
                severity: "success",
                automaticClose: true
            }
        })

    },
    onError: () => {
        queryClient.invalidateQueries('${table.model}s')
        setState({
            ...state,
            alert: {
                message: "Echec lors de l'enregistrement",
                open: true,
                severity: "error",
                automaticClose: true
            }
          
        })
    },
})

const mutationMiseajour = useMutation(${table.nom}Model.miseajour${table.model}, {
    onSuccess: () => {

        queryClient.invalidateQueries('${table.model}s')
        setState({
            ...state,
//                 pagestate:{
//                     mode: "affichage",
// affichageTable: true,
//                 },
            alert: {
                message: "Mise à jour Réussie.",
                open: true,
                severity: "success",
                automaticClose: true
            }
        })
    },
    onError: () => {
        queryClient.invalidateQueries('${table.model}s')
        setState({
            ...state,
            alert: {
                message: "Echec lors de la mise à jour",
                open: true,
                severity: "error",
                automaticClose: true
            }
        })
      
    },
})
`
table.champs.forEach((champ) => {
    if(champ.type == "IMAGE") {
        contenuController+= `
  const mutationUpload${champ.nom} = useMutation(uploaderFichier, {
    onSuccess: (data) => {
     // setState({ ...state, ${table.nom}1:{${champ.nom} : data}})
        //  
        setState({
            ...state,
            ${table.nom}:{...state.${table.nom},${champ.nom} : data},
            alert: {
                message: "Upload du fichier réussi",
                open: true,
                severity: "success",
                automaticClose: false
            },
            progress${champ.nom}: 100
        })
    },
    onError: () => {
        setState({
            ...state,
           alert: {
            automaticClose:false,
            message: 'Echec de chargement du fichier sur le serveur',
            open: true,
            severity: 'error'},
        })
    },
})     
    
        `
    }

    if(champ.type == "BOOLEEN") {
        contenuController+= `
        
        
const mutation${champ.nom} = useMutation(${table.nom}Model.togle${champ.nom}${table.model}, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('${table.model}s')
        setState({
            ...state,
           alert: { message: 'opération réussie',
            open: true,
            severity: 'success',}
        })
    },
    onError: () => {
        setState({
            ...state,
           alert: { message: 'Echec lors de l opération',
            open: true,
            severity: 'error',}
        })
    },
    onSettled: () => {
        queryClient.invalidateQueries('${table.model}s')
    },
  })
        `
    }
})

contenuController += `


const mutationSuppression = useMutation(${table.nom}Model.suppression${table.model}, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('${table.model}s')
        setState({
            ...state,
            dialogueSuppressionOuvert:false,
           alert: { message: 'Supréssion réussie',
            open: true,
            severity: 'success',}
        })
    },
    onError: () => {
        setState({
           alert: { message: 'Echec lors de la supréssion',
            open: true,
            severity: 'error',}
        })
    },
    onSettled: () => {
        queryClient.invalidateQueries('${table.model}s')
    },
  })
  const queries = {
    query${table.model}s: query${table.model}s,
    mutationMiseajour: mutationMiseajour,
    mutationAjout: mutationAjout,
    mutationSuppression: mutationSuppression,

`
table.champs.forEach((champ) => {
if(champ.type == "IMAGE") {
    contenuController+= `
    mutationUpload${champ.nom}:mutationUpload${champ.nom},
    `
}

if(champ.estCle) {
    contenuController += `
    query${champ.nom.ucfirst()}s: query${champ.nom.ucfirst()}s,
    `
}

})

contenuController+= `
}
// collones du tableau
const collonnes = getcollones${table.model}s(fonctions);

/// Gestion du formulaire
const schema = yup.object().shape({ 
`

table.champs.forEach((champ) => {
    if(champ.type == "TEXTE" && champ.nom != "description") {
        contenuController+= `
        ${champ.nom}: yup.string().required('Le champs ${champ.titre} est requis'),       `
    }
    if(champ.type == "INTEGER" && champ.nom != "id" ) {
        contenuController+= `

        ${champ.nom}: yup
        .number()
        .required('${champ.titre} requis')
        .positive('Le ${champ.titre} doit être positif')
        .integer('Le ${champ.titre} doit être un nombre entier'),           `
    }
    })
    
    contenuController+= `
    
})

const useform
    = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            ${table.nom}: state.${table.nom},
        }
    }
)

// ***Soumission du formulaire de {$table}
const onSubmit = (data) => {
let donnees = { ...state.${table.nom}, ...data }
if (state.${table.nom}?.id !== undefined) {
    //  console.log('mise a jour de ${table.nom}}...');
    queries.mutationMiseajour.mutate({ ...donnees })
} else {
    queries.mutationAjout.mutate({ ...donnees })
}
// console.log(donnees);
}

// vue

return <${table.model}View
state={state}
fonctions={fonctions}
collonnes={collonnes}
queries={queries}
useform={useform}
onSubmit={onSubmit}
/>
}
export default ${table.model}Controller

    `

    return contenuController
  }

  module.exports = getContenuFichierController