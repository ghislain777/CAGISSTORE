

import {instanceAxios} from '../../../../model/config'

export default  class ParametreModel {

 async  getTouslesParametres(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/parametres?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutParametre(parametre) {
    const response = await instanceAxios.post('/parametres', parametre)
    return response.data
  
  }

   async  miseajourParametre(parametre) {
    const response = await instanceAxios.put('/parametres/'+parametre.id, parametre)
    return response.data
  }
  
 async  suppressionParametre (parametre) {
    const response = await instanceAxios.delete('/parametres/'+parametre.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
}