import React from 'react';
import { GameProperties } from '.';
import { screen, render } from "@testing-library/react";

// Main Imports
import axios from "axios";
import userEvent from "@testing-library/user-event";
import reducer from "../../reducers/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// futureproof provider wrapper attempt 2 =================================

const initialState = {
    category: 20,
    level: "easy",
    typeOfQ: "multiple",
    questions: [],
};

const TestProviders = ({ initState }) => {
    initState ||= { initialState };
    let testReducer = () => reducer(initState, { type: "@@INIT" });
    const testStore = createStore(testReducer, applyMiddleware(thunk));

    return ({ children }) => (
        <BrowserRouter>
            <Provider store={testStore}>{children}</Provider>
        </BrowserRouter>
    );
};

const renderWithReduxProvider = (ui, options = {}) => {
    let TestWrapper = TestProviders(options);
    render(ui, { wrapper: TestWrapper, ...options });
};



describe('GameProperties Component', () => {
    beforeAll(() => {
        renderWithReduxProvider(<GameProperties />)
    })
    // describe('Renders button',()=>{
    //     test('difficult', () => {
    //         const button = screen.getByRole('button',/difficulty/i)
    //         expect(button).toBeInTheDocument();
    //     });
        // test('category', () => {
        //     const button = screen.getByRole('button',/category/i)
        //     expect(button).toBeInTheDocument();
        // });
        // test('type', () => {
        //     const button = screen.getByRole('button',/type/i)
        //     expect(button).toBeInTheDocument();
        // });
    // })

});
