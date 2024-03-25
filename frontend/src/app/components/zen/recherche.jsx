import { Card, Grid, TextField, Button, CircularProgress } from '@material-ui/core'
import React, { useState } from 'react'

 export default function  Recherche( props) {

const {handleClickSurRechercher, reinitialiser, query, label="Téléphone du technicien"} = props
 const [state, setState] = useState("")

 const handleChange = (event) => {
    setState(
        event.target.value
        )
}

const reset = () => {
    setState("")
    reinitialiser()
  }

    return <div className="mb-sm-30">
        <Card className="mb-sm-30">
            <form>
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <Grid container spacing={10} direction="row">
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={5} direction="row">
                            <Grid item sm={1}>
                            </Grid>

                            <Grid item sm={3}>

                                <TextField
                                    id="telephone"
                                    label={label}
                                    value={state}
                                    onChange={handleChange}
                                    variant="outlined" />

                            </Grid>
                            <Grid item sm={3}>
                                <Button
                                    className="mb-4"
                                    variant="contained"
                                    color="primary"
                                    onClick={()=> handleClickSurRechercher(state)}
                                    disabled = {query.isFetching}
                                >
                                    { query.isFetching? <CircularProgress/> : "Rechercher"}
                                </Button>

                            </Grid>
                            <Grid item sm={3}>
                                <Button
                                    className="mb-4"
                                    variant="contained"
                                    color="warning"
                                    onClick={reset}
                                >
                                     { query.isFetching? <CircularProgress/> : "Réinitialiser"}
                                </Button>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item></Grid>
                </Grid>
            </form>
        </Card>
    </div>
}

