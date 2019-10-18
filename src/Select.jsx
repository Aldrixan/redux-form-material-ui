import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';
import Select from '@material-ui/core/Select';
import {getHelperText} from './utils';

export default function ReduxFormMaterialUISelect({
    input: { name, ...input },
    meta: { touched, error, warning },
    defaultValue,
    helperText,
    children,
    className,
    ...props
}) {
    /*
        On form control:
        flex-direction: row
        align-items: flex-start;

        On label:
        position: relative;
        padding-right: theme-spacing

        On InputBase:
        flex-grow: 1
    */
    return (
        <FormControl error={touched && !!error} className={className}>
            <InputLabel htmlFor={name}>{props.label}</InputLabel>
            <Select {...input} {...props}>
                {children}
            </Select>
            {getHelperText(touched, error, warning, helperText)}
        </FormControl>
    );
}
