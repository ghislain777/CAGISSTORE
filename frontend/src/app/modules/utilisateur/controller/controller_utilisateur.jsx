
import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import UtilisateurModel from "../model/utilisateur_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import UtilisateurView from '../view/view_utilisateur'
import getcollonesUtilisateurs from '../view/collones_utilisateur'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import uploaderFichier from 'app/services/fichier/fichierService'
import { yupResolver } from '@hookform/resolvers/yup'

import RoleModel from "app/modules/role/model/role_model"

const UtilisateurController = () => {
    const utilisateur0 = {
        nom: '',
    prenom: '',
    telephone: '',
    email: '',
    motdepasse: '',
    role: 1,
        
}

const state0 = {
    utilisateur: utilisateur0,
    utilisateur1: null,  // utilisé pour les champs non controllés comme les champs upload
    titre: 'Gestion des utilisateurs',
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

        progressphoto: 0,
           
}

const [state, setState] = useState(state0);
let utilisateurModel = new UtilisateurModel();

        let roleModel = new RoleModel()
        
const queryClient = useQueryClient()
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Gestion des utilisateurs",
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
            setState({ ...state, utilisateur: null, titre: "Nouvel utilisateur", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
            console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Gestion des utilisateurs", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

        }
            
const handleTogleactif = (utilisateur) => {
mutationactif.mutate(utilisateur)    
}

    const uploaderphoto= (fichier) => {
        if (fichier) {
            //    console.log(fichier);
         mutationUploadphoto.mutate({fichier:fichier, objet:'photoutilisateur', handleprogress: handleProgressphoto})
            }
      //  console.log('le filtre a changé');
      }
    const supprimerphoto = () => {
        console.log('Suppression du fichier');
      }

const handleProgressphoto = (progressEvent) => {
var percentCompleted = Math.round(
(progressEvent.loaded * 100) / progressEvent.total
)
setState({...state, progressphoto: percentCompleted})
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
    mutationSuppression.mutate(state.utilisateur)
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
    
  
    const handleClickSurphoto = (utilisateur) => {
        setState({
            ...state,
            dialoguephoto: {
                open: true,
                titre: 'photo',
                fichier: utilisateur.photo,
                objet: 'photoutilisateur'
            }

        })
    }
        
       const handledatecreatedAtchange = (date) => {  
        setState({
            ...state,
            utilisateur: {
                ...state.utilisateur,
            createdAt:date
            }
        })
     }
       
       const handledateupdatedAtchange = (date) => {  
        setState({
            ...state,
            utilisateur: {
                ...state.utilisateur,
            updatedAt:date
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
  const handleClickSurAction = (utilisateur, action) => {
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
            utilisateur: utilisateur,
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
            utilisateur:utilisateur,
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
            

    handleTogleactif:handleTogleactif,
    
    handleProgressphoto:handleProgressphoto, 
    uploaderphoto:uploaderphoto, 
    supprimerphoto: supprimerphoto,  
    handleClickSurphoto: handleClickSurphoto,
    
   handledatecreatedAtchange:handledatecreatedAtchange,
    
   handledateupdatedAtchange:handledateupdatedAtchange,
              
}
// Usequery fonctions

const queryUtilisateurs = useQuery(
    ['Utilisateurs', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
    () => utilisateurModel.getTouslesUtilisateurs(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
    { keepPreviousData: true })      
    const queryRoles = useQuery(
        ['Roles', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => roleModel.getTouslesRoles(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
        

const mutationAjout = useMutation(utilisateurModel.ajoutUtilisateur, {
    onSuccess: () => {
        queryClient.invalidateQueries('Utilisateurs')
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
        queryClient.invalidateQueries('Utilisateurs')
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

const mutationMiseajour = useMutation(utilisateurModel.miseajourUtilisateur, {
    onSuccess: () => {

        queryClient.invalidateQueries('Utilisateurs')
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
        queryClient.invalidateQueries('Utilisateurs')
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

        
        
const mutationactif = useMutation(utilisateurModel.togleactifUtilisateur, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Utilisateurs')
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
        queryClient.invalidateQueries('Utilisateurs')
    },
  })
        
  const mutationUploadphoto = useMutation(uploaderFichier, {
    onSuccess: (data) => {
     // setState({ ...state, utilisateur1:{photo : data}})
        //  
        setState({
            ...state,
            utilisateur:{...state.utilisateur,photo : data},
            alert: {
                message: "Upload du fichier réussi",
                open: true,
                severity: "success",
                automaticClose: false
            },
            progressphoto: 100
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
    
        


const mutationSuppression = useMutation(utilisateurModel.suppressionUtilisateur, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Utilisateurs')
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
        queryClient.invalidateQueries('Utilisateurs')
    },
  })
  const queries = {
    queryUtilisateurs: queryUtilisateurs,
    mutationMiseajour: mutationMiseajour,
    mutationAjout: mutationAjout,
    mutationSuppression: mutationSuppression,


    mutationUploadphoto:mutationUploadphoto,
    
    queryRoles: queryRoles,
    
}
// collones du tableau
const collonnes = getcollonesUtilisateurs(fonctions);

/// Gestion du formulaire
const schema = yup.object().shape({ 
        nom: yup.string().required('Le champs Nom est requis'),       
        prenom: yup.string().required('Le champs prenom est requis'),       
        telephone: yup.string().required('Le champs Téléphone est requis'),       
        motdepasse: yup.string().required('Le champs motdepasse est requis'),       
    
})

const useform
    = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            utilisateur: state.utilisateur,
        }
    }
)

// ***Soumission du formulaire de {$table}
const onSubmit = (data) => {
let donnees = { ...state.utilisateur, ...data }
if (state.utilisateur?.id !== undefined) {
    //  console.log('mise a jour de utilisateur}...');
    queries.mutationMiseajour.mutate({ ...donnees })
} else {
    queries.mutationAjout.mutate({ ...donnees })
}
// console.log(donnees);
}

// vue

return <UtilisateurView
state={state}
fonctions={fonctions}
collonnes={collonnes}
queries={queries}
useform={useform}
onSubmit={onSubmit}
/>
}
export default UtilisateurController

    