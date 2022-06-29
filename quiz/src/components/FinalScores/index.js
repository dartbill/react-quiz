import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const FinalScores = () => {
	//fetch or get final scores from the database
	const player1 = useSelector((state) => state.player1);
	const player2 = useSelector((state) => state.player2);
	console.log(player1)

	// const players = [{ player1 }, { player2 }];

	useEffect(() => {
		const postScores = async () => {
			try {
				let opts = {
					headers: {
						'Content-Type': 'application/json',
					},
				};

				await axios.post(
					'https://quizfutureproof.herokuapp.com/scoreboard/new',
					player1,
					opts
				);
			} catch (err) {
				console.warn(err);
			}
		};
		const postScores2 = async () => {
			try {
				let opts = {
					headers: {
						'Content-Type': 'application/json',
					},
				};

				await axios.post(
					'https://quizfutureproof.herokuapp.com/scoreboard/new',
					player2,
					opts
				);
			} catch (err) {
				console.warn(err);
			}
		};
		postScores();
		postScores2();
	}, []);

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
