

import {instanceAxios} from '../../../../model/config'

export default  class StatutcommandeModel {

 async  getTouslesStatutcommandes(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/statutcommandes?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutStatutcommande(statutcommande) {
    const response = await instanceAxios.post('/statutcommandes', statutcommande)
    return response.data
  
  }

   async  miseajourStatutcommande(statutcommande) {
    const response = await instanceAxios.put('/statutcommandes/'+statutcommande.id, statutcommande)
    return response.data
  }
  
 async  suppressionStatutcommande (statutcommande) {
    const response = await instanceAxios.delete('/statutcommandes/'+statutcommande.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
}