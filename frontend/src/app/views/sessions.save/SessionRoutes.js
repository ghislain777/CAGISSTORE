import NotFound from './NotFound'
import ForgotPassword from './ForgotPassword'
import FirebaseRegister from './register/FirebaseRegister'
import Login from './login/login';
import Passwordchange from './login/passwordchange'

const sessionRoutes = [
    {
        path: '/session/signup',
        component: FirebaseRegister,
    },
    {
        path: '/session/signin',
        component: Login,
    },
    {
        path: '/session/passwordchange',
        component: Passwordchange,
    },
    {
        path: '/session/forgot-password',
        component: ForgotPassword,
    },
    {
        path: '/session/404',
        component: NotFound,
    },
   
]

export default sessionRoutes
