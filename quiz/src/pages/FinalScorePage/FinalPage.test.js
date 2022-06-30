import "@testing-library/jest-dom";
import { FinalScores } from "../../components";
import React from "react";
import { screen, render } from "@testing-library/react";

describe("FinalScorePage Component", () => {
    beforeEach(() => {
        render(
            <FinalScores />
        );
    });

    describe("FinalScore Page", () => {

        it("renders newgame button", () => {
            const e = screen.getByRole('button', {  name: /newgame/i})
            expect(e).toBeInTheDocument();
        });


    });

});


