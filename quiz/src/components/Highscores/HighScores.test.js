import "@testing-library/jest-dom";
import { Highscores } from "./index";
import { screen, render } from "@testing-library/react";
import React from "react";

describe("Highscores Component", () => {
    beforeEach(() => {
        renderWithReduxProvider(
            <Highscores />
        );
    });

    describe("Renders", () => {

        it("list", () => {
            const e = screen.getByRole('list')
            expect(e).toBeInTheDocument();
        });
    });


});


