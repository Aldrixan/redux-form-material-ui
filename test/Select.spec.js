import { render, unmountComponentAtNode } from "react-dom"

import React from "react"
import ReduxFormMaterialUISelect from "../src/Select"
import { act } from "react-dom/test-utils"
import noop from "lodash.noop"

describe("Select", () => {
    let container = null
    beforeEach(() => {
        container = document.createElement("div")
        document.body.appendChild(container)
    })

    afterEach(() => {
        unmountComponentAtNode(container)
        container.remove()
        container = null
    })

    test("renders a Select", () => {
        act(() => {
            render(
                <ReduxFormMaterialUISelect
                    input={{ onChange: noop, name: "mySelect", value: "Foo" }}
                    meta={{}}
                    helperText="FooHelper"
                />,
                container
            )
        })
        let element = container.querySelector('input[type="hidden"]')
        expect(element).toBeDefined()
        expect(element.getAttribute("value")).toEqual("Foo")
        expect(container.querySelector('div[aria-haspopup="listbox"]')).toBeDefined();
        expect(container.querySelector("p").textContent).toEqual("FooHelper")
    })

    test("renders a Select with no error", () => {
        act(() => {
            render(
                <ReduxFormMaterialUISelect
                    input={{ onChange: noop, name: "mySelect", value: "Foo" }}
                    meta={{ error: "FooError" }}
                />,
                container
            )
        })
        let element = container.querySelector("p")
        expect(element).toBeNull()
    })

    test("renders a Select with an error", () => {
        act(() => {
            render(
                <ReduxFormMaterialUISelect
                    input={{ onChange: noop, name: "mySelect", value: "Foo" }}
                    meta={{ error: "FooError", touched: true }}
                />,
                container
            )
        })
        let element = container.querySelector("p")
        expect(element.textContent).toEqual("FooError")
    })

    test("renders a Select with no warning", () => {
        act(() => {
            render(
                <ReduxFormMaterialUISelect
                    input={{ onChange: noop, name: "mySelect", value: "Foo" }}
                    meta={{ warning: "FooWarn" }}
                />,
                container
            )
        })
        let element = container.querySelector("p")
        expect(element).toBeNull()
    })

    test("renders a Select with an warning", () => {
        act(() => {
            render(
                <ReduxFormMaterialUISelect
                    input={{ onChange: noop, name: "mySelect", value: "Foo" }}
                    meta={{ warning: "FooWarn", touched: true }}
                />,
                container
            )
        })
        let element = container.querySelector("p")
        expect(element.textContent).toEqual("FooWarn")
    })

    test("renders a Select without defaultValue", () => {
        act(() => {
            render(
                <ReduxFormMaterialUISelect
                    input={{ onChange: noop, name: "mySelect", value: "Foo" }}
                    meta={{ warning: "FooWarn", touched: true }}
                    defaultValue={5}
                />,
                container
            )
        })
        let element = container.querySelector('input[type="hidden"]')
        expect(element.getAttribute("value")).toEqual("Foo")
    })

    it("renders a Select with className", () => {
        act(() => {
            render(
                <ReduxFormMaterialUISelect
                    input={{ onChange: noop, name: "mySelect", value: "Foo" }}
                    meta={{}}
                    className="myClassName"
                />,
                container
            )
        })
        let element = container.querySelector("div.myClassName")
        expect(element).toBeDefined()
    })

    it("renders a Select with multiple", () => {
        act(() => {
            render(
                <ReduxFormMaterialUISelect
                    multiple={true}
                    input={{ onChange: noop, name: "myText", value: ["Foo", "Bar"] }}
                    meta={{}}
                />,
                container
            )
        })
        let element = container.querySelector('input[type="hidden"]')
        expect(element.getAttribute("value")).toEqual("Foo,Bar")
    })

    it("renders a Select with error when touched and helper text", () => {
        act(() => {
            render(
                <ReduxFormMaterialUISelect
                    input={{ onChange: noop, name: "myText", value: "Foo" }}
                    meta={{ error: "FooError", touched: true }}
                    helperText="My Helper Text"
                />,
                container
            )
        })
        let element = container.querySelector("p")
        expect(element.textContent).toEqual("FooError")
    })
})
