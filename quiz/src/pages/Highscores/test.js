import "@testing-library/jest-dom";
import { Highscores } from "./";
// import { screen, render } from "@testing-library/react";

let initState = {
    category: 20,
    level: "easy",
    typeOfQ: "multiple",
    questions: [],
};

describe("Highscores Component", () => {
    beforeEach(() => {
        renderWithReduxProvider(
        <Highscores />, { initState }
        );
    });

    describe("Renders", () => {
        
        it("placeholder text", () => {
            const e = screen.getByText(/we need to display highscores here/i)
            expect(e).toBeInTheDocument();
        });


    });

});


