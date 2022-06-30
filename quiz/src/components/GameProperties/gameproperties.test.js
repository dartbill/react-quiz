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
})