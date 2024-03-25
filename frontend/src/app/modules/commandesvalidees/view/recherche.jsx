import React from "react"
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
import Chargement from "app/components/zen/chargement";
import FormAutocompleteClient from "app/components/zen/formAutocompleteClient";
const Recherche = ({queries, fonctions }) => {

return (
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
                        <Grid item sm={5} p={5}>

                          {queries.queryClients.isLoading ? (
                            <Chargement message='chargement des clients' />
                          ) : (
                            <FormControl fullWidth={true}>
											<FormAutocompleteClient
												id="client"
												onChange={fonctions.handleChangeClient}
												queryClients={queries.queryClients}
											/>
						    </FormControl>
                          )}
                        </Grid>
                        
                        <Grid item sm={3}>

                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container spacing={10} direction="row">
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </div>
) 

}

export default Recherche