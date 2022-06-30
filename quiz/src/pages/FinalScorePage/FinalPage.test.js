import "@testing-library/jest-dom";
import { FinalScorePage } from "./";
import { screen, render } from "@testing-library/react";
import React from "react";


describe("finalscore Component", () => {
    beforeEach(() => {
        renderWithReduxProvider(
            <FinalScorePage />
        );
    });

    describe("Renders", () => {

        it("placeholder text", () => {
            const e = screen.getByText(/Final Scores/i)
            expect(e).toBeInTheDocument();
        });
        it("placeholder text", () => {
            const e = screen.getByText(/All time Highscores/i)
            expect(e).toBeInTheDocument();
        });
    });
});


