import { screen, render } from '@testing-library/react';

import { GameProperties } from './index';

describe('list', () => {
    test('it renders a p tag', () => {
        renderWithReduxProvider(<GameProperties />);
        const nav = screen.getByTestId('button');
        expect(nav).toBeInTheDocument();
    })
    test('listitem', () => {
        renderWithReduxProvider(<GameProperties />);
        const nav = screen.getByTestId('link');
        expect(nav).toBeInTheDocument();
    })

    test('listitem', () => {
        renderWithReduxProvider(<GameProperties />);
        const nav = screen.getByRole('link', { name: /Piss easy/i })
        expect(nav).toBeInTheDocument();
    })
    test('listitem', () => {
        renderWithReduxProvider(<GameProperties />);
        const nav = screen.getByRole('link', { name: /medium/i })
        expect(nav).toBeInTheDocument();
    })
    test('listitem', () => {
        renderWithReduxProvider(<GameProperties />);
        const nav = screen.getByRole('link', { name: /Hard af/i })
        expect(nav).toBeInTheDocument();
    })
})