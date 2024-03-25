
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



export default function FormulairePrivilege(props) {

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
                                        ? 'Nouveau privilège'
                                        : 'Mise à jour '
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
    id='description'
    nom='description'
    label='Description'
    valeur={state.privilege?.description}
    control={useform.control}
    error={useform.errors.description}
    />
    </Grid>
    

    <Grid item>
                <FormCheckBox
                    id='actif'
                    nom='actif'
                    control={useform.control}
                    coche={Boolean(
                        state.privilege?.actif ?? ''
                    )}
                    //coche={false}
                    onChange={(valeur) => fonctions.handleChangementactif(valeur)}
                    changement={fonctions.handleChangementactif}
                />
            </Grid>
    
    
  <Grid item>
  {queries.queryActivites.isLoading ? (
    <Chargement message='chargement des roles' />
   ) : (
    <FormSelect
        id='activite'
        name='activite'
        label='Activité'
        table='activite'
        control={useform.control}
        options={
            queries.queryActivites.data['rows']
        }
        error={useform.errors.activite}
        defaultValue = {(state.privilege?.activite?.id?? '1')}
        valeur={
            state.utilisateur?.activite ?? ''
        }
    ></FormSelect>
     )}
      </Grid>

    
  <Grid item>
  {queries.queryRoles.isLoading ? (
    <Chargement message='chargement des roles' />
   ) : (
    <FormSelect
        id='role'
        name='role'
        label='Role'
        table='role'
        control={useform.control}
        options={
            queries.queryRoles.data['rows']
        }
        error={useform.errors.role}
        defaultValue = {(state.privilege?.role?.id?? '1')}
        valeur={
            state.utilisateur?.role ?? ''
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


