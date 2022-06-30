import { screen, render } from '@testing-library/react';

import { Quiz } from './index';

describe('Quiz', () => {
    test('it renders', () => {
        renderWithReduxProvider(<Quiz />);
        const nav = screen.getByRole('button', { name: /a/i });
        expect(nav).toBeInTheDocument();
    })
    test('it renders', () => {
        renderWithReduxProvider(<Quiz />);
        const nav = screen.getByRole('button', { name: /b/i });
        expect(nav).toBeInTheDocument();
    })
    test('it renders', () => {
        renderWithReduxProvider(<Quiz />);
        const nav = screen.getByRole('button', { name: /c/i });
        expect(nav).toBeInTheDocument();
    })
    test('it renders', () => {
        renderWithReduxProvider(<Quiz />);
        const nav = screen.getByRole('button', { name: /d/i });
        expect(nav).toBeInTheDocument();
    })
    // test('img', () => {
    //     render(<StartGameButton />);
    //     const nav = screen.getByRole('img');
    //     expect(nav).toBeInTheDocument();
    // })
})