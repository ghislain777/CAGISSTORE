
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
import FormulaireCategorie from './formulaire_categorie'
import FormulaireImage from './formulaire_image'
import { useMutation } from 'react-query'
import CategorieModel from '../model/categorie_model'
import {uploaderMedia} from 'app/services/fichier/fichierService'


export default function EditionCategorie(props) {
  const {  fonctions, queries, useforms} = props
  // on gere l'état du stepper en local
  const state0 = {
    ...props.state,
    etape:0,
    progressphoto:0,
     etapes: [
        {
            index: 0,
            label: "Edition du categorie"
        },
        {
            index: 1,
            label: "Photos du categorie"
        },
        
    ],
    complet: false,
  }
  const [state, setState] = useState(state0)
  let categorieModel = new CategorieModel();



//* fonctions de gestion de l'atat.
 fonctions.allerAPhotos = (data) => {
  delete data.Media

  if(state.categorie.id === 0) {
    queries.mutationAjout.mutate(data)
  }
  else {
  queries.mutationMiseajour.mutate({...state.categorie, ...data})

  }
}

   fonctions.uploaderPhoto= (fichier) => {
    if (fichier) {
        //    console.log(fichier);
     mutationUploadMedia.mutate({fichier:fichier, modele:'categorie', objet:state.categorie, champ:"photo", nom:"Photo categorie", handleprogress: handleProgressphoto, obj:{cle: "categorie", valeur:state.categorie.id}})
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


queries.mutationAjout = useMutation(categorieModel.ajoutCategorie, {
  onSuccess: (data) => {
     // queryClient.invalidateQueries('Categories')
      setState({
          ...state,
          categorie:data,
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
    //  queryClient.invalidateQueries('Categories')
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

 queries.mutationMiseajour = useMutation(categorieModel.miseajourCategorie, {
  onSuccess: (data) => {
     // queryClient.invalidateQueries('Categories')
      setState({
          ...state,
         categorie:data,
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
     // queryClient.invalidateQueries('Categories')
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
    //  const nouveauxmedias = state.categorie.Media
     // nouveauxmedias.push(data)
       //console.log(nouveauxmedias)
      //console.log(nouveauxmedias)
      setState({
          ...state,
          categorie:{
              ...state.categorie,
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


queries.mutationSuppressionImage = useMutation(categorieModel.suppressionImage, {
  onSuccess: (data) => {
      //  on doit supprimer l'image en question de la liste des images.
     // const nouveauxmedias = state.categorie.Media
      setState({
          ...state,
          categorie:{
            ...state.categorie,
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
    //  queryClient.invalidateQueries('Categories')
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
             {  state.etape ===0 ? <FormulaireCategorie
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
  