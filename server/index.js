const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const routes = require('./routes/index.routes');

dotenv.config({ path: '../.env' });

const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors()); //enable cors
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.use('/api/', routes);

const DB = process.env.DATABASE_LOCAL;

if (DB) {
	mongoose
		.connect(DB, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		})
		.then(() => console.log('DB connection successful!'))
		.catch((err) => console.log(err));
}

app.get('*', (_, res) => {
	res.json({ message: 'Welcome to the server!' });
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
