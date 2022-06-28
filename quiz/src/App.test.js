import App from './App.js';
import { screen, within } from '@testing-library/react';


describe('Render App', () => {
    beforeEach(() => {
        render(<App />)
    })

    test("Heading exists", () => {
      const heading = screen.getByRole("heading")
      expect(heading).toBeInTheDocument();
  });
})
