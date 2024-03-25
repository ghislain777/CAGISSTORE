const getContenuFichierControllerPourImage = (table) => {

    let contenu = `

import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import ${table.model}Model from "../model/${table.nom}_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import ${table.model}View from '../view/view_${table.nom}'
import getcollones${table.model}s from '../view/collones_${table.nom}'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

`
table.champs.forEach((champ) => {
    if (champ.estCle) {
        contenu += `
import ${champ.reference.ucfirst()}Model from "app/modules/${champ.nom}/model/${champ.nom}_model"
`
    }
})
 contenu+= `

const ${table.model}Controller = () => {
    const ${table.nom}0 = {
        id:0,
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
        contenu+= rendu
    }
})
if(table.champImageExiste) {
    contenu+= `Media: []`
}
        
 contenu+=       `

}

const state0 = {
    nouvelle${table.nom} :true,
    ${table.nom}: ${table.nom}0,
    ${table.nom}1: null,  // utilisé pour les champs non controllés comme les champs upload
    titre: 'Gestion des ${table.nom}s',
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
    
    dialoguephoto:{
        open: false,
        fichier: '',
        titre: '',
        objet:'',
    },  
    
   
}

const [state, setState] = useState(state0);
let ${table.nom}Model = new ${table.model}Model();
`

table.champs.forEach((champ) => {
    if (champ.estCle) {
        contenu+= `
        let ${champ.reference}Model = new ${champ.nom.ucfirst()}Model()
        `
    }
})

contenu+= `
const queryClient = useQueryClient()
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Gestion des ${table.nom}s",
                alert:{
                    ...state.alert,
                    open:false
                },
                pagestate: {
                    ...state.pagestate,
                    mode: "affichage",
                    affichageTable: true

                }

            })
        }


        ////*** click sur le bouton nouveau */
     const   handleClicksurNouveau = () => { // click sur le bouton nouveau ()
            setState({ ...state, ${table.nom}: ${table.nom}0, titre: "Nouveau ${table.nom}", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
        queryClient.invalidateQueries("${table.model}s")
           // console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Gestion des ${table.nom}s", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

        }



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
  const handleClickSurphoto = (${table.nom}) => {
    setState({
        ...state,
        etape:1,
        
        ${table.nom}:${table.nom},
        dialoguephoto: {         
            ...state.dialoguephoto,
            photoEnCours:0,     
            open: true,
            titre: \`Photos 1/\${${table.nom}.Media.length}\`,
            fichier: ${table.nom}.Media[0]?.fichier,
            objet: ${table.nom}.titre,
        }
    })
}

const handleAjouterPhoto = (${table.nom}) => {
    console.log(\`${table.nom}: \${JSON.stringify(${table.nom})}\`)
    
    setState({
        ...state,
        etape:2,
        ${table.nom}:${table.nom},
        pagestate:{
            ...state.pagestate,
        
            openImage:true,
            mode:"edition"
        }
        
    })
  }

  const handleClickSurPhotoSuivant = () => {
    //  console.log(state.${table.nom}.Media.length)
     // state.dialoguephoto.photoEnCours++;
      if (state.dialoguephoto.photoEnCours < state.${table.nom}.Media.length-1) {
     const nouvellePhotoEncours = state.dialoguephoto.photoEnCours+1
          setState({
              ...state,
              dialoguephoto: {
                  ...state.dialoguephoto,
                  photoEnCours: nouvellePhotoEncours,
                  open: true,
                  titre: \`Photos \${nouvellePhotoEncours+1}/\${state.${table.nom}.Media.length}\`,
                  fichier: state.${table.nom}.Media[nouvellePhotoEncours].fichier,
                  objet: state.${table.nom}.titre,
              }
          })
      }

  }
  
  const handleClickSurPhotoPrecedent = () => {
      if (state.dialoguephoto.photoEnCours > 0) {
      const nouvellePhotoEncours = state.dialoguephoto.photoEnCours-1
          
          console.log(state.dialoguephoto.photoEnCours)
          setState({
              ...state,
              dialoguephoto: {
                  ...state.dialoguephoto,
                  photoEnCours:nouvellePhotoEncours,
                  open: true,
                  titre: \`Photos \${nouvellePhotoEncours+1}/\${state.${table.nom}.Media.length}\`,
                  fichier: state.${table.nom}.Media[nouvellePhotoEncours].fichier,
                  objet: state.${table.nom}.titre,
              }
          })
      }

  }
  `
  table.champs.forEach(champ => {
    if(champ.type === "BOOLEEN") {
        contenu+=`
        const handleTogle${champ.nom} = (${table.nom}) => {
            mutation${champ.nom}.mutate(${table.nom})
            }
        `
    }
    
  });
  
  contenu+=`
   

        //* fonctions relatifs au stepper

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
            handleClickSurphoto:handleClickSurphoto,
            handleAjouterPhoto:handleAjouterPhoto,
            handleClickSurPhotoSuivant:handleClickSurPhotoSuivant,
            handleClickSurPhotoPrecedent : handleClickSurPhotoPrecedent,
            `
        table.champs.forEach(champ => {
            if(champ.type === "BOOLEEN") {
                contenu+=`handleTogle${champ.nom}: handleTogle${champ.nom},
                `

            }
            
        });    
        
            contenu+=`    
}

 fonctions.handleClickSurTerminer = (${table.nom}) => {
    AnnulerEnregistrement()
   // console.log("enregistrement du ${table.nom} dans la base de données")

   // console.log(${table.nom})
  }
// Usequery fonctions

const query${table.model}s = useQuery(
    ['${table.model}s', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
    () => ${table.nom}Model.getTousles${table.model}s(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
    { keepPreviousData: true }) 
    `

table.champs.forEach((champ) => {
    if(champ.estCle) {
        contenu+= `      
    const query${champ.reference.ucfirst()}s = useQuery(
        ['${champ.reference.ucfirst()}s', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => ${champ.nom}Model.getTousles${champ.reference.ucfirst()}s(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
        `
    }

    if(champ.type === "BOOLEEN") {

        contenu+= `
      
const mutation${champ.nom} = useMutation(${table.nom}Model.togle${champ.nom}${table.model}, {
    onSuccess: () => {
        
        setState({
            ...state,
           alert: { message: 'opération réussie',
            open: true,
            severity: 'success',}
        })
    },
    onError: () => {
        setState({
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
    
   contenu+= `     
   
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
  

// const mutationSuppressionImage = useMutation(${table.nom}Model.suppressionImage, {
//     onSuccess: () => {
//         //  queryClient.invalidateQueries('${table.model}s')
//         setState({
//             ...state,
//             dialogueSuppressionOuvert:false,
//            alert: { message: 'Supréssion réussie',
//             open: true,
//             severity: 'success',}
//         })
//     },
//     onError: () => {
//         setState({
//            alert: { message: 'Echec lors de la supréssion',
//             open: true,
//             severity: 'error',}
//         })
//     },
//     onSettled: () => {
//         queryClient.invalidateQueries('${table.model}s')
//     },
//   })
 


  const queries = {
    query${table.model}s: query${table.model}s,
   // mutationMiseajour: mutationMiseajour,
   // mutationAjout: mutationAjout,
    mutationSuppression: mutationSuppression,
`

table.champs.forEach((champ) => {
    if(champ.estCle) {
        contenu+= `      
     query${champ.nom.ucfirst()}s: query${champ.nom.ucfirst()}s,
        `
    }
})

contenu+= `
}
// collones du tableau
const collonnes = getcollones${table.model}s(fonctions);

/// Gestion du formulaire
const schema = yup.object().shape({ 

        nom: yup.string().required('Le champs Nom est requis'),       
  //      description: yup.string().required('Le champs Description est requis'),       
    
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
const useforms = {
    ${table.nom}:useform
}

return <${table.model}View
state={state}
fonctions={fonctions}
collonnes={collonnes}
queries={queries}
useforms={useforms}
onSubmit={onSubmit}
/>
}
export default ${table.model}Controller

    
    `
    return contenu
  }

  module.exports = getContenuFichierControllerPourImage