
const db = require('../dbConfig/init')

module.exports = class Score {
	constructor(data) {
		this.id = data.id;
		this.name = data.name;
		this.score = data.score;
	}



	static get all() {
		return new Promise(async (res, rej) => {
			try {

				const result = await db.query('SELECT * FROM users;')
				const users = result.rows.map(a => ({ id: a.id, name: a.name, score: a.score }))
				console.log(users)
				res(users)

			} catch (err) {
				rej('Error!' + err)
			}
		})
	}

}

