const express = require('express');

const app = express();
const cors = require('cors');

const scoreBoardRoutes = require('./routes/scoreBoard');

app.use(cors());
app.use('/scoreboard', scoreBoardRoutes);

app.get('/', (req, res) => res.send('Quiz time!'));

app.get('/highscores', (req, res) =>
	res.send('Keep playing, and hopefully your name will be on the scoreboard!')
);

app.post('/login', (req, res) => {});

// post username + score/login stuff
// post scores

module.exports = app;
