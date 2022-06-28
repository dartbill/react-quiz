import "@testing-library/jest-dom";
import { Answer } from "./index";
import React from "react";
import { screen, render } from "@testing-library/react";

describe("Answers Component", () => {
    beforeEach(() => {
        render(
            <Answer bool={true} answer={"answer"} />
        );
    });

    describe("render answer", () => {

        it("answer text", () => {
            const e = screen.getByText(/answer/i)
            expect(e).toBeInTheDocument();
        });
    });
});


