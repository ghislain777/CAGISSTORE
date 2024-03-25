const getContenuFichierViewPourImage = (table) => {
    
let contenu = `

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
  DialogContent,
  DialogActions
} from '@material-ui/core';
import ApiAlert from '../../../components/zen/apiAlert';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import ConfirmationDialog from '../../../components/ConfirmationDialog/ConfirmationDialog'
import Chargement from '../../../components/zen/chargement';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import {serveur} from  '../../../../model/config';
import { MuiThemeProvider } from '@material-ui/core/styles'
import {getMuiTheme} from '../../../../model/config'
import Formulaire${table.model} from './formulaire_${table.nom}';
import Edition${table.model} from './edition_${table.nom}';
import IconButton from '@mui/material/IconButton'



const ${table.model}View = (props) => {

    const  {state, fonctions, collonnes, queries, useforms} = props


    return (
        

    <div className='m-sm-30'>

<Dialog
        open={state.dialoguephoto.open}
        aria-labelledby=''
        maxWidth={'md'}
        onClose={fonctions.handleCloseDialoguephoto}
        objet={state.dialoguephoto.objet}
        fonctions={fonctions}
        state={state}
      >
        <DialogTitle id=''>
         <Typography variant="h6" color="initial">{state.dialoguephoto.titre}</Typography> 
         
        </DialogTitle>
        <DialogContent>
          <img
          style={{ width: 500, height: 400, "object-fit":"contain" }}
            src={
              serveur +
             
              state.dialoguephoto.fichier
            }
            alt={state.dialoguephoto.objet}
            srcset=''
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => fonctions.handleClickSurPhotoPrecedent()}>
            precedent
          </Button>
          <Button onClick={() => fonctions.handleClickSurPhotoSuivant()} autoFocus>
            suivant
          </Button>

        </DialogActions>
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
        Nouveau ${table.nom}
  </Button>
  
        {
          queries.query${table.model}s.isLoading ? <Chargement message='Chargement des données...' type='info'/>  
          : queries.query${table.model}s.isError? <Chargement message={'Erreur lors du chargement des données::'+queries.query${table.model}s.error} type='error'/> 
          : <BlockUi tag='div' blocking={false}>
          <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={state.titre}
            data= {queries.query${table.model}s.data.rows.map((${table.nom})=> {return {${table.nom}:${table.nom}}})}
            columns={collonnes}
            options={{...tableOptions, 
              serverSide: true,
              count:queries.query${table.model}s.data.count,
              rowsPerPageOptions: [20, 30, 50],
              rowsPerPage: state.tableconfig.rowsPerPage,
              textLabels:{...tableOptions['textLabels'], toolbar:{...tableOptions['textLabels']['toolbar'], search: 'Rechercher par id'}},
              onChangePage: (currentPage) => fonctions.handleChangePage(currentPage),
              onChangeRowsPerPage: (numberOfRows) => fonctions.handleChangeRowPerPage(numberOfRows),
              onSearchChange: (searchText) => fonctions.handleSearchChange(searchText),
              onFilterChange:  () =>fonctions.handleFilterChange()

          }}
          />
          </MuiThemeProvider>
          </BlockUi>
        
        }
        <Card className='w-full overflow-auto' elevation={8} >
          <ConfirmationDialog
            open={state.dialogueSuppressionOuvert}
            onConfirmDialogClose={fonctions.fermerDialogueSuppression }
            onYesClick={fonctions.confirmerSuppression}
            text={'Confirmez la suppression de ' + state.${table.nom}?.nom ?? ''}
          />
        </Card>
      </div>
    </Slide>
  ) : (
      // <Slide in={!pagestate.affichageTable} direction='right' unmountOnExit={true}>
            <Edition${table.model}
            state={state}
            fonctions={fonctions}
            queries={queries}
            useforms={useforms}
            ></Edition${table.model}>
      //   </Slide>
    )}
</div>

    )


}
export default ${table.model}View
`

return contenu

  }

  module.exports = getContenuFichierViewPourImage