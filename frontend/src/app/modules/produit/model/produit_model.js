

import {instanceAxios} from '../../../../model/config'

export default  class ProduitModel {

 async  getTouslesProduits(page, rowsPerPage, recherche, filtre) {
    page=page+1
  const response = await instanceAxios.get(`/produits?itemsPerPage=${rowsPerPage}&page=${page}&id=${recherche} `)
  return response.data
  }

async ajoutProduit(produit) {
    const response = await instanceAxios.post('/produits', produit)
    return response.data
  
  }

   async  miseajourProduit(produit) {
    const response = await instanceAxios.put('/produits/'+produit.id, produit)
    return response.data
  }
  
 async  suppressionProduit (produit) {
    const response = await instanceAxios.delete('/produits/'+produit.id,{
      method: 'DELETE',
      herdears: {
        Accept:'application/json'
      },
      
    })  
    return response.data
  
  }
  
 async  togleactifProduit(produit) {
    const response = await instanceAxios.put('/produits/'+produit.id, {actif: !produit.actif})
    return response.data
  }    
  
 async  togleenpromoProduit(produit) {
    const response = await instanceAxios.put('/produits/'+produit.id, {enpromo: !produit.enpromo})
    return response.data
  }    

  async  suppressionImage(image) {
    const response = await instanceAxios.post(`/medias/delete/${image.id}/produit`,{})  
    return response.data
  }
}
  