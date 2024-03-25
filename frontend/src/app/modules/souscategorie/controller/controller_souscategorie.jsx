

import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import SouscategorieModel from "../model/souscategorie_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import SouscategorieView from '../view/view_souscategorie'
import getcollonesSouscategories from '../view/collones_souscategorie'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


import CategorieModel from "app/modules/categorie/model/categorie_model"


const SouscategorieController = () => {
    const souscategorie0 = {
        id:0,
        nom: '',
    actif: '',
    description: '',
    categorie: 1,
        Media: []

}

const state0 = {
    nouvellesouscategorie :true,
    souscategorie: souscategorie0,
    souscategorie1: null,  // utilisé pour les champs non controllés comme les champs upload
    titre: 'Gestion des souscategories',
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
let souscategorieModel = new SouscategorieModel();

        let categorieModel = new CategorieModel()
        
const queryClient = useQueryClient()
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Gestion des souscategories",
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
            setState({ ...state, souscategorie: souscategorie0, titre: "Nouveau souscategorie", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
        queryClient.invalidateQueries("Souscategories")
           // console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Gestion des souscategories", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

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
    mutationSuppression.mutate(state.souscategorie)
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
  const handleClickSurAction = (souscategorie, action) => {
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
            souscategorie: souscategorie,
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
            souscategorie:souscategorie,
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
  const handleClickSurphoto = (souscategorie) => {
    setState({
        ...state,
        etape:1,
        
        souscategorie:souscategorie,
        dialoguephoto: {         
            ...state.dialoguephoto,
            photoEnCours:0,     
            open: true,
            titre: `Photos 1/${souscategorie.Media.length}`,
            fichier: souscategorie.Media[0]?.fichier,
            objet: souscategorie.titre,
        }
    })
}

const handleAjouterPhoto = (souscategorie) => {
    console.log(`souscategorie: ${JSON.stringify(souscategorie)}`)
    
    setState({
        ...state,
        etape:2,
        souscategorie:souscategorie,
        pagestate:{
            ...state.pagestate,
        
            openImage:true,
            mode:"edition"
        }
        
    })
  }

  const handleClickSurPhotoSuivant = () => {
    //  console.log(state.souscategorie.Media.length)
     // state.dialoguephoto.photoEnCours++;
      if (state.dialoguephoto.photoEnCours < state.souscategorie.Media.length-1) {
     const nouvellePhotoEncours = state.dialoguephoto.photoEnCours+1
          setState({
              ...state,
              dialoguephoto: {
                  ...state.dialoguephoto,
                  photoEnCours: nouvellePhotoEncours,
                  open: true,
                  titre: `Photos ${nouvellePhotoEncours+1}/${state.souscategorie.Media.length}`,
                  fichier: state.souscategorie.Media[nouvellePhotoEncours].fichier,
                  objet: state.souscategorie.titre,
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
                  titre: `Photos ${nouvellePhotoEncours+1}/${state.souscategorie.Media.length}`,
                  fichier: state.souscategorie.Media[nouvellePhotoEncours].fichier,
                  objet: state.souscategorie.titre,
              }
          })
      }

  }
  
        const handleTogleactif = (souscategorie) => {
            mutationactif.mutate(souscategorie)
            }
        
   

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
            handleTogleactif: handleTogleactif,
                    
}

 fonctions.handleClickSurTerminer = (souscategorie) => {
    AnnulerEnregistrement()
   // console.log("enregistrement du souscategorie dans la base de données")

   // console.log(souscategorie)
  }
// Usequery fonctions

const querySouscategories = useQuery(
    ['Souscategories', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
    () => souscategorieModel.getTouslesSouscategories(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
    { keepPreviousData: true }) 
    
      
const mutationactif = useMutation(souscategorieModel.togleactifSouscategorie, {
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
        queryClient.invalidateQueries('Souscategories')
    },
  })             
              
    const queryCategories = useQuery(
        ['Categories', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => categorieModel.getTouslesCategories(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
             
   
const mutationSuppression = useMutation(souscategorieModel.suppressionSouscategorie, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Souscategories')
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
        queryClient.invalidateQueries('Souscategories')
    },
  })
  

// const mutationSuppressionImage = useMutation(souscategorieModel.suppressionImage, {
//     onSuccess: () => {
//         //  queryClient.invalidateQueries('Souscategories')
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
//         queryClient.invalidateQueries('Souscategories')
//     },
//   })
 


  const queries = {
    querySouscategories: querySouscategories,
   // mutationMiseajour: mutationMiseajour,
   // mutationAjout: mutationAjout,
    mutationSuppression: mutationSuppression,
      
     queryCategories: queryCategories,
        
}
// collones du tableau
const collonnes = getcollonesSouscategories(fonctions);

/// Gestion du formulaire
const schema = yup.object().shape({ 

        nom: yup.string().required('Le champs Nom est requis'),       
  //      description: yup.string().required('Le champs Description est requis'),       
    
})

const useform
    = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            souscategorie: state.souscategorie,
        }
    }
)

// ***Soumission du formulaire de {$table}
const onSubmit = (data) => {
let donnees = { ...state.souscategorie, ...data }
if (state.souscategorie?.id !== undefined) {
    //  console.log('mise a jour de souscategorie}...');
    queries.mutationMiseajour.mutate({ ...donnees })
} else {
    queries.mutationAjout.mutate({ ...donnees })
}
// console.log(donnees);
}

// vue
const useforms = {
    souscategorie:useform
}

return <SouscategorieView
state={state}
fonctions={fonctions}
collonnes={collonnes}
queries={queries}
useforms={useforms}
onSubmit={onSubmit}
/>
}
export default SouscategorieController

    
    