import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PlayerCount } from './index';
import userEvent from '@testing-library/user-event';


describe('playercount', () => {
    test('it renders a p tag', () => {
        renderWithReduxProvider(<PlayerCount />);
        const nav = screen.getByRole('button', { name: /One/i })
        expect(nav).toBeInTheDocument();
    })
    test('it renders a p tag', () => {
        renderWithReduxProvider(<PlayerCount />);
        const nav = screen.getByRole('button', { name: /Two/i })
        expect(nav).toBeInTheDocument();
    })

    test('it renders a p tag', () => {
        renderWithReduxProvider(<PlayerCount />);
        const nav = screen.getByTestId('h2')
        expect(nav).toBeInTheDocument();
    });

        // test("updateplayers", () => {
    //     renderWithReduxProvider(<PlayerCount />);
         //     const nav = screen.getByRole('button', { name: /Two/i })

        //     userEvent.click(nav)
        //     expect(nav).toHaveBeenCalled()
    // })
        
})
