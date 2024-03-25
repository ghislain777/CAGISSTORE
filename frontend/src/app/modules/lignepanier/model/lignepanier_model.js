

import {instanceAxios} from '../../../../model/config'

export default  class LignepanierModel {

 async  getTouslesLignepaniers(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/lignepaniers?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutLignepanier(lignepanier) {
    const response = await instanceAxios.post('/lignepaniers', lignepanier)
    return response.data
  
  }

   async  miseajourLignepanier(lignepanier) {
    const response = await instanceAxios.put('/lignepaniers/'+lignepanier.id, lignepanier)
    return response.data
  }
  
 async  suppressionLignepanier (lignepanier) {
    const response = await instanceAxios.delete('/lignepaniers/'+lignepanier.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }

  async  suppressionImage(image) {
    const response = await instanceAxios.post(`/medias/delete/${image.id}/lignepanier`,{})  
    return response.data
  }
}
  