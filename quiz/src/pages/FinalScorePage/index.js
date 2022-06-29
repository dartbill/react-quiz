import React from 'react';
import { FinalScores } from '../../components';

import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export const FinalScorePage = () => {
	const { width, height } = useWindowSize();
	return (
		<>
			<h2>Final Scores</h2>
			<Confetti width={width} height={height} />
			<FinalScores />
		</>
	);
};
