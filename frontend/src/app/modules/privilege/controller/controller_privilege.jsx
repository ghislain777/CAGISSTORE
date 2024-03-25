

import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import PrivilegeModel from "../model/privilege_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import PrivilegeView from '../view/view_privilege'
import getcollonesPrivileges from '../view/collones_privilege'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import uploaderFichier from 'app/services/fichier/fichierService'
import { yupResolver } from '@hookform/resolvers/yup'
import ActiviteModel from "app/modules/activite/model/activite_model";
import RoleModel from "app/modules/role/model/role_model";


const PrivilegeController = () => {

    const privilege0 = {

description: '',
    actif: '',
    activite: '1',
        role: '1',
    }

    const state0 = {
        privilege: privilege0,
        privilege1: null,  // utilisé pour les champs non controllés comme les champs upload
        titre: "Gestion des privilèges",
        tableconfig: {
            page: 0,
            rowsPerPage: 30,
            recherche: '',
            filtre: {
                activite: {id: null},
                role: {id: null}
            }
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
    let privilegeModel = new PrivilegeModel();


    let activiteModel = new ActiviteModel()
    
    let roleModel = new RoleModel()
    

    const queryClient = useQueryClient()
  
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Gestion des privilèges",
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
            setState({ ...state, privilege: null, titre: "Nouveau privilège ", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
            console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Gestion des privilèges", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

        }

   
              
const handleTogleactif = (privilege) => {
    mutationactif.mutate(privilege)    
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
mutationSuppression.mutate(state.privilege)
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
  const handleClickSurAction = (privilege, action) => {
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
            privilege: privilege,
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
            privilege:privilege,
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

  const handleChangeActivite = (event) => {
      
      setState({
          ...state,
          tableconfig:{
            ...state.tableconfig,
            filtre: {
                ...state.tableconfig.filtre,
                activite: {id: event.target.value}
            }
          }  
      })
    }
    const handleChangeRole = (event) => {
        setState({
            ...state,
            tableconfig:{
              ...state.tableconfig,
              filtre: {
                  ...state.tableconfig.filtre,
                  role:{id: event.target.value}
              }
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
            handleChangeActivite:handleChangeActivite,
            handleChangeRole:handleChangeRole
                    
           
        }
    
    // Usequery fonctions

    const queryPrivileges = useQuery(
        ['Privileges', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => privilegeModel.getTouslesPrivileges(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
        
    
    const queryActivites = useQuery(
        ['Activites', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => activiteModel.getTouslesActivites(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
    
    
    
    const queryRoles = useQuery(
        ['Roles', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => roleModel.getTouslesRoles(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
    
    
    const mutationAjout = useMutation(privilegeModel.ajoutPrivilege, {
        onSuccess: () => {
            queryClient.invalidateQueries('Privileges')
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
            queryClient.invalidateQueries('Privileges')
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

    const mutationMiseajour = useMutation(privilegeModel.miseajourPrivilege, {
        onSuccess: () => {

            queryClient.invalidateQueries('Privileges')
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
            queryClient.invalidateQueries('Privileges')
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


        
const mutationactif = useMutation(privilegeModel.togleactifPrivilege, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Privileges')
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
        queryClient.invalidateQueries('Privileges')
    },
  })
        
        



const mutationSuppression = useMutation(privilegeModel.suppressionPrivilege, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Privileges')
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
        queryClient.invalidateQueries('Privileges')
    },
  })


    const queries = {
        queryPrivileges: queryPrivileges,
        mutationMiseajour: mutationMiseajour,
        mutationAjout: mutationAjout,
        mutationSuppression: mutationSuppression,
        queryActivites: queryActivites,
        queryRoles: queryRoles,   
    }
    // collones du tableau
    const collonnes = getcollonesPrivileges(fonctions);

    /// Gestion du formulaire
    const schema = yup.object().shape({ 

    
    description: yup.string().required('Le champs Description est requis'),
    activite: yup.string().required('Le champs Activite est requis'),
    role: yup.string().required('Le champs Role est requis'),
})

    const useform
        = useForm({
            resolver: yupResolver(schema),
            defaultValues: {
                privilege: state.privilege,

                }
            }
        )

    // ***Soumission du formulaire de privilege
    const onSubmit = (data) => {
        let donnees = { ...state.privilege, ...data }
        if (state.privilege?.id !== undefined) {
            //  console.log('mise a jour de privilege}...');
            queries.mutationMiseajour.mutate({ ...donnees })
        } else {
            queries.mutationAjout.mutate({ ...donnees })
        }
        // console.log(donnees);
    }

    // vue

    return <PrivilegeView
        state={state}
        fonctions={fonctions}
        collonnes={collonnes}
        queries={queries}
        useform={useform}
        onSubmit={onSubmit}
    />
}

export default PrivilegeController

