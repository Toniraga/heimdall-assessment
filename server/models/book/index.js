const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	author: {
		type: String,
		required: true,
		trim: true,
	},
	Quantity: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
		required: true,
		trim: true,
	},
	price: {
		type: Number,
		required: true,
		trim: true,
	},
	stars: {
		type: Number,
		required: true,
		trim: true,
	},
});

const Book = mongoose.model('Book', BookSchema);

module.exports = {
	Book,
};
