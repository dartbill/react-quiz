import axios from 'axios';

export const GetQuestions = (cat) => {
	const category = cat.cat;
	const lev = cat.level;
	const type = cat.typeOfQ;
	let numOfq = 10;

	if (cat.playerCount === 2) {
		numOfq = 20;
	}

	//fetch questions functions
	return async (dispatch) => {
		try {
			const { data } = await axios.get(
				`https://opentdb.com/api.php?&amount=${numOfq}&category=${category}&difficulty=${lev}&type=${type}`
			);
			let resultsData = data.results;

			dispatch({
				type: 'TEST',
				payload: shuffleArray(resultsData),
			});
		} catch (err) {}
	};
};

//returns random question
function shuffleArray(array) {
	return array.sort(() => Math.random() - 0.5);
}
