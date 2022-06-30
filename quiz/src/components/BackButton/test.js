import React from "react";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import "@testing-library/jest-dom";
import { BackButton } from './index';


describe('BackButton', () => {
    beforeEach(() => {
        render(<BackButton />, { wrapper: MemoryRouter });
    })

    test('renders a back button', () => {
        const btn = screen.getByRole('button')
        expect(btn.textContent).toContain('Back');
    })
})
