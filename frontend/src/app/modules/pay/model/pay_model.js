

import {instanceAxios} from '../../../../model/config'

export default  class PayModel {

 async  getTouslesPays(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/pays?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutPay(pay) {
    const response = await instanceAxios.post('/pays', pay)
    return response.data
  
  }

   async  miseajourPay(pay) {
    const response = await instanceAxios.put('/pays/'+pay.id, pay)
    return response.data
  }
  
 async  suppressionPay (pay) {
    const response = await instanceAxios.delete('/pays/'+pay.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
}