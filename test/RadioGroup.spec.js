import React from "react"
import ReduxFormMaterialUIRadioGroup from "../src/RadioGroup"
import noop from "lodash.noop"
import renderer from "react-test-renderer"

describe("RadioGroup", () => {
    it("renders a RadioGroup", () => {
        const component = renderer.create(
            <ReduxFormMaterialUIRadioGroup input={{ onChange: noop, name: "myRadio", value: "Foo" }} />
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    //   it('provides getRenderedComponent', () => {
    //       const component = renderer.create(
    //             <ReduxFormMaterialUIRadioGroup input={{onChange: noop, name: 'myRadio', value: 'Foo'}} />
    //         );

    //     const element = TestUtils.findRenderedComponentWithType(
    //       dom,
    //       ReduxFormMaterialUIRadioGroup
    //     )
    //     expect(element.getRenderedComponent).toBeA('function')
    //     expect(element.getRenderedComponent()).toExist()
    //   })
})
