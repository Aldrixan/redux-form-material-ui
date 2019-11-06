import { render, unmountComponentAtNode } from 'react-dom';

import React from "react"
import ReduxFormMaterialUISlider from "../src/Slider"
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

    test( 'renders an unchecked Slider', () => {
        act( () => {
            render( <ReduxFormMaterialUISlider input={{ onChange: noop, name: "mySlider" }} />, container );
        } )
        let element = container.querySelector( 'input[name="mySlider"]' );
        expect( element ).toBeDefined();
        expect( element.checked ).toBeFalsy()
    } )

    test( 'renders a checked Slider', () => {
        act( () => {
            render( <ReduxFormMaterialUISlider input={{ value: true, onChange: noop, name: "mySlider" }} />, container );
        } )
        let element = container.querySelector( 'input[name="mySlider"]' );
        expect( element.checked ).toBeTruthy()
    } )

    test( 'should ignore checked', () => {
        act( () => {
            render( <ReduxFormMaterialUISlider input={{ onChange: noop, name: "mySlider" }} checked={true} />, container );
        } )
        let element = container.querySelector( 'input[name="mySlider"]' );
        expect( element.checked ).toBeFalsy()
    } )

    test( 'should ignore defaultValue', () => {
        act( () => {
            render( <ReduxFormMaterialUISlider input={{ onChange: noop, name: "mySlider" }} defaultValue={true} />, container );
        } )
        let element = container.querySelector( 'input[name="mySlider"]' );
        expect( element.checked ).toBeFalsy();
    } )
} )