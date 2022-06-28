import "@testing-library/jest-dom";
import { Highscores } from ".";
import { screen, render } from "@testing-library/react";
import React from "react";

describe("Highscores Component", () => {
    beforeEach(() => {
        render(
            <Highscores />
        );
    });

    describe("Renders", () => {
        
        it("placeholder text", () => {
            const e = screen.getByText(/we need to display highscores here/i)
            expect(e).toBeInTheDocument();
        });
    });
});


