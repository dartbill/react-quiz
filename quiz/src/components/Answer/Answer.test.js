import "@testing-library/jest-dom";
import { Answer } from "./index";
import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

// import { useSelector } from 'react-redux';
// const q = useSelector(state => state.questions)

describe("Answers Component", () => {
    beforeEach(() => {

        render(
            <Answer bool={true} answer={"answer"} />
        );
    });

    it("should render an answer", () => {
        const e = screen.getByText(/answer/i)
        expect(e).toBeInTheDocument();
    });


    it("should render a button", () => {
        const e = screen.getByRole('button')
        expect(e).toBeInTheDocument();
    });

    // Awaiting Score On Screen to be Created
    // it("button updates score", async () => {
    //     const user = userEvent.setup()
    //     const btn = screen.getByRole('button')
    //     const score = screen.getByRole()
    //     const currentScore = score.value
    //     user.click(btn);
    //     const newScore = score.value
    //     expect(btn).toBeInTheDocument();
    // });
});


