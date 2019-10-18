import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"

import DateFnsUtils from "@date-io/date-fns"
import React from "react"

export default function ReduxFormMaterialUIDatePicker({
    label,
    input: { onChange, ...inputProps },
    meta: { touched, invalid, error, warning },
    defaultValue,
    helperText,
    ...custom
}) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                label={label}
                placeholder={label}
                error={touched && invalid}
                helperText={(touched && (error || warning)) || helperText}
                onChange={(e, val) => onChange(val)}
                {...inputProps}
                {...custom}
            />
        </MuiPickersUtilsProvider>
    )
}
