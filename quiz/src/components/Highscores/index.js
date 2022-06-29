import React from 'react';
import axios from 'axios';

export const Highscores = () => {
	//fetching and sorting out highscores to be done here

	const sortArray = (arr) => {
		const newArray = arr.sort(function (a, b) {
			return a - b;
		});
		return newArray.slice(0, 5); //returns just to top 5
	};

	// Add when server's working
	// async function getScores() {
	//   try {
	//     let opts = { headers: { 'Accept': 'application/json' } }
	//     let { data } = await axios.get('replace this with url', opts)
	//     return sortArray(data)

	//   } catch (err) {
	//     console.warn(err)
	//   }
	// }

	return (
		<div>
			<p>We need to display highscores here</p>
		</div>
	);
};
