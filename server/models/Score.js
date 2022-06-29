
const db = require('../dbConfig/init')

class Score {
	constructor(data) {
		this.id = data.id;
		this.name = data.name;
		this.score = data.score;
	}

	static get all() {
		return new Promise(async (res, rej) => {
			try {
				const results = await db.query('SELECT * FROM scoreboard;');
				console.log(results)
				const scoreBoard = results.rows.map((s) => ({ id: s.id, name: s.name }));

				// if (!scoreBoard.length) {
				// 	throw new Error('No scores on the score board yet!');
				// }
				res(scoreBoard);
			} catch (err) {
				rej(`Error retrieving score board: ${err}`);
			}
		});
	}
}

module.exports = Score; 