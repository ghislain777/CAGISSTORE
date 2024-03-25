
import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import PanierModel from "../model/panier_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import PanierView from '../view/view_panier'
import getcollonesPaniers from '../view/collones_panier'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import uploaderFichier from 'app/services/fichier/fichierService'
import { yupResolver } from '@hookform/resolvers/yup'

import ClientModel from "app/modules/client/model/client_model"

const PanierController = () => {
    const panier0 = {
        montantttc: 0,
        montantht: 0,
        montanttaxe: 0,
        remise: 0,
        session: '',
    client: 1,
        
}

const state0 = {
    panier: panier0,
    panier1: null,  // utilisé pour les champs non controllés comme les champs upload
    titre: 'Paniers',
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
       
}

const [state, setState] = useState(state0);
let panierModel = new PanierModel();

        let clientModel = new ClientModel()
        
const queryClient = useQueryClient()
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Paniers",
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
            setState({ ...state, panier: null, titre: "Nouveau panier", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
            console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Paniers", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

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
    mutationSuppression.mutate(state.panier)
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
  const handleClickSurAction = (panier, action) => {
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
            panier: panier,
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
            panier:panier,
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

const queryPaniers = useQuery(
    ['Paniers', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
    () => panierModel.getTouslesPaniers(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
    { keepPreviousData: true })      
    const queryClients = useQuery(
        ['Clients', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => clientModel.getTouslesClients(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
        

const mutationAjout = useMutation(panierModel.ajoutPanier, {
    onSuccess: () => {
        queryClient.invalidateQueries('Paniers')
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
        queryClient.invalidateQueries('Paniers')
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

const mutationMiseajour = useMutation(panierModel.miseajourPanier, {
    onSuccess: () => {

        queryClient.invalidateQueries('Paniers')
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
        queryClient.invalidateQueries('Paniers')
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



const mutationSuppression = useMutation(panierModel.suppressionPanier, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Paniers')
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
        queryClient.invalidateQueries('Paniers')
    },
  })
  const queries = {
    queryPaniers: queryPaniers,
    mutationMiseajour: mutationMiseajour,
    mutationAjout: mutationAjout,
    mutationSuppression: mutationSuppression,


    queryClients: queryClients,
    
}
// collones du tableau
const collonnes = getcollonesPaniers(fonctions);

/// Gestion du formulaire
const schema = yup.object().shape({ 

        session: yup.string().required('Le champs Session est requis'),       
    
})

const useform
    = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            panier: state.panier,
        }
    }
)

// ***Soumission du formulaire de {$table}
const onSubmit = (data) => {
let donnees = { ...state.panier, ...data }
if (state.panier?.id !== undefined) {
    //  console.log('mise a jour de panier}...');
    queries.mutationMiseajour.mutate({ ...donnees })
} else {
    queries.mutationAjout.mutate({ ...donnees })
}
// console.log(donnees);
}

// vue

return <PanierView
state={state}
fonctions={fonctions}
collonnes={collonnes}
queries={queries}
useform={useform}
onSubmit={onSubmit}
/>
}
export default PanierController

    