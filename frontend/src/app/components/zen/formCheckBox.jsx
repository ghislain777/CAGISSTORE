import React, {useState} from 'react'
import FormControl from '@material-ui/core/FormControl'
import { Controller } from 'react-hook-form'
import Checkbox from '@material-ui/core/Checkbox'
import { FormControlLabel } from '@material-ui/core'

export default function FormCheckBox(props) {
    const { nom, coche, control, changement, label } = props

   const [estcoche, setEstcoche] = useState(coche)



    return (
        <FormControlLabel
            control={
                <Controller
                    name={nom}
                    control={control}
                    render={(props) => (
                        <Checkbox
                            {...props}
                            checked={estcoche}
                            onChange={(e) => {
                              props.onChange(e.target.checked)
                              
                              setEstcoche(!estcoche)
                              changement(!estcoche)
                            }
                            }
                        />
                    )}
                />
            }
            label={label == null? nom : label}
        />
    )
}
