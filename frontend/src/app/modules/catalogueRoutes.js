import React from "react"
const catalogueRoutes = [
    {
        path: '/catalogue/categories',
        component: React.lazy(() => import('../modules/categorie/controller/controller_categorie')),
      },

{
    path: '/catalogue/souscategories',
    component: React.lazy(() => import('../modules/souscategorie/controller/controller_souscategorie')),
  },
  
{
    path: '/catalogue/produits',
    component: React.lazy(() => import('../modules/produit/controller/controller_produit')),
  },


]

export default catalogueRoutes