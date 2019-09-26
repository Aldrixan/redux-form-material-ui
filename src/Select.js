import React, { Component } from "react"

import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"

export default function ReduxFormMaterialUISelect({
    input,
    meta: { touched, error, warning },
    defaultValue,
    helperText,
    children,
    ...props
}) {
    return (
        <FormControl error={touched && !!error}>
            <InputLabel htmlFor={name}>{props.label}</InputLabel>
            <Select {...input} {...props}>
                {children}
            </Select>
            <FormHelperText>{touched && (error || warning) ? error || warning : helperText}</FormHelperText>
        </FormControl>
    )
}
