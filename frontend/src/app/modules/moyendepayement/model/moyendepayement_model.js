

import {instanceAxios} from '../../../../model/config'

export default  class MoyendepayementModel {

 async  getTouslesMoyendepayements(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/moyendepayements?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutMoyendepayement(moyendepayement) {
    const response = await instanceAxios.post('/moyendepayements', moyendepayement)
    return response.data
  
  }

   async  miseajourMoyendepayement(moyendepayement) {
    const response = await instanceAxios.put('/moyendepayements/'+moyendepayement.id, moyendepayement)
    return response.data
  }
  
 async  suppressionMoyendepayement (moyendepayement) {
    const response = await instanceAxios.delete('/moyendepayements/'+moyendepayement.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
  
 async  togleactifMoyendepayement(moyendepayement) {
    const response = await instanceAxios.put('/moyendepayements/'+moyendepayement.id, {actif: !moyendepayement.actif})
    return response.data
  }    

  async  suppressionImage(image) {
    const response = await instanceAxios.post(`/medias/delete/${image.id}/moyendepayement`,{})  
    return response.data
  }
}
  