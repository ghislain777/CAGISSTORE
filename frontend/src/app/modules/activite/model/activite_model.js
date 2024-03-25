
import { instanceAxios } from 'model/config'

export default  class ActiviteModel {

 async  getTouslesActivites(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get('/activites?itemsPerPage='+rowsPerPage+'&page='+page+'&id='+recherche)
  return response.data
  }

async ajoutActivite(activite) {
    const response = await instanceAxios.post('/activites', activite)
    return response.data
  
  }

   async  miseajourActivite(activite) {
    const response = await instanceAxios.put('/activites/'+activite.id, activite)
    return response.data
  }

  
 async  suppressionActivite (activite) {
    const response = await instanceAxios.delete('/activites/'+activite.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
    })  
    return response.data
  
  }


}
