

import {instanceAxios} from '../../../../model/config'

export default  class SouscategorieModel {

 async  getTouslesSouscategories(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/souscategories?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutSouscategorie(souscategorie) {
    const response = await instanceAxios.post('/souscategories', souscategorie)
    return response.data
  
  }

   async  miseajourSouscategorie(souscategorie) {
    const response = await instanceAxios.put('/souscategories/'+souscategorie.id, souscategorie)
    return response.data
  }
  
 async  suppressionSouscategorie (souscategorie) {
    const response = await instanceAxios.delete('/souscategories/'+souscategorie.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
  
 async  togleactifSouscategorie(souscategorie) {
    const response = await instanceAxios.put('/souscategories/'+souscategorie.id, {actif: !souscategorie.actif})
    return response.data
  }    

  async  suppressionImage(image) {
    const response = await instanceAxios.post(`/medias/delete/${image.id}/souscategorie`,{})  
    return response.data
  }
}
  