import { render, unmountComponentAtNode } from 'react-dom';

import React from "react"
import ReduxFormMaterialUITextField from "../src/TextField"
import { act } from 'react-dom/test-utils';
import noop from "lodash.noop"

// import renderer from "react-test-renderer"

describe("TextField", () => {
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

    test ('renders a TextField', () => {
        act(() => {
            render(<ReduxFormMaterialUITextField input={{ onChange: noop, name: "myText", value: "Foo" }} meta={{}} helperText='FooHelper' />, container);
        })
        let element = container.querySelector('input[name="myText"]');
        expect(element).toBeDefined();
        expect(element.getAttribute('value')).toEqual('Foo');
        expect(container.querySelector('p').textContent).toEqual('FooHelper');
    })

    test('renders a TextField with no error', () => {
        act(() => {
            render(<ReduxFormMaterialUITextField input={{ onChange: noop, name: "myText", value: "Foo" }} meta={{error: 'FooError'}} />, container);
        })
        let element = container.querySelector('p');
        expect(element).toBeNull();
    })

    test('renders a TextField with an error', () => {
        act(() => {
            render(<ReduxFormMaterialUITextField input={{ onChange: noop, name: "myText", value: "Foo" }} meta={{error: 'FooError', touched: true}} />, container);
        })
        let element = container.querySelector('p');
        expect(element.textContent).toEqual('FooError');
    })

    test('renders a TextField with no warning', () => {
        act(() => {
            render(<ReduxFormMaterialUITextField input={{ onChange: noop, name: "myText", value: "Foo" }} meta={{warning: 'FooWarn'}} />, container);
        })
        let element = container.querySelector('p');
        expect(element).toBeNull();
    })

    test('renders a TextField with an warning', () => {
        act(() => {
            render(<ReduxFormMaterialUITextField input={{ onChange: noop, name: "myText", value: "Foo" }} meta={{warning: 'FooWarn', touched: true}} />, container);
        })
        let element = container.querySelector('p');
        expect(element.textContent).toEqual('FooWarn');
    })

    test('renders a TextField without defaultValue', () => {
        act(() => {
            render(<ReduxFormMaterialUITextField input={{ onChange: noop, name: "myText", value: "Foo" }} meta={{warning: 'FooWarn', touched: true}} defaultValue={5} />, container);
        })
        let element = container.querySelector('input[name="myText"]');
        expect(element.getAttribute('value')).toEqual('Foo');
    })
})
