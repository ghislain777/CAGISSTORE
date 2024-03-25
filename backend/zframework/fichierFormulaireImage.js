
const getContenuFichierFormulaireImage = (table) => {
const contenuFichier = `
import React from 'react'
import {
    Button,
    Grid,
    CircularProgress,
    Typography,
    Card,
    CardHeader,
    IconButton,
    CardContent,
    CardActions
    
} from '@material-ui/core'
import FormFile from '../../../components/zen/formFile'
//import uploaderFichier from 'app/services/fichier/fichierService'
import { getMuiTheme, serveur } from '../../../../model/config'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Delete, Send } from '@material-ui/icons'
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'


export default function FormulaireImage(props) {

    const { state, fonctions, queries, useform, onSubmit } = props



    // const listeCivilite = [
    //     { id: 1, label: 'M.', value: 'M.' },
    //     { id: 2, label: 'Mme', value: 'Mme' },
    //     { id: 3, label: 'Mlle', value: 'Mlle' },
    // ]



    return (

        <div>

            <Grid container spacing={1} justify='center'>
                <Grid item lg={5} md={5} sm={12} xs={12} >
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
                                title={\`Ajouter une photo au ${table.nom}\`
                                }
                                subheader={\`\${state.${table.nom}.nom}\`}
                            />

                            <CardContent className=' px-6 pt-6 pb-6'>
                                {' '}
                                <form>
                                    <Grid
                                        container
                                        spacing={4}
                                        direction='column'
                                    >




                                        <Grid item>
                                            <FormFile
                                                progress={state.progressphoto}
                                                acceptedFiles={['.png', '.jpg', '.jpeg', '.gif']}
                                                onUpload={(file) => fonctions.uploaderPhoto(file)}
                                                onSupprimer={() => fonctions.supprimerphoto()}
                                                titre={
                                                    'Fichier photo .png(faire glisser ou cliquez ici pour charger)'
                                                }
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

                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant='outlined'
                                            color='secondary'
                                            onClick={fonctions.AnnulerEnregistrement}
                                        >
                                            Quiter
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </MuiThemeProvider>
                </Grid>
                <Grid item lg={7} md={7} sm={12} xs={12} >
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
                            title={\`\${state.${table.nom}.nom}\`
                            }
                            subheader=''
                        />

                        <CardContent className=' px-6 pt-6 pb-6'>
                        <ImageList sx={{  width: 540, height: 300}}  cols={2} gap={8} >
                        {state.${table.nom}.Media.map((item) => (
                            <ImageListItem key={item.id} sx={{borderColor: 'primary.main', border: 0.1}}>
                                <img
                               
                                    src={\`\${serveur}\${item.fichier}\`}
                                    alt={item.titre}
                                />
                                <ImageListItemBar
                               title={item.nom}
                               //subtitle={item.author}
                              actionIcon={
                                <IconButton aria-label="" onClick={()=> fonctions.supprimerImage(item)}>
                                  <Delete color='error' />
                                </IconButton>

    }
  />
                            </ImageListItem>
                        ))}
                    </ImageList>

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
                                            Précédent
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            color='primary'
                                            variant='contained'
                                            type='submit'
                                            onClick={fonctions.handleClickSurTerminer}
                                        >
                                         {(queries.mutationAjout.isLoading || queries.mutationMiseajour.isLoading)? (
                    <CircularProgress color='inherit' />
                ) : (
                    <>
                    <Send/>
                    <span className='pl-2 capitalize'>
                                                <Typography>Terminer</Typography>
                                            </span>
                    </>
                )}

                                        </Button>
                                    </Grid>

                                </Grid>

                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>

    )
}
`
return contenuFichier
}

module.exports = getContenuFichierFormulaireImage