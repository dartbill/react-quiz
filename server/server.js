const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const scoreBoardRoutes = require('./controllers/scoreBoard');
server.use('/scores', scoreBoardRoutes);

//routes will break the code
// const scoreBoardRoutes = require('./routes/scoreBoard');

// server.use('/scoreboard', scoreBoardRoutes); // these break the build so need to be worked on

server.get('/', (req, res) => res.send('Welcome to the library'));

module.exports = server;
