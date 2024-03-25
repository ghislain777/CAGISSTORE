
import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import LignecommandeModel from "../model/lignecommande_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import LignecommandeView from '../view/view_lignecommande'
import getcollonesLignecommandes from '../view/collones_lignecommande'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import uploaderFichier from 'app/services/fichier/fichierService'
import { yupResolver } from '@hookform/resolvers/yup'

import ProduitModel from "app/modules/produit/model/produit_model"

import CommandeModel from "app/modules/commande/model/commande_model"

const LignecommandeController = () => {
    const lignecommande0 = {
        prixunitaire: 0,
        quantite: 0,
        prixtotal: 0,
        produit: 1,
        commande: 1,
        
}

const state0 = {
    lignecommande: lignecommande0,
    lignecommande1: null,  // utilisé pour les champs non controllés comme les champs upload
    titre: 'Lignes de commande',
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
let lignecommandeModel = new LignecommandeModel();

        let produitModel = new ProduitModel()
        
        let commandeModel = new CommandeModel()
        
const queryClient = useQueryClient()
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Lignes de commande",
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
            setState({ ...state, lignecommande: null, titre: "Nouvelle ligne", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
            console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Lignes de commande", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

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
    mutationSuppression.mutate(state.lignecommande)
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
  const handleClickSurAction = (lignecommande, action) => {
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
            lignecommande: lignecommande,
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
            lignecommande:lignecommande,
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

const queryLignecommandes = useQuery(
    ['Lignecommandes', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
    () => lignecommandeModel.getTouslesLignecommandes(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
    { keepPreviousData: true })      
    const queryProduits = useQuery(
        ['Produits', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => produitModel.getTouslesProduits(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
              
    const queryCommandes = useQuery(
        ['Commandes', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => commandeModel.getTouslesCommandes(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
        

const mutationAjout = useMutation(lignecommandeModel.ajoutLignecommande, {
    onSuccess: () => {
        queryClient.invalidateQueries('Lignecommandes')
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
        queryClient.invalidateQueries('Lignecommandes')
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

const mutationMiseajour = useMutation(lignecommandeModel.miseajourLignecommande, {
    onSuccess: () => {

        queryClient.invalidateQueries('Lignecommandes')
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
        queryClient.invalidateQueries('Lignecommandes')
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



const mutationSuppression = useMutation(lignecommandeModel.suppressionLignecommande, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Lignecommandes')
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
        queryClient.invalidateQueries('Lignecommandes')
    },
  })
  const queries = {
    queryLignecommandes: queryLignecommandes,
    mutationMiseajour: mutationMiseajour,
    mutationAjout: mutationAjout,
    mutationSuppression: mutationSuppression,


    queryProduits: queryProduits,
    
    queryCommandes: queryCommandes,
    
}
// collones du tableau
const collonnes = getcollonesLignecommandes(fonctions);

/// Gestion du formulaire
const schema = yup.object().shape({ 

    
})

const useform
    = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            lignecommande: state.lignecommande,
        }
    }
)

// ***Soumission du formulaire de {$table}
const onSubmit = (data) => {
let donnees = { ...state.lignecommande, ...data }
if (state.lignecommande?.id !== undefined) {
    //  console.log('mise a jour de lignecommande}...');
    queries.mutationMiseajour.mutate({ ...donnees })
} else {
    queries.mutationAjout.mutate({ ...donnees })
}
// console.log(donnees);
}

// vue

return <LignecommandeView
state={state}
fonctions={fonctions}
collonnes={collonnes}
queries={queries}
useform={useform}
onSubmit={onSubmit}
/>
}
export default LignecommandeController

    