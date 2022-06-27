const express = require('express');
const router = express.Router();

const scoreController = require('../controllers/scoreBoard');

router.get('/scoreboard', scoreController.index);

module.exports = router;
