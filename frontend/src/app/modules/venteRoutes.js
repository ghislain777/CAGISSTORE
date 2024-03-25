import React from "react"

const venteRoutes = [

    {
        path: '/ventes/clients',
        component: React.lazy(() => import('../modules/client/controller/controller_client')),
      },

{
    path: '/ventes/paniers',
    component: React.lazy(() => import('../modules/panier/controller/controller_panier')),
  },
  {
    path: '/ventes/lignepaniers',
    component: React.lazy(() => import('../modules/lignepanier/controller/controller_lignepanier')),
  },
  {
    path: '/ventes/commandes',
    component: React.lazy(() => import('../modules/commande/controller/controller_commande')),
  },
  {
    path: '/ventes/lignecommandes',
    component: React.lazy(() => import('../modules/lignecommande/controller/controller_lignecommande')),
  },
  {
    path: '/ventes/adresses',
    component: React.lazy(() => import('../modules/adresse/controller/controller_adresse')),
  },
  {
    path: '/ventes/nouvellescommandes',
    component: React.lazy(() => import('../modules/commandesnouvelles/controller/controller_commande')),
  },
  {
    path: '/ventes/commandesvalidees',
    component: React.lazy(() => import('../modules/commandesvalidees/controller/controller_commande')),
  },
  {
    path: '/ventes/commandesexpediees',
    component: React.lazy(() => import('../modules/commandesexpediees/controller/controller_commande')),
  }

]


export default venteRoutes