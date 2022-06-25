const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {

	const result = {};

	result.ipaddress = req.ip || 'Cannot get IP address';
	result.language = req.headers['accept-language'];
	result.software = req.headers['user-agent'];

	res.json(result)
});

app.listen(port, () => console.log('App working on port ' + port))