 import React from "react"

 const parametresRoutes = [

{
  path: '/parametres/boutique',
  component: React.lazy(() => import('../modules/parametre/controller/controller_parametre')),
},
 
    {
        path: '/parametres/menus',
        component: React.lazy(() => import('../modules/menu/controller/controller_menu')),
      },
    {
        path: '/parametres/activites',
        component: React.lazy(() => import('../modules/activite/controller/controller_activite')),
      },

{
  path: '/parametres/pays',
  component: React.lazy(() => import('../modules/pay/controller/controller_pay')),
},

{
  path: '/parametres/villes',
  component: React.lazy(() => import('../modules/ville/controller/controller_ville')),
},

{
  path: '/parametres/communes',
  component: React.lazy(() => import('../modules/commune/controller/controller_commune')),
},

{
  path: '/parametres/quartiers',
  component: React.lazy(() => import('../modules/quartier/controller/controller_quartier')),
},
{
  path: '/parametres/statutcommandes',
  component: React.lazy(() => import('../modules/statutcommande/controller/controller_statutcommande')),
},
{
  path: '/parametres/parametrage',
  component: React.lazy(() => import('../modules/parametre/controller/controller_parametre')),
},
  
 ]

 export default parametresRoutes
 
 

  