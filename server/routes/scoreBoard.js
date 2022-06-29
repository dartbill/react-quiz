const express = require('express');
const router = express.Router();

const scoreController = require('../controllers/scoreBoard');

router.get('/', scoreController.index);
router.get('/:name', scoreController.getUser)
// router.get('/scores/:id', scoreController.show);
router.post('/new', scoreController.addUser);

module.exports = router;
