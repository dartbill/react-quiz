import { Home } from "./";
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import store from "../../store";

// Main Imports
import { Provider } from "react-redux";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import reducer from "../../reducers/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

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

describe("Home Component", () => {
    beforeEach(() => {
        renderWithReduxProvider(<Home />);
    });

    describe("Renders", () => {
        it("difficulty dropdown button", () => {
            const btn = screen.getByRole("button", { name: /difficult/i });
            expect(btn).toBeInTheDocument();
        });
        it("category dropdown button", () => {
            const btn = screen.getByRole("button", { name: /category/i });
            expect(btn).toBeInTheDocument();
        });
        it("type dropdown button", () => {
            const btn = screen.getByRole('button', {  name: /type/i})
            expect(btn).toBeInTheDocument();
        });
        it("play link", () => {
            const btn = screen.getByRole('link', {  name: /play!/i})
            expect(btn).toBeInTheDocument();
        });

    });

    // describe("Updates Store", () => {
    //     // console.log("store", store.getState());
    //     it("initial state", () => {
    //         expect(store).toEqual(initState);
    //     });

    //     it("for case SETCAT", async () => {
    //         // const btn = screen.getByRole('button', {  name: /category/i})
    //         // userEvent.click(btn)
    //         const link = screen.getByRole('link', { name: /general knowledge/i })
    //         userEvent.click(link)
    //         console.log(store)
    //         expect(link).toHaveBeenCalled(getResultMock)
    //         // expect(store.category).toEqual(9);
    //     });

    // it("Returns for case SETLEVEL", () => {
    //     // test ui button for cat
    //     expect(store.getState().level).toEqual("hard");
    // });
    // it("Returns for case SETTYPE", () => {
    //     // test ui button for cat
    //     expect(store.getState().typeOfQ).toEqual("boolean");
    // });
    // it("Returns for case TEST", () => {

    // });
    // });
});
