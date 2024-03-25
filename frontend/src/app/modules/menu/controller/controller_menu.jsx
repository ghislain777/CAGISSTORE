

import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import MenuModel from "../model/menu_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import MenuView from '../view/view_menu'
import getcollonesMenus from '../view/collones_menu'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import uploaderFichier from 'app/services/fichier/fichierService'
import { yupResolver } from '@hookform/resolvers/yup'


const MenuController = () => {

    const menu0 = {

nom: '',
    description: '',
    icone: '',
    position: 0,
    
 
    }

    const state0 = {
        menu: menu0,
        menu1: null,  // utilisé pour les champs non controllés comme les champs upload
        titre: "Gestion des menus",
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
    let menuModel = new MenuModel();



    const queryClient = useQueryClient()
  
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Gestion des menus",
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
            setState({ ...state, menu: null, titre: "Nouveau menu ", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
            console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Gestion des menus", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

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
mutationSuppression.mutate(state.menu)
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
  const handleClickSurAction = (menu, action) => {
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
            menu: menu,
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
            menu:menu,
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

    const queryMenus = useQuery(
        ['Menus', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => menuModel.getTouslesMenus(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
        
    const mutationAjout = useMutation(menuModel.ajoutMenu, {
        onSuccess: () => {
            queryClient.invalidateQueries('Menus')
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
            queryClient.invalidateQueries('Menus')
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

    const mutationMiseajour = useMutation(menuModel.miseajourMenu, {
        onSuccess: () => {

            queryClient.invalidateQueries('Menus')
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
            queryClient.invalidateQueries('Menus')
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





const mutationSuppression = useMutation(menuModel.suppressionMenu, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Menus')
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
        queryClient.invalidateQueries('Menus')
    },
  })


    const queries = {
        queryMenus: queryMenus,
        mutationMiseajour: mutationMiseajour,
        mutationAjout: mutationAjout,
        mutationSuppression: mutationSuppression,   
    }
    // collones du tableau
    const collonnes = getcollonesMenus(fonctions);

    /// Gestion du formulaire
    const schema = yup.object().shape({ 

    
    nom: yup.string().required('Le champs Nom est requis'),
    description: yup.string().required('Le champs Description est requis'),
    icone: yup.string().required('Le champs Icone est requis'),
    position: yup
    .number()
    .required('position requis')
    .positive('Le position doit être positif')
    .integer('Le position doit être un nombre entier'),
})

    const useform
        = useForm({
            resolver: yupResolver(schema),
            defaultValues: {
                menu: state.menu,

                }
            }
        )

    // ***Soumission du formulaire de menu
    const onSubmit = (data) => {
        let donnees = { ...state.menu, ...data }
        if (state.menu?.id !== undefined) {
            //  console.log('mise a jour de menu}...');
            queries.mutationMiseajour.mutate({ ...donnees })
        } else {
            queries.mutationAjout.mutate({ ...donnees })
        }
        // console.log(donnees);
    }

    // vue

    return <MenuView
        state={state}
        fonctions={fonctions}
        collonnes={collonnes}
        queries={queries}
        useform={useform}
        onSubmit={onSubmit}
    />
}

export default MenuController

