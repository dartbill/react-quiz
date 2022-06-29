import "@testing-library/jest-dom";
import { UsernameEntry } from "./index";
import { screen, render } from "@testing-library/react";
import React from "react";

describe("Login Component", () => {
    beforeEach(() => {
        render(<Login />);
    });

    describe("Renders", () => {
        it("placeholder text", () => {
            const e = screen.getByText(
                /this is where we need to display final scores/i
            );
            expect(e).toBeInTheDocument();
        });
    });
});
