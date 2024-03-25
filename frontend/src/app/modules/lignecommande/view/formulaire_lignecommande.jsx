
    
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


export default function FormulaireLignecommande(props) {

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
                                        ? 'Nouvelle ligne'
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
    id='prixunitaire'
    nom='prixunitaire'
    label='Prix unitaire'
    valeur={state.lignecommande?.prixunitaire }
    control={useform.control}
    error={useform.errors.prixunitaire }
    />
    </Grid>
    
    <Grid item>
    <FormInput
    id='quantite'
    nom='quantite'
    label='Quantité'
    valeur={state.lignecommande?.quantite }
    control={useform.control}
    error={useform.errors.quantite }
    />
    </Grid>
    
    <Grid item>
    <FormInput
    id='prixtotal'
    nom='prixtotal'
    label='Prix total'
    valeur={state.lignecommande?.prixtotal }
    control={useform.control}
    error={useform.errors.prixtotal }
    />
    </Grid>
    
  <Grid item>
  {queries.queryProduits.isLoading ? (
    <Chargement message='chargement des Produits' />
   ) : (
    <FormSelect
        id='produit'
        name='produit'
        label='produit'
        table='produit'
        control={useform.control}
        options={
            queries.queryProduits.data['rows']
        }
        error={useform.errors.produit }
        defaultValue = {state.lignecommande?.Produit?.id?? '1'}
        valeur={
            state.lignecommande?.produit?? ''
        }
    ></FormSelect>
     )}
      </Grid>
    
  <Grid item>
  {queries.queryCommandes.isLoading ? (
    <Chargement message='chargement des Commandes' />
   ) : (
    <FormSelect
        id='commande'
        name='commande'
        label='commande'
        table='commande'
        control={useform.control}
        options={
            queries.queryCommandes.data['rows']
        }
        error={useform.errors.commande }
        defaultValue = {state.lignecommande?.Commande?.id?? '1'}
        valeur={
            state.lignecommande?.commande?? ''
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

    