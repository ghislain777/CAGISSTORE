

import {instanceAxios} from '../../../../model/config'

export default  class AdresseModel {

 async  getTouslesAdresses(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/adresses?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutAdresse(adresse) {
    const response = await instanceAxios.post('/adresses', adresse)
    return response.data
  
  }

   async  miseajourAdresse(adresse) {
    const response = await instanceAxios.put('/adresses/'+adresse.id, adresse)
    return response.data
  }
  
 async  suppressionAdresse (adresse) {
    const response = await instanceAxios.delete('/adresses/'+adresse.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
  
 async  toglepardefautAdresse(adresse) {
    const response = await instanceAxios.put('/adresses/'+adresse.id, {pardefaut: !adresse.pardefaut})
    return response.data
  }    
}