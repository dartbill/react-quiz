// Main Imports
import React from 'react'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

// Import Reducers

// Globals
global.React = React;
global.render = render;
global.userEvent = userEvent;
