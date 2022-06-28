import "@testing-library/jest-dom";
import { FinalScorePage } from ".";
import React from "react";
import { screen, render } from "@testing-library/react";

let initState = {
    category: 20,
    level: "easy",
    typeOfQ: "multiple",
    questions: [],
};

describe("FinalScorePage Component", () => {
    beforeEach(() => {
        render(
        <FinalScorePage />
        );
    });

    describe("Renders", () => {
        
        it("placeholder text", () => {
            const e = screen.getByText(/this is where we need to display final scores/i)
            expect(e).toBeInTheDocument();
        });


    });

});


