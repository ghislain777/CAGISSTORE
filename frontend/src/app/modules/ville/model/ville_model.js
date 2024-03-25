

import {instanceAxios} from '../../../../model/config'

export default  class VilleModel {

 async  getTouslesVilles(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/villes?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutVille(ville) {
    const response = await instanceAxios.post('/villes', ville)
    return response.data
  
  }

   async  miseajourVille(ville) {
    const response = await instanceAxios.put('/villes/'+ville.id, ville)
    return response.data
  }
  
 async  suppressionVille (ville) {
    const response = await instanceAxios.delete('/villes/'+ville.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
}