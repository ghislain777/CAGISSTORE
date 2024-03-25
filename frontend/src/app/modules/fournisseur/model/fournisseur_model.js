

import {instanceAxios} from '../../../../model/config'

export default  class FournisseurModel {

 async  getTouslesFournisseurs(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/fournisseurs?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutFournisseur(fournisseur) {
    const response = await instanceAxios.post('/fournisseurs', fournisseur)
    return response.data
  
  }

   async  miseajourFournisseur(fournisseur) {
    const response = await instanceAxios.put('/fournisseurs/'+fournisseur.id, fournisseur)
    return response.data
  }
  
 async  suppressionFournisseur (fournisseur) {
    const response = await instanceAxios.delete('/fournisseurs/'+fournisseur.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
  
 async  togleactifFournisseur(fournisseur) {
    const response = await instanceAxios.put('/fournisseurs/'+fournisseur.id, {actif: !fournisseur.actif})
    return response.data
  }    

  async  suppressionImage(image) {
    const response = await instanceAxios.post(`/medias/delete/${image.id}/fournisseur`,{})  
    return response.data
  }
  }