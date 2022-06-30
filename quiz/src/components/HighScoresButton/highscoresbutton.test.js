import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HighScoresButton } from './index';

describe('list', () => {
    test('it renders a p tag', () => {
        renderWithReduxProvider(<HighScoresButton />, { wrapper: MemoryRouter });
        const nav = screen.getByRole('button');
        expect(nav).toBeInTheDocument();
    })
    test('listitem', () => {
        renderWithReduxProvider(<HighScoresButton />), { wrapper: MemoryRouter };
        const nav = screen.getByRole('listitem');
        expect(nav).toBeInTheDocument();
    })
})




