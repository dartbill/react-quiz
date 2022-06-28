const express = require('express');
const app = express();
const cors = require('cors');

const scoreBoardRoutes = require('./routes/scoreBoard');

app.use(cors());
app.use('/scoreboard', scoreBoardRoutes);

app.get('/', (req, res) => res.send('Quiz time!'));

module.exports = app;
