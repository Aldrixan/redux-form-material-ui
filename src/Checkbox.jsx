import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { Component } from 'react'

export default function ReduxFormMaterialUICheckbox ({ input: { value, onChange, ...inputProps}, meta, onCheck, ...props }) {
    const displayName = `ReduxFormMaterialUI${props.name}`
    return (
        <FormControlLabel
            control={
                <Checkbox
                checked={value ? true : false}
                onCheck={(event, isInputChecked) => {
                    onChange(isInputChecked)
                    if (onCheck) {
                        onCheck(isInputChecked)
                    }
                }}
                />
            }
            {...props}
            {...inputProps}
        /> 
    );
}