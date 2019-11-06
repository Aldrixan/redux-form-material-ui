import { render, unmountComponentAtNode } from "react-dom"

import React from "react"
import ReduxFormMaterialUISlider from "../src/Slider"
import { act } from "react-dom/test-utils"
import noop from "lodash.noop"

// import renderer from "react-test-renderer"

describe("Switch", () => {
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

    test("renders a Slider", () => {
        act(() => {
            render(
                <ReduxFormMaterialUISlider
                    input={{ onChange: noop, name: "mySlider", value: 5 }}
                    meta={{}}
                    label="My Slider"
                    helperText="My Helper Text"
                />,
                container
            )
        })
        let element = container.querySelector('input[name="mySlider"]')
        expect(element).toBeDefined()
        expect(element.getAttribute('value')).toEqual("5");
    })

    test("should ignore defaultValue", () => {
        act(() => {
            render(
                <ReduxFormMaterialUISlider
                    input={{ onChange: noop, name: "mySlider", value: 5 }}
                    meta={{}}
                    defaultValue={10}
                    label="My Slider"
                    helperText="My Helper Text"
                />,
                container
            )
        })
        let element = container.querySelector('input[name="mySlider"]')
        expect(element.getAttribute('value')).toEqual("5");
    })
})
