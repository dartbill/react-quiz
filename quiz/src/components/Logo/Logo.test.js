import React from 'react';
import { screen, render } from '@testing-library/react';

import { default as Logo } from './Logo';

// Main Imports
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import reducer from '../../reducers/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
// futureproof provider wrapper attempt 2 =================================

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

	return ({ children }) => (
		<BrowserRouter>
			<Provider store={testStore}>{children}</Provider>
		</BrowserRouter>
	);
};

const renderWithReduxProvider = (ui, options = {}) => {
	let TestWrapper = TestProviders(options);
	render(ui, { wrapper: TestWrapper, ...options });
};

describe('logo', () => {
	beforeAll(() => {
		renderWithReduxProvider(<Logo />);
	});
	test('it renders a heading', () => {
		render(<Logo />);
		const nav = screen.getByRole('heading');
		expect(nav).toBeInTheDocument();
	});
	test('img', () => {
		render(<Logo />);
		const nav = screen.getByRole('img');
		expect(nav).toBeInTheDocument();
	});
});
