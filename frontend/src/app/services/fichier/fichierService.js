import {
  instanceAxios
} from './../../../model/config';

export default async function uploaderFichier(props) {
  const {
    fichier,
    objet,
    handleprogress
  } = props
  const formData = new FormData();
  // formData.append({name:'file', value:fichier})
  console.warn(fichier);
  formData.append('objet', objet);
  formData.append('file', fichier);
  const response = await instanceAxios.post('/fichier/upload', formData, {
    herdears: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: handleprogress,
    //     data: {fichier: fichier, object:  object}
  })

  console.log("fichier service::: response.data " + JSON.stringify(response))
  return response.data
}

export async function uploaderMedia(props) {
  const {
    fichier,
    nom,
    modele,
    champ,
    objet,
    obj,
    handleprogress
  } = props
  const formData = new FormData();
  // formData.append({name:'file', value:fichier})
  //console.warn(fichier);

  //** Exemple d'obj: {cle:produit, valeur:3}*/

  formData.append(obj.cle, objet.id);
  formData.append('modele', modele);
  formData.append('champ', champ);
  formData.append('nom', nom);
  formData.append('cle', obj.cle);
  formData.append('valeur', obj.valeur);
  formData.append('file', fichier);
  const response = await instanceAxios.post('/medias/upload', formData, {
    herdears: {
      'Content-Type': 'multipart/form-data'
    },
    onUploadProgress: handleprogress,
    //data: {fichier: fichier, object:  object}
  })
  //console.log("fichier service::: response.data "+JSON.stringify(response))
  return response.data
}

export async function telechargerMedia(props) {
  const response = await instanceAxios.post('/medias/telecharger', props)
  return response.data
}