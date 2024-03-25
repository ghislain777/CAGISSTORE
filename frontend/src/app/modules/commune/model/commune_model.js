

import {instanceAxios} from '../../../../model/config'

export default  class CommuneModel {

 async  getTouslesCommunes(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/communes?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutCommune(commune) {
    const response = await instanceAxios.post('/communes', commune)
    return response.data
  
  }

   async  miseajourCommune(commune) {
    const response = await instanceAxios.put('/communes/'+commune.id, commune)
    return response.data
  }
  
 async  suppressionCommune (commune) {
    const response = await instanceAxios.delete('/communes/'+commune.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
}