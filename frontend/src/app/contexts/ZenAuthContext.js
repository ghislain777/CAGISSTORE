import React,  {useutilisateur, createContext, useState } from 'react';

import { useQuery, useMutation, useQueryClient } from 'react-query'
import history from 'history.js'
import { truncate } from 'lodash';






const initialutilisateur = {
    estAuthentifie: true,
    utilisateur:{nom: "KEPNIA", prenom: "GHISLAIN",email: "tghislain@gmail.com", tel:"664222527"},
    privileges: [],
    privileges: []
}



const ZenAuthContext = createContext({
...initialutilisateur,
login: () => Promise.resolve(),
logout: () => Promise.resolve(),

});


export  const ZenAuthProvider = ({ children }) => {

    const [utilisateur, setutilisateur] = useState(initialutilisateur);

   // const { isLoading, isFetching, isError, error, data } = useQuery(['Utilisateurs', utilisateur], () =>loginUtilisateur(utilisateur))
 

    const login =  (utilisateur, privileges, navigation) => {


        setutilisateur({
            estAuthentifie:true,
            utilisateur: utilisateur,
            privileges: privileges,
            navigation: navigation
        })
       }

   

   const logout = () => {
   setutilisateur(initialutilisateur)
   sessionStorage.removeItem('session')
}

const verifierAutorisation = (chemin) => {

if(chemin == '/default/dashboard') {
    setutilisateur( {
        ...utilisateur,
        estAutorise: true
    })
    
}
else {
    setutilisateur( {
        ...utilisateur,
        estAutorise: false
    })
        
    }
}


return (
    <ZenAuthContext.Provider
        value={{
            ...utilisateur,
           login,
           logout
        }}
    >
        {children}
    </ZenAuthContext.Provider>
)


}
export default ZenAuthContext