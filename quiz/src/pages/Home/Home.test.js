import Home from './index';
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import store from "../../store";

describe('Home Component', () => {
    beforeEach(() => {
        render(
                <Home />
        )
    })

    describe("Renders", () => {

        it("category dropdown", () => {
            const btn = screen.getByRole('button', { name: /category/i })
            expect(btn).toBeInTheDocument();
        });
        it("difficult dropdown", () => {
            const btn = screen.getByRole('button', { name: /difficult/i })
            expect(btn).toBeInTheDocument();
        });

    });

    describe("Updates Store", () => {
        // console.log("store", store.getState());
        it("initial state", () => {
            expect(store).toEqual(initState);
        });

        it("for case SETCAT", async () => {
            // const btn = screen.getByRole('button', {  name: /category/i})
            // userEvent.click(btn)
            const link = screen.getByRole('link', { name: /general knowledge/i })
            userEvent.click(link)
            console.log(store)
            expect(link).toHaveBeenCalled(getResultMock)
            // expect(store.category).toEqual(9);
        });

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


