import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';
import Select from '@material-ui/core/Select';
import {getHelperText} from './utils';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    label: {
        position: 'relative',
        paddingRight: theme.spacing
    },
    base: {
        flexGrow: 1
    }
}))

export default function ReduxFormMaterialUISelect({
    input: { name, ...input },
    meta: { touched, error, warning },
    defaultValue,
    helperText,
    children,
    className,
    labelPlacement,
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
   const classes = useStyles();
    return (
        <FormControl error={touched && !!error} className={cx(className, labelPlacement === 'left' ? classes.root : ''}>
            <InputLabel htmlFor={name} className={labelPlacement === 'left' ? classes.label : ''}>{props.label}</InputLabel>
            <Select {...input} {...props} className={labelPlacement === 'left' ? classes.base : ''}>
                {children}
            </Select>
            {getHelperText(touched, error, warning, helperText)}
        </FormControl>
    );
}
