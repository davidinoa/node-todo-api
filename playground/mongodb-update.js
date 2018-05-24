const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// db
	// 	.collection('Todos')
	// 	.findOneAndUpdate(
	// 		{ _id: new ObjectID('5b05dafbb571271a4d68beca') },
	// 		{ $set: { completed: true } },
	// 		{ returnOriginal: false }
	// 	)
	// 	.then((result) => console.log(result));

	db
		.collection('Users')
		.findOneAndUpdate(
			{ name: 'Andre' },
			{ $inc: { age: 1 }, $set: { name: 'David' } },
			{ returnOriginal: false }
		);
});
