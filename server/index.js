const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', (_, res) => {
	res.json({ message: 'Welcome to the api!' });
});

app.get('*', (_, res) => {
	res.json({ message: 'Welcome to the server!' });
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
