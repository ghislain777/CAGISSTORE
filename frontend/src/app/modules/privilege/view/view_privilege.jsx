
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
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from '@material-ui/core';
import ApiAlert from '../../../components/zen/apiAlert';
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';
import ConfirmationDialog from '../../../components/ConfirmationDialog/ConfirmationDialog'
import Chargement from '../../../components/zen/chargement';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import {serveur} from  'model/config';
import { MuiThemeProvider } from '@material-ui/core/styles'
import FormulairePrivilege from './formulaire_privilege';



const PrivilegeView = (props) => {

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
        {/* <Button
          className='mb-4'
          variant='contained'
          color='primary'
          onClick={() => fonctions.handleClicksurNouveau()}
        >
        Nouveau privilège
  </Button> */}


  <div className="mb-sm-30">
              <Card className="mb-sm-30">
                <form >
                  <Grid container spacing={2} direction="column">
                    <Grid item>
                      <Grid container spacing={10} direction="row">
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container spacing={5} direction="row">
                        <Grid item sm={1} >
                        </Grid>
                        <Grid item sm={3} p={5}>

                          {queries.queryRoles.isLoading ? (
                            <Chargement message='chargement des roles' />
                          ) : (
                            <FormControl fullWidth={true}>
                              <InputLabel htmlFor="Role">Choisir un role</InputLabel>
                              <Select
                                id="Role"
                                variant='outlined'
                                onChange={fonctions.handleChangeRole}
                              >
                                <MenuItem key="0" value={null}>
                                  Tous les roles
                                </MenuItem>
                                {queries.queryRoles.data['rows'].map((item) => (
                                  <MenuItem key={item.id} value={item.id}>
                                    {item.nom}
                                  </MenuItem>
                                ))}

                              </Select>
                              <FormHelperText></FormHelperText>
                            </FormControl>
                          )}
                        </Grid>
                        <Grid item sm={3}>
                          {queries.queryActivites.isLoading ? (
                            <Chargement message='chargement des activités' />
                          ) : (
                            <FormControl fullWidth={true}>
                              <InputLabel htmlFor="Activite">Choisir une activité</InputLabel>
                              <Select
                                id="activite"
                                variant='outlined'
                                onChange={fonctions.handleChangeActivite}
                              >
                                <MenuItem key="0" value={null}>
                                  Toutes les activités
                                </MenuItem>
                                {queries.queryActivites.data['rows'].map((item) => (
                                  <MenuItem key={item.id} value={item.id}>
                                    {item.nom}
                                  </MenuItem>
                                ))}
                              </Select>
                              <FormHelperText></FormHelperText>
                            </FormControl>
                          )}
                        </Grid>
                        <Grid item sm={3}>

                        </Grid>
                      </Grid>
                    </Grid>

                  </Grid>
                </form>
              </Card>
            </div>
  
        {
          queries.queryPrivileges.isLoading ? <Chargement message='Chargement des données...' type='info'/>  
          : queries.queryPrivileges.isError? <Chargement message={'Erreur lors du chargement des données::'+queries.queryPrivileges.error} type='error'/> 
          : <BlockUi tag='div' blocking={false}>
          <MUIDataTable
            title={state.titre}
            data= {queries.queryPrivileges.data['rows']}
            columns={collonnes}
            options={{...tableOptions, 
              serverSide: true,
              count:queries.queryPrivileges.data['count'],
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
            text={'Confirmez la suppression de ' + state.privilege?.nom ?? ''}
          />
        </Card>
      </div>
    </Slide>
  ) : (
      // <Slide in={!pagestate.affichageTable} direction='right' unmountOnExit={true}>
            <FormulairePrivilege
            state={state}
            fonctions={fonctions}
            queries={queries}
            useform={useform}
            onSubmit={onSubmit}
            ></FormulairePrivilege>
      //   </Slide>
    )}
</div>

    )


}
export default PrivilegeView
