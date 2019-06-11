const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app');

const catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

const Cat = mongoose.model('Cat', catSchema);

//adding cat to the db

// const george = new Cat({
// 	name: 'George',
// 	age: 11,
// 	temperament: 'Grouchy'
// });

// george.save((err, cat) => {
// 	if (err) console.log('something went wrong');
// 	else console.log('we just added a cat to the db');
// 	console.log(cat);
// });

//Other than the code above we can use the create method
Cat.create(
	{
		name: 'Snow White',
		age: 15,
		temperament: 'Bland'
	},
	function(err, cat) {
		if (err) console.log('Oh No');
		else console.log('it Worked yay');
		console.log(cat);
	}
);

//retrieve cats from the db and console.log them

Cat.find({}, function(err, cats) {
	if (err) console.log('Oh No Error');
	else console.log('it Worked');
	console.log(cats);
});
