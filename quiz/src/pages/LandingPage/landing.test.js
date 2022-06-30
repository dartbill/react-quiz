import "@testing-library/jest-dom";
import { default as LandingPage } from "./LandingPage";
import { screen, render } from "@testing-library/react";
import React from "react";


describe("Highscores Component", () => {
    beforeEach(() => {
        renderWithReduxProvider(
            <LandingPage />
        );
    });

    describe("Renders", () => {

        it("placeholder text", () => {
            const e = screen.getByText(/Quiz-Nado/i)
            expect(e).toBeInTheDocument();
        });
    });

    it("placeholder text", () => {
        const e = screen.getByText(/Nuff Said/i)
        expect(e).toBeInTheDocument();
    });

});


