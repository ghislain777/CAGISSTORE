import React, { Fragment, useState } from 'react'
import { FormControl } from '@material-ui/core'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import frLocale from "date-fns/locale/fr";




export default function FormDateSimple({ nom, label,  valeur, handledatechange } ) {
    const [selectedDate, setSelectedDate] = useState(valeur)

    const handleChangeDate= (value) => {
        console.log(`*********** ${JSON.stringify(value)}******************`)
        setSelectedDate(value)
        handledatechange(value)
    }

    return (
        <>
         <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
                        <DatePicker
                        fullWidth
                            id={nom}
                         //   helperText={error ? error.message : null}
                            label={label}
                          //  error={error}
                          //  {...props}
                          format="dd/MM/yyyy"
                          maxDate = {new Date()}
                          ampm={false}
                          //  inputVariant="outlined"
                            value={selectedDate}
                            onChange={(value) => handleChangeDate(value)}
                        />
                        </MuiPickersUtilsProvider>
        </>
    )
}
