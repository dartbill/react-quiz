import App from './App.js';
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

describe('Render App', () => {
    beforeEach(() => {
        render(
            <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
        )
    })

    test("Play button exists", () => {
      const element = screen.getByRole('link', {  name: /play!/i})
      expect(element).toBeInTheDocument();
  });
})
