import { render, unmountComponentAtNode } from 'react-dom';

import React from "react"
import ReduxFormMaterialUICheckbox from "../src/Checkbox"
import { act } from 'react-dom/test-utils';
import noop from "lodash.noop"

// import renderer from "react-test-renderer"

describe( "Checkbox", () => {
    let container = null;
    beforeEach( () => {
        container = document.createElement( 'div' );
        document.body.appendChild( container );
    } )

    afterEach( () => {
        unmountComponentAtNode( container );
        container.remove();
        container = null;
    } );

    test( 'renders an unchecked Checkbox', () => {
        act( () => {
            render( <ReduxFormMaterialUICheckbox input={{ onChange: noop, name: "myCheckbox" }} />, container );
        } )
        let element = container.querySelector( 'input[name="myCheckbox"]' );
        expect( element ).toBeDefined();
        expect( element.checked ).toBeFalsy()
    } )

    test( 'renders a checked Checkbox', () => {
        act( () => {
            render( <ReduxFormMaterialUICheckbox input={{ value: true, onChange: noop, name: "myCheckbox" }} />, container );
        } )
        let element = container.querySelector( 'input[name="myCheckbox"]' );
        expect( element.checked ).toBeTruthy()
    } )

    test( 'should ignore checked', () => {
        act( () => {
            render( <ReduxFormMaterialUICheckbox input={{ onChange: noop, name: "myCheckbox" }} checked={true} />, container );
        } )
        let element = container.querySelector( 'input[name="myCheckbox"]' );
        expect( element.checked ).toBeFalsy()
    } )

    test( 'should ignore defaultChecked', () => {
        act( () => {
            render( <ReduxFormMaterialUICheckbox input={{ onChange: noop, name: "myCheckbox" }} defaultChecked={true} />, container );
        } )
        let element = container.querySelector( 'input[name="myCheckbox"]' );
        expect( element.checked ).toBeFalsy();
    } )
} )