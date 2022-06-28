import "@testing-library/jest-dom";
import { Quiz } from "../../components";
// import { screen, render } from "@testing-library/react";

let initState = {
    category: 20,
    level: "easy",
    typeOfQ: "multiple",
    questions: [],
};

describe("Quiz Component", () => {
    beforeEach(() => {
        renderWithReduxProvider(
            <Quiz />, { initState }
        );
    });

    describe("Renders", () => {

        it("next question text", () => {
            const e = screen.getByText(/next question/i)
            expect(e).toBeInTheDocument();
        });


    });

});


