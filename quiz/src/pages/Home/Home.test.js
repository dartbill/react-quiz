import Home from './index';
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { Provider } from "react-redux";
import store from "../../store";

describe('Home Component', () => {
    beforeEach(() => {
        render(
                <Home />
        )
    })

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


