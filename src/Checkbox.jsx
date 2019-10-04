import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import React from "react"

export default function ReduxFormMaterialUICheckbox({
    input: { value, onChange, ...inputProps },
    defaultChecked,
    ...props
}) {
    return (
        <FormControlLabel
            control={<Checkbox checked={value ? true : false} onCheck={onChange} />}
            {...props}
            {...inputProps}
        />
    )
}
