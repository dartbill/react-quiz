import { default as Home } from '.';
import { screen } from '@testing-library/react';
import { render } from '../../test/setupTests'
import reducer from '../../reducers/reducer'
import {default as store} from '../../store'

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { SearchForm } from "../../components";
import { GetQuestions } from "../../actions";

const testInitState = {
    category: 9,
    level: 'easy',
    typeOfQ: 'multiple',
    questions: []
}


describe('Home Component', () => {
    beforeAll(()=>{
        render(<Home />)
    })

    describe('Test Layout',()=>{
        
        test('Renders heading', () => {
            const heading = screen.getByRole('heading', {
                name: /hello/i
            })
            expect(heading).toBeInTheDocument();
        });
    })
        

    describe('Test Reducer',()=>{

        console.log("store",store.getState())
        it('Returns initial state',()=>{
            expect(store.getState()).toEqual(testInitState)
        })
    
        it('Returns for case SETCAT',()=>{
            reducer(...state,{category:10})
            expect(store.getState().category).toEqual(10)
        })
        it('Returns for case SETLEVEL',()=>{
            reducer('',{level:'hard'})
            expect(store.getState().level).toEqual('hard')
        })
        it('Returns for case SETTYPE',()=>{
            reducer('',{typeOfQ:'boolean'})
            expect(store.getState().typeOfQ).toEqual('boolean')
        })
        it('Returns for case TEST',()=>{
    
        })
    
    })
    

});




