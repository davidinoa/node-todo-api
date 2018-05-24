const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').findOneAndDelete({ complete: false }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').deleteMany({ name: 'David' });

	db
		.collection('Users')
		.findOneAndDelete({ _id: new ObjectID('5b05e248507bf61cb70b427e') })
		.then((results) => {
			console.log(JSON.stringify(results, null, 2));
		});
});
