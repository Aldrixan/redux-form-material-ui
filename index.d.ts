// Type definitions for redux-form-material-ui v4.3.0
// Project: https://github.com/erikras/redux-form-material-ui
// Definitions by: Andrew Olson <https://github.com/arolson101>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types='material-ui'/>
/// <reference types='react'/>

declare module 'redux-form-material-ui' {
  export class Checkbox extends React.Component<__MaterialUI.Switches.CheckboxProps, any> {}
  export class RadioGroup extends React.Component<__MaterialUI.Switches.RadioButtonGroupProps, any> {}
  export class SelectField extends React.Component<__MaterialUI.SelectFieldProps, any> {}
  export class TextField extends React.Component<__MaterialUI.TextFieldProps, any> {}
  export class Switch extends React.Component<__MaterialUI.Switches.ToggleProps, any> {}
}
