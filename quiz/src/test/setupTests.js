// Main Imports
import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { screen } from '@testing-library/react';
// Import Reducers
import reducer from "../reducers/reducer";

import { render as rtlRender} from "@testing-library/react";
import { default as store } from "../store";

export const render = (component) => {
    rtlRender(
    <Provider store={store}>
      {component}
    </Provider>);
}

const TestProviders = ({ initState }) => {
  // initState ||= { location: "", result: { sunrise: "", sunset: "" }, loading: false };
  let testReducer = () => reducer(initState, { type: '@@INIT' })
  const testStore = createStore(testReducer, applyMiddleware(thunk))

  return ({ children }) => (
      <Provider store={testStore}>
          { children }
      </Provider>
  )
}

const renderWithReduxProvider = (ui, options={}) => {
  let TestWrapper = TestProviders(options)
  render(ui, { wrapper: TestWrapper, ...options })
}

// import axios from 'axios';
// jest.mock('axios')
// axios.get.mockResolvedValue({ data: [ { latlng: [123, 456] }]})

// Globals
global.React = React;
global.userEvent = userEvent;
global.renderWithReduxProvider = renderWithReduxProvider
