

import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import FournisseurModel from "../model/fournisseur_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import FournisseurView from '../view/view_fournisseur'
import getcollonesFournisseurs from '../view/collones_fournisseur'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'



const FournisseurController = () => {
    const fournisseur0 = {
        id:0,
        nom: '',
    telephone: '',
    adresse: '',
    email: '',
    actif: '',
    description: '',
    Media: []

}

const state0 = {
    nouvellefournisseur :true,
    fournisseur: fournisseur0,
    fournisseur1: null,  // utilisé pour les champs non controllés comme les champs upload
    titre: 'Gestion des fournisseurs',
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
let fournisseurModel = new FournisseurModel();

const queryClient = useQueryClient()
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Gestion des fournisseurs",
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
            setState({ ...state, fournisseur: fournisseur0, titre: "Nouveau fournisseur", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
        queryClient.invalidateQueries("Fournisseurs")
           // console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Gestion des fournisseurs", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

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
    mutationSuppression.mutate(state.fournisseur)
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
  const handleClickSurAction = (fournisseur, action) => {
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
            fournisseur: fournisseur,
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
            fournisseur:fournisseur,
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
  const handleClickSurphoto = (fournisseur) => {
    setState({
        ...state,
        etape:1,
        
        fournisseur:fournisseur,
        dialoguephoto: {         
            ...state.dialoguephoto,
            photoEnCours:0,     
            open: true,
            titre: `Photos 1/${fournisseur.Media.length}`,
            fichier: fournisseur.Media[0]?.fichier,
            objet: fournisseur.titre,
        }
    })
}

const handleAjouterPhoto = (fournisseur) => {
    console.log(`fournisseur: ${JSON.stringify(fournisseur)}`)
    
    setState({
        ...state,
        etape:2,
        fournisseur:fournisseur,
        pagestate:{
            ...state.pagestate,
        
            openImage:true,
            mode:"edition"
        }
        
    })
  }

  const handleClickSurPhotoSuivant = () => {
    //  console.log(state.fournisseur.Media.length)
     // state.dialoguephoto.photoEnCours++;
      if (state.dialoguephoto.photoEnCours < state.fournisseur.Media.length-1) {
     const nouvellePhotoEncours = state.dialoguephoto.photoEnCours+1
          setState({
              ...state,
              dialoguephoto: {
                  ...state.dialoguephoto,
                  photoEnCours: nouvellePhotoEncours,
                  open: true,
                  titre: `Photos ${nouvellePhotoEncours+1}/${state.fournisseur.Media.length}`,
                  fichier: state.fournisseur.Media[nouvellePhotoEncours].fichier,
                  objet: state.fournisseur.titre,
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
                  titre: `Photos ${nouvellePhotoEncours+1}/${state.fournisseur.Media.length}`,
                  fichier: state.fournisseur.Media[nouvellePhotoEncours].fichier,
                  objet: state.fournisseur.titre,
              }
          })
      }

  }
  const handleTogleactif = (fournisseur) => {
    mutationactif.mutate(fournisseur)
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


 fonctions.handleClickSurTerminer = (fournisseur) => {
    AnnulerEnregistrement()
   // console.log("enregistrement du fournisseur dans la base de données")

   // console.log(fournisseur)
  }
// Usequery fonctions

const queryFournisseurs = useQuery(
    ['Fournisseurs', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
    () => fournisseurModel.getTouslesFournisseurs(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
    { keepPreviousData: true }) 
         
   
const mutationSuppression = useMutation(fournisseurModel.suppressionFournisseur, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Fournisseurs')
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
        queryClient.invalidateQueries('Fournisseurs')
    },
  })


        
const mutationactif = useMutation(fournisseurModel.togleactifFournisseur, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Privileges')
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
        queryClient.invalidateQueries('Fournisseurs')
    },
  })
  

// const mutationSuppressionImage = useMutation(fournisseurModel.suppressionImage, {
//     onSuccess: () => {
//         //  queryClient.invalidateQueries('Fournisseurs')
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
//         queryClient.invalidateQueries('Fournisseurs')
//     },
//   })
 


  const queries = {
    queryFournisseurs: queryFournisseurs,
   // mutationMiseajour: mutationMiseajour,
   // mutationAjout: mutationAjout,
    mutationSuppression: mutationSuppression,

}
// collones du tableau
const collonnes = getcollonesFournisseurs(fonctions);

/// Gestion du formulaire
const schema = yup.object().shape({ 

        nom: yup.string().required('Le champs Nom est requis'),       
  //      description: yup.string().required('Le champs Description est requis'),       
    
})

const useform
    = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            fournisseur: state.fournisseur,
        }
    }
)

// ***Soumission du formulaire de {$table}
const onSubmit = (data) => {
let donnees = { ...state.fournisseur, ...data }
if (state.fournisseur?.id !== undefined) {
    //  console.log('mise a jour de fournisseur}...');
    queries.mutationMiseajour.mutate({ ...donnees })
} else {
    queries.mutationAjout.mutate({ ...donnees })
}
// console.log(donnees);
}

// vue
const useforms = {
    fournisseur:useform
}

return <FournisseurView
state={state}
fonctions={fonctions}
collonnes={collonnes}
queries={queries}
useforms={useforms}
onSubmit={onSubmit}
/>
}
export default FournisseurController

    
    