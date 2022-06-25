const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {

	const result = {};

	result.ipaddress = req.ip || 'Cannot get IP address';
	result.language = req.headers['accept-language'];
	result.software = req.headers['user-agent'];

	res.json(result)
});

app.listen(3000, () => console.log('App working on port 3000'))