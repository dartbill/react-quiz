// // =====================================================================
// // futureproof provider wrapper attempt 2 =================================
// // Main Imports
// import React from "react";
// import axios from "axios";
// import userEvent from "@testing-library/user-event";
// import reducer from "../../reducers/reducer";
// import { render, screen } from "@testing-library/react";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import "@testing-library/jest-dom";
// import { FinalScorePage } from "./index";
// import { useSelector } from "react-redux";
// import store from "../../store";
// import { BrowserRouter } from "react-router-dom";

// const initialState = {
//     category: 20,
//     level: "easy",
//     typeOfQ: "multiple",
//     questions: [],
// };

// const TestProviders = ({ initState }) => {
//     initState ||= { initialState };
//     let testReducer = () => reducer(initState, { type: "@@INIT" });
//     const testStore = createStore(testReducer, applyMiddleware(thunk));

//     return ({ children }) => <BrowserRouter><Provider store={testStore}>{children}</Provider></BrowserRouter>;
// };

// const renderWithReduxProvider = (ui, options = {}) => {
//     let TestWrapper = TestProviders(options);
//     render(ui, { wrapper: TestWrapper, ...options });
// };
// // =====================================================================
// // end of futureproof provider wrapper =================================

// // describe("FinalScorePage Component", () => {
// //     beforeEach(() => {
// //         render(
// //             <BrowserRouter>
// //                 <Provider store={store}>
// //                     <FinalScorePage />
// //                 </Provider>
// //             </BrowserRouter>
// //         );
// //     });

//     describe("FinalScorePage Component", () => {
//         beforeEach(() => {
//             renderWithReduxProvider(
//                 <FinalScorePage />
//             );
//         });

//     describe("FinalScore Page", () => {
//         it("renders newgame button", () => {
//             const e = screen.getByRole("button", { name: /newgame/i });
//             expect(e).toBeInTheDocument();
//         });

//         it("renders here are your scores text", () => {
//             const e = screen.getByText(/here are your scores/i)
//             expect(e).toBeInTheDocument();
//         });

//     });
// });
