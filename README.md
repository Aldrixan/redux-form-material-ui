---
# redux-form-material-ui
---
[![NPM Version](https://img.shields.io/npm/v/redux-form-material-ui.svg?style=flat-square)](https://www.npmjs.com/package/redux-form-material-ui)
[![NPM Downloads](https://img.shields.io/npm/dm/redux-form-material-ui.svg?style=flat-square)](https://www.npmjs.com/package/redux-form-material-ui)
[![Build Status](https://img.shields.io/travis/Aldrixan/redux-form-material-ui/master.svg?style=flat-square)](https://travis-ci.org/Aldrixan/redux-form-material-ui)
[![CDNJS version](https://img.shields.io/cdnjs/v/redux-form-material-ui.svg)](https://cdnjs.com/libraries/redux-form-material-ui)

### For [`material-ui`](https://github.com/callemall/material-ui) 1.0 - 3.0 support see [5.0](https://github.com/Aldrixan/redux-form-material-ui/tree/5.0) Documentation.

[`redux-form-material-ui`](https://github.com/Aldrixan/redux-form-material-ui) is a set of
wrappers to facilitate the use of
[`material-uibeta`](https://github.com/callemall/material-ui) components with
[`redux-form`](https://github.com/erikras/redux-form).

Latest version is supported only for material-ui 0.x.x.

---

## [Live Demo](http://erikras.github.io/redux-form-material-ui/) :eyes:

## Installation

Using [npm](https://www.npmjs.org/):

```bash
  $ npm install --save redux-form-material-ui@next
```

Using [yarn](https://yarnpkg.com):

```bash
  $ yarn add redux-form-material-ui@next
```

## Available Components

* [Checkbox](https://material-ui.com/api/checkbox/)
* [RadioGroup](https://material-ui.com/api/radio-group/)
* [Select](https://material-ui.com/api/select/)
* [TextField](https://material-ui.com/api/text-field/)
* [Switch](https://material-ui.com/api/switch/)

## Usage

Rather than import your component class from `material-ui`, import it from `redux-form-material-ui`
and then pass the component class directly to the `component` prop of `Field`.

```js
import { reduxForm, Field } from 'redux-form'
import MenuItem from '@material-ui/core/MenuItem'
import Radio from '@material-ui/core/RadioButton'
import {
  Checkbox,
  RadioGroup,
  Select,
  TextField,
  Switch,
  FormControlLabel,
} from 'redux-form-material-ui'

class MyForm extends Component {
  render() {
    return (
      <form>
        <Field name="username" component={TextField} placeholder="Street"/>

        <Field name="plan" component={Select} placeholder="Select a plan">
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="yearly">Yearly</MenuItem>
          <MenuItem value="lifetime">Lifetime</MenuItem>
        </Field>

        <FormControlLabel control={<Field name="agreeToTerms" component={Checkbox} /> } label="Agree to terms?" />

      <FormControlLabel control={<Field name="receiveEmails" component={Switch} /> } label="Please spam me!" />

        <Field name="bestFramework" component={RadioGroup}>
          <Radio value="react" label="React"/>
          <Radio value="angular" label="Angular"/>
          <Radio value="ember" label="Ember"/>
        </Field>
      </form>
    )
  }
}

// Decorate with redux-form
MyForm = reduxForm({
  form: 'myForm'
})(MyForm)

export default MyForm
```

## No Default Values

Because of the strict "controlled component" nature of `redux-form`,
some of the Material UI functionality related to defaulting of values has been disabled
e.g. `defaultValue`, `defaultDate`, `defaultTime`, `defaultToggled`, `defaultChecked`, etc.
If you need a field to be initialized to a certain state, you should use the `initialValues`
API of `redux-form`.