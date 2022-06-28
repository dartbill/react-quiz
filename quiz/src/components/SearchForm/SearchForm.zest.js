import React from 'react';
import { default as SearchForm } from '.';
import { screen,render } from "@testing-library/react";

describe('SearchForm Component', () => {
    beforeAll(()=>{
        render(<SearchForm />)
    })

    test('Renders heading', () => {
        const heading = screen.getByText(/hello from component/i)
        expect(heading).toBeInTheDocument();
    });

});
