// import Checkbox from "@material-ui/core/Checkbox"
import React from "react"
import ReduxFormMaterialUICheckbox from "../src/Checkbox"
import noop from "lodash.noop"
import renderer from "react-test-renderer"

describe("Checkbox", () => {
    it("renders an unchecked Checkbox", () => {
        const component = renderer.create(
            <ReduxFormMaterialUICheckbox input={{ onChange: noop, name: "myCheckbox" }} />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("renders a checked Checkbox", () => {
        const component = renderer.create(
            <ReduxFormMaterialUICheckbox input={{ value: true, onChange: noop, name: "myCheckbox" }} />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("should ignore defaultChecked", () => {
        const component = renderer.create(
            <ReduxFormMaterialUICheckbox input={{ onChange: noop, name: "myCheckbox" }} defaultChecked={true} />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
