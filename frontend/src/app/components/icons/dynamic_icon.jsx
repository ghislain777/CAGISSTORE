

import { Description, Settings, Home, People, SupervisedUserCircle, HomeWork, AccountBalanceWallet, Receipt} from '@material-ui/icons';
import React from 'react'

const DynamicIcon = (icon) => {
    
    switch (icon) {
        case "home":
        return <Home />

        case "people":
        return <People   />

        case "settings":
        return <Settings   />

        case "clients":
        return <SupervisedUserCircle color='primary' fontSize="large" />

        case "gestion":
        return <HomeWork   />

        case "wallet":
        return <AccountBalanceWallet  />

        case "facture":
        return <Receipt color='primary' fontSize="large"/>
        
        case "commande":
            return <Description color='primary' fontSize="large"/>
                
        default:
            break;
    }
}

export default DynamicIcon

