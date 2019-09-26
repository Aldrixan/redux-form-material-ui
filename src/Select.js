import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl';
import React, { Component } from 'react'

export default function ReduxFormMaterialUISelect( { input: { value, onChange, onBlur, name, ...inputProps }, meta, onChange: onChangeFromField, defaultValue, children, ...props } ) {
  return (
    <FormControl error={meta.touched && meta.error}>
      <InputLabel htmlFor={name}>{props.label}</InputLabel>
      <Select
        {...inputProps}
        {...props}
        value={value}
        onChange={event => {
          onChange( event.target.value );
          if ( onChangeFromField ) {
            onChangeFromField( event.target.value );
          }
        }}
        onBlur={() => onBlur( value )}
      >
        {children}
      </Select>
    </FormControl>
  );
}