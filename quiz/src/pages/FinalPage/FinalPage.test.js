import "@testing-library/jest-dom";
import { FinalScores } from "../../components";
import React from "react";
import { screen, render } from "@testing-library/react";

let initState = {
    category: 20,
    level: "easy",
    typeOfQ: "multiple",
    questions: [],
};

describe("FinalPage Component", () => {
    beforeEach(() => {
        render(
            <FinalScores />
        );
    });

    describe("Renders", () => {

        it("placeholder text", () => {
            const e = screen.getByText(/this is where we need to display final scores/i)
            expect(e).toBeInTheDocument();
        });


    });

});


