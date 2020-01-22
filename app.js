/* 
For this assignment, you will build a simple HTTP server in NodeJS using Express.

Your server will do the following:

Listen on port 5000
Have a default route that returns HTML with a message welcoming you to the page
Have a '/api' route that returns a JSON object containing at least 3 key/value pairs of data
Make sure your Git skills are current by committing and pushing your sample NodeJS server code up to a Github repository.

Submit your Github URL for this assignment.
*/

const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();

app.use('/', (req, res, next) => {
    console.log('Hello World!');
    res.send(`
        <h1>Hello World</h1>
    `);
    next();
});

app.use('/api', (req, res) => {
    res.send(`
        <h1>JSON Information will go here.</h1>
    `);
});

const server = http.createServer(app);
server.listen(5000);