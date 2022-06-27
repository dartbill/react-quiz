// Main Imports
import React from "react";
import "@testing-library/jest-dom";
import { render as rtlRender} from "@testing-library/react";
import { Provider } from "react-redux";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { default as store } from "../store";

// Import Reducers
import reducer from "../reducers/reducer";

export const render = (component) =>
    rtlRender(
    <Provider store={store}>
      {component}
    </Provider>);

// Globals
global.React = React;
global.userEvent = userEvent;
