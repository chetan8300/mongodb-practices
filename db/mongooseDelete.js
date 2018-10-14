const { ShoppingList } = require('./../model/shoppingList');

const deleteMany = (item) => {
    ShoppingList.deleteMany({
        item
    }).then((results) => {
        console.log(results);
    }, (err) => {
        console.log(err);
    });
};

const deleteOne = (quantity) => {
    ShoppingList.deleteMany({
        quantity
    }).then((results) => {
        console.log(results);
    }, (err) => {
        console.log(err);
    });
};

const findOneAndRemove = (_id) => {
    ShoppingList.deleteMany({
        _id
    }).then((results) => {
        console.log(results);
    }, (err) => {
        console.log(err);
    });
};

module.exports = {
    deleteMany,
    deleteOne,
    findOneAndRemove
}