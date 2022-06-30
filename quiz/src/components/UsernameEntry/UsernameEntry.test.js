import "@testing-library/jest-dom";
import { UsernameEntry } from "./index";
import { screen, render } from "@testing-library/react";
import React from "react";

describe("Login Component", () => {
    beforeEach(() => {
        renderWithReduxProvider(<UsernameEntry />);
    });

    describe("Renders", () => {
        it("textbox", () => {
            const e = screen.getByRole('textbox')
            expect(e).toBeInTheDocument();
        });
        it("button", () => {
            const e = screen.getByRole('button')
            expect(e).toBeInTheDocument();
        });

    });
});
