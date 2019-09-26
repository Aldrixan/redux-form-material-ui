import React from "react"
import ReduxFormMaterialUISelect from "../src/Select"
import noop from "lodash.noop"
import renderer from 'react-test-renderer';

describe( "Checkbox", () => {
    it( "renders a Select", () => {
        const component = renderer.create(
            <ReduxFormMaterialUISelect input={{ onChange: noop, name: 'myText', value: 'Foo' }} />
        );
        let tree = component.toJSON();
        expect( tree ).toMatchSnapshot();
    } )

    it( 'renders a Select with multiple', () => {
        const component = renderer.create(
            <ReduxFormMaterialUISelect multiple={true} input={{ onChange: noop, name: 'myText', value: [ 'Foo', 'Bar' ] }} />
        );
        let tree = component.toJSON();
        expect( tree ).toMatchSnapshot();
    } )

    it( 'renders a Select with no error when not touched', () => {
        const component = renderer.create(
            <ReduxFormMaterialUISelect input={{ onChange: noop, name: 'myText', value: 'Foo' }} meta={{ error: 'FooError' }} />
        );
        let tree = component.toJSON();
        expect( tree ).toMatchSnapshot();
    } )

    it( 'renders a Select with an error', () => {
        const component = renderer.create(
            <ReduxFormMaterialUISelect input={{ onChange: noop, name: 'myText', value: 'Foo' }} meta={{ error: 'FooError', touched: true }} />
        );
        let tree = component.toJSON();
        expect( tree ).toMatchSnapshot();
    } )

    it( 'renders a Select with no warning when not touched', () => {
        const component = renderer.create(
            <ReduxFormMaterialUISelect input={{ onChange: noop, name: 'myText', value: 'Foo' }} meta={{ warning: 'FooWarning' }} />
        );
        let tree = component.toJSON();
        expect( tree ).toMatchSnapshot();
    } )

    it( 'renders a Select with an warning', () => {
        const component = renderer.create(
            <ReduxFormMaterialUISelect input={{ onChange: noop, name: 'myText', value: 'Foo' }} meta={{ warning: 'FooWarning', touched: true }} />
        );
        let tree = component.toJSON();
        expect( tree ).toMatchSnapshot();
    } )

    it( 'should ignore defaultValue', () => {
        const component = renderer.create(
            <ReduxFormMaterialUISelect input={{ onChange: noop, name: 'myText', value: 'Foo' }} meta={{ error: 'FooError' }} defaultValue='5' />
        );
        let tree = component.toJSON();
        expect( tree ).toMatchSnapshot();
    } )
} )