import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Question } from './index';

describe('playercount', () => {
    test('it renders a p tag', () => {
        renderWithReduxProvider(<Question />);
        const nav = screen.getByRole('button', { name: /a/i })
        expect(nav).toBeInTheDocument();
    })
    test('it renders a p tag', () => {
        renderWithReduxProvider(<Question />);
        const nav = screen.getByRole('button', { name: /b/i })
        expect(nav).toBeInTheDocument();
    })
    test('it renders a p tag', () => {
        renderWithReduxProvider(<Question />);
        const nav = screen.getByRole('button', { name: /c/i })
        expect(nav).toBeInTheDocument();
    })
    test('it renders a p tag', () => {
        renderWithReduxProvider(<Question />);
        const nav = screen.getByRole('button', { name: /d/i })
        expect(nav).toBeInTheDocument();
    })

})




