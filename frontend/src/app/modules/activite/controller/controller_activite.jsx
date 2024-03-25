

import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import ActiviteModel from "../model/activite_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import ActiviteView from '../view/view_activite'
import getcollonesActivites from '../view/collones_activite'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import uploaderFichier from 'app/services/fichier/fichierService'
import { yupResolver } from '@hookform/resolvers/yup'
import MenuModel from "app/modules/menu/model/menu_model";



const ActiviteController = () => {

    const activite0 = {

nom: '',
    description: '',
    chemain: '',
    icone: '',
    position: 0,
    menu: '/api/menus/1',
        
 
    }

    const state0 = {
        activite: activite0,
        activite1: null,  // utilisé pour les champs non controllés comme les champs upload
        titre: "Gestion des activités",
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
    let activiteModel = new ActiviteModel();


    let menuModel = new MenuModel()
    

    const queryClient = useQueryClient()
  
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Gestion des activités",
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
            setState({ ...state, activite: null, titre: "Nouvelle activité ", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
            console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Gestion des activités", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

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
mutationSuppression.mutate(state.activite)
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
  const handleClickSurAction = (activite, action) => {
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
            activite: activite,
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
            activite:activite,
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

    const queryActivites = useQuery(
        ['Activites', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => activiteModel.getTouslesActivites(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
        
    
    const queryMenus = useQuery(
        ['Menus', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => menuModel.getTouslesMenus(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
    
    
    const mutationAjout = useMutation(activiteModel.ajoutActivite, {
        onSuccess: () => {
            queryClient.invalidateQueries('Activites')
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
            queryClient.invalidateQueries('Activites')
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

    const mutationMiseajour = useMutation(activiteModel.miseajourActivite, {
        onSuccess: () => {

            queryClient.invalidateQueries('Activites')
            setState({
                ...state,
//                 pagestate:{
//                     mode: "affichage",
// affichageTable: true,
//                 },
                alert: {
                    message: "Mise à jour Réussie...",
                    open: true,
                    severity: "success",
                    automaticClose: true
                }
            })
        },
        onError: () => {
            queryClient.invalidateQueries('Activites')
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





const mutationSuppression = useMutation(activiteModel.suppressionActivite, {
    onSuccess: (data) => {
        //  queryClient.invalidateQueries('Activites')
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
        queryClient.invalidateQueries('Activites')
    },
  })


    const queries = {
        queryActivites: queryActivites,
        mutationMiseajour: mutationMiseajour,
        mutationAjout: mutationAjout,
        mutationSuppression: mutationSuppression,
        queryMenus: queryMenus,   
    }
    // collones du tableau
    const collonnes = getcollonesActivites(fonctions);

    /// Gestion du formulaire
    const schema = yup.object().shape({ 

    
    nom: yup.string().required('Le champs Nom est requis'),
    chemain: yup.string().required('Le champs Chemain est requis'),
    menu: yup.string().required('Le champs Menu est requis'),
})

    const useform
        = useForm({
            resolver: yupResolver(schema),
            defaultValues: {
                activite: state.activite,

                }
            }
        )

    // ***Soumission du formulaire de activite
    const onSubmit = (data) => {
        let donnees = { ...state.activite, ...data }
        if (state.activite?.id !== undefined) {
            //  console.log('mise a jour de activite}...');
            queries.mutationMiseajour.mutate({ ...donnees })
        } else {
            queries.mutationAjout.mutate({ ...donnees })
        }
        // console.log(donnees);
    }

    // vue

    return <ActiviteView
        state={state}
        fonctions={fonctions}
        collonnes={collonnes}
        queries={queries}
        useform={useform}
        onSubmit={onSubmit}
    />
}

export default ActiviteController

