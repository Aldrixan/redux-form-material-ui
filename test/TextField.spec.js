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

    it ('renders a TextField', () => {
        act(() => {
            render(<ReduxFormMaterialUITextField input={{ onChange: noop, name: "myText", value: "Foo" }} meta={{}} />, container);
        })
        expect(container.querySelector('input[name="myText"]')).toBeDefined();
    })
    // it("renders a TextField", () => {
    //     const component = renderer.create(
    //         <ReduxFormMaterialUITextField input={{ onChange: noop, name: "myText", value: "Foo" }} meta={{}} />
    //     )
    //     let tree = component.toJSON()
    //     expect(tree).toMatchSnapshot()
    // })

    // it("renders a TextField with no error when not touched", () => {
    //     const component = renderer.create(
    //         <ReduxFormMaterialUITextField
    //             input={{ onChange: noop, name: "myText", value: "Foo" }}
    //             meta={{ error: "FooError" }}
    //         />
    //     )
    //     let tree = component.toJSON()
    //     expect(tree).toMatchSnapshot()
    // })

    // it("renders a TextField with an error", () => {
    //     const component = renderer.create(
    //         <ReduxFormMaterialUITextField
    //             input={{ onChange: noop, name: "myText", value: "Foo" }}
    //             meta={{ error: "FooError", touched: true }}
    //         />
    //     )
    //     let tree = component.toJSON()
    //     expect(tree).toMatchSnapshot()
    // })

    // it("renders a TextField with no warning when not touched", () => {
    //     const component = renderer.create(
    //         <ReduxFormMaterialUITextField
    //             input={{ onChange: noop, name: "myText", value: "Foo" }}
    //             meta={{ error: "FooWarning" }}
    //         />
    //     )
    //     let tree = component.toJSON()
    //     expect(tree).toMatchSnapshot()
    // })

    // it("renders a TextField with an warning", () => {
    //     const component = renderer.create(
    //         <ReduxFormMaterialUITextField
    //             input={{ onChange: noop, name: "myText", value: "Foo" }}
    //             meta={{ error: "FooWarning", touched: true }}
    //         />
    //     )
    //     let tree = component.toJSON()
    //     expect(tree).toMatchSnapshot()
    // })

    // it("should ignore defaultValue", () => {
    //     const component = renderer.create(
    //         <ReduxFormMaterialUITextField
    //             input={{ onChange: noop, name: "myText", value: "Foo" }}
    //             defaultValue="5"
    //             meta={{ error: "FooWarning", touched: true }}
    //         />
    //     )
    //     let tree = component.toJSON()
    //     expect(tree).toMatchSnapshot()
    // })
})
