'use strict';

// 3rd Party Library
const dotenv = require('dotenv').config();

// Local Library
const server = require('./src/app.js');

server.start( process.env.PORT, () => console.log(`Server up on ${process.env.PORT}`));