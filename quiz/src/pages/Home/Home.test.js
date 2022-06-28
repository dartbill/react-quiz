import "@testing-library/jest-dom";
import { Home } from ".";
import { screen, render } from "@testing-library/react";
import { default as store } from "../../store";
import { renderWithReduxProvider } from '../../test/setupTests'


describe("Home Component", () => {
    beforeAll(() => {
        let initState = {
            category: 20,
            level: "easy",
            typeOfQ: "multiple",
            questions: [],
        };
        renderWithReduxProvider(<Home />, { initState });
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
            // test ui button for
            expect(store.getState().category).toEqual(10);
        });
        it("Returns for case SETLEVEL", () => {
            // test ui button for cat
            expect(store.getState().level).toEqual("hard");
        });
        it("Returns for case SETTYPE", () => {
            // test ui button for cat
            expect(store.getState().typeOfQ).toEqual("boolean");
        });
        it("Returns for case TEST", () => {

        });
    });
});
