import React from 'react'
import "@testing-library/jest-dom";
import { default as Home } from ".";
import { screen } from "@testing-library/react";
import { render } from "../../test/setupTests";
import reducer from "../../reducers/reducer";
import { default as store } from "../../store";

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

import { SearchForm } from "../../components";
import { GetQuestions } from "../../actions";
import { Provider } from "react-redux";

// const mockDispatch = jest.fn();
// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
//   useDispatch: () => mockDispatch
// }));

// const dispatch = useDispatch()

const initialState = {
    category: 20,
    level: "easy",
    typeOfQ: "multiple",
    questions: [],
};

describe("Home Component", () => {
    beforeAll(() => {
        renderWithReduxProvider(
            <Home />
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

        // it("Returns for case SETCAT", () => {
        //     // test ui button for
        //     expect(store.getState().category).toEqual(10);
        // });
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
    });
});
