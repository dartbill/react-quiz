
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

	static findByUsername(username) {

		return new Promise(async (res, rej) => {
			try {
				console.log('username is ' + username)
				let userData = await db.query("SELECT * FROM users WHERE name = $1;", [username]);
				let user = new Score(userData.rows[0]);
				res(user);
			} catch (err) {
				rej('User not found');
			};
		});
	};

}

