import "@testing-library/jest-dom";
import { Answer } from "./index";
import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

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


        it("button is rendered", () => {
            const e = screen.getByRole('button')
            expect(e).toBeInTheDocument();
        });

        it("button updates score", async () => {
            // const user = userEvent.setup()
            // const btn = screen.getByRole('button')
            // await userEvent.click(btn);
            // const score = screen.getByRole()
            // expect(btn).toBeInTheDocument();
        });
    });
});


