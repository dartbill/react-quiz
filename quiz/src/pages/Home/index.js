import { SearchForm } from '../../components';
import { Login } from '../../components';
import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import React from 'react';
// useEffect?
// import { useDispatch, useSelector } from 'react-redux';
// import { GetQuestions } from "../../actions";

export const Home = () => {

	// const dispatch = useDispatch();
	// console.log(()=>dispatch())

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
			<Login/>
			<SearchForm />
			<NavLink className='ourBtns' to='/quiz'>
				Play!
			</NavLink>
		</>
	);
};
