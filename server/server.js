const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minLength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

// const otherTodo = new Todo({
// 	text: '   Edit this video   '
// });

// otherTodo.save().then(
// 	(doc) => {
// 		console.log(JSON.stringify(doc, null, 2));
// 	},
// 	(e) => {
// 		console.log('Unable to save todo', e);
// 	}
// );

const User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minLength: 1,
		trim: true
	}
});

const user = new User({ email: 'davidinoa@gmail.com' });

user.save().then(
	(doc) => {
		console.log('User saved', JSON.stringify(doc, null, 2));
	},
	(e) => {
		console.log('Unable to save user', e);
	}
);
