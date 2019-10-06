import React from "react"
import ReduxFormMaterialUIRadioGroup from "../src/RadioGroup"
import noop from "lodash.noop"
import renderer from "react-test-renderer"

describe( "RadioGroup", () => {
    it( "renders a RadioGroup", () => {
        const component = renderer.create(
            <ReduxFormMaterialUIRadioGroup input={{ onChange: noop, name: "myRadio", value: "Foo" }} meta={{}} />
        )
        let tree = component.toJSON()
        expect( tree ).toMatchSnapshot()
    } )

    it( 'renders a RadioGroup with helper text when not touched', () => {
        const component = renderer.create(
            <ReduxFormMaterialUIRadioGroup input={{ onChange: noop, name: "myRadio", value: "Foo" }} meta={{}}
                helperText='My Helper Text' />
        )
        let tree = component.toJSON()
        expect( tree ).toMatchSnapshot()
    } )

    it( 'renders a RadioGroup with error when touched and helper text', () => {
        const component = renderer.create(
            <ReduxFormMaterialUIRadioGroup
                input={{ onChange: noop, name: "myRadio", value: "Foo" }}
                meta={{ error: 'FooError', touched: true }}
                helperText='My Helper Text' />
        )
        let tree = component.toJSON()
        expect( tree ).toMatchSnapshot()
    } )

    it( "renders a RadioGroup with no error when not touched", () => {
        const component = renderer.create(
            <ReduxFormMaterialUIRadioGroup
                input={{ onChange: noop, name: "myRadio", value: "Foo" }}
                meta={{ error: "FooError" }}
            />
        )
        let tree = component.toJSON()
        expect( tree ).toMatchSnapshot()
    } )

    it( "renders a RadioGroup with an error when touched", () => {
        const component = renderer.create(
            <ReduxFormMaterialUIRadioGroup
                input={{ onChange: noop, name: "myRadio", value: "Foo" }}
                meta={{ error: "FooError", touched: true }}
            />
        )
        let tree = component.toJSON()
        expect( tree ).toMatchSnapshot()
    } )

    it( "renders a RadioGroup with no warning when not touched", () => {
        const component = renderer.create(
            <ReduxFormMaterialUIRadioGroup
                input={{ onChange: noop, name: "myRadio", value: "Foo" }}
                meta={{ warning: "FooWarning" }}
            />
        )
        let tree = component.toJSON()
        expect( tree ).toMatchSnapshot()
    } )

    it( "renders a RadioGroup with a warning when touched", () => {
        const component = renderer.create(
            <ReduxFormMaterialUIRadioGroup
                input={{ onChange: noop, name: "myRadio", value: "Foo" }}
                meta={{ warning: "FooWarning", touched: true }}
            />
        )
        let tree = component.toJSON()
        expect( tree ).toMatchSnapshot()
    } )

    it( "should ignore defaultValue", () => {
        const component = renderer.create(
            <ReduxFormMaterialUIRadioGroup
                input={{ onChange: noop, name: "myRadio", value: "Foo" }}
                meta={{ warning: "FooWarning", touched: true }}
                defaultValue="5"
            />
        )
        let tree = component.toJSON()
        expect( tree ).toMatchSnapshot()
    } )
} )
