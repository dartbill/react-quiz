// Main Imports
import React from "react";
import "@testing-library/jest-dom";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { screen, within } from "@testing-library/react";
// Import Reducers
import reducer from "../reducers/reducer";
// import { render as rtlRender } from "@testing-library/react";
import { default as store } from "../store";

import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// provider wrapper attempt 1 =================================
// function render(
//     ui,
//     {
//         preloadedState,
//         store,
//         ...options
//     } = {}
// ) {
//     function Wrapper({ component }) {
//         return (
//             <Provider store={store}>
//                 {component}
//             </Provider>
//         ) 
//     }
//     return rtlRender(ui, {wrapper: Wrapper, ...options})
// }

 
//   // re-export everything
//   export * from '@testing-library/react'
  
//   // override render method
//   export {render}

// futureproof provider wrapper attempt 2 =================================

const initialState = {
    category: 20,
    level: "easy",
    typeOfQ: "multiple",
    questions: [],
};

const TestProviders = ({ initState }) => {
    initState ||= { initialState };
    let testReducer = () => reducer(initState, { type: '@@INIT' })
    const testStore = createStore(testReducer, applyMiddleware(thunk))

    return ({ children }) => (
        <Provider store={testStore}>
            { children }
        </Provider>
    )
}

const renderWithReduxProvider = (ui, options={}) => {
    let TestWrapper = TestProviders(options)
    render(ui, { wrapper: TestWrapper, ...options })
}

jest.mock('axios')
axios.get.mockResolvedValue({ data: [ { latlng: [123, 456] }]})

global.renderWithReduxProvider = renderWithReduxProvider





// function renderWithRedux(
//     component,
//     { store = createStore(reducer, applyMiddleware(thunk)) } = {}
// ) {
//     return {
//         ...render(<Provider store={store}>{component}</Provider>),
//     };
// }

// const TestProviders = ({ initState }) => {
//   // initState ||= { location: "", result: { sunrise: "", sunset: "" }, loading: false };
//   let testReducer = () => reducer(initState, { type: '@@INIT' })
//   const testStore =

//   return ({ children }) => (
//       <Provider store={testStore}>
//           { children }
//       </Provider>
//   )
// }

// const renderWithReduxProvider = (ui, options={}) => {
//   let TestWrapper = TestProviders(options)
//   render(ui, { wrapper: TestWrapper, ...options })
// }

// import axios from 'axios';
// jest.mock('axios')
// axios.get.mockResolvedValue({ data: [ { latlng: [123, 456] }]})

// const localStorageMock = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   removeItem: jest.fn(),
//   clear: jest.fn(),
// };

// Globals
// global.localStorage = localStorageMock;
global.React = React;
global.userEvent = userEvent;
// global.renderWithRedux = renderWithRedux;
