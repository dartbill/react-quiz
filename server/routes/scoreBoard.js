const express = require('express');
const router = express.Router();

const scoreController = require('../controllers/scoreBoard');

router.get('/scores', scoreController.index);
router.get('/scores/:id', scoreController.show);
router.post('/scores/new', scoreController.create);

module.exports = router;
