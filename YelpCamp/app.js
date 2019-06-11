const express = require('express');
const app = express();
const bodyParser = require('body-parser');
port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('landing');
});

const campgrounds = [
	{ name: 'Salmon Creek', image: 'https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg' },
	{ name: 'Granite Hill', image: 'https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg' },
	{ name: 'High Silo', image: 'https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg' }
];

app.get('/campgrounds', function(req, res) {
	res.render('campgrounds', { campgrounds: campgrounds });
});

app.post('/campgrounds', function(req, res) {
	// res.send('you hit the post route');
	const name = req.body.name;
	const image = req.body.image;
	const newCampground = { name: name, image: image };
	campgrounds.push(newCampground);

	res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res) {
	res.render('new.ejs');
});

app.listen(port, () => {
	console.log(`YelpCamp Sever Is Listening on port: ${port} `);
});
