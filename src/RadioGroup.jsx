import React, { Component } from "react"

import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import RadioGroup from "@material-ui/core/RadioGroup"

export default function ReduxFormMaterialUIRadioGroup({
    input,
    meta: { touched, error, warning },
    defaultValue,
    children,
    helperText,
    ...rest
}) {
    return (
        <FormControl error={touched && !!error}>
            <RadioGroup {...input} {...rest}>
                {children}
            </RadioGroup>
            <FormHelperText>{touched && (error || warning) ? error || warning : helperText}</FormHelperText>
        </FormControl>
    )
}
