import React from "react"

const partenairesRoutes = [


{
    path: '/partenaires/fournisseurs',
    component: React.lazy(() => import('../modules/fournisseur/controller/controller_fournisseur')),
  },

{
    path: '/partenaires/transporteurs',
    component: React.lazy(() => import('../modules/transporteur/controller/controller_transporteur')),
  },

{
    path: '/partenaires/moyendepayements',
    component: React.lazy(() => import('../modules/moyendepayement/controller/controller_moyendepayement')),
  },
]

export default partenairesRoutes



 