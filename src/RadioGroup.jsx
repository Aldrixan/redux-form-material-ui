import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React, { Component } from 'react'

export default function ReduxFormMaterialUIRadioGroup ({ input: { value, onChange, ...inputProps}, meta, onChange: onChangeFromField, ...props }) {
    const displayName = `ReduxFormMaterialUI${props.name}`
    return (
        <FormControlLabel
            control={
                <RadioGroup
                value
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
    );
}