---
# redux-form-material-ui-adapter
---

[![NPM Version](https://img.shields.io/npm/v/redux-form-material-ui-adapter.svg?style=flat-square)](https://www.npmjs.com/package/redux-form-material-ui-adapter)  
[![NPM Downloads](https://img.shields.io/npm/dm/redux-form-material-ui-adapter.svg?style=flat-square)](https://www.npmjs.com/package/redux-form-material-ui-adapter)  
[![Coverage Status](https://coveralls.io/repos/github/Aldrixan/redux-form-material-ui-adapter/badge.svg?branch=master)](https://coveralls.io/github/Aldrixan/redux-form-material-ui-adapter?branch=master)  
[![Build Status](https://travis-ci.com/Aldrixan/redux-form-material-ui-adapter.svg?branch=master)](https://travis-ci.com/Aldrixan/redux-form-material-ui-adapter)  
[`redux-form-material-ui-adapter`](https://github.com/Aldrixan/redux-form-material-ui) is a set of wrappers to facilitate the use of [`material-ui`](https://github.com/callemall/material-ui) components with [`redux-form`](https://github.com/erikras/redux-form). This library was forked from the original [`redux-form-material-ui`](https://github.com/erikras/redux-form-material-ui) and updated to use the latest versions of all dependencies

**Latest version supports material-ui up to version 4.x.x**

---

## [Live Demo](http://erikras.github.io/redux-form-material-ui/) :eyes:

## Installation

Using [npm](https://www.npmjs.org/):

```bash
  $ npm install --save redux-form-material-ui-adapter @material-ui/core
```

Using [yarn](https://yarnpkg.com):

```bash
  $ yarn add redux-form-material-ui-adapter @material-ui/core
```

If you will be using the DatePicker component, you will also need to install `@material-ui/pickers`

Using [npm](https://www.npmjs.org/):

```bash
  $ npm install --save @material-ui/pickers
```

Using [yarn](https://yarnpkg.com):

```bash
  $ yarn add @material-ui/pickers
```

## Available Components

-   [Checkbox](https://material-ui.com/api/checkbox/)
-   [DatePicker](https://material-ui-pickers.dev/api/KeyboardDatePicker)
-   [RadioGroup](https://material-ui.com/api/radio-group/)
-   [Select](https://material-ui.com/api/select/)
-   [Slider](https://material-ui.com/api/slider)
-   [Switch](https://material-ui.com/api/switch/)
-   [TextField](https://material-ui.com/api/text-field/)

## Usage

Rather than import your component class from `material-ui`, import it from `redux-form-material-ui-adapter`
and then pass the component class directly to the `component` prop of `Field`.

```js
import { reduxForm, Field } from 'redux-form';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/RadioButton';
import {
    Checkbox,
    RadioGroup,
    Select,
    TextField,
    Switch,
    FormControlLabel
} from 'redux-form-material-ui-adapter';

class MyForm extends Component {
    render() {
        return (
            <form>
                <Field
                    name="username"
                    component={TextField}
                    placeholder="Street"
                />

                <Field
                    name="plan"
                    component={Select}
                    placeholder="Select a plan"
                >
                    <MenuItem value="monthly">Monthly</MenuItem>
                    <MenuItem value="yearly">Yearly</MenuItem>
                    <MenuItem value="lifetime">Lifetime</MenuItem>
                </Field>

                <FormControlLabel
                    control={<Field name="agreeToTerms" component={Checkbox} />}
                    label="Agree to terms?"
                />

                <FormControlLabel
                    control={<Field name="receiveEmails" component={Switch} />}
                    label="Please spam me!"
                />

                <Field name="bestFramework" component={RadioGroup}>
                    <Radio value="react" label="React" />
                    <Radio value="angular" label="Angular" />
                    <Radio value="ember" label="Ember" />
                </Field>
            </form>
        );
    }
}

// Decorate with redux-form
MyForm = reduxForm({
    form: 'myForm'
})(MyForm);

export default MyForm;
```

## No Default Values

Because of the strict "controlled component" nature of `redux-form`, some of the Material UI functionality related to defaulting of values has been disabled e.g. `defaultValue`, `defaultDate`, `defaultTime`, `defaultToggled`, `defaultChecked`, etc. If you need a field to be initialized to a certain state, you should use the `initialValues` API of `redux-form`.

## Support

Reach out to me at one of the following places:  
E-Mail: aldrixan86@gmail.com  
Github Issues: [https://github.com/Aldrixan/redux-form-material-ui-adapter/issues](https://github.com/Aldrixan/redux-form-material-ui-adapter/issues)

## Contributing

[(Back to top)](#table-of-contents)  
Your contributions are always welcome! Please have a look at the [contribution guidelines](CONTRIBUTING.md) first. :tada:  
For major changes, please open an issue first to discuss what you would like to change.  
Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)  
By submitting a pull request for this project, you agree to license your contribution under the MIT license to this project.
