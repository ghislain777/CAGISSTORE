

import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import MoyendepayementModel from "../model/moyendepayement_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import MoyendepayementView from '../view/view_moyendepayement'
import getcollonesMoyendepayements from '../view/collones_moyendepayement'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'



const MoyendepayementController = () => {
    const moyendepayement0 = {
        id:0,
        nom: '',
    actif: '',
    description: '',
    Media: []

}

const state0 = {
    nouvellemoyendepayement :true,
    moyendepayement: moyendepayement0,
    moyendepayement1: null,  // utilisé pour les champs non controllés comme les champs upload
    titre: 'Gestion des moyens de payement',
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
let moyendepayementModel = new MoyendepayementModel();

const queryClient = useQueryClient()
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Gestion des moyens de payement",
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
            setState({ ...state, moyendepayement: moyendepayement0, titre: "Nouveau moyen de payement", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
        queryClient.invalidateQueries("Moyendepayements")
           // console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Gestion des moyens de payement", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

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
    mutationSuppression.mutate(state.moyendepayement)
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
  const handleClickSurAction = (moyendepayement, action) => {
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
            moyendepayement: moyendepayement,
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
            moyendepayement:moyendepayement,
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
  const handleClickSurphoto = (moyendepayement) => {
    setState({
        ...state,
        etape:1,
        
        moyendepayement:moyendepayement,
        dialoguephoto: {         
            ...state.dialoguephoto,
            photoEnCours:0,     
            open: true,
            titre: `Photos 1/${moyendepayement.Media.length}`,
            fichier: moyendepayement.Media[0]?.fichier,
            objet: moyendepayement.titre,
        }
    })
}

const handleAjouterPhoto = (moyendepayement) => {
    console.log(`moyendepayement: ${JSON.stringify(moyendepayement)}`)
    
    setState({
        ...state,
        etape:2,
        moyendepayement:moyendepayement,
        pagestate:{
            ...state.pagestate,
        
            openImage:true,
            mode:"edition"
        }
        
    })
  }

  const handleClickSurPhotoSuivant = () => {
    //  console.log(state.moyendepayement.Media.length)
     // state.dialoguephoto.photoEnCours++;
      if (state.dialoguephoto.photoEnCours < state.moyendepayement.Media.length-1) {
     const nouvellePhotoEncours = state.dialoguephoto.photoEnCours+1
          setState({
              ...state,
              dialoguephoto: {
                  ...state.dialoguephoto,
                  photoEnCours: nouvellePhotoEncours,
                  open: true,
                  titre: `Photos ${nouvellePhotoEncours+1}/${state.moyendepayement.Media.length}`,
                  fichier: state.moyendepayement.Media[nouvellePhotoEncours].fichier,
                  objet: state.moyendepayement.titre,
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
                  titre: `Photos ${nouvellePhotoEncours+1}/${state.moyendepayement.Media.length}`,
                  fichier: state.moyendepayement.Media[nouvellePhotoEncours].fichier,
                  objet: state.moyendepayement.titre,
              }
          })
      }

  }
  
        const handleTogleactif = (moyendepayement) => {
            mutationactif.mutate(moyendepayement)
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

 fonctions.handleClickSurTerminer = (moyendepayement) => {
    AnnulerEnregistrement()
   // console.log("enregistrement du moyendepayement dans la base de données")

   // console.log(moyendepayement)
  }
// Usequery fonctions

const queryMoyendepayements = useQuery(
    ['Moyendepayements', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
    () => moyendepayementModel.getTouslesMoyendepayements(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
    { keepPreviousData: true }) 
    
      
const mutationactif = useMutation(moyendepayementModel.togleactifMoyendepayement, {
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
        queryClient.invalidateQueries('Moyendepayements')
    },
  })             
             
   
const mutationSuppression = useMutation(moyendepayementModel.suppressionMoyendepayement, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Moyendepayements')
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
        queryClient.invalidateQueries('Moyendepayements')
    },
  })
  

// const mutationSuppressionImage = useMutation(moyendepayementModel.suppressionImage, {
//     onSuccess: () => {
//         //  queryClient.invalidateQueries('Moyendepayements')
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
//         queryClient.invalidateQueries('Moyendepayements')
//     },
//   })
 


  const queries = {
    queryMoyendepayements: queryMoyendepayements,
   // mutationMiseajour: mutationMiseajour,
   // mutationAjout: mutationAjout,
    mutationSuppression: mutationSuppression,

}
// collones du tableau
const collonnes = getcollonesMoyendepayements(fonctions);

/// Gestion du formulaire
const schema = yup.object().shape({ 

        nom: yup.string().required('Le champs Nom est requis'),       
  //      description: yup.string().required('Le champs Description est requis'),       
    
})

const useform
    = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            moyendepayement: state.moyendepayement,
        }
    }
)

// ***Soumission du formulaire de {$table}
const onSubmit = (data) => {
let donnees = { ...state.moyendepayement, ...data }
if (state.moyendepayement?.id !== undefined) {
    //  console.log('mise a jour de moyendepayement}...');
    queries.mutationMiseajour.mutate({ ...donnees })
} else {
    queries.mutationAjout.mutate({ ...donnees })
}
// console.log(donnees);
}

// vue
const useforms = {
    moyendepayement:useform
}

return <MoyendepayementView
state={state}
fonctions={fonctions}
collonnes={collonnes}
queries={queries}
useforms={useforms}
onSubmit={onSubmit}
/>
}
export default MoyendepayementController

    
    