import { default as Home } from ".";
import { screen,render } from "@testing-library/react";
// import { render } from "../../test/setupTests";
import reducer from "../../reducers/reducer";
import { default as store } from "../../store";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchForm } from "../../components";
import { GetQuestions } from "../../actions";
import { Provider } from "react-redux";

// const mockDispatch = jest.fn();
// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
//   useDispatch: () => mockDispatch
// }));

const dispatch = useDispatch()

const initialState = {
    category: 20,
    level: "easy",
    typeOfQ: "multiple",
    questions: [],
};

describe("Home Component", () => {
    beforeAll(() => {
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
    });

    describe("Test Layout", () => {
        test("Renders heading", () => {
            const heading = screen.getByRole("heading", {
                name: /hello/i,
            });
            expect(heading).toBeInTheDocument();
        });
    });

    describe("Test Reducer", () => {
        // console.log("store", store.getState());
        it("Returns initial state", () => {
            expect(store.getState()).toEqual(initialState);
        });

        it("Returns for case SETCAT", () => {
            dispatch({
                    type: SETCAT,
                    payload: 10,
                });
            expect(store.getState().category).toEqual(10);
        });
        it("Returns for case SETLEVEL", () => {
            reducer({ level: "hard" });
            expect(store.getState().level).toEqual("hard");
        });
        it("Returns for case SETTYPE", () => {
            reducer({ typeOfQ: "boolean" });
            expect(store.getState().typeOfQ).toEqual("boolean");
        });
        it("Returns for case TEST", () => {});
    });
});
