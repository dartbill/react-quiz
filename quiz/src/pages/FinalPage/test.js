import "@testing-library/jest-dom";
import { FinalPage } from "./";
// import { screen, render } from "@testing-library/react";

let initState = {
    category: 20,
    level: "easy",
    typeOfQ: "multiple",
    questions: [],
};

describe("FinalPage Component", () => {
    beforeEach(() => {
        renderWithReduxProvider(
        <FinalPage />, { initState }
        );
    });

    describe("Renders", () => {
        
        it("placeholder text", () => {
            const e = screen.getByText(/this is where we need to display final scores/i)
            expect(e).toBeInTheDocument();
        });


    });

});


