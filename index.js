require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3001;

const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;


const searchRule = encodeURIComponent('PlayXFL OR XFL is:verified -is:retweet -from:XFL');
const endpointUrl = `https://api.twitter.com/2/tweets/search/recent?query=${searchRule}&expansions=author_id&max_results=100&user.fields=name,profile_image_url,public_metrics`;
const fetchHeader = { "Authorization": `Bearer ${TWITTER_BEARER_TOKEN}` };

const twitterSearch = async () => {
	const response = await fetch(endpointUrl, { headers: fetchHeader } );
	const json = await response.json();

	return json;
}

app.use('/client', express.static('client'));
app.use('/dist', express.static('dist'));

app.get('/search', async (req, res) => {
	const xfl = await twitterSearch();

	// "5 most famous" users, arranging verified users by follower count desc
	const users = xfl.includes.users;
	users.sort( (a, b) => b.public_metrics.followers_count - a.public_metrics.followers_count );

	const topfive = users.slice(0,5);

	res.send(topfive);
})

app.get('/', (req, res) => {
	res.send('<!DOCTYPE html><html><head><link rel="stylesheet" href="/client/main.css"></head><body><h1 class="header"></h1><script src="/client/loader.js"></script></body></html>');
	res.end();
});

app.listen(port, () => {
	console.log(`App running and available at http://localhost:${port}`);
});