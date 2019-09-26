import React, { Component } from "react"

import FormControlLabel from "@material-ui/core/FormControlLabel"
import RadioGroup from "@material-ui/core/RadioGroup"

export default function ReduxFormMaterialUIRadioGroup({
    input: { value, onChange, ...inputProps },
    meta,
    onChange: onChangeFromField,
    ...props
}) {
    return (
        <FormControlLabel
            control={
                <RadioGroup
                    value={value}
                    onChange={(event, value) => {
                        onChange(value)
                        if (onChangeFromField) {
                            onCheck(value)
                        }
                    }}
                />
            }
            {...props}
            {...inputProps}
        />
    )
}
