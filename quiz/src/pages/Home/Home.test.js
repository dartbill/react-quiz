import "@testing-library/jest-dom";
import { Home } from "./index";
import { screen, render } from "@testing-library/react";
import { renderWithReduxProvider } from '../../test/setupTests'
import userEvent from "@testing-library/user-event";
import mockStore from 'redux-mock-store'

let initState = {
    category: 20,
    level: "easy",
    typeOfQ: "multiple",
    questions: [],
};

let getResultMock;
let store;

describe("Home Component", () => {
    beforeEach(() => {
        getResultMock = jest.fn();
        store = mockStore(initState)
        renderWithReduxProvider(<Home />, { initState });
        console.log(store)
    });

    describe("Renders", () => {
        
        it("category dropdown", () => {
            const btn = screen.getByRole('button', {  name: /category/i})
            expect(btn).toBeInTheDocument();
        });
        it("difficult dropdown", () => {
            const btn = screen.getByRole('button', {  name: /difficult/i})
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
            const link = screen.getByRole('link', {  name: /general knowledge/i})
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


