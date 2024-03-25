

import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import RoleModel from "../model/role_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import RoleView from '../view/view_role'
import getcollonesRoles from '../view/collones_role'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import uploaderFichier from 'app/services/fichier/fichierService'
import { yupResolver } from '@hookform/resolvers/yup'


const RoleController = () => {

    const role0 = {

nom: '',
    description: '',
    
 
    }

    const state0 = {
        role: role0,
        role1: null,  // utilisé pour les champs non controllés comme les champs upload
        titre: "Gestion des roles",
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
    let roleModel = new RoleModel();



    const queryClient = useQueryClient()
  
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Gestion des roles",
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
            setState({ ...state, role: null, titre: "Nouveau rôle ", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
            console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Gestion des roles", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

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
mutationSuppression.mutate(state.role)
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
  const handleClickSurAction = (role, action) => {
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
            role: role,
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
            role:role,
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

    const queryRoles = useQuery(
        ['Roles', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => roleModel.getTouslesRoles(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
        
    const mutationAjout = useMutation(roleModel.ajoutRole, {
        onSuccess: () => {
            queryClient.invalidateQueries('Roles')
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
            queryClient.invalidateQueries('Roles')
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

    const mutationMiseajour = useMutation(roleModel.miseajourRole, {
        onSuccess: () => {

            queryClient.invalidateQueries('Roles')
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
            queryClient.invalidateQueries('Roles')
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





const mutationSuppression = useMutation(roleModel.suppressionRole, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Roles')
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
        queryClient.invalidateQueries('Roles')
    },
  })


    const queries = {
        queryRoles: queryRoles,
        mutationMiseajour: mutationMiseajour,
        mutationAjout: mutationAjout,
        mutationSuppression: mutationSuppression,   
    }
    // collones du tableau
    const collonnes = getcollonesRoles(fonctions);

    /// Gestion du formulaire
    const schema = yup.object().shape({ 

    
    nom: yup.string().required('Le champs Nom est requis'),
    description: yup.string().required('Le champs Description est requis'),
})

    const useform
        = useForm({
            resolver: yupResolver(schema),
            defaultValues: {
                role: state.role,

                }
            }
        )

    // ***Soumission du formulaire de role
    const onSubmit = (data) => {
        let donnees = { ...state.role, ...data }
        if (state.role?.id !== undefined) {
            //  console.log('mise a jour de role}...');
            queries.mutationMiseajour.mutate({ ...donnees })
        } else {
            queries.mutationAjout.mutate({ ...donnees })
        }
        // console.log(donnees);
    }

    // vue

    return <RoleView
        state={state}
        fonctions={fonctions}
        collonnes={collonnes}
        queries={queries}
        useform={useform}
        onSubmit={onSubmit}
    />
}

export default RoleController

