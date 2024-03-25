

import {instanceAxios} from '../../../../model/config'

export default  class LignecommandeModel {

 async  getTouslesLignecommandes(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/lignecommandes?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutLignecommande(lignecommande) {
    const response = await instanceAxios.post('/lignecommandes', lignecommande)
    return response.data
  
  }

   async  miseajourLignecommande(lignecommande) {
    const response = await instanceAxios.put('/lignecommandes/'+lignecommande.id, lignecommande)
    return response.data
  }
  
 async  suppressionLignecommande (lignecommande) {
    const response = await instanceAxios.delete('/lignecommandes/'+lignecommande.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
}
