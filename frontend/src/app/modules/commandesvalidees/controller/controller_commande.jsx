
import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import CommandeModel from "../../commande/model/commande_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import CommandeView from '../view/view_commande'
import getcollonesCommandes from '../view/collones_commande'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import uploaderFichier from 'app/services/fichier/fichierService'
import { yupResolver } from '@hookform/resolvers/yup'

import ClientModel from "app/modules/client/model/client_model"

import PanierModel from "app/modules/panier/model/panier_model"

import TransporteurModel from "app/modules/transporteur/model/transporteur_model"

import MoyendepayementModel from "app/modules/moyendepayement/model/moyendepayement_model"

import AdresseModel from "app/modules/adresse/model/adresse_model"

import StatutcommandeModel from "app/modules/statutcommande/model/statutcommande_model"

const CommandeController = () => {
    const commande0 = {
        montantttc: 0,
        montanttaxe: 0,
        montantht: 0,
        remise: 0,
        montanttransport: 0,
        delaisdelivraison: '',
       messageduclient: '',
       datecommande: '',
       dateconfirmation: '',
       dateexpedition: '',
       datereception: '',
       dateannulation: '',
       datepayement: '',
       client: 1,
        panier: 1,
        transporteur: 1,
        moyendepayement: 1,
        adresse: 1,
        statutcommande: 1,
        
     }

const state0 = {
    commande: commande0,
    commande1: null,  // utilisé pour les champs non controllés comme les champs upload
    titre: 'Gestion des commandes',
    tableconfig: {
        page: 0,
        rowsPerPage: 30,
        recherche: {
            id:"",
            Statutcommande:{
                id:2
            },
            Client:{
                id:""
            }
        },
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
let commandeModel = new CommandeModel();

        let clientModel = new ClientModel()
        
        let panierModel = new PanierModel()
        
        let transporteurModel = new TransporteurModel()
        
        let moyendepayementModel = new MoyendepayementModel()
        
        let adresseModel = new AdresseModel()
        
        let statutcommandeModel = new StatutcommandeModel()
        
const queryClient = useQueryClient()
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Gestion des commandes",
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
            setState({ ...state, commande: null, titre: "Nouvelle commande", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
            console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Gestion des commandes", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

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
    mutationSuppression.mutate(state.commande)
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
    

       const handledatedatecommandechange = (date) => {  
        setState({
            ...state,
            commande: {
                ...state.commande,
            datecommande:date
            }
        })
     }
       
       const handledatedateconfirmationchange = (date) => {  
        setState({
            ...state,
            commande: {
                ...state.commande,
            dateconfirmation:date
            }
        })
     }
       
       const handledatedateexpeditionchange = (date) => {  
        setState({
            ...state,
            commande: {
                ...state.commande,
            dateexpedition:date
            }
        })
     }
       
       const handledatedatereceptionchange = (date) => {  
        setState({
            ...state,
            commande: {
                ...state.commande,
            datereception:date
            }
        })
     }
       
       const handledatedateannulationchange = (date) => {  
        setState({
            ...state,
            commande: {
                ...state.commande,
            dateannulation:date
            }
        })
     }
       
       const handledatedatepayementchange = (date) => {  
        setState({
            ...state,
            commande: {
                ...state.commande,
            datepayement:date
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
  const handleClickSurAction = (commande, action) => {
    let key = ""
    const ladate = {}
    if(action === 2) { // en cours d'expedition
        key = "datedeconfirmation"
    }
    if(action === 3) { // expedie

        key = "datedexpedition"

    }
    if(action === 4) { // livree

key ="datedelivraison"
    }
    if(action === 5) { // annulee
key = "dateannulation"
    }
    ladate[key] = new Date()

    mutationMiseajour.mutate({statutcommande:action, id:commande.id, ...ladate })
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
  const handleChangeClient = (event) => {
    setState({
        ...state,
        tableconfig: {
          ...state.tableconfig,
          recherche:{
              ...state.tableconfig.recherche,
              Client: {
                  id: event.target.value
              }
          }
        }
        
    })
  }
  const handleChangeId = (event) => {
    setState({
        ...state,
        tableconfig: {
          ...state.tableconfig,
          recherche:{
              ...state.tableconfig.recherche,
                  id: event.target.value
          }
        }
        
    })
  }
  const handleChangeStatutcommande = (event) => {
    setState({
        ...state,
        tableconfig: {
          ...state.tableconfig,
          recherche:{
              ...state.tableconfig.recherche,
              Statutcommande: {
                  id: event.target.value
              }
          }
        }
        
    })
  }


        const fonctions = {
            handleChangeClient:handleChangeClient,
            handleChangeId:handleChangeId,
            handleChangeStatutcommande:handleChangeStatutcommande,
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
            

   handledatedatecommandechange:handledatedatecommandechange,
    
   handledatedateconfirmationchange:handledatedateconfirmationchange,
    
   handledatedateexpeditionchange:handledatedateexpeditionchange,
    
   handledatedatereceptionchange:handledatedatereceptionchange,
    
   handledatedateannulationchange:handledatedateannulationchange,
    
   handledatedatepayementchange:handledatedatepayementchange,
              
}
// Usequery fonctions

const queryCommandes = useQuery(
    ['Commandes', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
    () => commandeModel.getTouslesCommandes(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
    { keepPreviousData: true })      
    const queryClients = useQuery(
        ['Clients', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => clientModel.getTouslesClients(0, 1000, '', state.tableconfig.filtre),
        { keepPreviousData: true })
              
    const queryPaniers = useQuery(
        ['Paniers', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => panierModel.getTouslesPaniers(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
              
    const queryTransporteurs = useQuery(
        ['Transporteurs', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => transporteurModel.getTouslesTransporteurs(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
              
    const queryMoyendepayements = useQuery(
        ['Moyendepayements', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => moyendepayementModel.getTouslesMoyendepayements(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
              
    const queryAdresses = useQuery(
        ['Adresses', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => adresseModel.getTouslesAdresses(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
              
    const queryStatutcommandes = useQuery(
        ['Statutcommandes', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => statutcommandeModel.getTouslesStatutcommandes(0, 1000, '', state.tableconfig.filtre),
        { keepPreviousData: true })
        

const mutationAjout = useMutation(commandeModel.ajoutCommande, {
    onSuccess: () => {
        queryClient.invalidateQueries('Commandes')
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
        queryClient.invalidateQueries('Commandes')
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

const mutationMiseajour = useMutation(commandeModel.miseajourCommande, {
    onSuccess: () => {

        queryClient.invalidateQueries('Commandes')
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
        queryClient.invalidateQueries('Commandes')
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



const mutationSuppression = useMutation(commandeModel.suppressionCommande, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Commandes')
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
        queryClient.invalidateQueries('Commandes')
    },
  })
  const queries = {
    queryCommandes: queryCommandes,
    mutationMiseajour: mutationMiseajour,
    mutationAjout: mutationAjout,
    mutationSuppression: mutationSuppression,


    queryClients: queryClients,
    
    queryPaniers: queryPaniers,
    
    queryTransporteurs: queryTransporteurs,
    
    queryMoyendepayements: queryMoyendepayements,
    
    queryAdresses: queryAdresses,
    
    queryStatutcommandes: queryStatutcommandes,
    
}
// collones du tableau
const collonnes = getcollonesCommandes(fonctions);

/// Gestion du formulaire
const schema = yup.object().shape({ 

        delaisdelivraison: yup.string().required('Le champs Délais de livraison est requis'),       
        messageduclient: yup.string().required('Le champs Message du client est requis'),       
    
})

const useform
    = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            commande: state.commande,
        }
    }
)

// ***Soumission du formulaire de {$table}
const onSubmit = (data) => {
let donnees = { ...state.commande, ...data }
if (state.commande?.id !== undefined) {
    //  console.log('mise a jour de commande}...');
    queries.mutationMiseajour.mutate({ ...donnees })
} else {
    queries.mutationAjout.mutate({ ...donnees })
}
// console.log(donnees);
}

// vue

return <CommandeView
state={state}
fonctions={fonctions}
collonnes={collonnes}
queries={queries}
useform={useform}
onSubmit={onSubmit}
/>
}
export default CommandeController

    