// Main Imports
import React from 'react'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import {store} from "../store"

// Import Reducers
import reducer from '../reducers/reducer';

// Globals
global.React = React;
global.render = render;
global.userEvent = userEvent;

export const renderComponent = component => render(
  {component}
  )
  
  // <Provider store={store}>
  // </Provider>
