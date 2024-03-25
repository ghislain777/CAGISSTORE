import React from 'react'
import {
    Grid, Card, IconButton, Icon,
    Paper,
    TableHead,
    TableCell,
    TableBody,
    Table,
    TableContainer,
    TableRow,

} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { getMuiTheme } from 'model/config'
import { MuiThemeProvider } from '@material-ui/core/styles'

const CoffreView = ({ coffre, titre }) => {

    //const  {totalUtilisateurs, totalCommandes, totalChiffreDaffaire, totalCommandesNouveau} = source

    const handleClickSurCarte = () => {
        console.log("on a clické sur la carte");
    }

    return (
        <div>
            <Link to={coffre.lien ?? " "}>
                <MuiThemeProvider theme={getMuiTheme()}>
                    <TableContainer
                        component={Paper}
                    >

                        <Table size="small" aria-label="demo table">
                            <TableHead >
                            <TableRow>
                            <TableCell colSpan={2}>{titre?? "Solde.."}</TableCell>
                            </TableRow>
                                 </TableHead>
                            <TableBody>
                                {
                                    coffre.map((soldedevise) => {
                                        return (
                                            <TableRow>
                                            <TableCell >{soldedevise.devise.code}</TableCell>
                                            <TableCell>{soldedevise.solde.toLocaleString('fr-FR')?? ''}</TableCell>
                                        </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </MuiThemeProvider>
            </Link>
        </div>
    )
}

export default CoffreView
