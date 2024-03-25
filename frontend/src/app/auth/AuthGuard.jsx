import React, {
    // useContext,
    useEffect,
    useState,
} from 'react'
import { Redirect, useLocation } from 'react-router-dom'
// import AppContext from "app/appContext";
import useAuth from 'app/hooks/useAuth'

// const getUserRoleAuthStatus = (pathname, user, routes) => {
//   const matched = routes.find((r) => r.path === pathname);

//   const authenticated =
//     matched && matched.auth && matched.auth.length
//       ? matched.auth.includes(user.role)
//       : true;
//   console.log(matched, user);
//   return authenticated;
// };

const AuthGuard = ({ children }) => {
    const {
 //       estAuthentifie,
 //       privileges,
        login
        // user
    } = useAuth()

    const [previouseRoute, setPreviousRoute] = useState(null)
    const { pathname } = useLocation()

// on recupere les parametres stockés en local si nécessaire
const session=JSON.parse(sessionStorage.getItem('session'))

//console.log("la session ::" +JSON.stringify(session.utilisateur));
let lesprivileges;
let estAuthentifie = false
if(session) {
let utilisateur = session.utilisateur
let navigation = session.navigation
lesprivileges = session.privileges
estAuthentifie= true
//   login(utilisateur,
//     lesprivileges,
//     navigation
//     )
}


    const verifierPrivileges = () => { // on trouve le privilege sue la page en cours (celui dont le chemain = pathname)

        const lePrivilege = lesprivileges.filter(privilege => privilege.activite.chemain == pathname)
       // console.log("LE PRIVILEGE::::"+JSON.stringify(lePrivilege[0]));
       // console.log(pathname)
      return true;
      return lePrivilege[0]?.actif?? false
    //    if(pathname == '/dashboard/default' || pathname == '/' || pathname == '/administration/utilisateurs' || pathname == '/administration/privileges') return true
    //    else return false
    }
    // const { routes } = useContext(AppContext);
    // const isUserRoleAuthenticated = getUserRoleAuthStatus(pathname, user, routes);
    // let authenticated = isAuthenticated && isUserRoleAuthenticated;

    // IF YOU NEED ROLE BASED AUTHENTICATION,
    // UNCOMMENT ABOVE TWO LINES, getUserRoleAuthStatus METHOD AND user VARIABLE
    // AND COMMENT OUT BELOW LINE
    let authenticated = estAuthentifie

    useEffect(() => {
        if (previouseRoute !== null) setPreviousRoute(pathname)
        
    }, [pathname, previouseRoute])

    // verification de l'authentification
    if(!estAuthentifie) {
        return (
            <Redirect
                to={{
                    pathname: '/session/signin',
                    state: { redirectUrl: previouseRoute },
                }}
            />
        )
    }

    if(!verifierPrivileges()) return (
        <Redirect
            to={{
                pathname: '/session/404',
                state: { redirectUrl: previouseRoute },
            }}
        />
    )

    if (authenticated) return <>{children}</>
    else {
        return (
            <Redirect
                to={{
                    pathname: '/session/signin',
                    state: { redirectUrl: previouseRoute },
                }}
            />
        )
    }
}

export default AuthGuard
