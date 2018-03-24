const imdb = require('imdb-api')
const request = require('request')
const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000;
var engine = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');


/* Base route for app to load the preference questions*/
app.get('/', function (req, res) {
	
	res.render('preferences')

})

app.get('/movielist', function (req, res) {
	imdb.get('The Toxic Avenger', {apiKey: process.env.API_KEY, timeout: 30000}).then(function(movie){
		res.send(movie)
	}).catch(console.log);
})

app.listen(port, () => console.log('Example app listening on port ' + port + '!'))


