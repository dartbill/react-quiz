import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const FinalScores = () => {
	//fetch or get final scores from the database
	const player1 = useSelector((state) => state.player1);
	const player2 = useSelector((state) => state.player2);

	// useEffect(() => {
	// 	const postScores = async () => {
	// 		try {
	// 			let opts = {
	// 				headers: {
	// 					Accept: 'application/json',
	// 					'Content-Type': 'application/json;charset=UTF-8',
	// 				},
	// 			};

	// 			await axios.post(
	// 				'https://quizfutureproof.herokuapp.com/scoreboard/new',
	// 				opts,
	// 				{ player1 },
	// 				{ player2 }
	// 			);
	// 		} catch (err) {
	// 			console.warn(err);
	// 		}
	// 	};
	// 	postScores();
	// }, []);

	return (
		<div>
			<p> this is where we need to display final scores</p>

			<p>here are your scores: </p>
			<ul>
				<li>
					{player1.name}
					{player1.score}
				</li>
				<li>
					{player2.name}
					{player2.score}
				</li>
			</ul>
		</div>
		//we also need a button that goes back
	);
};
