// =====================================================================
// futureproof provider wrapper attempt 2 =================================
// Main Imports
import React from 'react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import reducer from '../../reducers/reducer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { FinalScorePage } from '.';
import { useSelector } from 'react-redux';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';

const initialState = {
	category: 20,
	level: 'easy',
	typeOfQ: 'multiple',
	questions: [],
};

const TestProviders = ({ initState }) => {
	initState ||= { initialState };
	let testReducer = () => reducer(initState, { type: '@@INIT' });
	const testStore = createStore(testReducer, applyMiddleware(thunk));

	return ({ children }) => <Provider store={testStore}>{children}</Provider>;
};

const renderWithReduxProvider = (ui, options = {}) => {
	let TestWrapper = TestProviders(options);
	render(ui, { wrapper: TestWrapper, ...options });
};
// =====================================================================
// end of futureproof provider wrapper =================================

import { FinalScores } from './index';

describe('FinalScores Component', () => {
	beforeEach(() => {
		renderWithReduxProvider(<FinalScores />);
	});

	test('it renders a p tag', () => {
		renderWithReduxProvider(<FinalScores />);
		const nav = screen.getByRole('list');
		expect(nav).toBeInTheDocument();
	});
	test('listitem', () => {
		renderWithReduxProvider(<FinalScores />);
		const nav = screen.getByRole('listitem');
		expect(nav).toBeInTheDocument();
	});
});
