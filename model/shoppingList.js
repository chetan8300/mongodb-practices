const mongoose = require('mongoose');

const ShoppingListSchema = mongoose.Schema({
	item: String,
	quantity: Number,
	date: {
		type: Date,
		default: Date.now()
	}
});

const ShoppingList = mongoose.model("ShoppingList", ShoppingListSchema);

module.exports = {
	ShoppingList
};