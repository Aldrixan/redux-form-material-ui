import { render, unmountComponentAtNode } from 'react-dom';

import React from "react"
import ReduxFormMaterialUIDatePicker from "../src/DatePicker"
import { act } from 'react-dom/test-utils';
import noop from "lodash.noop"

// TODO: add tests for additional picker options (format, helpertext, invalid date, mask, etc)
describe("DatePicker", () => {
    let container = null;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    })

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    test ('renders a DatePicker', () => {
        act(() => {
            render(<ReduxFormMaterialUIDatePicker input={{ onChange: noop, name: "myText", value: "2019-10-18" }} meta={{}} helperText='FooHelper' />, container);
        })
        let element = container.querySelector('input[name="myText"]');
        expect(element).toBeDefined();
        expect(element.getAttribute('value')).toEqual('October 17th');
        expect(container.querySelector('p').textContent).toEqual('FooHelper');
    })

    test('renders a DatePicker with no error', () => {
        act(() => {
            render(<ReduxFormMaterialUIDatePicker input={{ onChange: noop, name: "myText", value: "2019-10-18" }} meta={{error: 'FooError'}} />, container);
        })
        let element = container.querySelector('p');
        expect(element).toBeNull();
    })

    test('renders a DatePicker with an error', () => {
        act(() => {
            render(<ReduxFormMaterialUIDatePicker input={{ onChange: noop, name: "myText", value: "2019-10-18" }} meta={{error: 'FooError', touched: true}} />, container);
        })
        let element = container.querySelector('p');
        expect(element.textContent).toEqual('FooError');
    })

    test('renders a DatePicker with no warning', () => {
        act(() => {
            render(<ReduxFormMaterialUIDatePicker input={{ onChange: noop, name: "myText", value: "2019-10-18" }} meta={{warning: 'FooWarn'}} />, container);
        })
        let element = container.querySelector('p');
        expect(element).toBeNull();
    })

    test('renders a DatePicker with an warning', () => {
        act(() => {
            render(<ReduxFormMaterialUIDatePicker input={{ onChange: noop, name: "myText", value: "2019-10-18" }} meta={{warning: 'FooWarn', touched: true}} />, container);
        })
        let element = container.querySelector('p');
        expect(element.textContent).toEqual('FooWarn');
    })

    test('renders a DatePicker without defaultValue', () => {
        act(() => {
            render(<ReduxFormMaterialUIDatePicker input={{ onChange: noop, name: "myText", value: "2019-10-18" }} meta={{warning: 'FooWarn', touched: true}} defaultValue='2019-09-18' />, container);
        })
        let element = container.querySelector('input[name="myText"]');
        expect(element.getAttribute('value')).toEqual('October 17th');
    })
})
