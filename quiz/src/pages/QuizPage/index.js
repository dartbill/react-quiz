import React, { useEffect } from 'react';
import { Quiz } from '../../components';
// SearchForm?
import { useDispatch, useSelector } from 'react-redux';

import { GetQuestions } from '../../actions';

export const QuizPage = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.questions);
	console.log(data);

	const category = useSelector((state) => state.category);
	let level = useSelector((state) => state.level);
	let typeOfQ = useSelector((state) => state.typeOfQ);

	useEffect(() => {
		dispatch(GetQuestions({ cat: category, level: level, typeOfQ: typeOfQ }));
	}, [category, level, typeOfQ, dispatch]);

	return (
		<>
			<h2>Quiz Page</h2>
			{/* <h1>Hi, this is the quiz page</h1>
            <SearchForm /> */}
			<Quiz />
		</>
	);
};
