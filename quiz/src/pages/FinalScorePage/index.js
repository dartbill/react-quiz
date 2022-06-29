import React from 'react';
import { FinalScores } from '../../components';

import Confetti from 'react-confetti';

export const FinalScorePage = () => {
	return (
		<>
			<h2>Final Scores</h2>
			<Confetti
				width={window.innerWidth || 300}
				height={window.innerHeight || 200}
			/>
			<FinalScores />
		</>
	);
};
