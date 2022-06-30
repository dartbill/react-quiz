import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NewGameButton } from './index';

describe('list', () => {
    test('it renders a p tag', () => {
        renderWithReduxProvider(<NewGameButton />, { wrapper: MemoryRouter });
        const nav = screen.getByRole('button');
        expect(nav).toBeInTheDocument();
    })

})




