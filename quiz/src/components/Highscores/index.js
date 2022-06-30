import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Highscores = () => {
	//fetching and sorting out highscores to be done here
	const [scores, setScores] = useState([]);

	const sortArray = (arr) => {
		const newArray = arr.sort((a, b) => {
			let sa = a.score;
			let sb = b.score;

			if (sa > sb) {
				return -1;
			}
			if (sb < sa) {
				return 1;
			}

			return 0;
		});
		return newArray.slice(0, 5); //returns just to top 5
	};

	useEffect(() => {
		const getScores = async () => {
			try {
				let opts = { headers: { Accept: 'application/json' } };
				let { data } = await axios.get(
					'https://quizfutureproof.herokuapp.com/scoreboard/',
					opts
				);

				setScores(sortArray(data));
			} catch ({ err }) {
				// console.warn(err);
			}
		};
		getScores();
	}, []);

	return (
		<ol>
			{scores.map((score) => (
				<li key={score.id}>
					{score.name} &nbsp;
					{score.score}
				</li>
			))}
		</ol>
	);
};
