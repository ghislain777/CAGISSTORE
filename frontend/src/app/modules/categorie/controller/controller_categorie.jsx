

import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import CategorieModel from "../model/categorie_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import CategorieView from '../view/view_categorie'
import getcollonesCategories from '../view/collones_categorie'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'



const CategorieController = () => {
    const categorie0 = {
        id:0,
        nom: '',
    actif: '',
    description: '',
    Media: []

}

const state0 = {
    nouvellecategorie :true,
    categorie: categorie0,
    categorie1: null,  // utilisé pour les champs non controllés comme les champs upload
    titre: 'Gestion des categories',
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
let categorieModel = new CategorieModel();

const queryClient = useQueryClient()
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Gestion des categories",
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
            setState({ ...state, categorie: categorie0, titre: "Nouveau categorie", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
        queryClient.invalidateQueries("Categories")
           // console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Gestion des categories", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

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
    mutationSuppression.mutate(state.categorie)
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
  const handleClickSurAction = (categorie, action) => {
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
            categorie: categorie,
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
            categorie:categorie,
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
  const handleClickSurphoto = (categorie) => {
    setState({
        ...state,
        etape:1,
        
        categorie:categorie,
        dialoguephoto: {         
            ...state.dialoguephoto,
            photoEnCours:0,     
            open: true,
            titre: `Photos 1/${categorie.Media.length}`,
            fichier: categorie.Media[0]?.fichier,
            objet: categorie.titre,
        }
    })
}

const handleAjouterPhoto = (categorie) => {
    console.log(`categorie: ${JSON.stringify(categorie)}`)
    
    setState({
        ...state,
        etape:2,
        categorie:categorie,
        pagestate:{
            ...state.pagestate,
        
            openImage:true,
            mode:"edition"
        }
        
    })
  }

  const handleClickSurPhotoSuivant = () => {
    //  console.log(state.categorie.Media.length)
     // state.dialoguephoto.photoEnCours++;
      if (state.dialoguephoto.photoEnCours < state.categorie.Media.length-1) {
     const nouvellePhotoEncours = state.dialoguephoto.photoEnCours+1
          setState({
              ...state,
              dialoguephoto: {
                  ...state.dialoguephoto,
                  photoEnCours: nouvellePhotoEncours,
                  open: true,
                  titre: `Photos ${nouvellePhotoEncours+1}/${state.categorie.Media.length}`,
                  fichier: state.categorie.Media[nouvellePhotoEncours].fichier,
                  objet: state.categorie.titre,
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
                  titre: `Photos ${nouvellePhotoEncours+1}/${state.categorie.Media.length}`,
                  fichier: state.categorie.Media[nouvellePhotoEncours].fichier,
                  objet: state.categorie.titre,
              }
          })
      }

  }
  
        const handleTogleactif = (categorie) => {
            mutationactif.mutate(categorie)
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
            handleTogleactif: handleTogleactif    
}

 fonctions.handleClickSurTerminer = (categorie) => {
    AnnulerEnregistrement()
   // console.log("enregistrement du categorie dans la base de données")

   // console.log(categorie)
  }
// Usequery fonctions

const queryCategories = useQuery(
    ['Categories', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
    () => categorieModel.getTouslesCategories(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
    { keepPreviousData: true }) 
    
      
const mutationactif = useMutation(categorieModel.togleactifCategorie, {
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
        queryClient.invalidateQueries('Categories')
    },
  })             
             
   
const mutationSuppression = useMutation(categorieModel.suppressionCategorie, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Categories')
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
        queryClient.invalidateQueries('Categories')
    },
  })
  

// const mutationSuppressionImage = useMutation(categorieModel.suppressionImage, {
//     onSuccess: () => {
//         //  queryClient.invalidateQueries('Categories')
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
//         queryClient.invalidateQueries('Categories')
//     },
//   })
 


  const queries = {
    queryCategories: queryCategories,
   // mutationMiseajour: mutationMiseajour,
   // mutationAjout: mutationAjout,
    mutationSuppression: mutationSuppression,

}
// collones du tableau
const collonnes = getcollonesCategories(fonctions);

/// Gestion du formulaire
const schema = yup.object().shape({ 

        nom: yup.string().required('Le champs Nom est requis'),       
  //      description: yup.string().required('Le champs Description est requis'),       
    
})

const useform
    = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            categorie: state.categorie,
        }
    }
)

// ***Soumission du formulaire de {$table}
const onSubmit = (data) => {
let donnees = { ...state.categorie, ...data }
if (state.categorie?.id !== undefined) {
    //  console.log('mise a jour de categorie}...');
    queries.mutationMiseajour.mutate({ ...donnees })
} else {
    queries.mutationAjout.mutate({ ...donnees })
}
// console.log(donnees);
}

// vue
const useforms = {
    categorie:useform
}

return <CategorieView
state={state}
fonctions={fonctions}
collonnes={collonnes}
queries={queries}
useforms={useforms}
onSubmit={onSubmit}
/>
}
export default CategorieController

    
    