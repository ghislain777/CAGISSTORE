import { instanceAxios } from "model/config"


export default  class RoleModel {

 async  getTouslesRoles(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get('/roles?itemsPerPage='+rowsPerPage+'&page='+page+'&id='+recherche)
  return response.data
  }

async ajoutRole(role) {
    const response = await instanceAxios.post('/roles', role)
    return response.data
  
  }

   async  miseajourRole(role) {
    const response = await instanceAxios.put('/roles/'+role.id, role)
    return response.data
  }

  
 async  suppressionRole (role) {
    const response = await instanceAxios.delete('/roles/'+role.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      data: role.id
    })  
    return response.data
  
  }


}
