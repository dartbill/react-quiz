import { QuizPage } from ".";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import React from "react";

describe("Quiz Component", () => {
    beforeEach(() => {
        render(
            <QuizPage />
        );
    });

    describe("Renders", () => {
        
        it("next question text", () => {
            const e = screen.getByText(/next question/i)
            expect(e).toBeInTheDocument();
        });


    });

});


