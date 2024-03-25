
import { instanceAxios } from 'model/config'

export default  class MenuModel {

 async  getTouslesMenus(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get('/menus?itemsPerPage='+rowsPerPage+'&page='+page+'&id='+recherche)
  return response.data
  }

async ajoutMenu(menu) {
    const response = await instanceAxios.post('/menus', menu)
    return response.data
  
  }

   async  miseajourMenu(menu) {
    const response = await instanceAxios.put('/menus/'+menu.id, menu)
    return response.data
  }

  
 async  suppressionMenu (menu) {
    const response = await instanceAxios.delete('/menus/'+menu.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      data: menu.id
    })  
    return response.data
  
  }


}
