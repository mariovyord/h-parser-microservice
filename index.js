const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.set('trust proxy', true);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api', (req, res) => {
	res.redirect('/');
});

app.get('/api/whoami', (req, res) => {

	const result = {};

	result.ipaddress = req.ip;
	result.language = req.headers['accept-language'];
	result.software = req.headers['user-agent'];

	res.json(result)
});


app.listen(port, () => console.log('App working on port ' + port))