const { ShoppingList } = require("./../model/shoppingList");

const updateSet = (item, quantity, obj) => {
    ShoppingList.findOneAndUpdate({
        item,
        quantity
    }, {
        $set: obj
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });
};

const updateUnset = (item, unsetObj) => {
    ShoppingList.findOneAndUpdate({
        item
    }, {
        $unset: unsetObj
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });
};

const updateInc = (item, incObj) => {
    ShoppingList.findOneAndUpdate({
        item
    }, {
        $inc: incObj
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    });
};

module.exports = {
    updateSet,
    updateUnset,
    updateInc
};