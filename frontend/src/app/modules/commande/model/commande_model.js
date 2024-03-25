

import {instanceAxios} from '../../../../model/config'

export default  class CommandeModel {

 async  getTouslesCommandes(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/commandes?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche.id}&statutcommande=${recherche.Statutcommande.id}&client=${recherche.Client.id}`)
  return response.data
  }

async ajoutCommande(commande) {
    const response = await instanceAxios.post('/commandes', commande)
    return response.data
  
  }

   async  miseajourCommande(commande) {
    const response = await instanceAxios.put('/commandes/'+commande.id, commande)
    return response.data
  }
  
 async  suppressionCommande (commande) {
    const response = await instanceAxios.delete('/commandes/'+commande.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
}
