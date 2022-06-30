import "@testing-library/jest-dom";
import { HighscorePage } from "./";
import { screen, render } from "@testing-library/react";
import React from "react";


describe("Highscores Component", () => {
    beforeEach(() => {
        renderWithReduxProvider(
            <HighscorePage />
        );
    });

    describe("Renders", () => {

        it("placeholder text", () => {
            const e = screen.getByText(/High Scores/i)
            expect(e).toBeInTheDocument();
        });
    });
});


