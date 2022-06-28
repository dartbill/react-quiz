import React from 'react';
import { SearchForm } from '.';
import { screen, render } from "@testing-library/react";

describe('SearchForm Component', () => {
    beforeAll(() => {
        render(<SearchForm />)
    })
    describe('Renders button', () => {

        test('difficult', () => {
            const button = screen.getByRole('button', /difficult/i)
            expect(heading).toBeInTheDocument();
        });
        test('category', () => {
            const button = screen.getByRole('button', /category/i)
            expect(heading).toBeInTheDocument();
        });
        test('type', () => {
            const button = screen.getByRole('button', /type/i)
            expect(heading).toBeInTheDocument();
        });
    })

});
