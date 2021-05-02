const express = require('express');
const path = require('path');
const cors = require('cors');

const routes = require('./routes/index.routes');

const app = express();

app.use(cors()); //enable cors

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/', routes);

app.get('/', (_, res) => res.send('shuu! go away....'));

app.get('*', (_, res) => res.send('Welcome to our server....'));

module.exports = app;
