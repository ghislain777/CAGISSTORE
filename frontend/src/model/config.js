import { createMuiTheme } from '@material-ui/core/styles'

import axios from 'axios'

export const serveurLive = `${window.location.hostname}:${window.location.port}`
export const serveurTest = `kitaci.zentechnologies.net`

export const homepage = "/admin"

const serveurDev = `127.0.0.1:8000`
var mode = "dev";

//export const serveur = serveurLive 
export const serveur = mode === "dev"
? `${window.location.protocol}//${serveurDev}`
: mode === 'test'? `${window.location.protocol}//${serveurTest}` :  `${window.location.protocol}//${serveurLive}`


export const axiosConfig = {
    baseUrl: serveur + '/api/',
    responseType: 'json',
    headers: {
        'Content-type': 'application/json',
    },
}
export const instanceAxios = axios.create(axiosConfig)
instanceAxios.defaults.baseURL = axiosConfig.baseUrl
export const couleur = "#E9EFEC"
export const getMuiTheme = () =>
createMuiTheme({
    palette: {
        //  src/app/components/MatxTheme/themeColors.js pour lo topbar et index.html pour le titre
          type: 'light',
          primary: {
            main: '#3f88c5',
          },
          secondary: {
            main: '#f3802b',
          },
        },
    overrides: {
       
        MUIDataTableHeadCell: {
            fixedHeader: {
                backgroundColor: '#fafafa',
            },
        },
        MUIDataTableToolbar: {
            root: {
                backgroundColor: couleur,
                //  color: "rgb(255, 255, 255)"
            },
        },
        MUIDataTablePagination: {
            root: {
                backgroundColor: couleur,
                //color: "rgb(255, 255, 255)"
            },
        },
        MUIDataTableFooter: {
            root: {
                backgroundColor: couleur,
                //color: "rgb(255, 255, 255)"
            },
        },
        MuiCardHeader: {
            root: {
                backgroundColor: couleur,
            }
        },
        MuiCardActions: {
            root: {
                backgroundColor: couleur,
            }
        },
    },
})