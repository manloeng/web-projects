const express = require('express');
const app = express();
port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('landing');
});

app.get('/campgrounds', function(req, res) {
	const campgrounds = [
		{ name: 'Salmon Creek', image: 'https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg' },
		{ name: 'Granite Hill', image: 'https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg' },
		{ name: 'High Silo', image: 'https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg' }
	];
	res.render('campgrounds', { campgrounds: campgrounds });
});

app.listen(port, () => {
	console.log(`YelpCamp Sever Is Listening on port: ${port} `);
});
