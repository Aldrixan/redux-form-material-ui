import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import React from 'react';
import {getHelperText} from './utils';

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
            {getHelperText(touched, error, warning, helperText)}
        </FormControl>
    );
}
