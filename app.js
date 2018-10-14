const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');

// app.set('view', './views');

app.get('/', (req, res) => {
    res.render('home.hbs');
});

app.get('/:username', (req, res) => {
    const username = req.params.username;
    res.render('username.hbs', {
        username
    });
});

app.get("/:username/:city/:state", (req, res) => {
    const username = req.params.username;
    const city = req.params.city;
    const state = req.params.state;
    res.render("info.hbs", {
        username,
        city,
        state,
        date: new Date()
    });
});

app.listen(3000, () => {
    console.log('Listening on Port 3000');
});