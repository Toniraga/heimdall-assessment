const express = require('express');
// const path = require('path');
const cors = require('cors');

const routes = require('./routes/index.routes');

const app = express();

app.use(cors()); //enable cors

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const buildPath = path.join(__dirname, '..', 'build');
// app.use(express.static(buildPath));

app.use('/api/', routes);

app.use(express.json());

module.exports = app;
