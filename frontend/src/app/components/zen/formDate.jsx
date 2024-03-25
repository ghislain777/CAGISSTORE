import React, { Fragment, useState } from 'react'
import { FormControl } from '@material-ui/core'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import frLocale from "date-fns/locale/fr";
import { useForm, Controller } from 'react-hook-form'



export default function FormDate(props) {
    const { nom, label, control, error, valeur, id, handledatechange } = props
    const [selectedDate, setSelectedDate] = useState(valeur)

    const handleChangeDate= (value) => {

        setSelectedDate(value)
        handledatechange(value)
    }

    return (
        <>
            <FormControl fullWidth>
                <Controller
                    name={nom}
                    as={
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                        <DatePicker
                            id={nom}
                         //   helperText={error ? error.message : null}
                            label={label}
                          //  error={error}
                          //  {...props}
                          format="dd/MM/yyyy"
                          minDate = {new Date()}
                          ampm={false}
                          //  inputVariant="outlined"
                            value={selectedDate}
                            onChange={(value) => handleChangeDate(value)}
                        />
                        </MuiPickersUtilsProvider>
                    }
                    control={control}
                  //  defaultValue={valeur}
                    rules={{
                      //  required: 'Required',
                    }}
                    {...props}
                />
            </FormControl>
        </>
    )
}
