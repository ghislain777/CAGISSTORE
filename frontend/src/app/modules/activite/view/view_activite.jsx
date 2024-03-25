
import React from 'react';
import MUIDataTable from 'mui-datatables';
import { tableOptions } from '../../../components/zen/tableOptions';
import {
  Button,
  Card,
  Slide,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent
} from '@material-ui/core';
import ApiAlert from '../../../components/zen/apiAlert';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import ConfirmationDialog from '../../../components/ConfirmationDialog/ConfirmationDialog'
import Chargement from '../../../components/zen/chargement';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import {serveur} from  'model/config';
import { MuiThemeProvider } from '@material-ui/core/styles'
import FormulaireActivite from './formulaire_activite';



const ActiviteView = (props) => {

    const  {state, fonctions, collonnes, queries, useform, onSubmit} = props


    return (
        

    <div className='m-sm-30'>

    
    <Dialog
open={state.dialoguephoto.open}
aria-labelledby=''
maxWidth={'md'}
onClose={fonctions.handleCloseDialoguephoto}
objet={state.dialoguephoto.objet}
>
<DialogTitle id=''>
  {state.dialoguephoto.titre}
</DialogTitle>
<DialogContent>
  <img
      src={
          serveur +
          '/fichiers/'+state.dialoguephoto.objet+'/' +
          state.dialoguephoto.fichier
      }
      alt='{objet}'
      srcset=''
  />
</DialogContent>
</Dialog>
  <ApiAlert
                message={state.alert.message}
                severity={state.alert.severity}
                open={state.alert.open}
                handleAlertClose={
                    state.alert.automaticClose === true
                        ? () => fonctions.handleFermetureAlerte()
                        : () => fonctions.fermerAlerte()
                }
            />
  <div className='mb-sm-30'>
    <Breadcrumb routeSegments={[{ name: state.titre }]} />
  </div>
  <div className='mb-sm-30'>
    <Typography variant='h4'>{state.titre}</Typography>
  </div>
  {state.pagestate.mode === 'affichage' ? (
    <Slide in={state.pagestate.affichageTable} direction='right' unmountOnExit={true}>
      <div>
        <Button
          className='mb-4'
          variant='contained'
          color='primary'
          onClick={() => fonctions.handleClicksurNouveau()}
        >
        Nouvelle activité
  </Button>
  
        {
          queries.queryActivites.isLoading ? <Chargement message='Chargement des données...' type='info'/>  
          : queries.queryActivites.isError? <Chargement message={'Erreur lors du chargement des données::'+queries.queryActivites.error} type='error'/> 
          : <BlockUi tag='div' blocking={false}>
          <MUIDataTable
            title={state.titre}
            data= {queries.queryActivites.data['rows']}
            columns={collonnes}
            options={{...tableOptions, 
              serverSide: true,
              count:queries.queryActivites.data['count'],
              rowsPerPageOptions: [20, 30, 50],
              rowsPerPage: state.tableconfig.rowsPerPage,
              textLabels:{...tableOptions['textLabels'], toolbar:{...tableOptions['textLabels']['toolbar'], search: 'Rechercher par id'}},
              onChangePage: (currentPage) => fonctions.handleChangePage(currentPage),
              onChangeRowsPerPage: (numberOfRows) => fonctions.handleChangeRowPerPage(numberOfRows),
              onSearchChange: (searchText) => fonctions.handleSearchChange(searchText),
              onFilterChange:  () =>fonctions.handleFilterChange()

          }}
          />
          </BlockUi>
        
        }
        <Card className='w-full overflow-auto' elevation={8} >
          <ConfirmationDialog
            open={state.dialogueSuppressionOuvert}
            onConfirmDialogClose={fonctions.fermerDialogueSuppression }
            onYesClick={fonctions.confirmerSuppression}
            text={'Confirmez la suppression de ' + state.activite?.nom ?? ''}
          />
        </Card>
      </div>
    </Slide>
  ) : (
      // <Slide in={!pagestate.affichageTable} direction='right' unmountOnExit={true}>
            <FormulaireActivite
            state={state}
            fonctions={fonctions}
            queries={queries}
            useform={useform}
            onSubmit={onSubmit}
            ></FormulaireActivite>
      //   </Slide>
    )}
</div>

    )


}
export default ActiviteView
