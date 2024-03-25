
    
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


export default function FormulaireCommande(props) {

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
                                        ? 'Nouvelle commande'
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
    id='montantttc'
    nom='montantttc'
    label='Montant TTC'
    valeur={state.commande?.montantttc }
    control={useform.control}
    error={useform.errors.montantttc }
    />
    </Grid>
    
    <Grid item>
    <FormInput
    id='montanttaxe'
    nom='montanttaxe'
    label='Montant Taxe'
    valeur={state.commande?.montanttaxe }
    control={useform.control}
    error={useform.errors.montanttaxe }
    />
    </Grid>
    
    <Grid item>
    <FormInput
    id='montantht'
    nom='montantht'
    label='Montant HT'
    valeur={state.commande?.montantht }
    control={useform.control}
    error={useform.errors.montantht }
    />
    </Grid>
    
    <Grid item>
    <FormInput
    id='remise'
    nom='remise'
    label='Remise'
    valeur={state.commande?.remise }
    control={useform.control}
    error={useform.errors.remise }
    />
    </Grid>
    
    <Grid item>
    <FormInput
    id='montanttransport'
    nom='montanttransport'
    label='Montant transport'
    valeur={state.commande?.montanttransport }
    control={useform.control}
    error={useform.errors.montanttransport }
    />
    </Grid>
    
    <Grid item>
    <FormInput
    id='delaisdelivraison'
    nom='delaisdelivraison'
    label='Délais de livraison'
    valeur={state.commande?.delaisdelivraison }
    control={useform.control}
    error={useform.errors.delaisdelivraison }
    />
    </Grid>
    
    <Grid item>
    <FormInput
    id='messageduclient'
    nom='messageduclient'
    label='Message du client'
    valeur={state.commande?.messageduclient }
    control={useform.control}
    error={useform.errors.messageduclient }
    />
    </Grid>
    
        <Grid item>
<FormDateTime
    id='{datecommande}'
    nom='{datecommande}'
    label='Date de la commande'
    valeur={state.commande? state.commande.datecommande : new Date()}
   error={useform.errors.datecommande }
    control={useform.control}
    handledatechange={fonctions.handledatedatecommandechange}
/>
</Grid>   
        
        <Grid item>
<FormDateTime
    id='{dateconfirmation}'
    nom='{dateconfirmation}'
    label='Date de confirmation'
    valeur={state.commande? state.commande.dateconfirmation : new Date()}
   error={useform.errors.dateconfirmation }
    control={useform.control}
    handledatechange={fonctions.handledatedateconfirmationchange}
/>
</Grid>   
        
        <Grid item>
<FormDateTime
    id='{dateexpedition}'
    nom='{dateexpedition}'
    label="Date d'expédition"
    valeur={state.commande? state.commande.dateexpedition : new Date()}
   error={useform.errors.dateexpedition }
    control={useform.control}
    handledatechange={fonctions.handledatedateexpeditionchange}
/>
</Grid>   
        
        <Grid item>
<FormDateTime
    id='{datereception}'
    nom='{datereception}'
    label='Date de reception'
    valeur={state.commande? state.commande.datereception : new Date()}
   error={useform.errors.datereception }
    control={useform.control}
    handledatechange={fonctions.handledatedatereceptionchange}
/>
</Grid>   
        
        <Grid item>
<FormDateTime
    id='{dateannulation}'
    nom='{dateannulation}'
    label="Date d'annulation"
    valeur={state.commande? state.commande.dateannulation : new Date()}
   error={useform.errors.dateannulation }
    control={useform.control}
    handledatechange={fonctions.handledatedateannulationchange}
/>
</Grid>   
        
        <Grid item>
<FormDateTime
    id='{datepayement}'
    nom='{datepayement}'
    label='Date de payement'
    valeur={state.commande? state.commande.datepayement : new Date()}
   error={useform.errors.datepayement }
    control={useform.control}
    handledatechange={fonctions.handledatedatepayementchange}
/>
</Grid>   
        
  <Grid item>
  {queries.queryClients.isLoading ? (
    <Chargement message='chargement des Clients' />
   ) : (
    <FormSelect
        id='client'
        name='client'
        label='client'
        table='client'
        control={useform.control}
        options={
            queries.queryClients.data['rows']
        }
        error={useform.errors.client }
        defaultValue = {state.commande?.Client?.id?? '1'}
        valeur={
            state.commande?.client?? ''
        }
    ></FormSelect>
     )}
      </Grid>
    
  <Grid item>
  {queries.queryPaniers.isLoading ? (
    <Chargement message='chargement des Paniers' />
   ) : (
    <FormSelect
        id='panier'
        name='panier'
        label='panier'
        table='panier'
        control={useform.control}
        options={
            queries.queryPaniers.data['rows']
        }
        error={useform.errors.panier }
        defaultValue = {state.commande?.Panier?.id?? '1'}
        valeur={
            state.commande?.panier?? ''
        }
    ></FormSelect>
     )}
      </Grid>
    
  <Grid item>
  {queries.queryTransporteurs.isLoading ? (
    <Chargement message='chargement des Transporteurs' />
   ) : (
    <FormSelect
        id='transporteur'
        name='transporteur'
        label='transporteur'
        table='transporteur'
        control={useform.control}
        options={
            queries.queryTransporteurs.data['rows']
        }
        error={useform.errors.transporteur }
        defaultValue = {state.commande?.Transporteur?.id?? '1'}
        valeur={
            state.commande?.transporteur?? ''
        }
    ></FormSelect>
     )}
      </Grid>
    
  <Grid item>
  {queries.queryMoyendepayements.isLoading ? (
    <Chargement message='chargement des Moyendepayements' />
   ) : (
    <FormSelect
        id='moyendepayement'
        name='moyendepayement'
        label='moyendepayement'
        table='moyendepayement'
        control={useform.control}
        options={
            queries.queryMoyendepayements.data['rows']
        }
        error={useform.errors.moyendepayement }
        defaultValue = {state.commande?.Moyendepayement?.id?? '1'}
        valeur={
            state.commande?.moyendepayement?? ''
        }
    ></FormSelect>
     )}
      </Grid>
    
  <Grid item>
  {queries.queryAdresses.isLoading ? (
    <Chargement message='chargement des Adresses' />
   ) : (
    <FormSelect
        id='adresse'
        name='adresse'
        label='adresse'
        table='adresse'
        control={useform.control}
        options={
            queries.queryAdresses.data['rows']
        }
        error={useform.errors.adresse }
        defaultValue = {state.commande?.Adresse?.id?? '1'}
        valeur={
            state.commande?.adresse?? ''
        }
    ></FormSelect>
     )}
      </Grid>
    
  <Grid item>
  {queries.queryStatutcommandes.isLoading ? (
    <Chargement message='chargement des Statutcommandes' />
   ) : (
    <FormSelect
        id='statutcommande'
        name='statutcommande'
        label='statutcommande'
        table='statutcommande'
        control={useform.control}
        options={
            queries.queryStatutcommandes.data['rows']
        }
        error={useform.errors.statutcommande }
        defaultValue = {state.commande?.Statutcommande?.id?? '1'}
        valeur={
            state.commande?.statutcommande?? ''
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

    