import FormHelperText from '@material-ui/core/FormHelperText';
import React from 'react';

export const getHelperText = (touched, error, warning, helperText) =>
    (touched && (error || warning)) || helperText ? (
        <FormHelperText>{touched && (error || warning) ? error || warning : helperText}</FormHelperText>
    ) : null
