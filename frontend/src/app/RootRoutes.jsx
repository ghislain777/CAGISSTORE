import React from 'react'
import { Redirect } from 'react-router-dom'
import administrationRoutes from './modules/administrationRoutes'
import parametresRoutes from './modules/parametresRoutes'
import partenairesRoutes from './modules/partenairesRoutes'
import catalogueRoutes from './modules/catalogueRoutes'
import venteRoutes from './modules/venteRoutes'

const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/administration/roles" />,
    },
    {
        path: '/session/signin',
        exact: true,
        component: () => <Redirect to="/session/signin" />,
    }
]

const errorRoute = [
    {
        component: () => <Redirect to="/session/404" />,
    //    component: () => <Redirect to="/administration/utilisateurs" />,
    },
]

const routes = [
    ...administrationRoutes,
    ...parametresRoutes,
    ...partenairesRoutes,
    ...catalogueRoutes,
    ...venteRoutes,
    ...redirectRoute,
    ...errorRoute,
]
export default routes
