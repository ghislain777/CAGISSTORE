import React from 'react'
import { Grid, Card, IconButton, Icon } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { AccountBalanceWallet } from '@material-ui/icons'
import DynamicIcon from '../icons/dynamic_icon'

const StatGlobal = ({solde, devise,  icone, lien, label}) => {

   //const  {totalUtilisateurs, totalCommandes, totalChiffreDaffaire, totalCommandesNouveau} = source

   
   

    const handleClickSurCarte= () => {
        console.log("on a clické sur la carte");
    }

    return (
        <div>    {label}
                        <Link to={lien?? " " }>
                        <Card elevation={3} className="p-5 flex" onClick = {handleClickSurCarte}>
                            <div>
                                <IconButton
                                    size="small"
                                    className="p-2 bg-light-gray"
                                    
                                >
                                    {DynamicIcon(icone)}
                                    {/* <Icon className="text-muted" color='green'>
                                        {icone?? "payments"}
                                    </Icon> */}
                                </IconButton>
                            </div>
                            <div className="ml-4">
                                <h3 className="mt-1 text-32">
                                    {solde.toLocaleString('fr-FR')}
                                </h3>
                                <p className="m-0 text-muted">{label?? ""}</p>
                            </div>
                        </Card>
                        </Link>
        </div>
    )
}

export default StatGlobal
