import React from 'react'
import "@testing-library/jest-dom";
import { Home } from "./";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe("Home Component", () => {
    beforeEach(() => {
        render(<Home />);
    });

    describe("Renders", () => {
        
        it("category dropdown", () => {
            const btn = screen.getByRole('button', {  name: /category/i})
            expect(btn).toBeInTheDocument();
        });
        it("difficult dropdown", () => {
            const btn = screen.getByRole('button', {  name: /difficulty/i})
            expect(btn).toBeInTheDocument();
        });

    });

});


