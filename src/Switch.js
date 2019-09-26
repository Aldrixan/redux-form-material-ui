import React, { Component } from "react"

import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"

export default function ReduxFormMaterialUISwitch({
    input: { value, onChange, ...inputProps },
    defaultChecked,
    ...props
}) {
    return (
        <FormControlLabel
            control={<Switch checked={value ? true : false} onCheck={onChange} />}
            {...props}
            {...inputProps}
        />
    )
}
