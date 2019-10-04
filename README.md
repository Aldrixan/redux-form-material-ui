<!-- <h1 align="center">
  <br>
  <a href="https://github.com/ArmynC/ArminC-AutoExec/archive/master.zip"><img src="https://arminc.ga/resources/autoexec/arminc_autoexec.png" alt="ArminC AutoExec"></a>
</h1>

<h4 align="center">A high-quality CS:GO config built for gamers.</h4>

<p align="center">
    <a href="https://github.com/ArmynC/ArminC-AutoExec/commits/master">
    <img src="https://img.shields.io/github/last-commit/ArmynC/ArminC-AutoExec.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub last commit">
    <a href="https://github.com/ArmynC/ArminC-AutoExec/issues">
    <img src="https://img.shields.io/github/issues-raw/ArmynC/ArminC-AutoExec.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub issues">
    <a href="https://github.com/ArmynC/ArminC-AutoExec/pulls">
    <img src="https://img.shields.io/github/issues-pr-raw/ArmynC/ArminC-AutoExec.svg?style=flat-square&logo=github&logoColor=white"
         alt="GitHub pull requests">
    <a href="https://twitter.com/intent/tweet?text=Try this CS:GO AutoExec:&url=https%3A%2F%2Fgithub.com%2FArmynC%2FArminC-AutoExec">
    <img src="https://img.shields.io/twitter/url/https/github.com/ArmynC/ArminC-AutoExec.svg?style=flat-square&logo=twitter"
         alt="GitHub tweet">
</p>

<p align="center">
  <a href="#about">About</a> •
  <a href="#installation">Installation</a> •
  <a href="#updating">Updating</a> •
  <a href="#features">Features</a> •
  <a href="#binds">Binds</a> •
  <a href="#wiki">Wiki</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#author">Author</a> •
  <a href="#support">Support</a> •
  <a href="#donate">Donate</a> •
  <a href="#license">License</a>
</p> -->
---
# redux-form-material-ui
---
[`redux-form-material-ui-adapter`](https://github.com/Aldrixan/redux-form-material-ui) is a set of wrappers to facilitate the use of [`material-ui`](https://github.com/callemall/material-ui) components with [`redux-form`](https://github.com/erikras/redux-form).  This library was forked from the original [`redux-form-material-ui`](https://github.com/erikras/redux-form-material-ui) and updated to use the latest versions of all dependencies

Latest version supports material-ui up to version 4.x.x

---
## [Live Demo](http://erikras.github.io/redux-form-material-ui/) :eyes:
## Installation
Using [npm](https://www.npmjs.org/):
```bash
  $ npm install --save redux-form-material-ui-adapter
```
Using [yarn](https://yarnpkg.com):
```bash
  $ yarn add redux-form-material-ui-adapter
```
## Available Components
* [Checkbox](https://material-ui.com/api/checkbox/)
* [RadioGroup](https://material-ui.com/api/radio-group/)
* [Select](https://material-ui.com/api/select/)
* [TextField](https://material-ui.com/api/text-field/)
* [Switch](https://material-ui.com/api/switch/)
## Usage
Rather than import your component class from `material-ui`, import it from `redux-form-material-ui-adapter`
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
} from 'redux-form-material-ui-adapter'

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
Because of the strict "controlled component" nature of `redux-form`, some of the Material UI functionality related to defaulting of values has been disabled e.g. `defaultValue`, `defaultDate`, `defaultTime`, `defaultToggled`, `defaultChecked`, etc.  If you need a field to be initialized to a certain state, you should use the `initialValues` API of `redux-form`.
## Support
Reach out to me at one of the following places:
E-Mail: aldrixan@gmail.com
## Contributing
[(Back to top)](#table-of-contents)
Your contributions are always welcome! Please have a look at the [contribution guidelines](CONTRIBUTING.md) first. :tada:
For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
By submitting a pull request for this project, you agree to license your contribution under the MIT license to this project.