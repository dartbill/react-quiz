import { screen, render } from '@testing-library/react';

import { StartGameButton } from './index';

describe('startgame', () => {
    test('it renders a heading', () => {
        renderWithReduxProvider(<StartGameButton />);
        const nav = screen.getByText(/Play!/i);
        expect(nav).toBeInTheDocument();
    })
    // test('img', () => {
    //     render(<StartGameButton />);
    //     const nav = screen.getByRole('img');
    //     expect(nav).toBeInTheDocument();
    // })
})