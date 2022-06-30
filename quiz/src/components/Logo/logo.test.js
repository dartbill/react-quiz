import { screen, render } from '@testing-library/react';

import { default as Logo } from './Logo';

describe('logo', () => {
    test('it renders a heading', () => {
        render(<Logo />);
        const nav = screen.getByRole('heading');
        expect(nav).toBeInTheDocument();
    })
    test('img', () => {
        render(<Logo />);
        const nav = screen.getByRole('img');
        expect(nav).toBeInTheDocument();
    })
})