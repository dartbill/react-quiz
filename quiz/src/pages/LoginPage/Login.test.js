import "@testing-library/jest-dom";
import { LoginPage } from ".";
import { screen, render } from "@testing-library/react";
import React from "react";
let initState = {
    category: 20,
    level: "easy",
    typeOfQ: "multiple",
    questions: [],
};

describe("Login Component", () => {
    beforeEach(() => {
        render(<LoginPage />);
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
