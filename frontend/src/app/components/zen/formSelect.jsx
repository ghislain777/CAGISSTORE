import React, {useState} from "react";
import { useFormContext, Controller } from "react-hook-form";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import  FormHelperText  from '@material-ui/core/FormHelperText';

const MuiSelect = (props) => {
  const { label, nom, table, options, valeur, error } = props;

  return (
    <FormControl fullWidth={true} error={error? "error" : ""}>
      <InputLabel htmlFor={nom}>{label}</InputLabel>
      <Select
       id={nom} {...props} 
       
         >
     
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.nom}
            {(table === "quartier") && (` (${item?.Commune?.Ville?.nom}/${item?.Commune?.nom})`)}
            {(table === "offre") && (item.prospect.nom+"("+item.prospect.quartier.nom+")" )}
            
          </MenuItem>
        ))}

      </Select>
        <FormHelperText>{error ? error.message : null}</FormHelperText>
    </FormControl>
  );
};

function FormSelect(props) {
 // const { control } = useFormContext();
  const { nom, label, control, table, valeur } = props;
// console.log('/api/'+table+'s/'+valeur?.id?? "1")
  return (
    <>
      <Controller
      name={nom}
        as={MuiSelect}
        control={control}
        nom={nom}
        label={label}
        valeur={valeur}
       // table={table}
      //  helperText={error ? error.message : null}
      
       // defaultValue = {'/api/'+table+'s/'+valeur.id}
        //value={'/api/'+table+'s/'+valeur.id}
     //   value={'/api/roles/2'}
      //  error={error}
        rules={{
          required:'Required'

        }}
        {...props}
      />
    </>
  );
}

export default FormSelect;
