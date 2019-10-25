import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"

import MomentUtils from "@date-io/moment"
import React from "react"

export default function ReduxFormMaterialUIDatePicker({
    label,
    input: { onChange, value, ...inputProps },
    meta: { touched, invalid, error, warning },
    defaultValue,
    dateFormat,
    helperText,
    ...custom
}) {
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardDatePicker
                label={label}
                placeholder={label}
                error={touched && invalid}
                helperText={(touched && (error || warning)) || helperText}
                onChange={onChange}
                format={dateFormat}
                value={value ? value : ''}
                InputLabelProps={{
                    shrink: !!value
                }}
                {...inputProps}
                {...custom}
            />
        </MuiPickersUtilsProvider>
    )
}
