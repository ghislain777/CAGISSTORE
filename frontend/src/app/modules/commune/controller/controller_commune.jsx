
import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import CommuneModel from "../model/commune_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import CommuneView from '../view/view_commune'
import getcollonesCommunes from '../view/collones_commune'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import uploaderFichier from 'app/services/fichier/fichierService'
import { yupResolver } from '@hookform/resolvers/yup'

import VilleModel from "app/modules/ville/model/ville_model"

const CommuneController = () => {
    const commune0 = {
        nom: '',
    description: '',
    ville: 1,
        
}

const state0 = {
    commune: commune0,
    commune1: null,  // utilisé pour les champs non controllés comme les champs upload
    titre: 'Gestion des communes',
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
let communeModel = new CommuneModel();

        let villeModel = new VilleModel()
        
const queryClient = useQueryClient()
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Gestion des communes",
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
            setState({ ...state, commune: null, titre: "Nouvelle communes", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
            console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Gestion des communes", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

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
    mutationSuppression.mutate(state.commune)
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
  const handleClickSurAction = (commune, action) => {
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
            commune: commune,
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
            commune:commune,
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
            
          
}
// Usequery fonctions

const queryCommunes = useQuery(
    ['Communes', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
    () => communeModel.getTouslesCommunes(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
    { keepPreviousData: true })      
    const queryVilles = useQuery(
        ['Villes', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => villeModel.getTouslesVilles(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
        

const mutationAjout = useMutation(communeModel.ajoutCommune, {
    onSuccess: () => {
        queryClient.invalidateQueries('Communes')
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
        queryClient.invalidateQueries('Communes')
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

const mutationMiseajour = useMutation(communeModel.miseajourCommune, {
    onSuccess: () => {

        queryClient.invalidateQueries('Communes')
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
        queryClient.invalidateQueries('Communes')
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



const mutationSuppression = useMutation(communeModel.suppressionCommune, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Communes')
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
        queryClient.invalidateQueries('Communes')
    },
  })
  const queries = {
    queryCommunes: queryCommunes,
    mutationMiseajour: mutationMiseajour,
    mutationAjout: mutationAjout,
    mutationSuppression: mutationSuppression,


    queryVilles: queryVilles,
    
}
// collones du tableau
const collonnes = getcollonesCommunes(fonctions);

/// Gestion du formulaire
const schema = yup.object().shape({ 

        nom: yup.string().required('Le champs Nom est requis'),       
        // description: yup.string().required('Le champs Description est requis'),       
    
})

const useform
    = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            commune: state.commune,
        }
    }
)

// ***Soumission du formulaire de {$table}
const onSubmit = (data) => {
let donnees = { ...state.commune, ...data }
if (state.commune?.id !== undefined) {
    //  console.log('mise a jour de commune}...');
    queries.mutationMiseajour.mutate({ ...donnees })
} else {
    queries.mutationAjout.mutate({ ...donnees })
}
// console.log(donnees);
}

// vue

return <CommuneView
state={state}
fonctions={fonctions}
collonnes={collonnes}
queries={queries}
useform={useform}
onSubmit={onSubmit}
/>
}
export default CommuneController

    