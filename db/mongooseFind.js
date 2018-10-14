const { ShoppingList } = require('./../model/shoppingList');

const findAll = () => {
    ShoppingList.find({}).then((items) => {
        console.log(items);
    }, (err) => {
        console.log(err);
    });
};

const find = (item) => {
    ShoppingList.find({
        item
    }).then((item) => {
        console.log(item);
    }, (err) => {
        console.log(err);
    });
};

module.exports = {
    findAll,
    find 
};