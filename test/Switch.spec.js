import { render, unmountComponentAtNode } from 'react-dom';

import React from "react"
import ReduxFormMaterialUISwitch from "../src/Switch"
import { act } from 'react-dom/test-utils';
import noop from "lodash.noop"

// import renderer from "react-test-renderer"

describe( "Switch", () => {
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

    test( 'renders an unchecked Switch', () => {
        act( () => {
            render( <ReduxFormMaterialUISwitch input={{ onChange: noop, name: "mySwitch" }} />, container );
        } )
        let element = container.querySelector( 'input[name="mySwitch"]' );
        expect( element ).toBeDefined();
        expect( element.checked ).toBeFalsy()
    } )

    test( 'renders a checked Switch', () => {
        act( () => {
            render( <ReduxFormMaterialUISwitch input={{ value: true, onChange: noop, name: "mySwitch" }} />, container );
        } )
        let element = container.querySelector( 'input[name="mySwitch"]' );
        expect( element.checked ).toBeTruthy()
    } )

    test( 'should ignore checked', () => {
        act( () => {
            render( <ReduxFormMaterialUISwitch input={{ onChange: noop, name: "mySwitch" }} checked={true} />, container );
        } )
        let element = container.querySelector( 'input[name="mySwitch"]' );
        expect( element.checked ).toBeFalsy()
    } )

    test( 'should ignore defaultChecked', () => {
        act( () => {
            render( <ReduxFormMaterialUISwitch input={{ onChange: noop, name: "mySwitch" }} defaultChecked={true} />, container );
        } )
        let element = container.querySelector( 'input[name="mySwitch"]' );
        expect( element.checked ).toBeFalsy();
    } )
} )