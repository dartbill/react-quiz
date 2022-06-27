import App from '../App';
import { screen } from '@testing-library/react';
import { render } from './setupTests'
import '@testing-library/jest-dom'

describe('Test App Component',()=>{
  beforeAll(()=>{
    render(
        <App />
    );
  })

  it('renders header',()=>{
    const header = screen.getByRole('heading')
    expect(header).toBeInTheDocument();
  })
})
