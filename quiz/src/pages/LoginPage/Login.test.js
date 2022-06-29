import "@testing-library/jest-dom";
import { UserLogin } from "../../components";
import { screen, render } from "@testing-library/react";
import React from "react";


describe("Login Component", () => {
    beforeEach(() => {
        render(<UserLogin />);
    });

    describe("Renders", () => {
        // it("placeholder text", () => {
        //     const e = screen.getByText(
        //         /this is where we need to display final scores/i
        //     );
        //     expect(e).toBeInTheDocument();
        // });
    });
});
