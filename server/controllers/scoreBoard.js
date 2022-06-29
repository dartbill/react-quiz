const Score = require('../models/Score');

async function index(req, res) {
	try {
		const scoreBoard = await Score.all;
		res.status(200).json(scoreBoard);
	} catch (err) {
		console.error(err);
		res.status(500).json(err);
	}
}

async function getUser(req, res) {
	try {
		const username = req.params.name
		const user = await Score.findByUsername(username)
		res.status(200).json(user)
	} catch (err) {
		res.status(404).json({ err })
	}
}

// async function create(req, res) {
// 	try {
// 		const score = await Score.create(
// 			req.body.id,
// 			req.body.name,
// 			req.body.score
// 		);
// 		console.log(score);
// 		res.status(200).json(score);
// 	} catch {
// 		console.error(err);
// 		res.status(404).json({ err });
// 	}
// }

module.exports = { index, getUser };
