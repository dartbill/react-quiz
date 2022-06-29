const express = require('express');
const router = express.Router();

const Score = require('../models/score');

router.get('/scores', async (req, res) => {
	try {
		const scoreBoard = await Score.all;
		console.log(scoreBoard);
		res.status(200).json(scoreBoard);
	} catch {
		console.error(err);
		res.status(500).json({ err });
	}
});

router.get('/scores/:id', async (req, res) => {
	try {
		const score = await Score.findById(parseInt(req.params.id));
		console.log(score);
		res.status(200).json(score);
	} catch {
		console.error(err);
		res.status(404).json({ err });
	}
});

router.post('/scores/new', async (req, res) => {
	try {
		const score = await Score.create(
			req.body.id,
			req.body.name,
			req.body.score
		);
		console.log(score);
		res.status(200).json(score);
	} catch {
		console.error(err);
		res.status(404).json({ err });
	}
});

module.exports = router;
