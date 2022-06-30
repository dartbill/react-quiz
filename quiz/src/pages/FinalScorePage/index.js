import React from 'react';
import Confetti from 'react-confetti';

import { FinalScores, Highscores } from '../../components';
import { NewGameButton } from '../../components';

export const FinalScorePage = () => {
	return (
		<>
			<h2>Final Scores</h2>
			<Confetti
				width={window.innerWidth || 300}
				height={window.innerHeight || 200}
			/>
			<FinalScores />
			<h3>All time Highscores</h3>
			<Highscores />
			<NewGameButton />
		</>
	);
};
