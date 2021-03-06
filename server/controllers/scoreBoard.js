const Score = require('../models/Score');

async function index(req, res) {
	try {
		const scoreBoard = await Score.all;
		res.status(200).json(scoreBoard);
	} catch (err) {
		res.status(500).json(err);
	}
}

async function getUser(req, res) {
	try {
		const username = req.params.name
		console.log(username)
		const user = await Score.findByUsername(username)
		res.status(200).json(user)
	} catch (err) {
		res.status(404).json({ err })
	}
}

async function addUser(req, res) {
	try {
		await Score.create(req.body.name, req.body.score)
		res.status(200).json({ msg: "User added" })
	} catch (err) {
		res.status(400).json({ err })
	}
}



module.exports = { index, getUser, addUser };
