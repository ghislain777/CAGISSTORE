

    
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


export default function FormulaireProduit(props) {

    const { state, fonctions, queries, useforms } = props

    const useform = useforms.produit


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
                                        ? 'Nouveau produit'
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
label="Nom"
valeur={state.produit?.nom }
control={useform.control}
error={useform.errors.nom }
/>
</Grid>

<Grid item>
<FormInput
multiline
rowsMax={4}
id='description'
nom='description'
label="Description"
valeur={state.produit?.description }
control={useform.control}
error={useform.errors.description }
/>
</Grid>

<Grid item>
<FormInput
multiline
rowsMax={10}
id='descriptionlongue'
nom='descriptionlongue'
label="Description longue"
valeur={state.produit?.descriptionlongue }
control={useform.control}
error={useform.errors.descriptionlongue }
/>
</Grid>

<Grid item>
<FormInput
id='prixdevente'
nom='prixdevente'
label="Prix de vente"
valeur={state.produit?.prixdevente }
control={useform.control}
error={useform.errors.prixdevente }
/>
</Grid>

<Grid item>
<FormInput
id='prixpromo'
nom='prixpromo'
label="Prix promo"
valeur={state.produit?.prixpromo }
control={useform.control}
error={useform.errors.prixpromo }
/>
</Grid>

<Grid item>
<FormInput
id='prixdachat'
nom='prixdachat'
label="Prix d'achat"
valeur={state.produit?.prixdachat }
control={useform.control}
error={useform.errors.prixdachat }
/>
</Grid>

<Grid item>
{queries.queryFournisseurs.isLoading ? (
<Chargement message='chargement des Fournisseurs' />
) : (
<FormSelect
    id='fournisseur'
    name='fournisseur'
    label="fournisseur"
    table='fournisseur'
    control={useform.control}
    options={
        queries.queryFournisseurs.data['rows']
    }
    error={useform.errors.fournisseur }
    defaultValue = {state.produit?.Fournisseur?.id?? '1'}
    valeur={
        state.produit?.fournisseur?? ''
    }
></FormSelect>
 )}
  </Grid>

<Grid item>
{queries.querySouscategories.isLoading ? (
<Chargement message='chargement des Souscategories' />
) : (
<FormSelect
    id='souscategorie'
    name='souscategorie'
    label="souscategorie"
    table='souscategorie'
    control={useform.control}
    options={
        queries.querySouscategories.data['rows']
    }
    error={useform.errors.souscategorie }
    defaultValue = {state.produit?.Souscategorie?.id?? '1'}
    valeur={
        state.produit?.souscategorie?? ''
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


