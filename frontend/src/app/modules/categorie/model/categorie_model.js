

import {instanceAxios} from '../../../../model/config'

export default  class CategorieModel {

 async  getTouslesCategories(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/categories?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutCategorie(categorie) {
    const response = await instanceAxios.post('/categories', categorie)
    return response.data
  
  }

   async  miseajourCategorie(categorie) {
    const response = await instanceAxios.put('/categories/'+categorie.id, categorie)
    return response.data
  }
  
 async  suppressionCategorie (categorie) {
    const response = await instanceAxios.delete('/categories/'+categorie.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
  
 async  togleactifCategorie(categorie) {
    const response = await instanceAxios.put('/categories/'+categorie.id, {actif: !categorie.actif})
    return response.data
  }    

  async  suppressionImage(image) {
    const response = await instanceAxios.post(`/medias/delete/${image.id}/categorie`,{})  
    return response.data
  }
}
  