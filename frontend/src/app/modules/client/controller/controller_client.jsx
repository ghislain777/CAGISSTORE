

import React, { useState } from "react";
import { Icon, IconButton } from '@material-ui/core';
import ClientModel from "../model/client_model"
import { useQuery, useMutation, useQueryClient } from 'react-query'
import ClientView from '../view/view_client'
import getcollonesClients from '../view/collones_client'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


import QuartierModel from "app/modules/quartier/model/quartier_model"


const ClientController = () => {
    const client0 = {
        id:0,
        nom: '',
    prenom: '',
    telephone: '',
    description: '',
    createdAt: '',
    updatedAt: '',
    quartier: 1,
        Media: []

}

const state0 = {
    nouvelleclient :true,
    client: client0,
    client1: null,  // utilisé pour les champs non controllés comme les champs upload
    titre: 'Gestion des clients',
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
let clientModel = new ClientModel();

        let quartierModel = new QuartierModel()
        
const queryClient = useQueryClient()
    
///**** fermeture de l'alerte API */
      const  handleFermetureAlerte= () => {
            setState({
                ...state,
                titre: "Gestion des clients",
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
            setState({ ...state, client: client0, titre: "Nouveau client", pagestate: { mode: "edition", action: "ajout", affichageTable: false } })
        }
    
        // Annulation de l'enregistrement

     const   AnnulerEnregistrement = () => {
        queryClient.invalidateQueries("Clients")
           // console.log("Annulation de l'enregistrement");
            setState({ ...state, titre: "Gestion des clients", pagestate: { mode: "affichage", action: "ajout", affichageTable: true } })

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
    mutationSuppression.mutate(state.client)
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
  const handleClickSurAction = (client, action) => {
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
            client: client,
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
            client:client,
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
  const handleClickSurphoto = (client) => {
    setState({
        ...state,
        etape:1,
        
        client:client,
        dialoguephoto: {         
            ...state.dialoguephoto,
            photoEnCours:0,     
            open: true,
            titre: `Photos 1/${client.Media.length}`,
            fichier: client.Media[0]?.fichier,
            objet: client.titre,
        }
    })
}

const handleAjouterPhoto = (client) => {
    console.log(`client: ${JSON.stringify(client)}`)
    
    setState({
        ...state,
        etape:2,
        client:client,
        pagestate:{
            ...state.pagestate,
        
            openImage:true,
            mode:"edition"
        }
        
    })
  }

  const handleClickSurPhotoSuivant = () => {
    //  console.log(state.client.Media.length)
     // state.dialoguephoto.photoEnCours++;
      if (state.dialoguephoto.photoEnCours < state.client.Media.length-1) {
     const nouvellePhotoEncours = state.dialoguephoto.photoEnCours+1
          setState({
              ...state,
              dialoguephoto: {
                  ...state.dialoguephoto,
                  photoEnCours: nouvellePhotoEncours,
                  open: true,
                  titre: `Photos ${nouvellePhotoEncours+1}/${state.client.Media.length}`,
                  fichier: state.client.Media[nouvellePhotoEncours].fichier,
                  objet: state.client.titre,
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
                  titre: `Photos ${nouvellePhotoEncours+1}/${state.client.Media.length}`,
                  fichier: state.client.Media[nouvellePhotoEncours].fichier,
                  objet: state.client.titre,
              }
          })
      }

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
                
}

 fonctions.handleClickSurTerminer = (client) => {
    AnnulerEnregistrement()
   // console.log("enregistrement du client dans la base de données")

   // console.log(client)
  }
// Usequery fonctions

const queryClients = useQuery(
    ['Clients', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
    () => clientModel.getTouslesClients(state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre),
    { keepPreviousData: true }) 
          
    const queryQuartiers = useQuery(
        ['Quartiers', state.tableconfig.page, state.tableconfig.rowsPerPage, state.tableconfig.recherche, state.tableconfig.filtre],
        () => quartierModel.getTouslesQuartiers(0, 1000, state.tableconfig.recherche, state.tableconfig.filtre),
        { keepPreviousData: true })
             
   
const mutationSuppression = useMutation(clientModel.suppressionClient, {
    onSuccess: () => {
        //  queryClient.invalidateQueries('Clients')
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
        queryClient.invalidateQueries('Clients')
    },
  })
  

// const mutationSuppressionImage = useMutation(clientModel.suppressionImage, {
//     onSuccess: () => {
//         //  queryClient.invalidateQueries('Clients')
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
//         queryClient.invalidateQueries('Clients')
//     },
//   })
 


  const queries = {
    queryClients: queryClients,
   // mutationMiseajour: mutationMiseajour,
   // mutationAjout: mutationAjout,
    mutationSuppression: mutationSuppression,
      
     queryQuartiers: queryQuartiers,
        
}
// collones du tableau
const collonnes = getcollonesClients(fonctions);

/// Gestion du formulaire
const schema = yup.object().shape({ 

        nom: yup.string().required('Le champs Nom est requis'),       
  //      description: yup.string().required('Le champs Description est requis'),       
    
})

const useform
    = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            client: state.client,
        }
    }
)

// ***Soumission du formulaire de {$table}
const onSubmit = (data) => {
let donnees = { ...state.client, ...data }
if (state.client?.id !== undefined) {
    //  console.log('mise a jour de client}...');
    queries.mutationMiseajour.mutate({ ...donnees })
} else {
    queries.mutationAjout.mutate({ ...donnees })
}
// console.log(donnees);
}

// vue
const useforms = {
    client:useform
}

return <ClientView
state={state}
fonctions={fonctions}
collonnes={collonnes}
queries={queries}
useforms={useforms}
onSubmit={onSubmit}
/>
}
export default ClientController

    
    