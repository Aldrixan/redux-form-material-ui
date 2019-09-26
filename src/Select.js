import React, { Component } from "react"

import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import InputLabel from "@material-ui/core/InputLabel"
import Select from "@material-ui/core/Select"

export default function ReduxFormMaterialUISelect({
    input: { value, onChange, onBlur, name, ...inputProps },
    meta: { touched, error, warning },
    onChange: onChangeFromField,
    defaultValue,
    children,
    ...props
}) {
    return (
        <FormControl error={touched && !!error}>
            <InputLabel htmlFor={name}>{props.label}</InputLabel>
            <Select
                {...inputProps}
                {...props}
                value={value}
                onChange={event => {
                    onChange(event.target.value)
                    if (onChangeFromField) {
                        onChangeFromField(event.target.value)
                    }
                }}
                onBlur={() => onBlur(value)}>
                {children}
            </Select>
            <FormHelperText>{touched && (error || warning) ? error || warning : props.helperText}</FormHelperText>
        </FormControl>
    )
}
