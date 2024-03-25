import React, {useState} from "react";
import { useFormContext, Controller } from "react-hook-form";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import  FormHelperText  from '@material-ui/core/FormHelperText';

const MuiSelect = (props) => {
  const { label, nom, liste, valeur, error } = props;

  return (
    <FormControl fullWidth={true} error={error? "error" : ""}>
      <InputLabel htmlFor={nom}>{label}</InputLabel>
      <Select
       id={nom} {...props} 
         >
           
        {liste.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.label}
          </MenuItem>
        ))}

      </Select>
        <FormHelperText>{error ? error.message : null}</FormHelperText>
    </FormControl>
  );
};

function FormSimpleSelect(props) {
  const { nom, label, control, liste, valeur } = props;
  return (
    <>
      <Controller
      name={nom}
        as={MuiSelect}
        control={control}
        nom={nom}
        label={label}
        valeur={valeur}
        defaultValue={valeur}
        rules={{
          required:'Required'
        }}
        {...props}
      />
    </>
  );
}

export default FormSimpleSelect;
