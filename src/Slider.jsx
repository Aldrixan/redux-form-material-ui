import React, { Fragment } from "react"

import Slider from "@material-ui/core/Slider"
import Typography from "@material-ui/core/Typography"
import { getHelperText } from "./utils"

export default function ReduxFormMaterialUISlider({
    input: { onChange, ...inputProps },
    meta: { touched, error, warning, ...meta},
    label,
    defaultValue,
    helperText,
    ...props
}) {
    return (
        <Fragment>
            <Typography id="slider" gutterBottom>
                {label}
            </Typography>
            <Slider
                aria-labelledby="slider"
                {...inputProps}
                {...props}
                onChange={ (e, val) => onChange(val)}
            />
            {getHelperText(touched, error, warning, helperText)}
        </Fragment>
    )
}
