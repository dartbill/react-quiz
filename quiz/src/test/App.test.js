import App from "../App";
import { screen } from '@testing-library/react';
import { render } from './setupTests'

describe("App Component", () => {
    beforeAll(() => {
        render(<App />);
    });

    it("renders", () => {
        const header = screen.getByRole("heading");
        expect(header).toBeInTheDocument();
    });
});
