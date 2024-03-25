

import {instanceAxios} from '../../../../model/config'

export default  class PanierModel {

 async  getTouslesPaniers(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/paniers?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutPanier(panier) {
    const response = await instanceAxios.post('/paniers', panier)
    return response.data
  
  }

   async  miseajourPanier(panier) {
    const response = await instanceAxios.put('/paniers/'+panier.id, panier)
    return response.data
  }
  
 async  suppressionPanier (panier) {
    const response = await instanceAxios.delete('/paniers/'+panier.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
}