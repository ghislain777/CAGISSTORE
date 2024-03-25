

    
import React, { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
    Button,
    Grid,
    CircularProgress,
    FormControl,
    TextField,
    Typography,
    Checkbox,
    Card,
    CardHeader,
    Avatar,
    IconButton,
    CardContent,
    CardActions,
} from '@material-ui/core'
import FormInput from '../../../components/zen/formInput'
import FormSelect from '../../../components/zen/formSelect'
import FormCheckBox from '../../../components/zen/formCheckBox'
import FormFile from '../../../components/zen/formFile'
//import uploaderFichier from 'app/services/fichier/fichierService'
import Chargement from '../../../components/zen/chargement'
import FormSimpleSelect from '../../../components/zen/formSimpleSelect'
import FormDateTime from '../../../components/zen/formDateTime';
import FormDate from '../../../components/zen/formDate';
import { getMuiTheme } from '../../../../model/config'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Send } from '@material-ui/icons'


export default function FormulaireTransporteur(props) {

    const { state, fonctions, queries, useforms } = props

    const useform = useforms.transporteur


    return (

        <div>
           
            <Grid container spacing={1} justify='center'>
                <Grid item lg={6} md={6} sm={12} xs={12} >
                    <MuiThemeProvider theme={getMuiTheme()}>
                        <Card>
                            <CardHeader
                                action={
                                    <IconButton
                                        aria-label=''
                                        onClick={fonctions.AnnulerEnregistrement}
                                    >
                                        x
                                    </IconButton>
                                }
                                title={
                                    state.pagestate.action === 'ajout'
                                        ? 'Nouveau transporteur'
                                        : 'Mise à jour'
                                }
                                subheader=''
                            />

                            <CardContent className=' px-6 pt-6 pb-6'>
                                {' '}
                                <form >
                                    <Grid
                                        container
                                        spacing={4}
                                        direction='column'
                                    >
    

                                    
<Grid item>
<FormInput
id='nom'
nom='nom'
label='Nom'
valeur={state.transporteur?.nom }
control={useform.control}
error={useform.errors.nom }
/>
</Grid>

<Grid item>
<FormInput
id='telephone'
nom='telephone'
label='Téléphone'
valeur={state.transporteur?.telephone }
control={useform.control}
error={useform.errors.telephone }
/>
</Grid>

<Grid item>
<FormInput
id='adresse'
nom='adresse'
label='Adresse'
valeur={state.transporteur?.adresse }
control={useform.control}
error={useform.errors.adresse }
/>
</Grid>

<Grid item>
<FormInput
id='description'
nom='description'
label='Description'
valeur={state.transporteur?.description }
control={useform.control}
error={useform.errors.description }
/>
</Grid>

    
    </Grid>
    </form>
</CardContent>
<CardActions>
    <Grid
        container
        alignItems='center'
        justify='space-between'
    >
         <Grid item>
            <Button
                variant='outlined'
                color='secondary'
                onClick={fonctions.allerAPrecedent}
            >
                {"Précédent"}
            </Button>
        </Grid>

        <Grid item>
            <Button
                color='primary'
                variant='contained'
                type='submit'
                onClick={ useform.handleSubmit(fonctions.allerAPhotos) }
            >
               { (queries.mutationAjout.isLoading || queries.mutationMiseajour.isLoading)? (
                    <CircularProgress color='inherit' />
                )
                :
                <>
                <span className='pl-2 capitalize'>
                    
                        <Typography>
                           Suivant
                        </Typography>
                    
                </span>
                 <Send/>
                </>}
            </Button>
        </Grid>
    </Grid>
</CardActions>
</Card>
</MuiThemeProvider>
</Grid>
</Grid>
</div>

)
}


