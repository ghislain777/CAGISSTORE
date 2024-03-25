
import { instanceAxios } from 'model/config'

export default  class PrivilegeModel {

 async  getTouslesPrivileges(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get('/privileges?itemsPerPage='+rowsPerPage+'&page='+page+'&id='+recherche+'&role='+filtre.role.id+'&activite='+filtre.activite.id)
  return response.data
  }

async ajoutPrivilege(privilege) {
    const response = await instanceAxios.post('/privileges', privilege)
    return response.data
  
  }

   async  miseajourPrivilege(privilege) {
    const response = await instanceAxios.put('/privileges/'+privilege.id, privilege)
    return response.data
  }

  
 async  suppressionPrivilege (privilege) {
    const response = await instanceAxios.delete('/privileges/'+privilege.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      data: privilege.id
    })  
    return response.data
  
  }


        
 async  togleactifPrivilege(privilege) {
    const response = await instanceAxios.put('/privileges/'+privilege.id, {actif: !privilege.actif})
    return response.data
  }
        
}
