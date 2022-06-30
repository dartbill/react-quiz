import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const FinalScores = () => {
	// fetch or get final scores from the database
	const player1 = useSelector((state) => state.player1);
	const player2 = useSelector((state) => state.player2);
	const playerCount = useSelector((state) => state.playerCount);

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
	}, [player1, player2]);

	const whoWon = () => {
		if (player1.score > player2.score) {
			return `Congratulations ${player1.username}`
		} else if (player2.score > player1.score) {
			return `Congratulations ${player1.username}`
		} else {
			return "It was a tie!"
		}
	}

	return (
		<>
			<p>Here are your scores: </p>

			{playerCount === 1 ? (
				<ul>
					<li>{`${player1.username} : ${player1.score}`}</li>
				</ul>
			) : (
				<>
					<ul>
						<li>{`${player1.username} : ${player1.score}`}</li>
						<li>{`${player2.username} : ${player2.score}`}</li>
					</ul>
					{/* <p>{`Congratulations ${player1.score > player2.score ? player1.username : player2.username
						}!`}</p> */}
					<p>{whoWon()}</p>
				</>
			)}
		</>
	);
};
