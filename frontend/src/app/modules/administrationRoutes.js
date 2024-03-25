 import React from "react"

 const administrationRoutes = [
   
    {
        path: '/administration/roles',
        component: React.lazy(() => import('../modules/role/controller/controller_role')),
      },
      
   {
    path: '/administration/utilisateurs',
    component: React.lazy(() => import('../modules/utilisateur/controller/controller_utilisateur')),
  },
  
  {
    path: '/administration/Menus',
    component: React.lazy(() => import('../modules/menu/controller/controller_menu')),
  },
  

  {
    path: '/administration/Activites',
    component: React.lazy(() => import('../modules/activite/controller/controller_activite')),
  },
  
  {
    path: '/administration/privileges',
    component: React.lazy(() => import('../modules/privilege/controller/controller_privilege')),
  },
  
  
 ]

 export default administrationRoutes
 
 

  