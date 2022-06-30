import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { FinalScores } from './index';

describe('list', () => {
    test('it renders a p tag', () => {
        renderWithReduxProvider(<FinalScores />);
        const nav = screen.getByRole('list');
        expect(nav).toBeInTheDocument();
    })
    test('listitem', () => {
        renderWithReduxProvider(<FinalScores />);
        const nav = screen.getByRole('listitem');
        expect(nav).toBeInTheDocument();
    })
})