const saveItem = (item) => {
    item.save().then(
        doc => {
            console.log(doc);
        },
        err => {
            console.log(err);
        }
    );
};

module.exports = {
    saveItem
}