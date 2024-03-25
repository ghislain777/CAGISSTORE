import React, {useState} from 'react'

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { FormControl, InputLabel } from '@material-ui/core';



export default function FormAutocompleteQuartier(props) {

    const {id,  queryQuartiers, onChange, Quartier} = props    
    const getQuartier = (adresse) => {

const lequartier = queryQuartiers.data["rows"].find((option) => `${option?.Commune.nom?? ""} / ${option.nom?? ""}` === adresse)
return lequartier?.id?? null
    }
    
    const handleChange = (event, adresse) => {
        //console.log(v)
       // setValeur(event.target.value)
       const retour = {
        target:{}
       }
       retour.target.value = getQuartier(adresse)
        onChange(retour)
    }

  return (
    <FormControl fullWidth>
          <Autocomplete
          defaultValue={Quartier == null? '' : `${Quartier?.Commune.nom?? ""} / ${Quartier?.nom?? ""}`}
            id={id}
           
            onChange={handleChange}
            // calling the freeSolo prop inside the Autocomplete component
            freeSolo
            options={queryQuartiers.data["rows"].map((option) => `${option?.Commune.nom?? ""} / ${option.nom?? ""}`)}
            //renderInput={(params) => <TextField {...params} label={label} />}
            renderInput={(params) => <TextField {...params} label={'Choisir le quartier'} />}
          />
    </FormControl>
  );
}