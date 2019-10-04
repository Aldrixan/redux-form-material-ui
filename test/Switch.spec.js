import React from "react"
import ReduxFormMaterialUISwitch from "../src/Switch"
import noop from "lodash.noop"
import renderer from "react-test-renderer"

describe("Switch", () => {
    it("renders an unchecked Switch", () => {
        const component = renderer.create(<ReduxFormMaterialUISwitch input={{ onChange: noop, name: "mySwitch" }} />)
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("renders a checked Switch", () => {
        const component = renderer.create(
            <ReduxFormMaterialUISwitch input={{ value: true, onChange: noop, name: "mySwitch" }} />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("should ignore checked", () => {
        const component = renderer.create(
            <ReduxFormMaterialUISwitch input={{ onChange: noop, name: "mySwitch" }} checked={true} />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("should ignore defaultChecked", () => {
        const component = renderer.create(
            <ReduxFormMaterialUISwitch input={{ onChange: noop, name: "myCheckbox" }} defaultChecked={true} />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
