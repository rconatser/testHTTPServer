const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const home = require('./routes/home');
const api = require('./routes/api');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', api);
app.use('/', home);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(5000);