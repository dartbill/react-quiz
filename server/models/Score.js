const db = require('../initdb');

class Score {
	constructor(data) {
		this.name = data.name;
		this.score = data.score;
	}

	static get all() {
		return new Promise(async (resolve, reject) => {
			try {
				const results = await db.query('SELECT * FROM scoreboard');
				const scoreBoard = results.rows.map((s) => new Score(s));

				if (!scoreBoard.length) {
					throw new Error('No scores on the score board yet!');
				}
				resolve(scoreBoard);
			} catch (err) {
				reject(`Error retrieving score board: ${err.message}`);
			}
		});
	}
}

module.exports = Score;
