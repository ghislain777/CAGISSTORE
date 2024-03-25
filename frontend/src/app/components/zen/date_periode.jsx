import React from 'react';
import { Grid, Card, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { getMuiTheme } from 'model/config';
import { MuiThemeProvider } from '@material-ui/core/styles';
import FormDateSimple from './form_date_simple';

const DatePeriode = ({ state, fonctions }) => {
	//const  {totalUtilisateurs, totalCommandes, totalChiffreDaffaire, totalCommandesNouveau} = source


	return (
		<div className="mb-sm-30">
			<Card className="mb-sm-30">
				<form>
					<Grid container spacing={2} direction="column">
						<Grid item>
							<Grid container spacing={10} direction="row" />
						</Grid>
						<Grid item>
							<Grid container spacing={5} direction="row">
								<Grid item sm={1} />
								<Grid item sm={3} p={5}>
									<FormDateSimple
										nom="datedebut"
										label="Date de debut"
										valeur={state.rapport.dateDebut}
										handledatechange={fonctions.handleChangedateDebut}
									/>
								</Grid>
								<Grid item sm={3}>
									<FormDateSimple
										nom="datefin"
										label="Date de fin"
										valeur={state.rapport.dateFin}
										handledatechange={fonctions.handleChangedateFin}
									/>
								</Grid>
								{/* <Grid item sm={3}>
									<Button
										variant="contained"
										color="primary"
										onClick={fonctions.handleClickSurGenererRapport}
									>
										Génerer le rapport
									</Button>
								</Grid> */}
							</Grid>


							
						</Grid>
						<Grid item>
							<Grid container spacing={10} direction="row" />
						</Grid>
					</Grid>
				</form>
			</Card>
		</div>
	);
};

export default DatePeriode;
