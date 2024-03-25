

import {instanceAxios} from '../../../../model/config'

export default  class ClientModel {

 async  getTouslesClients(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/clients?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutClient(client) {
    const response = await instanceAxios.post('/clients', client)
    return response.data
  
  }

   async  miseajourClient(client) {
    const response = await instanceAxios.put('/clients/'+client.id, client)
    return response.data
  }
  
 async  suppressionClient (client) {
    const response = await instanceAxios.delete('/clients/'+client.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }

  async  suppressionImage(image) {
    const response = await instanceAxios.post(`/medias/delete/${image.id}/client`,{})  
    return response.data
  }
}
  