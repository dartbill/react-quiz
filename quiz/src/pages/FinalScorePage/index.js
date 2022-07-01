import React from 'react';
import Confetti from 'react-confetti';

import { FinalScores, Highscores } from '../../components';
import { NewGameButton } from '../../components';

export const FinalScorePage = () => {
	return (
		<>
			<Confetti
				width={window.innerWidth || 300}
				height={window.innerHeight || 200}
				numberOfPieces={400}
			/>
			<div className='final-container'>
				<h1>Final Scores</h1>
				<FinalScores />
				<h3>All time Highscores</h3>
				<Highscores />
				<NewGameButton />
			</div>
		</>
	);
};
