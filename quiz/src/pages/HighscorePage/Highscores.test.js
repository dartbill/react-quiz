import "@testing-library/jest-dom";
import { Highscores } from "../../components";
import { screen, render } from "@testing-library/react";
import React from "react";
let initState = {
    category: 20,
    level: "easy",
    typeOfQ: "multiple",
    questions: [],
};

describe("Highscores Component", () => {
    beforeEach(() => {
        render(
            <HighscorePage />
        );
    });

    describe("Renders", () => {

        it("placeholder text", () => {
            const e = screen.getByText(/we need to display highscores here/i)
            expect(e).toBeInTheDocument();
        });
    });
});


