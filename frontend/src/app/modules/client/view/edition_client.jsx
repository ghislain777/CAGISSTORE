
import React, { useState } from 'react'
import {
  Button,
  Typography,
  Stepper,
  Step,
  StepButton,
} from '@material-ui/core'
//import uploaderFichier from 'app/services/fichier/fichierService'
import { Box } from '@mui/system'
import FormulaireClient from './formulaire_client'
import FormulaireImage from './formulaire_image'
import { useMutation } from 'react-query'
import ClientModel from '../model/client_model'
import {uploaderMedia} from 'app/services/fichier/fichierService'


export default function EditionClient(props) {
  const {  fonctions, queries, useforms} = props
  // on gere l'état du stepper en local
  const state0 = {
    ...props.state,
    etape:0,
    progressphoto:0,
     etapes: [
        {
            index: 0,
            label: "Edition du client"
        },
        {
            index: 1,
            label: "Photos du client"
        },
        
    ],
    complet: false,
  }
  const [state, setState] = useState(state0)
  let clientModel = new ClientModel();



//* fonctions de gestion de l'atat.
 fonctions.allerAPhotos = (data) => {
  delete data.Media

  if(state.client.id === 0) {
    queries.mutationAjout.mutate(data)
  }
  else {
  queries.mutationMiseajour.mutate({...state.client, ...data})

  }
}

   fonctions.uploaderPhoto= (fichier) => {
    if (fichier) {
        //    console.log(fichier);
     mutationUploadMedia.mutate({fichier:fichier, modele:'client', objet:state.client, champ:"photo", nom:"Photo client", handleprogress: handleProgressphoto, obj:{cle: "client", valeur:state.client.id}})
        }
  //  console.log('le filtre a changé');
  }

fonctions.supprimerImage = (image) => {
  console.log("suppression de l'image")
  console.log(image)
  queries.mutationSuppressionImage.mutate(image)
}

  const handleProgressphoto = (progressEvent) => {
    var percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
    )
    setState({...state, progressphoto: percentCompleted})
    }


  fonctions.supprimerphoto = () => {
    console.log('Suppression du fichier');
  }

   fonctions.allerAPrecedent = () => {  
      setState({
          ...state,
          etape: 0
      })
    }


queries.mutationAjout = useMutation(clientModel.ajoutClient, {
  onSuccess: (data) => {
     // queryClient.invalidateQueries('Clients')
      setState({
          ...state,
          client:data,
          etape:1,
          alert: {
              message: "Enregistrement réussi",
              open: true,
              severity: "success",
              automaticClose: true
          }
      })

  },
  onError: () => {
    //  queryClient.invalidateQueries('Clients')
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

 queries.mutationMiseajour = useMutation(clientModel.miseajourClient, {
  onSuccess: (data) => {
     // queryClient.invalidateQueries('Clients')
      setState({
          ...state,
         client:data,
         etape:1,
          
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
     // queryClient.invalidateQueries('Clients')
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

const mutationUploadMedia = useMutation(uploaderMedia, {
  onSuccess: (data) => {
    //  const nouveauxmedias = state.client.Media
     // nouveauxmedias.push(data)
       //console.log(nouveauxmedias)
      //console.log(nouveauxmedias)
      setState({
          ...state,
          client:{
              ...state.client,
              Media: data
          },
          alert: {
              message: "Upload du fichier réussi",
              open: true,
              severity: "success",
              automaticClose: false
          },
          progressphoto: 100
      })
  },
  onError: () => {
      setState({
          ...state,
         alert: {
          automaticClose:false,
          message: 'Echec de chargement du fichier sur le serveur',
          open: true,
          severity: 'error'},
      })
  },
})  


queries.mutationSuppressionImage = useMutation(clientModel.suppressionImage, {
  onSuccess: (data) => {
      //  on doit supprimer l'image en question de la liste des images.
     // const nouveauxmedias = state.client.Media
      setState({
          ...state,
          client:{
            ...state.client,
            Media: data
        },
          dialogueSuppressionOuvert:false,
         alert: { message: 'Supréssion réussie',
          open: true,
          severity: 'success',}
      })
  },
  onError: () => {
      setState({
        ...state,
         alert: { message: 'Echec lors de la supréssion',
          open: true,
          severity: 'error',}
      })
  },
  onSettled: () => {
    //  queryClient.invalidateQueries('Clients')
  },
})



  return (
    <Box  sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={state.etape}>
        {state.etapes.map((element) => (
          <Step key={element.label} completed={state.etape > element.index}>
            <StepButton color="inherit" >
              {element.label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {state.complet ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              Félicitation, toutes les étapes ont été achevés.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={fonctions.fermerFormulaire}>Quitter</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
             {  state.etape ===0 ? <FormulaireClient
              state={state}
                fonctions={fonctions}
                queries={queries}
                useforms={useforms}
                
                
              />
              :
              state.etape ===1 ? <FormulaireImage
                state={state}
                fonctions={fonctions}
                queries={queries}
                useforms={useforms}
                allerAPhotos={fonctions.allerAPhotos}
                
              />
               : <span>Autre</span>}

            </Typography>
            
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
  