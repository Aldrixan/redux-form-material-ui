import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';
import Select from '@material-ui/core/Select';

export default function ReduxFormMaterialUISelect({
    input: { name, ...input },
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
            {(touched && (error || warning)) || helperText ? (
                <FormHelperText>
                    {touched && (error || warning)
                        ? error || warning
                        : helperText}
                </FormHelperText>
            ) : null}
        </FormControl>
    );
}
