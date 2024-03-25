import React, {useState} from 'react'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { FormControl, InputLabel } from '@material-ui/core';


// Top 5 Nigerian songs on Apple Music 
const top5Songs = [
  { title: 'Organise'},
  { title: 'Joha'},
  { title: 'Terminator'},
  { title: 'Dull'},
  { title: 'Nzaza'},
];


export default function FormAutocompleteClient(props) {

    const {id,  queryClients, onChange, Client} = props    
    const getClient = (adresse) => {

const leclient = queryClients.data["rows"].find((option) => `${option.nom} ${option.prenom?? ""} ${option.telephone?? ""} [${option.adresse?? ""}]` === adresse)
return leclient?.id?? null
    }
    
    const handleChange = (event, adresse) => {
        //console.log(v)
       // setValeur(event.target.value)
       const retour = {
        target:{}
       }
       retour.target.value = getClient(adresse)
        onChange(retour)
    }

  return (
    <FormControl fullWidth>
          <Autocomplete
            id={id}
            defaultValue={Client == null? '' : `${Client?.nom?? ""} ${Client?.prenom?? ""} ${Client?.telephone?? ""} [${Client?.adresse?? ""}]`}
           
            onChange={handleChange}
            // calling the freeSolo prop inside the Autocomplete component
            freeSolo
            options={queryClients.data["rows"].map((option) => `${option.nom} ${option.prenom?? ""} ${option.telephone?? ""} [${option.adresse?? ""}]`)}
            //renderInput={(params) => <TextField {...params} label={label} />}
            renderInput={(params) => <TextField {...params} label={'Choisir le client'} />}
          />
    </FormControl>
  );
}