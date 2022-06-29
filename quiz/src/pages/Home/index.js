import { SearchForm, Login } from '../../components';
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
// useEffect?
// import { useDispatch, useSelector } from 'react-redux';
// import { GetQuestions } from "../../actions";

export const Home = () => {

	const dispatch = useDispatch();
	console.log(() => dispatch());

	const data = useSelector((state) => state.playerCount);

	const updatePlayers = (p) => {
		p === 1
			? dispatch({ type: 'SET_PLAYER_COUNT', payload: 1 })
			: dispatch({ type: 'SET_PLAYER_COUNT', payload: 2 });
		console.log(data);
		// routeChange('/');
	};


	// const dispatch = useDispatch();
	// const data = useSelector(state => state.questions)
	// console.log(data)

	// const category = useSelector(state => state.category)
	// let level = useSelector(state => state.level)
	// let typeOfQ = useSelector(state => state.typeOfQ)

	// useEffect(() => {
	//     dispatch(GetQuestions({ cat: category, level: level, typeOfQ: typeOfQ }))
	//     // console.log(data)
	// }, [category, level, typeOfQ])

	return (
		<>
			<h2>Home</h2>
			<Login />
			<div className='container'>
				<h1>Select Player Count</h1>
				<button onClick={() => updatePlayers(1)}>One</button>
				<button onClick={() => updatePlayers(2)}>Two</button>
				{/* <button>High Scores</button> */}
			</div>
			<SearchForm />

			<NavLink className='ourBtns' to='/quiz'>
				Play!
			</NavLink>
		</>
	);
};
