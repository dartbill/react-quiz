import "@testing-library/jest-dom";
import { default as PlayerWelcomePage } from "./PlayerWelcomePage";
import { screen, render } from "@testing-library/react";
import React from "react";


describe("Highscores Component", () => {
    beforeEach(() => {
        renderWithReduxProvider(
            <PlayerWelcomePage />
        );
    });

    describe("Renders", () => {

        it("placeholder text", () => {
            const e = screen.getByText(/Players/i)
            expect(e).toBeInTheDocument();
        });
    });

    it("button text", () => {
        const e = screen.getByText(/Player One/i)
        expect(e).toBeInTheDocument();
    });
    it("button text", () => {
        const e = screen.getByText(/Player Two/i)
        expect(e).toBeInTheDocument();
    });
    it("button text", () => {
        const e = screen.getByText(/View high-scores/i)
        expect(e).toBeInTheDocument();
    });

});


