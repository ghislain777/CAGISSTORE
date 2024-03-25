

import {instanceAxios} from '../../../../model/config'

export default  class TransporteurModel {

 async  getTouslesTransporteurs(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/transporteurs?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutTransporteur(transporteur) {
    const response = await instanceAxios.post('/transporteurs', transporteur)
    return response.data
  
  }

   async  miseajourTransporteur(transporteur) {
    const response = await instanceAxios.put('/transporteurs/'+transporteur.id, transporteur)
    return response.data
  }
  
 async  suppressionTransporteur (transporteur) {
    const response = await instanceAxios.delete('/transporteurs/'+transporteur.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
  
 async  togleactifTransporteur(transporteur) {
    const response = await instanceAxios.put('/transporteurs/'+transporteur.id, {actif: !transporteur.actif})
    return response.data
  }    

  async  suppressionImage(image) {
    const response = await instanceAxios.post(`/medias/delete/${image.id}/transporteur`,{})  
    return response.data
  }
}
  