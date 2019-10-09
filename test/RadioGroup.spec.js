import { render, unmountComponentAtNode } from 'react-dom';

import React from 'react';
import ReduxFormMaterialUIRadioGroup from '../src/RadioGroup';
import { act } from 'react-dom/test-utils';
import noop from 'lodash.noop';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import renderer from 'react-test-renderer';

describe('RadioGroup', () => {
    let container = null;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    test('renders an RadioGroup', () => {
        act(() => {
            render(
                <ReduxFormMaterialUIRadioGroup
                    input={{ onChange: noop, name: 'myRadio' }}
                    meta={{}}
                >
                    <FormControlLabel
                        value="pickup"
                        control={<Radio />}
                        label="Pickup"
                    />
                    <FormControlLabel
                        value="delivery"
                        control={<Radio />}
                        label="Delivery"
                    />
                </ReduxFormMaterialUIRadioGroup>,
                container
            );
        });
        let element = container.querySelectorAll('input[name="myRadio"]');
        expect(element.length).toBe(2);
        expect(element[0].checked).toBeFalsy();
        expect(element[1].checked).toBeFalsy();
    });

    test('renders a RadioGroup with value', () => {
        act(() => {
            render(
                <ReduxFormMaterialUIRadioGroup
                    input={{ onChange: noop, name: 'myRadio', value: 'pickup' }}
                    meta={{}}
                >
                    <FormControlLabel
                        value="pickup"
                        control={<Radio />}
                        label="Pickup"
                    />
                    <FormControlLabel
                        value="delivery"
                        control={<Radio />}
                        label="Delivery"
                    />
                </ReduxFormMaterialUIRadioGroup>,
                container
            );
        });
        let element = container.querySelectorAll('input[name="myRadio"]');
        expect(element.length).toBe(2);
        expect(element[0].checked).toBeTruthy();
        expect(element[1].checked).toBeFalsy();
    });

    test('renders a RadioGroup with helper text when not touched', () => {
        act(() => {
            render(
                <ReduxFormMaterialUIRadioGroup
                    input={{ onChange: noop, name: 'myRadio', value: 'Foo' }}
                    meta={{}}
                    helperText="FooHelper"
                >
                    <FormControlLabel
                        value="pickup"
                        control={<Radio />}
                        label="Pickup"
                    />
                    <FormControlLabel
                        value="delivery"
                        control={<Radio />}
                        label="Delivery"
                    />
                </ReduxFormMaterialUIRadioGroup>,
                container
            );
        });
        let element = container.querySelector('p');
        expect(element.textContent).toEqual('FooHelper');
    });

    test('renders a RadioGroup with error when touched', () => {
        act(() => {
            render(
                <ReduxFormMaterialUIRadioGroup
                    input={{ onChange: noop, name: 'myRadio', value: 'Foo' }}
                    meta={{ error: 'FooError', touched: true }}
                    helperText="FooHelper"
                >
                    <FormControlLabel
                        value="pickup"
                        control={<Radio />}
                        label="Pickup"
                    />
                    <FormControlLabel
                        value="delivery"
                        control={<Radio />}
                        label="Delivery"
                    />
                </ReduxFormMaterialUIRadioGroup>,
                container
            );
        });
        let element = container.querySelector('p');
        expect(element.textContent).toEqual('FooError');
    });

    test('renders a RadioGroup with no error when not touched', () => {
        act(() => {
            render(
                <ReduxFormMaterialUIRadioGroup
                    input={{ onChange: noop, name: 'myRadio', value: 'Foo' }}
                    meta={{ error: 'FooError' }}
                    helperText="FooHelper"
                >
                    <FormControlLabel
                        value="pickup"
                        control={<Radio />}
                        label="Pickup"
                    />
                    <FormControlLabel
                        value="delivery"
                        control={<Radio />}
                        label="Delivery"
                    />
                </ReduxFormMaterialUIRadioGroup>,
                container
            );
        });
        let element = container.querySelector('p');
        expect(element.textContent).toEqual('FooHelper');
    });

    test('renders a RadioGroup with no warning when not touched', () => {
        act(() => {
            render(
                <ReduxFormMaterialUIRadioGroup
                    input={{ onChange: noop, name: 'myRadio', value: 'Foo' }}
                    meta={{ warning: 'FooWarning' }}
                    helperText="FooHelper"
                >
                    <FormControlLabel
                        value="pickup"
                        control={<Radio />}
                        label="Pickup"
                    />
                    <FormControlLabel
                        value="delivery"
                        control={<Radio />}
                        label="Delivery"
                    />
                </ReduxFormMaterialUIRadioGroup>,
                container
            );
        });
        let element = container.querySelector('p');
        expect(element.textContent).toEqual('FooHelper');
    });

    test('renders a RadioGroup with a warning when touched', () => {
        act(() => {
            render(
                <ReduxFormMaterialUIRadioGroup
                    input={{ onChange: noop, name: 'myRadio', value: 'Foo' }}
                    meta={{ warning: 'FooWarning', touched: true }}
                    helperText="FooHelper"
                >
                    <FormControlLabel
                        value="pickup"
                        control={<Radio />}
                        label="Pickup"
                    />
                    <FormControlLabel
                        value="delivery"
                        control={<Radio />}
                        label="Delivery"
                    />
                </ReduxFormMaterialUIRadioGroup>,
                container
            );
        });
        let element = container.querySelector('p');
        expect(element.textContent).toEqual('FooWarning');
    });

    test('should ignore defaultValue', () => {
        act(() => {
            render(
                <ReduxFormMaterialUIRadioGroup
                    input={{ onChange: noop, name: 'myRadio', value: 'Foo' }}
                    defaultValue="pickup"
                    meta={{}}
                >
                    <FormControlLabel
                        value="pickup"
                        control={<Radio />}
                        label="Pickup"
                    />
                    <FormControlLabel
                        value="delivery"
                        control={<Radio />}
                        label="Delivery"
                    />
                </ReduxFormMaterialUIRadioGroup>,
                container
            );
        });
        let element = container.querySelectorAll('input[name="myRadio"]');
        expect(element.length).toBe(2);
        expect(element[0].checked).toBeFalsy();
        expect(element[1].checked).toBeFalsy();
    });
});
