
    
import React, { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
    Button,
    Grid,
    Icon,
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


export default function FormulaireAdresse(props) {

    const { state, fonctions, queries, useform, onSubmit } = props



    // const listeCivilite = [
    //     { id: 1, label: 'M.', value: 'M.' },
    //     { id: 2, label: 'Mme', value: 'Mme' },
    //     { id: 3, label: 'Mlle', value: 'Mlle' },
    // ]



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
                                        ? 'Nouveau'
                                        : 'Mise à jour'
                                }
                                subheader=''
                            />

                            <CardContent className=' px-6 pt-6 pb-6'>
                                {' '}
                                <form onSubmit={useform.handleSubmit(onSubmit)}>
                                    <Grid
                                        container
                                        spacing={4}
                                        direction='column'
                                    >
    
    <Grid item>
    <FormInput
    id='alias'
    nom='alias'
    label={`Alias de l'adresse`}
    valeur={state.adresse?.alias }
    control={useform.control}
    error={useform.errors.alias }
    />
    </Grid>
    
    <Grid item>
    <FormInput
    id='Nom'
    nom='Nom'
    label={`Nom`}
    valeur={state.adresse?.Nom }
    control={useform.control}
    error={useform.errors.Nom }
    />
    </Grid>
    
    <Grid item>
    <FormInput
    id='prenom'
    nom='prenom'
    label={`Prénom`}
    valeur={state.adresse?.prenom }
    control={useform.control}
    error={useform.errors.prenom }
    />
    </Grid>
    
    <Grid item>
    <FormInput
    id='telephone'
    nom='telephone'
    label={`Téléphone`}
    valeur={state.adresse?.telephone }
    control={useform.control}
    error={useform.errors.telephone }
    />
    </Grid>
    
    <Grid item>
    <FormInput
    id='Adresse'
    nom='Adresse'
    label={`Adresse`}
    valeur={state.adresse?.Adresse }
    control={useform.control}
    error={useform.errors.Adresse }
    />
    </Grid>
    
  <Grid item>
  {queries.queryClients.isLoading ? (
    <Chargement message='chargement des Clients' />
   ) : (
    <FormSelect
        id='client'
        name='client'
        label={`client`}
        table='client'
        control={useform.control}
        options={
            queries.queryClients.data['rows']
        }
        error={useform.errors.client }
        defaultValue = {state.adresse?.Client?.id?? '1'}
        valeur={
            state.adresse?.client?? ''
        }
    ></FormSelect>
     )}
      </Grid>
    
  <Grid item>
  {queries.queryQuartiers.isLoading ? (
    <Chargement message='chargement des Quartiers' />
   ) : (
    <FormSelect
        id='quartier'
        name='quartier'
        label={`quartier`}
        table='quartier'
        control={useform.control}
        options={
            queries.queryQuartiers.data['rows']
        }
        error={useform.errors.quartier }
        defaultValue = {state.adresse?.Quartier?.id?? '1'}
        valeur={
            state.adresse?.quartier?? ''
        }
    ></FormSelect>
     )}
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
                color='primary'
                variant='contained'
                type='submit'
                onClick={useform.handleSubmit(onSubmit)}
            >
                {queries.mutationMiseajour.isLoading ||
                queries.mutationAjout.isLoading ? (
                    <CircularProgress color='inherit' />
                ) : (
                    <Send/>
                )}
                <span className='pl-2 capitalize'>
                    {state.pagestate.action === 'ajout' ? (
                        <Typography>
                            Enregistrer
                        </Typography>
                    ) : (
                        <Typography>
                            Mettre à jour
                        </Typography>
                    )}
                </span>
            </Button>
        </Grid>
        <Grid item>
            <Button
                variant='outlined'
                color='secondary'
                onClick={fonctions.AnnulerEnregistrement}
            >
                Annuler
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

    