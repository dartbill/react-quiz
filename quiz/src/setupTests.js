// // Main Imports
// import React from "react";
// import "@testing-library/jest-dom";
// import axios from "axios";
// import userEvent from "@testing-library/user-event";
// import reducer from "./reducers/reducer";
// import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// // futureproof provider wrapper attempt 2 =================================

// const logFunc = () => {
//     console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!")
// }

// const initialState = {
//     category: 20,
//     level: "easy",
//     typeOfQ: "multiple",
//     questions: [],
// };

// const TestProviders = ({ initState }) => {
//     initState ||= { initialState };
//     let testReducer = () => reducer(initState, { type: '@@INIT' })
//     const testStore = createStore(testReducer, applyMiddleware(thunk))

//     return ({ children }) => (
//         <Provider store={testStore}>
//             { children }
//         </Provider>
//     )
// }

// const renderWithReduxProvider = (ui, options={}) => {
//     let TestWrapper = TestProviders(options)
//     render(ui, { wrapper: TestWrapper, ...options })
// }

// jest.mock('axios')
// axios.get.mockResolvedValue({ data: "" })

// // Globals
// global.logFunc = logFunc;
// global.React = React;
// global.screen = screen;
// global.render = render;
// global.userEvent = userEvent;
// global.renderWithReduxProvider = renderWithReduxProvider;

// // provider wrapper attempt 1 =================================
// // function render(
// //     ui,
// //     {
// //         preloadedState,
// //         store,
// //         ...options
// //     } = {}
// // ) {
// //     function Wrapper({ component }) {
// //         return (
// //             <Provider store={store}>
// //                 {component}
// //             </Provider>
// //         )
// //     }
// //     return rtlRender(ui, {wrapper: Wrapper, ...options})
// // }

// //   // re-export everything
// //   export * from '@testing-library/react'

// //   // override render method
// //   export {render}
