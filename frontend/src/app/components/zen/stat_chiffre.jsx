import React from 'react'
import { Grid, Card, IconButton, Icon } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Chargement from './chargement'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
//**
// composant pour afficher les statistiques en chiffre.
// parametres: {icone, montant, lien, handleClickSurCarte} */
const StatChiffre = ({ montant, icone, lien, handleClickSurCarte, titre, query }) => {

    return (
        <div>
            <Link to={lien ?? " "}>
                <Card elevation={3} className="p-5 flex" onClick={handleClickSurCarte}>
                    <div className="p-2 bg-light-grey">
                        <IconButton
                            size="small"
                            

                        >
                            {/* <Icon color="primary">
                                {icone ?? "payments"}
                            </Icon> */}
                            <ConfirmationNumberIcon color='primary' fontSize='large'/>
                        </IconButton>
                    </div>
                    <div className="ml-4">
                       { query.isLoading? <Chargement message="chargement...." /> : <h3 className="mt-1 text-32">
                            {montant.toLocaleString('fr-FR')}
                        </h3>}
                        <p style={{whiteSpace:'nowrap'}} className="m-0 text-muted">{titre?? ""}</p>

                    </div>
                </Card>
            </Link>
        </div>
    )
}

export default StatChiffre
