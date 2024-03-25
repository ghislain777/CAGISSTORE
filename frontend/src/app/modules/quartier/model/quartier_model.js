

import {instanceAxios} from '../../../../model/config'

export default  class QuartierModel {

 async  getTouslesQuartiers(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/quartiers?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutQuartier(quartier) {
    const response = await instanceAxios.post('/quartiers', quartier)
    return response.data
  
  }

   async  miseajourQuartier(quartier) {
    const response = await instanceAxios.put('/quartiers/'+quartier.id, quartier)
    return response.data
  }
  
 async  suppressionQuartier (quartier) {
    const response = await instanceAxios.delete('/quartiers/'+quartier.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
}