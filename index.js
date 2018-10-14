const mongoose = require('mongoose');
const mongooseSave = require('./db/mongooseSave');
const mongooseDelete = require("./db/mongooseDelete");
const mongooseFind = require('./db/mongooseFind');
const mongooseUpdate = require("./db/mongooseUpdate");

const {ShoppingList} = require('./model/shoppingList');

const url = 'mongodb://localhost:27017/LearnToProgram';

mongoose.connect(url, { useNewUrlParser: true }).then(
    () => {
        console.log('Connected to LearnToProgram database');
    }, (err) => {
        console.log(err);
    }
);

// const listItem = new ShoppingList({
//     item: 'Oranges',
//     quantity: 50
// });

// const listItem2 = new ShoppingList({
//     item: "Tatti",
//     quantity: 50
// });

// console.log(listItem);

// mongooseSave.saveItem(listItem);
// mongooseSave.saveItem(listItem2);

// mongooseFind.findAll();

// mongooseFind.find('Apples');

// mongooseDelete.deleteMany('Oranges');
// mongooseDelete.deleteOne(50);
// mongooseDelete.findOneAndRemove('5ba1ae7d77c1e618c83c402d');

// const obj = {
//     item: "Oranges",
//     quantity: 50
// };

// mongooseUpdate.updateSet("Apples", 15, obj);

// const unsetObj = {
//     quantity: ""
// };

// mongooseUpdate.updateUnset('Apples', unsetObj);

const incObj = {
    quantity: +40
};

mongooseUpdate.updateInc("Apples", incObj);