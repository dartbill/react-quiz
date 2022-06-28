import "@testing-library/jest-dom";
import { FinalScores } from ".";
import React from "react";
import { screen, render } from "@testing-library/react";

describe("FinalScores Component", () => {
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


