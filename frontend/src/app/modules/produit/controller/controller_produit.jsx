

import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import ProduitModel from "../model/produit_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import ProduitView from '../view/view_produit'
import getcollonesProduits from '../view/collones_produit'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


import FournisseurModel from "app/modules/fournisseur/model/fournisseur_model"

import SouscategorieModel from "app/modules/souscategorie/model/souscategorie_model"


const ProduitController = () => {
    const produit0 = {
        id:0,
        nom: '',
    description: '',
    descriptionlongue: '',
    actif: '',
    enpromo: '',
    prixdevente: 0,
        prixpromo: 0,
        prixdachat: 0,
        fournisseur: 1,
        souscategorie: 1,
        Media: []

}

const state0 = {
    nouvelleproduit :true,
    produit: produit0,
    produit1: null,  // utilisé pour les champs non controllés comme les champs upload
    titre: 'Gestion des produits',
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
let produitModel = new ProduitModel();

        let fournisseurModel = new FournisseurModel()
        
        let souscategorieModel = new SouscategorieModel()
        
const queryClient = useQueryClient()
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Gestion des produits",
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
            setState({ ...state, produit: produit0, titre: "Nouveau produit", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
        queryClient.invalidateQueries("Produits")
           // console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Gestion des produits", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

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
    mutationSuppression.mutate(state.produit)
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
  const handleClickSurAction = (produit, action) => {
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
            produit: produit,
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
            produit:produit,
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
  const handleClickSurphoto = (produit) => {
    setState({
        ...state,
        etape:1,
        
        produit:produit,
        dialoguephoto: {         
            ...state.dialoguephoto,
            photoEnCours:0,     
            open: true,
            titre: `Photos 1/${produit.Media.length}`,
            fichier: produit.Media[0]?.fichier,
            objet: produit.titre,
        }
    })
}

const handleAjouterPhoto = (produit) => {
    console.log(`produit: ${JSON.stringify(produit)}`)
    
    setState({
        ...state,
        etape:2,
        produit:produit,
        pagestate:{
            ...state.pagestate,
        
            openImage:true,
            mode:"edition"
        }
        
    })
  }

  const handleClickSurPhotoSuivant = () => {
    //  console.log(state.produit.Media.length)
     // state.dialoguephoto.photoEnCours++;
      if (state.dialoguephoto.photoEnCours < state.produit.Media.length-1) {
     const nouvellePhotoEncours = state.dialoguephoto.photoEnCours+1
          setState({
              ...state,
              dialoguephoto: {
                  ...state.dialoguephoto,
                  photoEnCours: nouvellePhotoEncours,
                  open: true,
                  titre: `Photos ${nouvellePhotoEncours+1}/${state.produit.Media.length}`,
                  fichier: state.produit.Media[nouvellePhotoEncours].fichier,
                  objet: state.produit.titre,
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
                  titre: `Photos ${nouvellePhotoEncours+1}/${state.produit.Media.length}`,
                  fichier: state.produit.Media[nouvellePhotoEncours].fichier,
                  objet: state.produit.titre,
              }
          })
      }

  }
  
        const handleTogleactif = (produit) => {
            mutationactif.mutate(produit)
            }
        
        const handleTogleenpromo = (produit) => {
            mutationenpromo.mutate(produit)
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
                handleTogleenpromo: handleTogleenpromo,
                    
}

 fonctions.handleClickSurTerminer = (produit) => {
    AnnulerEnregistrement()
   // console.log("enregistrement du produit dans la base de données")

   // console.log(produit)
  }
// Usequery fonctions

const queryProduits = useQuery(
    ['Produits', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
    () => produitModel.getTouslesProduits(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
    { keepPreviousData: true }) 
    
      
const mutationactif = useMutation(produitModel.togleactifProduit, {
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
        queryClient.invalidateQueries('Produits')
    },
  })             
        
      
const mutationenpromo = useMutation(produitModel.togleenpromoProduit, {
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
        queryClient.invalidateQueries('Produits')
    },
  })             
              
    const queryFournisseurs = useQuery(
        ['Fournisseurs', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => fournisseurModel.getTouslesFournisseurs(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
              
    const querySouscategories = useQuery(
        ['Souscategories', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => souscategorieModel.getTouslesSouscategories(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
             
   
const mutationSuppression = useMutation(produitModel.suppressionProduit, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Produits')
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
        queryClient.invalidateQueries('Produits')
    },
  })
  

// const mutationSuppressionImage = useMutation(produitModel.suppressionImage, {
//     onSuccess: () => {
//         //  queryClient.invalidateQueries('Produits')
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
//         queryClient.invalidateQueries('Produits')
//     },
//   })
 


  const queries = {
    queryProduits: queryProduits,
   // mutationMiseajour: mutationMiseajour,
   // mutationAjout: mutationAjout,
    mutationSuppression: mutationSuppression,
      
     queryFournisseurs: queryFournisseurs,
              
     querySouscategories: querySouscategories,
        
}
// collones du tableau
const collonnes = getcollonesProduits(fonctions);

/// Gestion du formulaire
const schema = yup.object().shape({ 

        nom: yup.string().required('Le champs Nom est requis'),       
  //      description: yup.string().required('Le champs Description est requis'),       
    
})

const useform
    = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            produit: state.produit,
        }
    }
)

// ***Soumission du formulaire de {$table}
const onSubmit = (data) => {
let donnees = { ...state.produit, ...data }
if (state.produit?.id !== undefined) {
    //  console.log('mise a jour de produit}...');
    queries.mutationMiseajour.mutate({ ...donnees })
} else {
    queries.mutationAjout.mutate({ ...donnees })
}
// console.log(donnees);
}

// vue
const useforms = {
    produit:useform
}

return <ProduitView
state={state}
fonctions={fonctions}
collonnes={collonnes}
queries={queries}
useforms={useforms}
onSubmit={onSubmit}
/>
}
export default ProduitController

    
    