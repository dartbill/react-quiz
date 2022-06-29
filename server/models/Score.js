
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

	static findByUsername(name) {

		console.log('username is ' + name)
		return new Promise(async (res, rej) => {
			try {
				let userData = await db.query("SELECT * FROM users WHERE name = $1;", [name]);
				let user = new Score(userData.rows[0]);
				res(user);
			} catch (err) {
				rej('User not found');
			};
		});
	};


	static create(id, name, score) {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await db.query('INSERT INTO users (id, name, score) VALUES ($1, $2, $3) RETURNING *;', [id, name, score]);
				const user = new Score(result.rows[0]);
				resolve(user)
			} catch (err) {
				reject(`Error creating user: ${err}`)
			}
		})
	}

}

