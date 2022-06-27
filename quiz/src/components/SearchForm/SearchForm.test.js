
import { default as SearchForm } from '.';
import { screen } from '@testing-library/react';
import { render } from '../../test/setupTests'

describe('SearchForm Component', () => {
    beforeAll(()=>{
        render(<SearchForm />)
    })

    test('Renders heading', () => {
        const heading = screen.getByText(/hello from component/i)
        expect(heading).toBeInTheDocument();
    });

});


