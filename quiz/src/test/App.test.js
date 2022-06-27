import App from '../App';
// import {renderComponent} from './setupTests'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import {store} from "../store"
import '@testing-library/jest-dom'

describe('Test App Component',()=>{
  beforeAll(()=>{
    render(<App />);
  })

  it('renders header',()=>{
    const header = screen.getByRole('heading')
    expect(header).toBeInTheDocument();
  })
})
