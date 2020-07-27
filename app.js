const express = require('express');
const app = express();

const port = 3000;

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (req, res) {
	res.sendFile( __dirname + '/index.html' );
});

app.post('/test', urlencodedParser, function (req, res) {
	const output = getEveryThird(req.body.string_to_cut);
	res.json({"return_string": output});
});

app.listen(port, function() { console.log('listening at http://localhost:' + port)});

function getEveryThird(str) {
	const regex = /\s/gi;
	let string = str.replace(regex, '');
	
	if (string.length < 3) {
		return 'Please type more then 2 letters';
	} 

	const arr = string.split('');
	let result = [];
	for (let i=0; i<arr.length; i++) {
		if ((i+1)%3 === 0) {
			result.push(arr[i]);
		} 
	}
	return result.join('');
}
