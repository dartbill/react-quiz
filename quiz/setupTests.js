// Main Imports
import React from "react";
import "@testing-library/jest-dom";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import reducer from "../reducers/reducer";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

console.log("===================== SETUP TESTS IS RUNNING =====================")

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
    let testReducer = () => reducer(initState, { type: "@@INIT" });
    const testStore = createStore(testReducer, applyMiddleware(thunk));

    return ({ children }) => (
        <Provider store={testStore}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider>
    );
};

const renderWithReduxProvider = (ui, options = {}) => {
    let TestWrapper = TestProviders(options);
    render(ui, { wrapper: TestWrapper, ...options });
};

jest.mock("axios");
axios.get.mockResolvedValue({ data: "" });

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
  
  // Globals
global.localStorage = localStorageMock;
global.React = React;
global.screen = screen;
global.userEvent = userEvent;
global.renderWithReduxProvider = renderWithReduxProvider;

// export { renderWithReduxProvider }; 
