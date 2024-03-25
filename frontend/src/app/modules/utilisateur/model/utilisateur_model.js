

import {instanceAxios} from '../../../../model/config'

export default  class UtilisateurModel {

 async  getTouslesUtilisateurs(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/utilisateurs?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutUtilisateur(utilisateur) {
    const response = await instanceAxios.post('/utilisateurs', utilisateur)
    return response.data
  
  }

   async  miseajourUtilisateur(utilisateur) {
    const response = await instanceAxios.put('/utilisateurs/'+utilisateur.id, utilisateur)
    return response.data
  }
  
 async  suppressionUtilisateur (utilisateur) {
    const response = await instanceAxios.delete('/utilisateurs/'+utilisateur.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
  
 async  togleactifUtilisateur(utilisateur) {
    const response = await instanceAxios.put('/utilisateurs/'+utilisateur.id, {actif: !utilisateur.actif})
    return response.data
  }   
  
 async  loginUtilisateur (utilisateur) {
  try {
  const response = await instanceAxios.post('/utilisateurs/login', utilisateur) 
  console.log({ statusCode: response.status, data: response.data});
  return ({ statusCode: response.status, data: response.data});

  //return response.data
    
  } catch (error) {
     // console.log(JSON.stringify(error));
     // console.log("une erreur est survenue");
     return {statusCode: "500", data: "Une erreur interne est survenue, veuillez vérifier votre connexion Internet et re-éssayer plus tard"}
  }
 
}

async  changementPass (utilisateur) {
  try {
  const response = await instanceAxios.post('/utilisateurs/passwordchange', utilisateur) 
  console.log({ statusCode: response.status, data: response.data});
  return ({ statusCode: response.status, data: response.data});

  //return response.data
    
  } catch (error) {
     console.log(JSON.stringify(error.message));
     console.log("une erreur est survenue");
     return {statusCode: 500, data: "Une erreur est survenue, Verifiez votre connexion réseaux."}
  }
 
}
 
}