import React from "react"
import TextField from "@material-ui/core/TextField"

export default function ReduxFormMaterialUITextField({
    label,
    input,
    meta: { touched, invalid, error },
    defaultValue,
    ...custom
}) {
    return (
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )
}
