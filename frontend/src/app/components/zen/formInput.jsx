import React from 'react'
import { FormControl, TextField } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'

const FormInput = (props) => {
    const { id, nom, label, valeur, control, error } = props
    return (
        <>
            <FormControl fullWidth>
                <Controller
                    name={nom}
                    as={
                        <TextField
                        {...props}
                       // multiline
                       // rowsMax={4}
                            id={id}
                            type="text"
                            
                            //labelWidth={70}
                            helperText={error ? error.message : null}
                            label={label}
                            error={error? true : false}
                           
                        />
                    }
                    control={control}
                    defaultValue={valeur}
                    rules={{
                        required: 'Required',
                    }}
                />
            </FormControl>
        </>
    )
}
export default FormInput
